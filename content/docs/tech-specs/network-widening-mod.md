---
title : "Network Widening Mod"
description: "Technical specifications for the Network Widening Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Network Widening Mod are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/network-widening-mod"
---

{{< feature-guide link="/docs/feature-guides/network-widening-mod" >}}

{{< docstatus status="workinprogress" >}}

## Key

{{< compatibility-key >}}

### Additional Notes

**T-End Min**: If the given network is to end at a T-intersection, this value is the minimum number of total lanes that needs to be on the cross network. For instance, while an RD-6 (T-End Min = 3) can end at an ARD-3 (3 total thru lanes), it cannot end at a Road (2 total thru lanes). Center lanes on TLA networks do not count toward the overall figure (i.e. the TLA-5 would be considered to have 4 lanes total in this instance).

**T-In Max**: If a cross network ends at the given network in a T-intersection, this value is the maximum number of lanes on the cross network heading inbound to the T-intersection (half the network, in the case of a two-way network, the full network if one-way). For instance, an AVE-2 can have an Avenue or RD-4 end at it (AVE-2 T-In Max = 2, while the Avenue and RD-4 have 4 lanes total, 2 heading inbound to the intersection), but an OWR-1 cannot (T-In Max = 1). Center lanes on TLA networks do not count toward the overall figure (i.e. the TLA-5 would be considered to have 4 lanes total in this instance).

## Network and FLEX Piece Capabilities

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
| TLA-5 |        Yes       |       Yes (Split-Tile)      |       Yes       |      Yes      |             No            |      No      |
| OWR-4 |        Yes       |       Yes (Shared-Tile)     |       No       |      Yes      |             No            |      No      |
| OWR-5 |        Yes       |       Yes (Split-Tile)      |       No       |      Yes      |             No            |      No      |
| RD-4  |        Yes       |       Yes (Shared-Tile)    |       Yes      |      Yes      |            No            |      No     |
| RD-6  |        Yes       |       Yes (Split-Tile)      |       No       |      Yes      |             No            |      No      |
| TLA-7 |        Yes       |       Yes (Split-Tile)      |       No      |      Yes      |            No            |      No     |
| AVE-6 |        Yes       |       Yes (Split-Tile, RD-based only)     |       No       |      No      |             No            |      No      |
{{< /table >}}

### Intersections

#### Orthogonal x Orthogonal (OxO) Intersections

{{< table class="table-bordered nam-compat-status table-sm" >}}
| Network | T-End Min | T-In Max | OxO Maxis Networks | OxO NWM | OxO GLR/Tram | OxO STR | OxO Draggable Viaducts | OxO L0 RHW | OxO L1-L4/DD RHW | OxO HSR | OxO Dual-Networking | OxO SAM | FLUPs | URail |
|---------|-----------|----------|--------------------|---------|--------------|---------|------------------------|------------|------------------|---------|---------------------|---------|-------|-------|
| TLA-3 | 1 | 2 | Yes | Yes | Partial(Urban/Rural Only) | Yes| Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| AVE-2 | 1 | 2 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| ARD-3 | 2 | 3 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| NRD-4 | 2 | 4| Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| OWR-1 | 1 | 1 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| OWR-3 | 3 | 3 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| TLA-5 | 2 | 4 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| RD-4 | 2 | 4 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| RD-6 | 3 | 6 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| OWR-4 | 4 | 4 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| OWR-5 | 5 | 5 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| TLA-7 | 3 | 6 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
| AVE-6 | 3 | 6 | Yes | Yes | Partial(Urban/Rural Only) | Yes | Yes | Partial (RHW-2 and MIS Only) | Yes | Yes | No | Yes | Yes | No |
{{< /table >}}

#### Diagonal (OxD, DxO, and DxD) Intersections

{{< table class="table-bordered nam-compat-status table-sm" >}}
| Network | Maxis Networks | NWM | GLR/Tram | STR | Draggable Viaducts | RHW | Any Other NAM Feature |
|---------|----------------|-----|----------|-----|--------------------|-----|---------------------------|
| TLA-3 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| AVE-2 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| ARD-3 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| NRD-4 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| OWR-1 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| OWR-3 | Partial (No T-Ints) | Partial (No T-Ints) | Partial(Urban/Rural Only) | Yes | No | No | No |
| All Other NWM Networks | No | No | No| No | No | No | No |
{{< /table >}}

