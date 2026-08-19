#!/usr/bin/env python3
"""Validate the portable Codex marketplace without third-party packages."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MARKETPLACE = ROOT / ".agents" / "plugins" / "marketplace.json"
PLUGIN = ROOT / "plugins" / "byu-faculty-productivity"
MANIFEST = PLUGIN / ".codex-plugin" / "plugin.json"
EXPECTED_NAME = "byu-faculty-productivity"


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)


def load_json(path: Path, errors: list[str]) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        fail(f"Missing file: {path.relative_to(ROOT)}", errors)
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        fail(f"Invalid JSON in {path.relative_to(ROOT)}: {exc}", errors)
    return {}


def validate_skill(path: Path, errors: list[str]) -> None:
    skill_file = path / "SKILL.md"
    try:
        text = skill_file.read_text(encoding="utf-8")
    except FileNotFoundError:
        fail(f"Missing file: {skill_file.relative_to(ROOT)}", errors)
        return

    frontmatter = re.match(r"\A---\n(.*?)\n---\n", text, re.DOTALL)
    if not frontmatter:
        fail(f"Missing YAML frontmatter: {skill_file.relative_to(ROOT)}", errors)
        return

    header = frontmatter.group(1)
    name_match = re.search(r"^name:\s*([^\n]+)$", header, re.MULTILINE)
    description_match = re.search(r"^description:\s*(.+)$", header, re.MULTILINE)
    if not name_match or name_match.group(1).strip() != path.name:
        fail(f"Skill name does not match directory: {skill_file.relative_to(ROOT)}", errors)
    if not description_match or not description_match.group(1).strip():
        fail(f"Skill description is missing: {skill_file.relative_to(ROOT)}", errors)

    for target in re.findall(r"\[[^]]+\]\(([^)]+)\)", text):
        if "://" in target or target.startswith("#"):
            continue
        linked = (path / target.split("#", 1)[0]).resolve()
        if not linked.exists():
            fail(f"Broken skill link in {skill_file.relative_to(ROOT)}: {target}", errors)


def scan_portability(errors: list[str]) -> None:
    forbidden = {
        "/Users/": "macOS user-specific absolute path",
        "\\Users\\": "Windows user-specific absolute path",
        "cid-": "live Learning Suite course identifier",
        "fall2025_ls_snapshot": "course snapshot filename",
        "spring2026_ls_snapshot": "course snapshot filename",
    }
    text_extensions = {".json", ".md", ".mjs", ".py", ".yaml", ".yml"}
    ignored_parts = {".git", "__pycache__"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in text_extensions:
            continue
        if path.resolve() == Path(__file__).resolve():
            continue
        if ignored_parts.intersection(path.parts):
            continue
        text = path.read_text(encoding="utf-8")
        for token, reason in forbidden.items():
            if token in text:
                fail(f"Found {reason} in {path.relative_to(ROOT)}", errors)


def main() -> int:
    errors: list[str] = []
    marketplace = load_json(MARKETPLACE, errors)
    manifest = load_json(MANIFEST, errors)

    if marketplace.get("name") != EXPECTED_NAME:
        fail("Marketplace name is incorrect", errors)
    plugins = marketplace.get("plugins", [])
    if len(plugins) != 1 or plugins[0].get("name") != EXPECTED_NAME:
        fail("Marketplace must contain the expected plugin", errors)
    elif plugins[0].get("source", {}).get("path") != f"./plugins/{EXPECTED_NAME}":
        fail("Marketplace plugin source path is incorrect", errors)

    if manifest.get("name") != EXPECTED_NAME:
        fail("Plugin manifest name is incorrect", errors)
    if not re.fullmatch(r"\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?", str(manifest.get("version", ""))):
        fail("Plugin version is not valid semantic versioning", errors)
    if manifest.get("skills") != "./skills/":
        fail("Plugin skills path must be ./skills/", errors)

    skills = sorted((PLUGIN / "skills").glob("*/SKILL.md"))
    if not skills:
        fail("Plugin contains no skills", errors)
    for skill_file in skills:
        validate_skill(skill_file.parent, errors)

    scan_portability(errors)

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Validated {EXPECTED_NAME} on {sys.platform} with {len(skills)} skills.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
