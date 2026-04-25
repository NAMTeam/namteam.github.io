---
title : "Bridges"
description: "The NAM includes a wide variety of bridges for all transportation networks."
lead: "The NAM includes a wide variety of bridges for all transportation networks, and features dozens of custom models and designs."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/bridges"
---

{{< docstatus status="workinprogress" >}}

## Base Networks

The base networks include Street, Road, Avenue, One Way Road, Maxis Highways, Rail, and Elevated Rail.

## Override Networks

The override networks include High Speed Rail, [RealHighway](/docs/feature-guides/bridges/#rhw), and the Network Widening Mod.

### RealHighway {#rhw}

The NAM includes bridges for various [RealHighway](/docs/feature-guides/realhighway/) networks.
However, a hardcoded restriction in the game's terrain engine prevents bridges from being built without at least a one-tile separation between them, meaning some extra considerations must be taken to properly construct bridges:

* Bridges for RealHighway networks with separate carriageways (MIS Ramps, RHW-4, RHW-6S, RHW-8S, RHW-10S, and DDRHW-4) will have their traffic flow determined by the way in which the base network is dragged. Take note of the preview models to ensure you have built the bridge in the correct direction. These bridges use the **RealHighway** tool as expected.
* Bridges involving the multi tile S-type networks (RHW-8S, RHW-10S, RHW-12S) must be built with the **Maxis Ground Highway** tool instead of the RealHighway tool.
* Bridges for adjacent RHW-4 and RHW-6S networks are also built with the **Maxis Ground Highway** tool.
* Bridges involving the triple tile C-type networks (RHW-6C and RHW-8C) are **not possible**.

For the bridges that use the Maxis Highway as a base, there are overrides in place to seamlessly connect with the otherwise RealHighway-based networks. In order to create this smooth transition, ensure that only the end stub of the Maxis Highway network is showing at each end of the bridge. Then, simply drag each tile of the RealHighway override network into the Maxis Highway stubs. They will convert to match the RealHighway. This process is shown below.

{{< img-simple src="images/bridge-rhw-mhw-guide.jpg" >}}

{{< alert context="info" >}}
Currently the Viaduct style bridges are the only types that support network heights other than L0.
{{< /alert >}}

The following bridges are supported with the RealHighway tool:

{{< table class="table-bordered nam-compat-status align-middle w-auto" >}}
| Bridge Type             | Preview                                                           | MIS   | RHW-2 | RHW-3 | RHW-4  | RHW-6S | DDRHW-4 |
| ----------------------- | :---------------------------------------------------------------- | :---: | :---: | :---: | :----: | :----: | :-----: |
| Viaduct                 | <img src="images/bridge-rhw-single-viaduct.jpg">                  | Yes   | Yes   | Yes   | Yes    | Yes    | Yes     | 
| Red Deck Under Truss    | <img src="images/bridge-rhw-single-red-deck-under-truss.jpg" >    | No    | Yes   | Yes   | Yes    | No     | No      |
| Small Steel Arch        | <img src="images/bridge-rhw-single-small-steel-arch.jpg" >        | No    | Yes   | No    | Yes    | No     | No      | 
| Plain                   | <img src="images/bridge-rhw-single-plain.jpg" >                   | No    | Yes   | No    | Yes    | No     | No      | 
| Concrete Girder         | <img src="images/bridge-rhw-single-concrete-girder.jpg" >         | No    | Yes   | No    | No     | No     | No      | 
| Steel Girder            | <img src="images/bridge-rhw-single-steel-girder.jpg" >            | No    | No    | No    | Yes    | No     | No      | 
| Concrete Box Girder     | <img src="images/bridge-rhw-single-concrete-box-grider.jpg" >     | No    | No    | No    | Yes    | Yes    | No      | 
| V-Shaped Steel Girder   | <img src="images/bridge-rhw-single-v-shaped-steel-grider.jpg" >   | No    | Yes   | No    | Yes    | No     | No      | 
| Yellow Steel Box Girder | <img src="images/bridge-rhw-single-yellow-steel-box-girder.jpg" > | No    | Yes   | Yes   | Yes    | No     | No      | 
| Green Over Deck Truss   | <img src="images/bridge-rhw-single-green-over-deck-truss.jpg" >   | No    | Yes   | Yes   | Yes    | No     | No      | 
| Blue Suspension         | <img src="images/bridge-rhw-single-blue-suspension.jpg" >         | No    | Yes   | Yes   | Yes    | No     | No      | 
{{< /table >}}

The following bridges are supported from the Ground Highway tool:

{{< table class="table-bordered nam-compat-status align-middle w-auto" >}}
| Bridge Type                 | Preview                                                              | RHW-4 | RHW-6S | RHW-8S | RHW-10S | RHW-12S |
| --------------------------- | :------------------------------------------------------------------- | :---: | :----: | :----: | :-----: | :-----: |
| Viaduct                     | <img src="images/bridge-rhw-double-viaduct.jpg">                     | Yes   | Yes    | Yes    | Yes     | Yes     |
| Cable Stayed                | <img src="images/bridge-rhw-double-cable-stayed.jpg">                | No    | No     | No     | Yes     | No      |
| Maxis Highway Override      | <img src="images/bridge-rhw-double-maxis-hwy-override.jpg">          | Yes   | No     | No     | No      | No      |
| Plain Compact Suspension    | <img src="images/bridge-rhw-double-compact-suspension.jpg">          | Yes   | No     | No     | No      | No      |
| Undertruss                  | <img src="images/bridge-rhw-double-undertruss.jpg">                  | No    | No     | Yes    | No      | No      |
| Large Concrete Arch         | <img src="images/bridge-rhw-double-large-concrete-arch.jpg">         | No    | No     | No     | Yes     | No      |
| Large Steel Arch            | <img src="images/bridge-rhw-double-large-steel-arch.jpg">            | Yes   | No     | No     | No      | No      |
| Compact Cable Stayed        | <img src="images/bridge-rhw-double-compact-cable-stayed.jpg">        | No    | Yes    | No     | No      | No      |
| Compact Steel Arch          | <img src="images/bridge-rhw-double-compact-steel-arch.jpg">          | No    | Yes    | No     | No      | No      |
| Steel Girder                | <img src="images/bridge-rhw-double-steel-girder.jpg">                | Yes   | No     | No     | No      | No      |
| Dual Steel Girder           | <img src="images/bridge-rhw-double-dual-steel-grider.jpg">           | Yes   | No     | No     | No      | No      |
| Compact Regular             | <img src="images/bridge-rhw-double-compact-regular.jpg">             | No    | Yes    | No     | No      | No      |
| Compact Concrete Box Girder | <img src="images/bridge-rhw-double-compact-concrete-box-girder.jpg"> | No    | Yes    | No     | No      | No      |
| Red Steel Arch              | <img src="images/bridge-rhw-double-red-steel-arch.jpg">              | No    | No     | No     | Yes     | Yes     |
{{< /table >}}
