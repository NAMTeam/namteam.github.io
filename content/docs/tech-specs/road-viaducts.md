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

{{< compatibility-key >}}

### Additional Notes

**OxO**: OxO stands for "orthogonal x orthogonal", and refers to a situation where both networks are orthogonal (in a straight line) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

**OxD**: OxD stands for "orthogonal x diagonal", and refers to a situation where the given network is orthogonal (in a straight line) along the game's grid, and the cross network is diagonal (running at a 45° angle).

**DxO**: DxO stands for "diagonal x orthogonal", and refers to a situation where the base network is diagonal (running at a 45° angle), and the cross network is orthogonal (in a straight line) along the game's grid.

**DxD**: DxD stands for "diagonal x diagonal", and refers to a situation where both networks are diagonal (running at a 45° angle) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

## Available Height Levels

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| NETWORK                                      |  L1   | L2    | L3    | L4    |
| -------------------------------------------- | :---: | :---: | :---: | :---: |
| Road Draggable                               | Yes   | Yes   | No    | No    |
| One-Way Road Draggable                       | Yes   | Yes   | No    | No    |
| Avenue Draggable                             | Yes   | Yes   | No    | No    |
| Road Puzzle Piece {{< deprecated >}}         | Yes   | Yes   | No    | No    |
| One-Way Road Puzzle Piece {{< deprecated >}} | No    | Yes   | No    | No    |
| Avenue Puzzle Piece {{< deprecated >}}       | Yes   | Yes   | No    | No    |
{{< /table >}}

## Curve and Diagonal Functionality

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| NETWORK                                      | Base Curves | Diagonals | Wide Radius/Multi-Radius Curves |
| ---------------------------------------------| :---------: | :-------: | :-----------------------------: |
| Road Draggable                               | Yes         | Yes       | No    |
| One-Way Road Draggable                       | Yes         | Yes       | No    |
| Avenue Draggable                             | Yes         | Yes       | No    |
| Road Puzzle Piece {{< deprecated >}}         | Yes         | Yes       | No    |
| One-Way Road Puzzle Piece {{< deprecated >}} | Yes         | Yes       | No    |
| Avenue Puzzle Piece {{< deprecated >}}       | Yes         | Yes       | No    |
{{< /table >}}

## Bridges

As of NAM {{< param docsversion >}}, only basic Viaduct Bridges are available for L1 and L2 networks.

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6" >}}
| NETWORK                                      |  L1   | L2    | L3    | L4    |
| -------------------------------------------- | :---: | :---: | :---: | :---: |
| Road Draggable                               | Yes   | Yes   | No    | No    |
| One-Way Road Draggable                       | Yes   | Yes   | No    | No    |
| Avenue Draggable                             | Yes   | Yes   | No    | No    |
| Road Puzzle Piece {{< deprecated >}}         | ---   | ---   | ---   | ---   |
| One-Way Road Puzzle Piece {{< deprecated >}} | ---   | ---   | ---   | ---   |
| Avenue Puzzle Piece {{< deprecated >}}       | ---   | ---   | ---   | ---   |
{{< /table >}}

## Intersection Support

### Road Viaduct Orthogonal x Orthogonal (OxO) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Street-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ---------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street                       | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)                 | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls                     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Road                       | Yes     | Yes     | ---     | ---     | ---     | Yes     | No      | Yes     | ---     | ---     |
| One-Way Road               | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| Avenue                     | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| AVE-2                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| TLA-3                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| ARD-3                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| NRD-4                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| RD-4                       | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| TLA-5                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| RD-6                       | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| AVE-6                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| TLA-7                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| OWR-1                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| OWR-2                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| OWR-3                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| OWR-4                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| OWR-5                      | Yes     | No      | ---     | ---     | ---     | Yes     | No      | No      | ---     | ---     |
| Canals                     | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Maxis Highway/MHO             | Yes     | ---     | No      | ---     | ---     | Yes     | ---     | No      | ---     | ---     |
| MIS                           | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-2                         | Yes     | Yes     | Yes     | No      | No      | Yes     | Yes     | Yes     | No      | No      |
| RHW-3                         | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-4                         | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-6S                        | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-6C                        | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-8S                        | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-8C                        | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-10S                       | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
| RHW-12S                       | Yes     | No      | No      | No      | No      | Yes     | No      | No      | No      | No      |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Rail (DTR)                 | Yes     | No      | Yes     | ---     | ---     | Yes     | Yes     | No     | ---     | ---     |
| Rail (STR)                 | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| El-Rail                    | ---     | ---     | Yes     | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| GLR (Urban)                | Yes     | ---     | ---     | ---     | ---     | Yes     | ??      | ??      | ---     | ---     |
| GLR (Rural)                | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ??      | ---     | ---     |
| Monorail                   | ---     | ---     | Yes     | ---     | ---     | ---     | ---     | No      | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| El-Rail-over-Road    | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| El-Rail-over-Ave     | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| El-Rail-over-RD4     | ---     | ---     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     |
| Tram-in-Road         | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Tram-in-Ave          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Hybrid Railway       | No      | No      | No      | ---     | ---     | No      | No      | No      | ---     | ---     |
{{< /table >}}

### Road Viaduct Orthogonal x Diagonal (OxD) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Street-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ---------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street                       | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)                 | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls                     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|  _Due to the complexities of supporting dual networks, no support is provided for OxD intersections._ |
{{< /table >}}

### Road Viaduct Diagonal x Orthogonal (DxO) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Street-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ---------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street                       | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)                 | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls                     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|  _Due to the complexities of supporting dual networks, no support is provided for DxO intersections._ |
{{< /table >}}

### Road Viaduct Diagonal x Diagonal (DxD) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Street-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ---------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street                       | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)                 | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls                     | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|  _Due to the complexities of supporting dual networks, no support is provided for DxD intersections._ |
{{< /table >}}



### One-Way Road Orthogonal x Orthogonal (OxO) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

### One-Way Road Orthogonal x Diagonal (OxD) Intersections

TBD

### One-Way Road Diagonal x Orthogonal (DxO) Intersections

TBD

### One-Way Road Diagonal x Diagonal (DxD) Intersections

TBD



### Avenue Orthogonal x Orthogonal (OxO) Intersections

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| NETWORK           | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Street            | Yes     | ---     | ---     | ---     | ---     | Yes     | ---     | ---     | ---     | ---     |
| Street (SAM)      | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
| Pedmalls          | No      | ---     | ---     | ---     | ---     | No      | ---     | ---     | ---     | ---     |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Road-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Highway-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| ----------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Rail-based Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

{{< table class="table-bordered table-sm nam-compat-status w-auto fs-6 fc-25" >}}
| <u>Dual Networks</u> | L1 x L0 | L1 x L1 | L1 x L2 | L1 x L3 | L1 x L4 | L2 x L0 | L2 x L1 | L2 x L2 | L2 x L3 | L2 x L4 |
| -------------------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
{{< /table >}}

### Avenue Orthogonal x Diagonal (OxD) Intersections

TBD

### Avenue Diagonal x Orthogonal (DxO) Intersections

TBD

### Avenue Diagonal x Diagonal (DxD) Intersections

TBD

### Puzzle Piece Viaducts {{% deprecated %}} {#puzzle-piece-viaducts}

The Puzzle Piece Viaducts are only kept for legacy purposes. No further development will occur.
