---
title : "Hybrid Railway"
description: "Technical specifications for the Hybrid Railway are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Hybrid Railway are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/hybrid-railway"
---
<!-- markdownlint-disable MD001 -->
{{< feature-guide link="/docs/feature-guides/hybrid-railway" >}}

## Key

{{< compatibility-key >}}

## Network and FLEX Piece Capabilities


### Available Height Levels

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | L0    | L1       | L2    | L3    | L4    | DD    |
| ------- | :---: | :------: | :---: | :---: | :---: | :---: |
| HRW     | Yes   | Limited¹ | No    | No    | No    | No    |
{{< /table >}}

<span class="fs-6">**¹** Only *straight* orthogonal and diagonal segments of HRW are supported.</span>

### Base Network Features

HRW is created by a dual-network override of the Monorail and Heavy Rail networks.

### FLEXSwitch Interfaces

##### Orthogonal Mainline

##### Diagonal Mainline

##### Fractional Angle Mainline

### FLEXHeight & FLEXWidth Transitions

##### Orthogonal Ramp-Style Transitions

##### Orthogonal On-Slope Transitions

##### Diagonal Ramp-Style Transitions

##### Orthogonal On-Slope Transitions

##### Orthogonal Width Transitions

##### Diagonal Width Transitions

*Not currently supported.*

##### Fractional Angle Transitions

*Not currently supported.*

### Wide-Radius / Multi-Radius Curves

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | R1    | R2    | R3    | R4    | R5    |
| ------- | :---: | :---: | :---: | :---: | :---: |
| HRW L0  | Yes¹  | Yes¹  | Yes¹  | Yes   | Yes   |
| HRW L1  | No    | No    | No    | No    | No    |
{{< /table >}}

