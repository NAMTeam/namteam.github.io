---
title : "RealHighway Mod"
description: "Technical specifications for the RealHighway Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the RealHighway Mod are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/realhighway-mod"
---

{{< feature-guide link="/docs/feature-guides/realhighway-mod" mod="RealHighway Mod feature guide" >}}

{{< docstatus status="workinprogress" >}}
{{< docstatus status="untranslated" >}}

## Network and FLEX Piece Capabilities

### Key

<table class="table-bordered nam-compat-status processed">
<tr>
    <td data-compat="yes"> Yes </td>
    <td>This particular feature can be constructed, with minimal (if any) limitations.</td>
</tr>
<tr>
    <td data-compat="partial"> Partial Support </td>
    <td>This particular feature can be constructed, but not in all instances. Details will be given as to what is/is not possible. Partial support may be for intentional design reasons (such as realism or general unfeasibility), or simply because the feature has not been fully developed.</td>
</tr>
<tr>
    <td data-compat="limited"> Limited Support </td>
    <td>This particular feature can be constructed, but only in extremely limited circumstances. Instances that are possible may be listed, insofar as it is possible. Use at your own risk.</td>
</tr>
<tr>
    <td data-compat="no"> No Support </td>
    <td>This particular feature cannot be constructed. This restriction could be for intentional design reasons (such as realism, general unfeasibility, or game limitations), or simply because it has not yet been developed.</td>
</tr>
</table>

### Additional Notes

**OxO**: OxO stands for "orthogonal x orthogonal", and refers to a situation where both networks are orthogonal (in a straight line) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

**OxD**: OxD stands for "orthogonal x diagonal", and refers to a situation where the given network is orthogonal (in a straight line) along the game's grid, and the cross network is diagonal (running at a 45° angle).

**DxO**: DxO stands for "diagonal x orthogonal", and refers to a situation where the base network is diagonal (running at a 45° angle), and the cross network is orthogonal (in a straight line) along the game's grid.

**DxD**: DxD stands for "diagonal x diagonal", and refers to a situation where both networks are diagonal (running at a 45° angle) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

### Available Height Levels

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width   | L0  | L1  | L2  | L3  | L4  | DD  |
| ------- | --- | --- | --- | --- | --- | --- |
| RHW-2   | Yes | Yes | Yes | No  | No  | No  |
| RHW-3   | Yes | Yes | Yes | No  | No  | No  |
| MIS     | Yes | Yes | Yes | Yes | Yes | No  |
| RHW-4   | Yes | Yes | Yes | Yes | Yes | Yes |
| RHW-6S  | Yes | Yes | Yes | Yes | Yes | No  |
| RHW-6C  | Yes | Yes | Yes | No  | No  | No  |
| RHW-8S  | Yes | Yes | Yes | No  | No  | No  |
| RHW-8C  | Yes | Yes | Yes | No  | No  | No  |
| RHW-10S | Yes | Yes | Yes | No  | No  | No  |
{{< /table >}}

### Base Network Features

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK        | Base Orthogonals | Base Diagonals | Ortho 90° Bend | Ortho S-Curve | Diag 90° Bend| Diag S-Curve |
|----------------|:----------------:|:--------------:|:--------------:|:-------------:|:-------------------------:|:------------:|
| L0 RHW-2       |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| L0 RHW-3       |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 MIS Ramp    |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| L0 RHW-4       |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 RHW-6S      |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 RHW-8S      |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 RHW-10S     |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 RHW-6C      |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L0 RHW-8C      |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L2 RHW-2    |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| L1-L2 RHW-3    |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L4 MIS      |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| L1-L4 RHW-4    |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L4 RHW-6S   |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L2 RHW-8S   |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L2 RHW-10S  |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L2 RHW-6C   |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| L1-L2 RHW-8C   |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| DD RHW-4       |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
{{< /table >}}

### FLEXRamp / Draggable Ramp Interfaces (DRI)

#### Orthogonal Mainline

_Note that QuickChange support requires support for A1 ramps._

#### Diagonal Mainline

#### Fractional Angle Mainline

Not currently supported.

### FLEXHeight Transitions

#### Orthogonal Ramp-Style Transitions

#### Orthogonal On-Slope Transitions

#### Diagonal Ramp-Style Transitions

#### Orthogonal On-Slope Transitions

### FLEXWidth Transitions

#### Orthogonal Transitions

_Note: S-to-C Transitions support asymmetrical combos, so additional possibilities exist beyond what is strictly indicated on this table, with the only limitation being that each network have the same number of lanes or differ by only one per side-- i.e. RHW-6S (3 lanes per side) can transition to RHW-4 (2 lanes per side), RHW-6C (3 lanes per side), and RHW-8C (4 lanes per side)._

#### Diagonal Transitions

Not currently supported.

#### Fractional Angle Transitions

Not currently supported.

