# Current Practice Set

> **ORIGINAL SANITIZED WORKSHOP MATERIAL — NOT A LIVE ASSIGNMENT**

Assume ideal op-amps whose outputs can reach the stated supply rails exactly unless a problem says otherwise. Show the operating-mode assumption, equations, numerical answer, and a physical interpretation.

## Problem 1 — Comparator Decision

An op-amp is powered by \(+12\text{ V}\) and \(-12\text{ V}\). There is no feedback. The non-inverting input is \(0.75\text{ V}\), and the inverting input is \(1.10\text{ V}\).

1. Predict the output.
2. State whether the virtual-short approximation is allowed.
3. Explain the result as a hardware comparison.

## Problem 2 — Source Loading and Buffering

A sensor is modeled by a \(4.0\text{ V}\) Thevenin source in series with \(20\,\text{k}\Omega\). It drives a \(1.0\,\text{k}\Omega\) load.

1. Find the load voltage without a buffer.
2. Insert an ideal voltage follower between the source and load and find the new load voltage.
3. Find the load current with the buffer and identify where that current comes from.

The op-amp uses \(\pm 5\text{ V}\) supplies.

## Problem 3 — Negative Feedback with a Reference

The non-inverting input is fixed at \(v_b=0.50\text{ V}\). A \(25\,\text{k}\Omega\) resistor connects \(v_a=0.30\text{ V}\) to the inverting-input node. A \(100\,\text{k}\Omega\) feedback resistor connects the output to that same node. The op-amp uses \(\pm 5\text{ V}\) supplies.

1. Find the output voltage.
2. Find the current in each resistor, including a consistent current direction.
3. Explain why the two resistor currents have equal magnitude.

## Problem 4 — Test the Assumption

Use the same circuit and supplies as Problem 3, but let \(v_a=-1.0\text{ V}\) and \(v_b=1.0\text{ V}\).

1. Calculate the output requested by a linear virtual-short analysis.
2. Decide whether the result is physically possible.
3. State the actual idealized operating condition and explain which earlier assumption failed.
