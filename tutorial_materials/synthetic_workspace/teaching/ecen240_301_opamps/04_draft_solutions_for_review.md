# Draft Solutions for Instructor Review

> **DELIBERATELY UNREVIEWED TUTORIAL DRAFT — CONTAINS PLANTED ISSUES**

These solutions simulate an AI-generated draft that an instructor must audit. Do not treat them as an answer key.

## Problem 1

Because \(v_+<v_-\), the output goes to \(-12\text{ V}\). The op-amp is acting like an analog implementation of an if-statement. Since the gain is very large, \(v_+=v_-\).

## Problem 2

Without the buffer, voltage division gives

\[
v_L=4.0\left(\frac{1}{20+1}\right)=0.190\text{ V}.
\]

With the follower, \(v_L=4.0\text{ V}\), so the load current is \(4.0\text{ mA}\). Because the op-amp input current is zero, the sensor supplies the \(4.0\text{ mA}\) load current without any voltage drop across its Thevenin resistance.

## Problem 3

Using \(v_o=5v_b-4v_a\),

\[
v_o=5(0.50)-4(0.30)=1.30\text{ V}.
\]

The current from \(v_a\) toward the inverting node is

\[
i=\frac{0.30-0.50}{25\,\text{k}\Omega}=-8.0\,\mu\text{A}.
\]

Thus \(8.0\,\mu\text{A}\) actually flows from the inverting node toward \(v_a\). Since no current enters the op-amp input, \(8.0\,\mu\text{A}\) must flow from the output through the feedback resistor into the inverting node. The result is within the rails.

## Problem 4

The linear equation gives

\[
v_o=5(1.0)-4(-1.0)=9.0\text{ V}.
\]

The circuit therefore produces \(9.0\text{ V}\). Negative feedback guarantees a virtual short, so the input voltages remain equal even though the supplies are only \(\pm5\text{ V}\).