### FLEXFly Crossings

### FLEXSPUI Crossings

### Wide-Radius / Multi-Radius Curves

### Fractional Angle Support

As Fractional Angle support for the RHW is entirely puzzle piece-based at present, see the listings in the Menu Items section, under the FARHW, FARHW Ramp Interfaces, and FARHW Intersections and Transitions buttons.

### FLEX Turn Lane Intersection Support

#### Orthogonal x Orthogonal (OxO) Intersections

### Bridges

> Refer to [the _Bridges_ section](/docs/feature-guides/realhighway-mod/#bridges) of the RealHighway Mod feature guide for a list of bridge styles that are available.

All RHW networks, with the exception of the 6C and 8C networks, are capable of creating bridges.

{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK         | Base Network     |
|-----------------|:----------------:|
| RHW-2           |       RHW-2      |
| RHW-3           |       RHW-2      |
| MIS Ramp        |       RHW-2      |
| RHW-4 (single)  |       RHW-2      |
| RHW-4 (dual)    |       GHWY       |
| RHW-6S (single) |       RHW-2      |
| RHW-6S (dual)   |       GHWY       |
| RHW-8S          |       GHWY       |
| RHW-10S         |       GHWY       |
| RHW-6C          |    No support    |
| RHW-8C          |    No support    |
| DD RHW-4        |       RHW-2      |
{{< /table >}}

### Tunnels

Due to the nature of the DirtRoad network, tunnels were never implemented and as such, are impossible to use in the game. However, there is currently some work being done on emulating tunnel functionality by using other networks with the FLEXFLUPs project.

## Network ID Assignments

The RealHighway Mod uses the following ID ranges:

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Network Range</th>
        <th>Purpose</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5700 - 0x57FF</code></td>
        <td>Current RHW range</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x7700 - 0x77FF</code></td>
        <td>LHD Path remapping range</td>
    </tr>
</table>

Within the Network Addon Mod, the RealHighway Mod occupies the entire 0x57 range.

There are some Flex FARHW pieces in the 0x56F range, and there are also a handful of legacy RHW puzzle pieces in 0x5E.

### Detailed information

#### 0x570

Primarily contains the base networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25" style="max-width:120px;">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5700</code></td>
        <td>L0 RHW-2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5701</code></td>
        <td>L0 RHW-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5702</code></td>
        <td>L0 RHW-MIS</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5703</code></td>
        <td>L0 RHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5704</code></td>
        <td>L0 RHW-6S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5705</code></td>
        <td>L0 RHW-8S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5706</code></td>
        <td>L0 RHW-10S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5707</code></td>
        <td>L0 RHW-12S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5708</code></td>
        <td>L0 RHW-6C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5709</code></td>
        <td>L0 RHW-8C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570A</code></td>
        <td>L0 RHW-10C (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570B</code></td>
        <td>RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570C</code></td>
        <td>RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570D</code></td>
        <td>RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570E</code></td>
        <td>RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x570F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x571

Primarily contains Level 1 networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5710</code></td>
        <td>L1 RHW-2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5711</code></td>
        <td>L1 RHW-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5712</code></td>
        <td>L1 RHW-MIS</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5713</code></td>
        <td>L1 RHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5714</code></td>
        <td>L1 RHW-6S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5715</code></td>
        <td>L1 RHW-8S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5716</code></td>
        <td>L1 RHW-10S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5717</code></td>
        <td>L1 RHW-12S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5718</code></td>
        <td>L1 RHW-6C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5719</code></td>
        <td>L1 RHW-8C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571A</code></td>
        <td>L1 RHW-10C (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571B</code></td>
        <td>L1 RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571C</code></td>
        <td>L1 RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571D</code></td>
        <td>L1 RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571E</code></td>
        <td>L1 RHW Ultrawides (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x571F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x572

Primarily contains Level 2 networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5720</code></td>
        <td>L2 RHW-2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5721</code></td>
        <td>L2 RHW-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5722</code></td>
        <td>L2 RHW-MIS</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5723</code></td>
        <td>L2 RHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5724</code></td>
        <td>L2 RHW-6S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5725</code></td>
        <td>L2 RHW-8S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5726</code></td>
        <td>L2 RHW-10S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5727</code></td>
        <td>L2 RHW-12S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5728</code></td>
        <td>L2 RHW-6C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5729</code></td>
        <td>L2 RHW-8C</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572A</code></td>
        <td>L2 RHW-10C (Proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572B</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572C</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572D</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572E</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x572F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x573

Primarily contains single-tile Level 3 networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5730</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5731</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5732</code></td>
        <td>L3 RHW-MIS</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5733</code></td>
        <td>L3 RHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5734</code></td>
        <td>L3 RHW-6S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5735</code></td>
        <td>DDRHW-8 (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5736</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5737</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5738</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5739</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573A</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573B</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573C</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573D</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573E</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x573F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x574

Primarily contains single-tile Level 4 networks and the proposed X3 ramps.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5740</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5741</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5742</code></td>
        <td>L4 RHW-MIS</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5743</code></td>
        <td>L4 RHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5744</code></td>
        <td>L3 RHW-6S</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5745</code></td>
        <td>RHW-8S X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5746</code></td>
        <td>RHW-10S X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5747</code></td>
        <td>RHW-12S X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5748</code></td>
        <td>RHW-6C X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5749</code></td>
        <td>RHW-8C X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574A</code></td>
        <td>RHW-10C X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574B</code></td>
        <td>Ultrawide RHW X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574C</code></td>
        <td>Ultrawide RHW X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574D</code></td>
        <td>Ultrawide RHW X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574E</code></td>
        <td>Ultrawide RHW X3 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x574F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x575

Primarily contains DDRHW-4, but is otherwise mostly unused. DDRHW-8 has been proposed for a part of this range.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5750</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5751</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5752</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5753</code></td>
        <td>DDRHW-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5754</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5755</code></td>
        <td>DDRHW-8 (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5756</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5757</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5758</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5759</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575A</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575B</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575C</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575D</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575E</code></td>
        <td>Unused</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x575F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x576

Primarily contains RHW-2/3/4/MIS intersections and other base network items, and X2 ramp interfaces.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5760</code></td>
        <td>RHW-2 intersections</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5761</code></td>
        <td>RHW-3 intersections</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5762</code></td>
        <td>RHW-MIS intersections</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5763</code></td>
        <td>RHW-4 intersections</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5764</code></td>
        <td>RHW-6S X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5765</code></td>
        <td>RHW-8S X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5766</code></td>
        <td>RHW-10S X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5767</code></td>
        <td>RHW-12S X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5768</code></td>
        <td>RHW-6C X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5769</code></td>
        <td>RHW-8C X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576A</code></td>
        <td>RHW-10C X2 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576B</code></td>
        <td>Ultrawide RHW X2 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576C</code></td>
        <td>Ultrawide RHW X2 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576D</code></td>
        <td>Ultrawide RHW X2 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576E</code></td>
        <td>Ultrawide RHW X2 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x576F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x577

Primarily used for width and height transitions.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5770</code></td>
        <td>RHW-2 OST & WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5771</code></td>
        <td>RHW-3 OST & WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5772</code></td>
        <td>RHW-MIS OST, RHW-MIS to RHW-4 WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5773</code></td>
        <td>RHW-4 OST, RHW-4 to RHW-6S WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5774</code></td>
        <td>RHW-6S OST, RHW-6S to RHW-8S WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5775</code></td>
        <td>RHW-8S OST, RHW-8S to RHW-10S WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5776</code></td>
        <td>RHW-10S OST, RHW-10S to RHW-12S WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5777</code></td>
        <td>RHW-12S OST</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5778</code></td>
        <td>RHW-6C OST, RHW-6C to RHW-8C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5779</code></td>
        <td>RHW-8C OST, RHW-8C to RHW-10C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577A</code></td>
        <td>RHW-10C OST</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577B</code></td>
        <td>S-to-C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577C</code></td>
        <td>S-to-C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577D</code></td>
        <td>S-to-C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577E</code></td>
        <td>S-to-C WT</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x577F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x578

Primarily contains X1 ramps.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5780</code></td>
        <td>RHW-2 X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5781</code></td>
        <td>RHW-3 X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5782</code></td>
        <td>RHW-MIS X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5783</code></td>
        <td>RHW-4 X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5784</code></td>
        <td>RHW-6S X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5785</code></td>
        <td>RHW-8S X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5786</code></td>
        <td>RHW-10S X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5787</code></td>
        <td>RHW-12S X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5788</code></td>
        <td>RHW-6C X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5789</code></td>
        <td>RHW-8C X1 Ramps</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578A</code></td>
        <td>RHW-10C X1 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578B</code></td>
        <td>Ultrawide RHW X1 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578C</code></td>
        <td>Ultrawide RHW X1 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578D</code></td>
        <td>Ultrawide RHW X1 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578E</code></td>
        <td>Ultrawide RHW X1 Ramps (proposed)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x578F</code></td>
        <td>Unused</td>
    </tr>
</table>

#### 0x579

Primarily contains MRCs/WRCs.

#### 0x57A

Primarily contains Three-Level Crossing pieces.

#### 0x57B

Primarily contains specialised ramp pieces.

#### 0x57C

Primarily contains RHW cosmetic pieces and FTLs.

#### 0x57D

Primarily contains RHW cosmetic pieces and FTLs.

#### 0x57E

Primarily contains specialised interchange items (Volleyballs, SPUIs, DDIs, etc).

#### 0x57F

Primarily contains starter pieces, fillers and other miscellaneous items.
