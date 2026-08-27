# Lecture Summary: Operational Amplifiers

> **SANITIZED FACULTY-TUTORIAL COPY — ADAPTED FROM THE NATIVE COURSE SLIDES**

## Why Op-Amps Matter

Real sources and loads often do not interact the way an ideal voltage source would. A sensor signal may need to be scaled or shifted, a microcontroller output may not supply the voltage or current required by a load, and a measurement circuit may disturb the source it is trying to observe. Op-amps are versatile building blocks for comparison, buffering, amplification, and mathematical operations on signals.

## Terminal Model

An op-amp has a non-inverting input \(v_+\), an inverting input \(v_-\), an output \(v_o\), and positive and negative supply terminals. Its open-loop relation is modeled as

\[
v_o=A(v_+-v_-),
\]

where \(A\) is very large. The ideal input resistance is infinite, so

\[
i_+=i_-=0.
\]

The power-supply currents are normally omitted from the simplified symbol. Load current is supplied through the op-amp's power connections; it does not appear from nowhere and does not come through an input terminal.

## Two Operating Modes

### Comparator or saturation operation

Without negative feedback, even a small input difference drives the idealized output toward one supply rail. If \(v_+>v_-\), the output approaches the positive limit; if \(v_+<v_-\), it approaches the negative limit. In this mode, do not assume \(v_+=v_-\).

### Linear negative-feedback operation

When a path feeds the output back toward the inverting input, the op-amp may operate in its linear region. If all three conditions below hold, the very large gain makes the input voltages approximately equal:

1. negative feedback is present;
2. the op-amp is operating within its output limits;
3. the open-loop gain is very large.

Then the useful approximation is

\[
v_+\approx v_-.
\]

This is called a virtual short. It means nearly equal voltage, not a wire between the inputs. No current crosses from one input terminal to the other in the ideal model.

## Voltage Follower

For a voltage follower, the output is connected directly to the inverting input and the source drives the non-inverting input. Under valid linear negative feedback,

\[
v_o=v_-=v_+\approx v_{in}.
\]

Because no current enters \(v_+\), a source with Thevenin resistance is almost unloaded. The op-amp supplies the load current from its power supplies. The follower therefore preserves voltage while isolating the source from the load.

## General Analysis Pattern

1. Identify whether feedback is absent, positive, or negative.
2. Propose the operating mode.
3. Apply \(i_+=i_-=0\).
4. Apply \(v_+\approx v_-\) only if linear negative feedback is plausible.
5. Use KCL, Ohm's law, or node-voltage equations.
6. Compare the computed output with the supply rails.
7. If the result is outside the possible output range, reject the linear assumption and analyze saturation instead.

## Example Relationship from the Unit

For a negative-feedback circuit with \(v_+=v_b\), a \(25\,\text{k}\Omega\) resistor from \(v_a\) to \(v_-\), and a \(100\,\text{k}\Omega\) feedback resistor from \(v_o\) to \(v_-\), KCL gives

\[
\frac{v_a-v_b}{25\,\text{k}\Omega}
=
\frac{v_b-v_o}{100\,\text{k}\Omega},
\]

so

\[
v_o=5v_b-4v_a.
\]

This result is valid only when the required output remains within the available output range.
