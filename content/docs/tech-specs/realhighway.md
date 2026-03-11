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

{{< feature-guide link="/docs/feature-guides/realhighway-mod" >}}

{{< docstatus status="workinprogress" >}}

## Key

{{< compatibility-key >}}

## Capacities and Speeds

The capacity of each network depends on the [Traffic Plugin](/docs/feature-guides/the-nam-traffic-simulator) one has installed. Capacity is generally calculated on a per tile basis by the game, as the game cannot read the number of lanes.

{{< table class="table table-striped table-bordered w-auto" >}}
| RHW Network Type<sup>1,2</sup>                | Classic | Low | Medium | High | Ultra |
| ---                                           | :---: | :---: | :---: | :---: | :---: |
| MIS Ramps (single-tile capacity)              | 3000 | 6000 | 10000 | 15000 | 30000 |
| RHW-2 (single-tile capacity)                  | 3000 | 6000 | 10000 | 15000 | 30000 |
| RHW-3 (single-tile capacity)<sup>3</sup>      | 3750 | 7500 | 12500 | 18750 | 37500 |
| RHW-4 (dual-tile capacity)                    | 6000 | 12000 | 20000 | 30000 | 60000 |
| DDRHW-4 (single-tile capacity)<sup>3</sup>    | 3750 | 7500 | 12500 | 18750 | 37500 |
| RHW-6S (dual-tile capacity)<sup>3</sup>       | 7500 | 15000 | 25000 | 37500 | 75000 |
| RHW-6C (triple-tile capacity)<sup>3</sup>     | 11250 | 22500 | 37500 | 56250 | 112500 |
| RHW-8S (quadruple-tile capacity)<sup>3</sup>  | 15000 | 30000 | 50000 | 75000 | 150000 |
| RHW-8C (triple-tile capacity)<sup>3</sup>     | 11250 | 22500 | 37500 | 56250 | 112500 |
| RHW-10S (quadruple-tile capacity)<sup>3</sup> | 15000 | 30000 | 50000 | 75000 | 150000 |
| RHW-12S (quadruple-tile capacity)<sup>3</sup> | 15000 | 30000 | 50000 | 75000 | 150000 |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** The capacities listed are for the _full width_ of the network, rather than the per-tile capacity.</span><br>
<span class="fs-6">**<sup>2</sup>** These figures also apply to all elevated versions of each network width. This means that the **L0 RHW-4** has have the same capacity as its **L1**, **L2**, **L3**, and **L4** counterparts.</span><br>
<span class="fs-6">**<sup>3</sup>** Networks with crossover paths (**RHW-6C**, **RHW-8S**, **RHW-8C**, **RHW-10S**, and **RHW-12S**), and those that use a special workaround (**RHW-3**, **DDRHW-4**, and **RHW-6S**) have a 25% boost on capacity over the normal per-tile figure for the base RHW network. This boost can only be applied once, which is why **DDRHW-4**, despite having one more lane than the **RHW-3**, has the same capacity. A similar situation exists with the **RHW-6C** and **RHW-8C**, and the **RHW-8S** and **RHW-10S**.</span><br>

The catalog speeds for the base RealHighway network are listed below. These speeds apply when the network is at 100% capacity; speeds on empty networks will exceed these figures by 30%, declining as the networks increase in volume per the Congestion vs. Speed Curve.

{{< table class="table table-striped table-responsive table-bordered w-auto" >}}
| Vehicle Type | Speed |
| --- | :---: |
| Car | 150 |
| Bus | 150 |
| Freight Truck | 130 |
| Pedestrian<sup>1</sup> | 10 |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** Pedestrians are only permitted on the L0 RHW-2 network.</span><br>

## Network and FLEX Piece Capabilities

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
| RHW-7C  | Yes | Yes | Yes | No  | No  | No  |
| RHW-8S  | Yes | Yes | Yes | No  | No  | No  |
| RHW-8C  | Yes | Yes | Yes | No  | No  | No  |
| RHW-10S | Yes | Yes | Yes | No  | No  | No  |
| RHW-12S | Yes | Yes | Yes | No  | No  | No  |
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

The availability of these transitions generally mirrors the available heights for each network.

