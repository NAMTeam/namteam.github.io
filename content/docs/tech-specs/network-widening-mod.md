---
title : "Network Widening Mod"
description: "Technical specifications for the Network Widening Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Network Widening Mod are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

{{< feature-guide link="/docs/feature-guides/network-widening-mod" mod="Network Widening Mod feature guide" >}}

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



### Base Network Features

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK        | Base Orthogonals | Base Diagonals | Ortho 90° Bend | Ortho S-Curve | Diag 90° Bend| Diag S-Curve |
|----------------|:----------------:|:--------------:|:--------------:|:-------------:|:-------------------------:|:------------:|
| TLA-3 |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| AVE-2 |        Yes       |       Yes      |       Yes       |      Yes      |             Yes            |      Yes      |
| ARD-3 |        Yes       |       Yes      |       Yes      |      Yes      |            Yes            |      Yes     |
| OWR-1 |        Yes       |       Yes      |       Yes       |      Yes      |             Yes            |      Yes      |
| OWR-3 |        Yes       |       Yes      |       Yes       |      Yes      |             Yes            |      Yes      |
| NRD-4 |        Yes       |       Yes      |       Yes       |      Yes      |             Yes            |      Yes      |
| TLA-5 |        Yes       |       Yes      |       Yes       |      Yes      |             No            |      No      |
| OWR-4 |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| OWR-5 |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| RD-4  |        Yes       |       Yes      |       Yes      |      Yes      |            No            |      No     |
| RD-6  |        Yes       |       Yes      |       No       |      Yes      |             No            |      No      |
| TLA-7 |        Yes       |       Yes      |       No      |      Yes      |            No            |      No     |
| AVE-6 |        Yes       |       Yes (RD-based only)     |       Yes       |      No      |             No            |      No      |
{{< /table >}}


#### Orthogonal Transitions

#### Diagonal Transitions


#### Fractional Angle Transitions

Not currently supported.

### Wide-Radius / Multi-Radius Curves

### Fractional Angle Support

Not currently supported.

### FLEX Turn Lane Intersection Support

#### Orthogonal x Orthogonal (OxO) Intersections



### Bridges

> Refer to [the *Bridges* section](/docs/feature-guides/realhighway-mod/#bridges) of the RealHighway Mod feature guide for a list of bridge styles that are available.

All RHW networks, with the exception of the 6C and 8C networks, are capable of creating bridges.

{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK         | Base Network     |
|-----------------|:----------------:|
| TLA-3           |   No support     |
| AVE-2           |   No support     |
| ARD-3        	  |   No support     |
| OWR-1			  | One-Way Road     |
| OWR-3		      | One-Way Road     |
| NRD-4			  |   Road		     |
| TLA-5			  |    No support    |
| OWR-4		  	  |       Avenue     |
| OWR-5			  |       Avenue     |
| RD-4			  |       Avenue     |
| RD-6			  |       Avenue     |
| TLA-7		      |   No support     |
| AVE-6		      |   No support     |

{{< /table >}}

### Tunnels

Due to the nature of the override networks, tunnels for Network Widening Networks are not possible.

## Network ID Assignments

The Network Widening Mod uses the following ID ranges:

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Network Range</th>
        <th>Purpose</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5100 - 0x51FF</code></td>
        <td>Current NWM range</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x7100 - 0x71FF</code></td>
        <td>LHD Path remapping range</td>
    </tr>
</table>

Within the Network Addon Mod, the Network Widening Mod and related features (i.e. RealExpressway) occupy the entire 0x51 range.

### Detailed information

#### 0x510

Primarily contains the base single-tile networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25" style="max-width:120px;">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5100</code></td>
        <td>TLA-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5101</code></td>
        <td>AVE-2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5102</code></td>
        <td>ARD-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5103</code></td>
        <td>OWR-1</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5104</code></td>
        <td>OWR-3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5105</code></td>
        <td>NRD-4</td>
    </tr>

    <tr>
        <td class="text-center"><code>0x5106-0x510F</code></td>
        <td>Unused (proposed for elevated usage)</td>
    </tr>
</table>

#### 0x511

Primarily contains dual-tile networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5110</code></td>
        <td>TLA-5</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5111</code></td>
        <td>OWR-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5112</code></td>
        <td>OWR-5</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5113</code></td>
        <td>RD-4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5114</code></td>
        <td>RD-6</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5115-0x511F</code></td>
        <td>Unused (proposed for elevated usage)</td>
    </tr>
</table>

#### 0x512

Primarily contains triple-tile networks.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5120</code></td>
        <td>TLA-7/AVE-6 (Outer) and TLA Shared (Inner)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5721</code></td>
        <td>TLA-9/AVE-8 (Outer) and AVE Shared (Inner)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5122-0x512F</code></td>
        <td>Unused (proposed for elevated usage, possible other networks)</td>
    </tr>
</table>

#### 0x513

Primarily contains single-tile network puzzle pieces, following ranges in 0x510

#### 0x514

Primarily contains dual-tile network puzzle pieces, following ranges in 0x511


#### 0x515

Primarily contains triple-tile network puzzle pieces, following ranges in 0x511

#### 0x516

Primarily contains RealExpressway (REW) content.

#### 0x517

Primarily contains RealExpressway (REW) content.

#### 0x518

Unused.

#### 0x519

Primarily contains MRCs/WRCs.

#### 0x51A-0x51F

Unused.