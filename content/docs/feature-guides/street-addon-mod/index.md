---
title : "Street Addon Mod"
description: "The Street Addon Mod (SAM) is a plugin which uses Starter Piece technology to add texture variants of the Street network."
lead: "The Street Addon Mod (SAM) is a plugin which uses Starter Piece technology to add texture variants of the Street network."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/street-addon-mod"
---

These variants also support (as appropriate) many of the same features as the base Street network, including support for the NAM's Diagonal Streets Plugin and Wide-Radius and Multi-Radius Curves.

<div class="row mx-0 g-1">
    <div class="col text-center">{{< img-simple src="images/samteaser1.jpg" class="" >}}</div>
    <div class="col text-center">{{< img-simple src="images/samteaser2.jpg" class="" >}}</div>
</div>
<div class="row mx-0 g-1">
    <div class="col text-center">{{< img-simple src="images/samteaser3.jpg" class="" >}}</div>
    <div class="col text-center">{{< img-simple src="images/samteaser4.jpg" class="" >}}</div>
</div>

{{< docstatus status="workinprogress" >}}

## Installing the Street Addon Mod from the NAM Installer

To install the Street Addon Mod in its entirety, simply select the "Street Addon Mod" box under the "_2 Additional Network Features > Streets_" section of the installation options. The SAM is installed by default.

## Street Addon Mod Override Networks

The Street Addon Mod includes a total of 11 different Street-based override networks.

* SAM 1 - Parking Lots (Original Base by Pegasus)
* SAM 2 - Herringbone Streets (Original Base by ardecila)
* SAM 3 - PEG Dirt Streets (Original Base by Pegasus)
* SAM 4 - PEG Gravel Streets (Original Base by Pegasus)
* SAM 5 - trolca Dirt Streets (Original Base by trolca)
* SAM 6 - Klinker Streets (Original Base by squidi and jplumbley)
* SAM 7 - Asphalt Streets (Original Base by Heblem [formerly Hableurg])
* SAM 8 - Cobblestone Streets (Original Base by xannepan)
* SAM 9 - Brick Streets (Original Base by JosefBrisko135 and ScruffyDeluxe)
* SAM 10 - Japanese Streets (Original Base by moonlinght)
* SAM 11 - Industrial Streets (Original Base by mgb204)

{{< img-simple src="images/sam-networks1.jpg" >}}

{{< img-simple src="images/sam-networks2.jpg" >}}

Each override network is initiated by first placing the appropriate Starter Piece (all SAM Starter Pieces are found under the Street Addon Mod button on the Roads menu), and then dragging the Street network through the Starter Piece. This process is shown below.

{{< img-simple src="images/sam-starter.jpg" clickable="true">}}

## Constructing Diagonals and Curves

With the exception of SAM 1, the Parking Lots set, all SAM networks can go diagonal, with SAM overrides continuing through the NAM's Diagonal Street Plugin, provided one is using either the FLEX/Helper Pieces or the Draggable Method. (The Diagonal Street Fillers, as static puzzle pieces, cannot carry overrides.) The process is shown below.

{{< img-simple src="images/sam-diagonal.jpg" clickable="true">}}

All SAM Sets, with the exception of SAM 1, can also override the NAM's Draggable Wide-Radius Curves for the Street network, simply by dragging the SAM network up to the edge of the curve, or drawing the pattern while continuing a SAM override. This process is shown below:

{{< img-simple src="images/sam-wrc.jpg" clickable="true">}}

For quick reference, the patterns for the Draggable Wide-Radius Curves for the Street network are shown below:

{{< img-simple src="images/sam-wrc-patterns.jpg" clickable="true">}}

All networks, including SAM 1, also support the default sharp 90° bend.

(Older, static puzzle piece curves for some SAM sets can also be found in the Rural Roads Plugin (RuRP), and will be found under the Rural Roads button on the Roads menu.)

## Intersecting and Transitioning to Other Networks

**Intersections and Transitions with Other Networks**

With supported networks--including Roads, One-Way Roads, Avenues, and Rails (including all Rail-based override networks\*)--intersections and crossings can simply be built by dragging the overridden Street network through the network, just as one would with any other draggable network. Supported networks allow for crossings in all possible permutations of orthogonal and diagonal networks. (The High Speed Rail override network also allows orthogonal x orthogonal crossings of select SAM networks via static puzzle pieces.)

{{< img-simple src="images/sam-intersection.jpg" clickable="true">}}

In addition, it is possible to transition to the Road, One-Way Road, or Avenue network by simply dragging to connect one of these networks to the SAM Network.

SAM Set 1 (the Parking Lots) are a special case. They can intersect or transition to other networks in a clean visual manner due to how they dovetail with the base Street network, but technically cannot form intersections or transitions. The overrides will not continue beyond the intersection, unlike what occurs with all the other SAM networks.

**SAM Interaction with the Street Network**

SAM Overrides are pervasive. The presence of a SAM Starter Piece will cause all Streets with exposure to the SAM Street--including those that intersect it--to also be overridden. As such, it is **not possible** to create an intersection between a SAM Street and a Maxis Street, or between two different SAM types.

{{< img-simple src="images/sam-override.jpg" clickable="true">}}

Transitions between two SAM Sets, or between SAM Streets and standard Streets are possible using the dedicated FLEX Piece, or by quickly transitioning from SAM -> Road -> Street, which breaks the override, though care should be taken even in these cases. Attempting to drag two SAM Sets into one another without the FLEX Transition or another intervening network will simply result in a "tug-of-war" between the two sets, which can have unpredictable and unstable results.

*(Rail-based override networks include Single-Track Rail (STR) in both Maxis Rail and RealRailway (RRW) forms, plus the L1 and L2 Draggable Elevated RealRailway Viaducts.)

## Bridges

Select SAM sets include bridge support. To access the SAM's bridge options, one should simply drag the Street network across the body of water (or deep canyon) wishes to cross, at which point the SAM bridges will show up among the Street options.

## Tunnels

The base Street network **does NOT support tunnels**, and accordingly, neither do any of the SAM's Street-based override networks. While certain slope settings may permit a tunnel to appear, it will be completely non-functional, due to hardcoded limitations that prevent traffic from using it. There is no known solution to this limitation at present. The only possible workaround at present is to transition to another network that does support tunnels.

## Network Capabilities

See the [Network Widening Mod Technical Specs Section](../../tech-specs/street-addon-mod).

## Known Issues

* Attempting to intersect a SAM override network with another NAM override network that does not support SAM crossings may de-stabilize both overrides, causing them to alternate which override is broken with clickaround.
* Attempting to intersect two SAM types, or transition directly between them will cause override instability.  Use the FLEX Transitions or another intervening network (i.e. Road).
* Attempting to build multiple Draggable Wide-Radius Curves and/or intersections directly adjacent to one another may break SAM overrides, causing reversion to Street.

## Information on Support and Development Updates

For technical support and information on new features coming to the Street Addon Mod in future releases, please check out the official SAM - Street Addon Mod thread on the forum at [SimCity 4 Devotion](http://sc4devotion.com/forums/index.php?topic=1617.0).