<span class="fs-6">**¹** These curves are larger than their RRW counterparts. Refer to [this section](/docs/feature-guides/hybrid-railway/#multi-radius-curves-mrcs) of the Feature Guide to learn more.</span>

### Fractional Angle Support

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | FA-3 | FA-2 | FA-1.5 | FA-1.5 (Alt) | FA-6 |
| ------- | :--: | :--: | :----: | :----------: | :--: |
| HRW L0  | ?    | Yes¹ | ?      | ?            | ?    |
| HRW L1  | No   | No   | No     | No           | No   |
{{< /table >}}

<span class="fs-6">**¹** The Flex FA-2 pieces can also be used to construct switches. In addition, there is also a short FA-2 piece available for this purpose. Refer to [this section](/docs/feature-guides/hybrid-railway/#fa-2-short-flex-switch-piece) of the Feature Guide to learn more.</span>

### Intersection Support

The Hybrid Railway supports a large amount of, but not all, crossings in the Network Addon Mod (NAM). Orthogonal crossing orthogonal has significant coverage in addition to other configurations.

All HRW intersections, with the exception of HRW x HRW crossings, require construction using the [Stub to Stub method](/docs/feature-guides/hybrid-railway/#stub-to-stub-sts-crossing-construction-method).

##### Orthogonal x Orthogonal (OxO) Intersections

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| Street       | Yes¹        | ---         | ---         | ---         | ---         |
| Road         | Yes         | No          | No          | ---         | ---         |
| One-Way Road | No          | No          | No          | ---         | ---         |
| Avenue       | Yes         | No          | No          | ---         | ---         |
| Rail         | No          | No          | No          | ---         | ---         |
| STR          | No          | No          | No          | ---         | ---         |
| El-Rail      | ---         | ---         | No          | ---         | ---         |
| GLR          | No          | No          | No          | ---         | ---         |
| Monorail     | ---         | ---         | No          | ---         | ---         |
| Maxis Hwy²   | No          | ---         | No          | ---         | ---         |
| MHO (PS)²    | No          | ---         | No          | ---         | ---         |
| AVE-2        | No          | No          | No          | ---         | ---         |
| TLA-3        | No          | No          | No          | ---         | ---         |
| ARD-3        | No          | No          | No          | ---         | ---         |
| NRD-4        | No          | No          | No          | ---         | ---         |
| RD-4         | No          | No          | No          | ---         | ---         |
| TLA-5        | No          | No          | No          | ---         | ---         |
| RD-6         | No          | No          | No          | ---         | ---         |
| AVE-6        | No          | No          | No          | ---         | ---         |
| TLA-7        | No          | No          | No          | ---         | ---         |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
{{< /table >}}

<span class="fs-6">¹ Defaults to the road network for crossing</span><br/>
<span class="fs-6">² Both variations of Maxis Highway are counted as one network for ease of display. MHW does not have a L1, L3 or L4 network. This also extends to the Maxis Highway Override project.</span>

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| Street       | Yes         | No          | No          | No          | No          |
| Road         | Yes         | No          | No          | No          | No          |
| One-Way Road | Yes         | No          | No          | No          | No          |
| Avenue       | Yes         | No          | No          | No          | No          |
| AVE-2        | Yes         | No          | No          | No          | No          |
| TLA-3        | Yes         | No          | No          | No          | No          |
| ARD-3        | Yes         | No          | No          | No          | No          |
| NRD-4        | Yes         | No          | No          | No          | No          |
| RD-4         | Yes         | No          | No          | No          | No          |
| TLA-5        | Yes         | No          | No          | No          | No          |
| RD-6         | Yes         | No          | No          | No          | No          |
| AVE-6        | Yes         | No          | No          | No          | No          |
| TLA-7        | Yes         | No          | No          | No          | No          |
| MIS          | Yes         | No          | No          | No          | No          |
| RHW-2        | Yes         | No          | No          | No          | No          |
| RHW-3        | Yes         | No          | No          | No          | No          |
| RHW-4        | Yes         | No          | No          | No          | No          |
| RHW-6S       | Yes         | No          | No          | No          | No          |
| RHW-6C       | Yes         | No          | No          | No          | No          |
| RHW-8S       | Yes         | No          | No          | No          | No          |
| RHW-8C       | Yes         | No          | No          | No          | No          |
| RHW-10S      | Yes         | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

##### Orthogonal x Diagonal (OxD) Intersections

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | No          | No          | No          | No          | No          |
| Road         | No          | No          | No          | No          | No          |
| One-Way Road | No          | No          | No          | No          | No          |
| Avenue       | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

¹ Defaults to the road network for crossing

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | Yes         | No          | No          | No          | No          |
| Road         | Yes         | No          | No          | No          | No          |
| One-Way Road | Yes         | No          | No          | No          | No          |
| Avenue       | Yes²        | No          | No          | No          | No          |
| AVE-2        | Yes         | No          | No          | No          | No          |
| TLA-3        | Yes         | No          | No          | No          | No          |
| ARD-3        | Yes         | No          | No          | No          | No          |
| NRD-4        | Yes         | No          | No          | No          | No          |
| RD-4         | Yes         | No          | No          | No          | No          |
| TLA-5        | Yes         | No          | No          | No          | No          |
| RD-6         | Yes         | No          | No          | No          | No          |
| AVE-6        | Yes         | No          | No          | No          | No          |
| TLA-7        | Yes         | No          | No          | No          | No          |
| MIS          | Yes         | No          | No          | No          | No          |
| RHW-2        | Yes         | No          | No          | No          | No          |
| RHW-3        | Yes         | No          | No          | No          | No          |
| RHW-4        | Yes         | No          | No          | No          | No          |
| RHW-6S       | Yes         | No          | No          | No          | No          |
| RHW-6C       | Yes         | No          | No          | No          | No          |
| RHW-8S       | Yes         | No          | No          | No          | No          |
| RHW-8C       | Yes         | No          | No          | No          | No          |
| RHW-10S      | Yes         | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

² Road tile needed to make the crossing activate

##### Diagonal x Orthogonal (DxO) Intersections

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | No          | No          | No          | No          | No          |
| Road         | No          | No          | No          | No          | No          |
| One-Way Road | No          | No          | No          | No          | No          |
| Avenue       | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

* ¹ Defaults to the road network for crossing
* ² Road tile needed to make the crossing activate

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | Yes         | No          | No          | No          | No          |
| Road         | Yes         | No          | No          | No          | No          |
| One-Way Road | Yes         | No          | No          | No          | No          |
| Avenue       | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | Yes         | No          | No          | No          | No          |
| RHW-2        | Yes         | No          | No          | No          | No          |
| RHW-3        | Yes         | No          | No          | No          | No          |
| RHW-4        | Yes         | No          | No          | No          | No          |
| RHW-6S       | Yes         | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | Yes         | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | Yes         | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

##### Diagonal x Diagonal (DxD) Intersections

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | Yes¹        | No          | No          | No          | No          |
| Road         | Yes         | No          | No          | No          | No          |
| One-Way Road | No          | No          | No          | No          | No          |
| Avenue       | Yes         | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

* ¹ Defaults to the road network for crossing
* ² Road tile needed to make the crossing activate

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Street       | Yes         | No          | No          | No          | No          |
| Road         | Yes         | No          | No          | No          | No          |
| One-Way Road | Yes         | No          | No          | No          | No          |
| Avenue       | Yes         | No          | No          | No          | No          |
| AVE-2        | Yes         | No          | No          | No          | No          |
| TLA-3        | Yes         | No          | No          | No          | No          |
| ARD-3        | Yes         | No          | No          | No          | No          |
| NRD-4        | Yes         | No          | No          | No          | No          |
| RD-4         | Yes         | No          | No          | No          | No          |
| TLA-5        | Yes         | No          | No          | No          | No          |
| RD-6         | Yes         | No          | No          | No          | No          |
| AVE-6        | Yes         | No          | No          | No          | No          |
| TLA-7        | Yes         | No          | No          | No          | No          |
| MIS          | Yes         | No          | No          | No          | No          |
| RHW-2        | Yes         | No          | No          | No          | No          |
| RHW-3        | Yes         | No          | No          | No          | No          |
| RHW-4        | Yes         | No          | No          | No          | No          |
| RHW-6S       | Yes         | No          | No          | No          | No          |
| RHW-6C       | Yes         | No          | No          | No          | No          |
| RHW-8S       | Yes         | No          | No          | No          | No          |
| RHW-8C       | Yes         | No          | No          | No          | No          |
| RHW-10S      | Yes         | No          | No          | No          | No          |
| Rail         | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorail     | No          | No          | No          | No          | No          |
{{< /table >}}

### Bridges

*Not currently supported.*

### Tunnels

*Not currently supported.*

## Network ID Assignments
