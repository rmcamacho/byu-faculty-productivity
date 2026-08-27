# Facilitator Key: ECEn 240/301 Op-Amp Exercise

> **FACILITATOR MATERIAL — KEEP OUTSIDE THE PARTICIPANT WORKSPACE**

## Source and Scope

The participant packet is an original, sanitized adaptation of the native 30-slide “Lecture 16 — Operational Amplifiers” Google Slides deck used in the combined ECEn 240/301 course. The native deck, rather than its PDF export, was treated as authoritative. The adaptation preserves the unit's conceptual sequence without redistributing slide text, images, private links, or textbook exercises.

Key source themes retained:

- practical motivation for signal conditioning and buffering;
- terminal behavior and zero ideal input current;
- comparator versus negative-feedback operation;
- conditions for the virtual-short approximation;
- voltage and current buffering;
- the relationship \(v_o=5v_b-4v_a\) for the example resistor network;
- the need to keep computed outputs within available rails.

## Expected Audit Findings

### Draft solution issue 1

Problem 1 reaches the correct output, \(-12\text{ V}\), but the last sentence is wrong. Large gain alone does not permit \(v_+=v_-\). This comparator has no negative feedback and is saturated; its inputs remain \(0.75\text{ V}\) and \(1.10\text{ V}\).

### Draft solution issue 2

Problem 2 has the correct voltages and load current, but incorrectly says the sensor supplies the buffered load current. In the ideal follower, zero input current means essentially no current is drawn from the Thevenin source. The op-amp delivers the \(4.0\text{ mA}\) load current from its power supplies.

### Draft solution issue 3

Problem 3 is correct. With \(v_-=v_b=0.50\text{ V}\), \(8.0\,\mu\text{A}\) flows from the inverting node toward \(v_a\), and the same magnitude flows from the output toward the inverting node. The calculated \(1.30\text{ V}\) output is within the rails.

### Draft solution issue 4

Problem 4's linear calculation correctly finds that \(9.0\text{ V}\) would be required, but its conclusion is impossible with \(\pm5\text{ V}\) supplies. The output saturates at the positive rail in the stated idealization. Once saturated, the linear virtual-short approximation is invalid; negative feedback does not guarantee equality under all conditions.

### Coverage issue

The current set strongly covers outcomes 2–7 but only indirectly covers terminal labeling and practical purpose. Strong proposed additions should explicitly require students to identify terminals or explain an application. They should not merely repeat the same resistor-network arithmetic.

### AI-policy issue

The policy is intentionally too vague to guide students. A useful revision should specify:

- examples of allowed and prohibited assistance;
- whether and how AI use must be disclosed;
- that students must verify equations, assumptions, and saturation;
- what work must be produced in the student's own reasoning or voice;
- what data must not be entered into an AI system;
- how an oral explanation or similar check may be used;
- the policy's purpose: supported learning rather than surveillance or mere compliance.

## Strong Homework Directions

Accept many answers, but prefer proposals that add a genuinely different reasoning demand. Examples include:

1. A text-described voltage follower in which the requested load current exceeds a stated nonideal output-current limit. Students must distinguish voltage-rail feasibility from output-current feasibility.
2. A comparator used as a threshold detector, followed by a request to redesign the connection so the output polarity reverses. Students must identify terminals and explain purpose.
3. A negative-feedback network that yields an in-range output for one input and saturation for another. Students must state exactly where the virtual-short reasoning ceases to apply.

Do not reward extra complexity that introduces concepts outside the packet merely to make a problem look advanced.

## Connection to Elder Gong Exercise

A strong redesign preserves students' responsibility for choosing the model and explaining physical meaning. AI might generate variants, challenge an assumption, or provide feedback after an individual attempt. Evidence of learning might include an oral check, annotated equations, a short error analysis, or comparison of an AI answer with a student's independently developed model. The smallest pilot should be limited to one problem or one class period and should include a way to collect feedback.