#### Orthogonal Ramp-Style Transitions

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width    | L0 ⇄ L1 | L1 ⇄ L2 | L2 ⇄ L3 | L3 ⇄ L4 | L0 ⇄ L2 | L1 ⇄ L3 | L2 ⇄ L4 |
| -------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| MIS      | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-2    | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-3    | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-4    | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-6S   | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-6C   | Yes     | Yes     | No      | No      | Yes     | No      | No      |
| RHW-8S   | Yes     | Yes     | No      | No      | Yes     | No      | No      |
| RHW-8C   | Yes     | Yes     | No      | No      | Yes     | No      | No      |
| RHW-10S  | Yes     | Yes     | No      | No      | Yes     | No      | No      |
| RHW-12S  | Yes     | Yes     | No      | No      | Yes     | No      | No      |
| DD-RHW-4 | ---     | ---     | ---     | ---     | ---     | ---     | ---     |
{{< /table >}}

#### Orthogonal On-Slope Transitions

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width    | L0 ⇄ L1 | L1 ⇄ L2 | L2 ⇄ L3 | L3 ⇄ L4 | L0 ⇄ L2 | L1 ⇄ L3 | L2 ⇄ L4 |
| -------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| MIS      | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-2    | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-3    | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-4    | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-6S   | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-6C   | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-8S   | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-8C   | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-10S  | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-12S  | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| DD-RHW-4 | ---     | ---     | ---     | ---     | ---     | ---     | ---     |
{{< /table >}}

#### Diagonal Ramp-Style Transitions

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width    | L0 ⇄ L1 | L1 ⇄ L2 | L2 ⇄ L3 | L3 ⇄ L4 | L0 ⇄ L2 | L1 ⇄ L3 | L2 ⇄ L4 |
| -------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| MIS      | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-2    | Yes     | Yes     | No      | No      | No      | No      | No      |
| RHW-3    | Yes     | No      | No      | No      | No      | No      | No      |
| RHW-4    | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     | Yes     |
| RHW-6S   | Yes     | No      | No      | No      | No      | No      | No      |
| RHW-6C   | No      | No      | No      | No      | No      | No      | No      |
| RHW-8S   | No      | No      | No      | No      | No      | No      | No      |
| RHW-8C   | No      | No      | No      | No      | No      | No      | No      |
| RHW-10S  | No      | No      | No      | No      | No      | No      | No      |
| RHW-12S  | No      | No      | No      | No      | No      | No      | No      |
| DD-RHW-4 | ---     | ---     | ---     | ---     | ---     | ---     | ---     |
{{< /table >}}

#### Diagonal On-Slope Transitions

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width    | L0 ⇄ L1 | L1 ⇄ L2 | L2 ⇄ L3 | L3 ⇄ L4 | L0 ⇄ L2 | L1 ⇄ L3 | L2 ⇄ L4 |
| -------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| MIS      | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-2    | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-3    | No      | ---     | ---     | ---     | No      | ---     | ---     |
| RHW-4    | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-6S   | Yes     | ---     | ---     | ---     | Yes     | ---     | ---     |
| RHW-6C   | No      | ---     | ---     | ---     | No      | ---     | ---     |
| RHW-8S   | No      | ---     | ---     | ---     | No      | ---     | ---     |
| RHW-8C   | No      | ---     | ---     | ---     | No      | ---     | ---     |
| RHW-10S  | No      | ---     | ---     | ---     | No      | ---     | ---     |
| RHW-12S  | No      | ---     | ---     | ---     | No      | ---     | ---     |
| DD-RHW-4 | ---     | ---     | ---     | ---     | ---     | ---     | ---     |
{{< /table >}}

### FLEXWidth Transitions

The availability of these transitions mirrors the available heights for each network, with the exception of RHW-2 → RHW-4 and RHW-3 → RHW-4 which are L0 (ground-level) only.
All networks involved in the transition must be at the same height level.

#### Orthogonal Transitions