### Transitions

#### Orthogonal Transitions to Maxis Networks

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK | Road | One-Way Road | Avenue | Street |
|---------|:-----:|:-----:|:-----:|:-----:|
| TLA-3 | Yes (Stub) | No | Yes (Direct) | No |
| AVE-2 | Yes (Stub) | No | Yes (Direct) | No |
| ARD-3 | Yes (Stub) | No | Yes (Direct) | No |
| OWR-1 | No | Yes (Stub) | No | No |
| OWR-3 | No | Yes (Stub) | No | No |
| NRD-4 | Yes (Stub) | No | Yes (Direct) | No |
| TLA-5 | Yes (Stub) | Yes (Direct) | Yes (Direct) | No |
| OWR-4 | No | Yes (Direct to Dual OWR) | No | No |
| OWR-5 | No | No | No | No |
| RD-4  | Yes (Stub) | Yes (Direct to Dual OWR) | Yes (Direct) | No |
| RD-6  | No | No | Yes (Direct) | No |
| TLA-7 | No | No | Partial (Puzzle) | No |
| AVE-6 | No | No | Partial (Puzzle) | No |
{{< /table >}}

#### Orthogonal Transitions to Other NWM Networks

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK | TLA-3 | AVE-2 | ARD-3 | OWR-1 | OWR-3 | NRD-4 | TLA-5 | OWR-4 | OWR-5 | RD-4 | RD-6 | TLA-7 | AVE-6 |
|---------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:----:|:----:|:-----:|:-----:|
| TLA-3 | Self | Yes (Stub) | Yes (Stub) | No | No | Yes (Stub)| Yes (Stub) | No | No| No | No | No | No |
| AVE-2 | Yes (Stub)  | Self | Yes (Stub) | No | No | Yes (Stub)| Yes (Stub) | No | No| No | No | No | No |
| ARD-3 | Yes (Stub) | Yes (Stub) | Self | No | No | Yes (Stub)| Yes (Stub) | No | No| No | No | No | No |
| OWR-1 | No | No | No | Self | No | No | No | No | No | No | No | No | No |
| OWR-3 | No | No | No | No | Self | No | No | Yes (Stub) | Partial (Puzzle) | No| No | Yes (Direct) | Yes (Direct) |
| NRD-4 | Yes (Stub) | Yes (Stub) | Yes (Stub) | No | No | Self | Yes (Stub) | No | No | Yes (Stub) | Yes (Stub) | No | No |
| TLA-5 | Yes (Stub) | Yes (Stub) | No | No | No | Yes (Stub) | Self | No | No | Yes (Stub) | Yes (Stub) | Limited (PP via Avenue) | Limited (PP via Avenue) |
| OWR-4 | No | No | No | No | Yes (Stub) | No | No | Self | Yes (Stub) | No | No | No | No |
| OWR-5 | No | No | No | No | Partial (Puzzle) | No | No | Yes (Stub) | Self | No | No | No | No |
| RD-4  | Yes (Stub) | Yes (Stub) | Yes (Stub) | No | No | Yes (Stub) | Yes (Stub) | No | No | Self | Yes (Stub) | No | No |
| RD-6  | No | No | No | No | Yes (Direct to Dual OWR-3) | No | Yes (Stub) | No | No | Yes (Stub) | Self | Partial (Puzzle) | Partial (Puzzle) |
| TLA-7 | No | No | No | No| Yes (Direct to Dual OWR-3) | No | Limited (PP via Avenue) | No | No | No | Partial (Puzzle) | Self | Yes (Stub) |
| AVE-6 | No | No | No | No | Yes (Direct to Dual OWR-3) | No | Limited (PP via Avenue) | No | No | No | Partial (Puzzle) | Yes (Stub) | Self |
{{< /table >}}

