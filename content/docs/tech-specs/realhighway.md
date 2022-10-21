---
title : "RealHighway Mod"
description: "Technical specifications for the RealHighway Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the RealHighway Mod are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

{{< feature-guide link="/docs/feature-guides/realhighway-mod" mod="RealHighway Mod feature guide" >}}

{{< docstatus status="workinprogress" >}}

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

> Refer to [the *Bridges* section](/docs/feature-guides/realhighway-mod/#bridges) of the RealHighway Mod feature guide for a list of bridge styles that are available.

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