{{< table class="table-bordered nam-compat-status table-sm" >}}
|         | MIS   | RHW-2 | RHW-3 | RHW-4 | RHW-6S | RHW-6C | RHW-8S | RHW-8C | RHW-10S | RHW-12S |
|---------| :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: | :-----: | :-----: |
| MIS     | ---   | No    | No    | Yes   | No     | No     | No     | No     | No      | No      |
| RHW-2   | No    | ---   | Yes   | No    | No     | No     | No     | No     | No      | No      |
| RHW-3   | No    | Yes   | ---   | Yes   | No     | No     | No     | No     | No      | No      |
| RHW-4   | Yes   | No    | Yes   | ---   | Yes    | Yes    | No     | No     | No      | No      |
| RHW-6S  | No    | No    | No    | Yes   | ---    | Yes    | Yes    | Yes    | No      | No      |
| RHW-6C  | No    | No    | No    | Yes   | Yes    | ---    | Yes    | Yes    | No      | No      |
| RHW-8S  | No    | No    | No    | No    | Yes    | Yes    | ---    | Yes    | Yes     | No      |
| RHW-8C  | No    | No    | No    | No    | Yes    | Yes    | Yes    | ---    | Yes     | No      |
| RHW-10S | No    | No    | No    | No    | No     | No     | Yes    | Yes    | ---     | Yes     |
| RHW-12S | No    | No    | No    | No    | No     | No     | No     | No     | Yes     | ---     |
{{< /table >}}

S-to-C Transitions support asymmetrical combos, so additional possibilities exist beyond what is strictly indicated on this table.
The only limitation is that each network has the same number of lanes or differ by only one lane per side.
For example, RHW-6S (3 lanes per side) can transition to RHW-4 (2 lanes per side), RHW-6C (3 lanes per side), and RHW-8C (4 lanes per side).

#### Diagonal Transitions

Not currently supported.

{{< table class="table-bordered nam-compat-status table-sm" >}}
|         | MIS   | RHW-2 | RHW-3 | RHW-4 | RHW-6S | RHW-6C | RHW-8S | RHW-8C | RHW-10S | RHW-12S |
|---------| :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: | :-----: | :-----: |
| MIS     | ---   | No    | No    | No    | No     | No     | No     | No     | No      | No      |
| RHW-2   | No    | ---   | No    | No    | No     | No     | No     | No     | No      | No      |
| RHW-3   | No    | No    | ---   | No    | No     | No     | No     | No     | No      | No      |
| RHW-4   | No    | No    | No    | ---   | No     | No     | No     | No     | No      | No      |
| RHW-6S  | No    | No    | No    | No    | ---    | No     | No     | No     | No      | No      |
| RHW-6C  | No    | No    | No    | No    | No     | ---    | No     | No     | No      | No      |
| RHW-8S  | No    | No    | No    | No    | No     | No     | ---    | No     | No      | No      |
| RHW-8C  | No    | No    | No    | No    | No     | No     | No     | ---    | No      | No      |
| RHW-10S | No    | No    | No    | No    | No     | No     | No     | No     | ---     | No      |
| RHW-12S | No    | No    | No    | No    | No     | No     | No     | No     | No      | ---     |
{{< /table >}}

#### Fractional Angle Transitions

Not currently supported.

{{< table class="table-bordered nam-compat-status table-sm" >}}
|         | MIS   | RHW-2 | RHW-3 | RHW-4 | RHW-6S | RHW-6C | RHW-8S | RHW-8C | RHW-10S | RHW-12S |
|---------| :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: | :-----: | :-----: |
| MIS     | ---   | No    | No    | No    | No     | No     | No     | No     | No      | No      |
| RHW-2   | No    | ---   | No    | No    | No     | No     | No     | No     | No      | No      |
| RHW-3   | No    | No    | ---   | No    | No     | No     | No     | No     | No      | No      |
| RHW-4   | No    | No    | No    | ---   | No     | No     | No     | No     | No      | No      |
| RHW-6S  | No    | No    | No    | No    | ---    | No     | No     | No     | No      | No      |
| RHW-6C  | No    | No    | No    | No    | No     | ---    | No     | No     | No      | No      |
| RHW-8S  | No    | No    | No    | No    | No     | No     | ---    | No     | No      | No      |
| RHW-8C  | No    | No    | No    | No    | No     | No     | No     | ---    | No      | No      |
| RHW-10S | No    | No    | No    | No    | No     | No     | No     | No     | ---     | No      |
| RHW-12S | No    | No    | No    | No    | No     | No     | No     | No     | No      | ---     |
{{< /table >}}

### Network Transitions

Support for these transitions is fairly limited and are only supported through draggable methods.

