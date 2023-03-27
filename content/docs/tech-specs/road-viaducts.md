---
title : "Road Viaducts"
description: "Technical specifications for the Road Viaducts are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Road Viaducts are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/road-viaducts"
---

{{< feature-guide link="/docs/feature-guides/road-viaducts" mod="Road Viaducts feature guide" >}}

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


## Available Height Levels

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| NETWORK                          |  L1   | L2    |
| -------------------------------- | :---: | :---: |
| Road Draggable                   | Yes   | Yes   |
| One-Way Road Draggable           | Yes   | Yes   |
| Avenue Draggable                 | Yes   | Yes   |
| Road Legacy Puzzle Piece         | Yes   | Yes   |
| One-Way Road Legacy Puzzle Piece | No    | Yes   |
| Avenue Legacy Puzzle Piece       | Yes   | Yes   |
{{< /table >}}

## Curve and Diagonal Functionality

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| NETWORK                          | Base Curves and Diagonals | Wide Radius/Multi-Radius Curves |
| -------------------------------- | :-----------------------: | :-----------------------------: |
| Road Draggable                   | Yes   | No    |
| One-Way Road Draggable           | Yes   | No    |
| Avenue Draggable                 | Yes   | No    |
| Road Legacy Puzzle Piece         | Yes   | No    |
| One-Way Road Legacy Puzzle Piece | Yes   | No    |
| Avenue Legacy Puzzle Piece       | Yes   | No    |
{{< /table >}}

## Intersection Support

### Road Draggable Viaducts

#### STREET-BASED NETWORKS

**Orthogonal x Orthogonal (OxO) Intersections**

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

**Orthogonal x Diagonal (OxD) Intersections**

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

**Diagonal x Orthogonal (DxO) Intersections**

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

**Diagonal x Diagonal (DxD) Intersections**

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

#### ROAD-BASED NETWORKS

**Orthogonal x Orthogonal (OxO) Intersections**

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Road              | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| One-Way Road      | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| Avenue            | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| AVE-2             | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| TLA-3             | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| ARD-3             | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| NRD-4             | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| RD-4              | Yes     | No      | No      | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| TLA-5             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| RD-6              | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| AVE-6             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| TLA-7             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| OWR-1             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| OWR-2             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| OWR-3             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| OWR-4             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| OWR-5             | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| Canals            | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

**Orthogonal x Diagonal (OxD) Intersections**

**Diagonal x Orthogonal (DxO) Intersections**

**Diagonal x Diagonal (DxD) Intersections**

#### HIGHWAY-BASED NETWORKS

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Maxis Highway/MHO | Yes     | ---     | No      | ---     | ---     | Yes     | ---     | No      | ---     | ---     |
| MIS               | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-2             | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-3             | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-4             | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-6S            | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-6C            | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-8S            | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-8C            | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-10S           | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
| RHW-12S           | No      | No      | No      | No      | No      | No      | No      | No      | No      | No      |
{{< /table >}}

**Orthogonal x Diagonal (OxD) Intersections**

**Diagonal x Orthogonal (DxO) Intersections**

**Diagonal x Diagonal (DxD) Intersections**


#### RAIL-BASED NETWORKS

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Rail (DTR)        | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| Rail (STR)        | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
| El-Rail           | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| GLR (Urban)       | No      | ---     | ---     | ---     | ---     | No      | No      | No      | ---     | ---     |
| GLR (Rural)       | No      | ---     | ---     | ---     | ---     | No      | ---     | No      | ---     | ---     |
| Monorail          | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
{{< /table >}}

**Orthogonal x Diagonal (OxD) Intersections**

**Diagonal x Orthogonal (DxO) Intersections**

**Diagonal x Diagonal (DxD) Intersections**


#### DUAL NETWORKS
{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| El-Rail-over-Road | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| El-Rail-over-Ave  | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| El-Rail-over-RD4  | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| Tram-in-Road      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Tram-in-Ave       | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Hybrid Railway    | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
{{< /table >}}

**Orthogonal x Diagonal (OxD) Intersections**

_Due to the complexities of supporting dual networks, no support is provided for OxD intersections._

**Diagonal x Orthogonal (DxO) Intersections**

_Due to the complexities of supporting dual networks, no support is provided for DxO intersections._

**Diagonal x Diagonal (DxD) Intersections**

_Due to the complexities of supporting dual networks, no support is provided for DxD intersections._


### One-Way Road Draggable Viaducts


### Avenue Draggable Viaducts

### Puzzle Piece Viaducts {{% deprecated %}} {#puzzle-piece-viaducts}

The Puzzle Piece Viaducts are only kept for legacy purposes. No further development will occur on these.

#### Road Puzzle Piece Viaducts

#### One-Way Road Puzzle Piece Viaducts

*Not supported - L1 OWR puzzle pieces do not exist and will not be developed.*

#### Avenue Puzzle Piece Viaducts

## Bridges

At time of development, only basic Viaduct Bridges are available for L1 and L2 networks.

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| Network                          |  L1   | L2    |
| -------------------------------- | :---: | :---: |
| Road Draggable                   | Yes   | Yes   |
| One-Way Road Draggable           | Yes   | Yes   |
| Avenue Draggable                 | Yes   | Yes   |
{{< /table >}}