#### Orthogonal Transitions to RealHighway (RHW) Networks

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK | RHW |
|---------|:-----:|
| TLA-3 | Yes (RHW-2) |
| AVE-2 | Yes (RHW-2) |
| ARD-3 | Yes (RHW-2/3) |
| OWR-1 | Yes (MIS) |
| OWR-3 | Yes (RHW-6S) |
| NRD-4 | Yes (RHW-2) |
| TLA-5 | Yes (Dual RHW-4) |
| OWR-4 | Yes (RHW-8S) |
| OWR-5 | Yes (RHW-10S) |
| RD-4  | Yes (Dual RHW-4) |
| RD-6  | Yes (Dual RHW-6S) |
| TLA-7 | Yes (RHW-6C) |
| AVE-6 | Yes (RHW-6C) |
{{< /table >}}

#### Diagonal Transitions

{{< table class="table-bordered nam-compat-status table-sm" >}}
| NETWORK | TLA-3 | AVE-2 | ARD-3 | OWR-1 | OWR-3 | NRD-4 | Road | One-Way Road |
|---------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| TLA-3 | Self | Partial (Puzzle) | Partial (Puzzle) | No | No | No | Yes (Stub) | No |
| AVE-2 | Partial (Puzzle)  | Self | Partial (Puzzle) | No | No | No | Yes (Stub)| No |
| ARD-3 | Partial (Puzzle)  | Partial (Puzzle) | Self | No | No | No | Yes (Stub)| No |
| OWR-1 | No | No | No | Self | No | No | No | Yes (Stub) |
| OWR-3 | No | No | No | No | Self | No | No | Yes (Stub) |
| NRD-4 | No | No | No | No | No | Self | No | No |
| All Other Networks | No | No | No | No | No | No | No | No | No |
{{< /table >}}

#### Fractional Angle Transitions

Not currently supported.

### Wide-Radius / Multi-Radius Curves

### Fractional Angle Support

Not currently supported.

### FLEX Turn Lane Intersection Support

{{< table class="table-bordered nam-compat-status table-sm" >}}
| Network | Supported Transitions | Supported Direct Intersections |
|-------|------------------------|---------------------------------|
| TLA-3 | Yes, Transition to Type 110 | No Direct Intersections |
| AVE-2 | Yes, Transition to Type 110 | No Direct Intersections |
| ARD-3 | Yes, Transition to Type 110 | No Direct Intersections |
| NRD-4 | No Support | No Direct Intersections |
| OWR-1 | No Support | No Direct Intersections |
| OWR-3 | No Support | No Direct Intersections |
| TLA-5 | Yes, Transitions to Type 120 and Type 220 | No Direct Intersections |
| RD-4 | Yes, Transition to Type 120 | No Direct Intersections |
| RD-6 | No Support | No Direct Intersections |
| OWR-4 | No Support | No Direct Intersections |
| OWR-5 | No Support | No Direct Intersections |
| TLA-7 | Yes, Transitions to Type 130 and Type 230 | No Direct Intersections |
| AVE-6 | Yes, Transitions to Type 130 and Type 230 | No Direct Intersections |
{{< /table >}}

### Bridges

> Refer to [the *Bridges* section](/docs/feature-guides/network-widening-mod/#bridges) of the Network Widening Mod feature guide for a list of bridge styles that are available.

All NWM networks, with the exception of the TLA-7 and AVE-6, are capable of creating bridges, though some do not presently support bridges (nor does it make sense for them to support bridges, i.e. TLA networks).

{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK         | Base Network     |
|-----------------|:----------------:|
| TLA-3           |   No support     |
| AVE-2           |   No support     |
| ARD-3           |   No support     |
| OWR-1           |   No support     |
| OWR-3           |   One-Way Road   |
| NRD-4           |   Road           |
| TLA-5           |   No support     |
| OWR-4           |   Avenue         |
| OWR-5           |   Avenue         |
| RD-4            |   Avenue         |
| RD-6            |   Avenue         |
| TLA-7           |   No support     |
| AVE-6           |   No support     |

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