{{< table class="table-bordered nam-compat-status table-sm" >}}
|         | Street | Road  | ARD-3 | NRD-4 | RD-4  | RD-6  | Avenue | AVE-2  | TLA-5  | AVE-6  | TLA-7  | OWR    | OWR-1  | OWR-3  | OWR-4  | OWR-5  | 
|---------| :---:  | :---: | :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| MIS     | No     | No    | No    | No    | No    | No    | No     | No     | No     | No     | No     | Yes    | Yes    | No     | No     | No     |
| RHW-2   | Yes    | Yes   | No    | No    | No    | No    | No     | Yes    | No     | No     | No     | No     | No     | No     | No     | No     |
| RHW-3   | No     | No    | Yes   | No    | No    | No    | No     | No     | No     | No     | No     | No     | No     | No     | No     | No     |
| RHW-4   | No     | No    | No    | No    | Yes   | No    | Yes    | No     | Yes    | No     | No     | Yes    | No     | No     | No     | No     |
| RHW-6S  | No     | No    | No    | No    | No    | Yes   | No     | No     | No     | No     | No     | No     | No     | Yes    | No     | No     |
| RHW-6C  | No     | No    | No    | No    | No    | No    | No     | No     | No     | Yes    | Yes    | No     | No     | No     | No     | No     |
| RHW-8S  | No     | No    | No    | No    | No    | No    | No     | No     | No     | No     | No     | No     | No     | No     | Yes    | No     |
| RHW-8C  | No     | No    | No    | No    | No    | No    | No     | No     | No     | No     | No     | No     | No     | No     | No     | No     |
| RHW-10S | No     | No    | No    | No    | No    | No    | No     | No     | No     | No     | No     | No     | No     | No     | No     | Yes    |
| RHW-12S | No     | No    | No    | No    | No    | No    | No     | No     | No     | No     | No     | No     | No     | No     | No     | No     |
{{< /table >}}

### FLEXFly Crossings

### FLEXSPUI Crossings

### Wide-Radius / Multi-Radius Curves

This compatibility also applies to all applicable levels of each RHW network, not just L0.

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width   | 90° R0 | 90° R1 | 90° R2              | 90° R3 | 90° R4 | 90° R5 | 45° R0 | 45° R1 | 45° R2 | 45° R3              | 45° R4              | 45° R5              | Lane Shift          | Basketweave |
| ------: | :----: | :----: | :-----------------: | :----: | :----: | :----: | :----: | :----: | :----: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :---------: |
| MIS     | No     | Yes    | Partial<sup>1</sup> | No     | No     | No     | Yes    | Yes    | Yes    | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | No          |
| RHW-2   | Yes    | No     | Partial<sup>1</sup> | No     | No     | No     | Yes    | Yes    | Yes    | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | No          |
| RHW-3   | No     | No     | Partial<sup>1</sup> | No     | No     | No     | Yes    | Yes    | Yes    | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | No          |
| RHW-4   | No     | No     | Partial<sup>1</sup> | No     | No     | No     | Yes    | Yes    | Yes    | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Yes         |
| RHW-6S  | No     | No     | No                  | No     | No     | No     | Yes    | Yes    | Yes    | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | No          |
| RHW-6C  | No     | No     | No                  | No     | No     | No     | No     | No     | No     | No                  | No                  | No                  | Partial<sup>2</sup> | No          |
| RHW-8S  | No     | No     | No                  | No     | No     | No     | No     | No     | No     | Partial<sup>2</sup> | No                  | No                  | No                  | No          |
| RHW-8C  | No     | No     | No                  | No     | No     | No     | No     | No     | No     | No                  | No                  | No                  | Partial<sup>2</sup> | No          |
| RHW-10S | No     | No     | No                  | No     | No     | No     | No     | No     | No     | Partial<sup>2</sup> | No                  | No                  | No                  | No          |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** With FLEX or puzzle pieces only, draggable patterns are not supported.</span><br>
<span class="fs-6">**<sup>2</sup>** With puzzle pieces pieces only, FLEX and draggable patterns are not supported.</span><br>

### Fractional Angle Support

{{< legacy >}} 
Fractional Angle support for the RHW is entirely puzzle piece-based at present, see [Fractional Angle Menu Items lists](http://localhost:1313/docs/feature-guides/realhighway-mod/#fractional-angle-rhw-menu-items) for a listing of supported features.

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
