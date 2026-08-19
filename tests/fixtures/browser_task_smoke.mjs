export default async function ({ applyArg, inputArg }) {
  const current = document.body.dataset.smokeValue || "unset";
  const preview = { current, proposed: inputArg.proposed };
  if (!applyArg) return { preview, applied: false };
  document.body.dataset.smokeValue = inputArg.proposed;
  return {
    preview,
    applied: true,
    verified: document.body.dataset.smokeValue === inputArg.proposed,
  };
}
