---
title : "RealHighway (RHW)"
description: "The RealHighway (RHW) system is a series of new highway networks added by the NAM, based on an unfinished transportation network (known internally as \"DirtRoad\") that Maxis left in the game."
lead: "The RealHighway (RHW) system is a series of new highway networks added by the NAM, based on an unfinished transportation network (known internally as \"DirtRoad\") that Maxis left in the game. It is a variable width, variable height system with extensive modular interchange construction capabilities."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/realhighway"
---
<!-- markdownlint-disable MD051 -->

{{< gallery col-xl="4" col-lg="4" col-md="2">}}
    images/rhw-teaser-1.jpg
    images/rhwteaser2.jpg
    images/rhwteaser3.jpg
    images/rhwteaser4.jpg
{{< /gallery >}}

## Overview

The RHW and its interchange system is a highly modular system designed for the construction of (mostly) realistically-scaled interchanges, hence the name RealHighway.
The game's default highway system and its interchanges are quite drastically under-scaled, in some cases by as much as 50%, when compared to the game's designers' intended dimensions (consider that Maxis' intended scale is 1 SC4 tile = 16 meters = 50 feet).
There are some key differences in terms of how the RHW system operates compared with the default Maxis highways:

<table class="table">
    <tr>
        <th>Multiple heights and widths</th>
        <th>Complex Interchanges</th>
        <th>Real world scaling</th>
    </tr>
    <tr>
        <td>RealHighway networks come in a wide variety of <a href="/docs/feature-guides/realhighway/#network-widths">shapes and sizes</a>, from 2-lane rural highways to 12-lane freeways. All networks in the system can be built at 3 to 5 <a href="/docs/feature-guides/realhighway/#network-heights">different height levels</a>, including a double-decker style.</td>
        <td>RealHighway allows for a high level of customization and creativity for those who want precise control over constructing interchanges. Recent NAM releases have included features making the RHW system more accessible by migrating toward "FLEX" pieces that can be used by multiple networks, and new <a href="/docs/feature-guides/realhighway/#QCX">QuickChange Interchanges</a> bring a more Maxis-like pre built interchanges.</td>
        <td>The scale of the RealHighway networks are based on current transportation design standards. Transitions and interchanges are larger, sometimes considerably, when compared to the compressed scale of Maxis Highways. Interfacing the RHW with Maxis Highways has very limited support.</td>
    </tr>
</table>

## Development History

The name "Rural Highway Project" dates back to the project's origins back in 2005, with the discovery of the only unfinished network stub left in the game.
Formerly known as the Additional Network Tool "ANT", this network is now sometimes referred to as the "DirtRoad" network under the hood.
While the project started out primarily for use in rural areas, by 2007 plans were begun to extend the "rural" features of the mod even further into a multi-purpose network designed for building realistically-scaled highways and interchanges in urban and suburban settings.
As the scope of the project changed, the name of the project has also shifted from "Rural Highway" to "RealHighway".
This name was chosen because it has historical precedence having been suggested by project founder qurlix back in 2006, it retains the same acronym of "RHW", and finally, it removes the "rural-only" stigma.

Multi-height elevated networks, introduced in NAM 31, had a dramatic impact on the variety of interchanges that could be created.
The QuickChange system added in NAM 32 simplifies the construction of some basic intersection types greatly, almost to the level of ease of Maxis pre-fabs, without sacrificing the flexibility of the RHW system.

Also beginning with NAM 31, the development team has been pushing the vast majority of new feature development away from standard "static" puzzle pieces toward FLEX items.
With the release of NAM 33, at least 90% of all ramp interfaces now exist in a FLEX form allowing for single pieces to function for many different RHW networks, vastly reducing the number of pieces to navigate in the process.
Height transitions have also been converted to a FLEX format, reducing the number of required pieces from 100 to 4, and width transitions and wide-radius curves are on the docket for future FLEX treatment.  

## Installation

A complete install of the RealHighway plugin is included by default in the NAM Installer.
It is found in the installer under _2 Additional Network Features → RealHighway_.
We recommend RealHighway is either installed in its entirety or not at all.
Removing any optional components in this section should only be done by advanced users who are manually compiling a NAM Controller to exclude certain RHW networks.

The RHW **requires a 4GB_Full NAM Controller, and as such, also requires the 4GB Patch**. It is the largest component in the NAM package by a wide margin, and requires a 64-bit operating system and at least 4GB RAM to utilize.

Euro textures for the RealHighways will be automatically installed if one selects one of the Euro road texture options.

## RealHighway Basics

The RealHighway's base network is the 2-lane RealHighway, called RHW-2.
However, through clever use of overrides, more than 36 additional networks are possible, all based off of RHW-2.

The nomenclature used for RealHighway networks distinguishes each network by the total number of lanes to facilitate two-way traffic with the network. For instance:
* RHW-2 contains two lanes, one in each direction.
* RHW-4 has four lanes, two in each direction. One individual tile of RHW-4 carries two lanes in one direction; however, full bidirectional traffic with RHW-4 requires two stretches of the network traveling in opposite directions, resulting in a total of four lanes.

Some of the wider RHW networks may have letters "S" or "C" added after the lane count designation (i.e. RHW-8S or RHW-6C).
* "**S**" stands for "separable", meaning that the lanes carrying travel in the opposite direction may be separated by any number of tiles.
* "**C**" stands for "combined", meaning the center tile of the "C" networks carries the contains separating the two directions of traffic, making the two directions inseparable.

It is possible to make *ad hoc* asymmetrical networks as well. For instance, one could create a 5-lane highway by using the RHW-4 (two lines) on one side, and an RHW-6S (three-lanes) on the other.
The C-type networks, while not separable, also support this sort of functionality, and a dedicated starter exists for an "RHW-7C", which uses parts of the RHW-8C (four lanes) and RHW-6C (three lanes) for construction.

The main exception to this naming scheme is the Modular Interchange System (MIS) Ramp override network, which is single lane RHW typically used for highway on and off ramps.

### Network Widths

The following networks are included as part of the RealHighway mod:

{{< table class="table table-striped table-bordered w-auto align-items-center" >}}
| Network | Full Name | Tile Width |
| --- | --- | --- |
| MIS Ramp | Modular Interchange System Ramp | 1 (One-Way) 2 (Two-Way) |
| RHW-2 | 2-lane RealHighway | 1 (Two-Way) |
| RHW-3 | 3-lane RealHighway | 1 (Two-Way) |
| RHW-4 | 4-lane RealHighway | 1 (One-Way) 2 (Two-Way) |
| RHW-6S | 6-lane Separable RealHighway | 1<sup>1</sup> (One-Way) 2<sup>1</sup> (Two-Way) |
| RHW-8S | 8-lane Separable RealHighway | 2 (One-Way) 4 (Two-Way) |
| RHW-10S | 10-lane Separable RealHighway | 2 (One-Way) 4 (Two-Way) |
| RHW-12S | 12-lane Separable RealHighway | 2<sup>1</sup> (One-Way) 4<sup>1</sup> (Two-Way) |
| RHW-6C | 6-lane Combined RealHighway | 3 (Two-Way) |
| RHW-8C | 8-lane Combined RealHighway | 3 (Two-Way) |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** The **RHW-6S** and **RHW-12S** networks have partial tile overhang. The network itself only occupies one tile, but the shoulder visually overlaps part of the adjacent tile.</span><br>

{{< gallery >}}
    images/base-and-override-networks/misramp.jpg
    images/base-and-override-networks/rhw2.jpg
    images/base-and-override-networks/rhw3.jpg
    images/base-and-override-networks/rhw4.jpg
    images/base-and-override-networks/rhw6s.jpg
    images/base-and-override-networks/rhw6c.jpg
    images/base-and-override-networks/rhw8s.jpg
    images/base-and-override-networks/rhw8c.jpg
    images/base-and-override-networks/rhw10s.jpg
    images/base-and-override-networks/rhw12s.jpg
{{< /gallery >}}

### Network Heights
There are multiple elevation levels for the RealHighway override networks. These heights are in increments of 7.5 meters and have a simple shorthand system of denoting each level:
* Level 0 (**L0**) networks are ground-level networks and have no elevation above the terrain
* Level 1 (**L1**) networks are at 7.5 meters
* Level 2 (**L2**) networks are at 15 meters
* Level 3 (**L3**) networks are at 22.5 meters
* Level 4 (**L4**) networks are at 30 meters

All RealHighway widths have **L0**, **L1**, and **L2** elevations at their disposal, each produced with a separate starter.
**MIS**, **RHW-4**, and **RHW-6S** also have the ability to reach **L3** and **L4** elevations.
Double-decker (DD) setups also exist, albeit only in a configuration with 4 total lanes called **DDRHW-4**. The upper deck of the DDRHW is at **L2**, while the lower deck is at **L1**.

{{< img-simple src="images/rhw-elevations.jpg" >}}

### Starter Pieces

The base draggable network can be found under the RHW-2 button.

{{< menu-icon icon="images/icons/rhw-network-button.jpg" caption="_RHW-2 Network Button_" >}}

The Starter Pieces can be found under the RHW Starters button.

{{< menu-icon icon="images/icons/rhw-starters-button.jpg" caption="_RHW Starters Button_" >}}

All of the RHW networks can be constructed by first placing a Starter Piece, then dragging the RHW-2 network through the starter, causing the dragged RHW-2 to convert to match the starter. This process is shown below.

{{< img-simple src="images/rhw4-starter-steps.jpg" >}}

Multi-tile override networks work similarly. Place a Starter Piece, and drag RHW-2 through each tile of the starter piece.

{{< img-simple src="images/rhw6c-starter-steps.jpg" >}}

Additionally, RHW Starter Pieces can be crossed by other RHW networks, allowing for maximally-stable highway-over-highway crossings.

{{< img-simple src="images/rhw-starter-overcrossing.jpg" >}}

### Zone Access Restrictions

The RealHighway family of networks is considered to be Highway-type by the game which limits its ability to provide direct access to zones and buildings, as one would expect from a highway.
This limitation is especially true of Residential zones, which cannot be built at all along RHW networks, and attempting to have any zone type use RealHighway network frontage for access is not recommended.
Instead, it's recommended to downgrade to a non-highway network, such as the Road, One-Way Road, or one of the [Network Widening Mod](/docs/feature-guides/network-widening-mod/) override networks if zone access is required.

## Constructing The RealHighway

### Diagonals and Base Curves

Single tile RHW networks (MIS, RHW-2, RHW-3, RHW-4, RHW-6S) can be simply be dragged diagonally as normal.
Multi tile RHW networks (RHW-8S, RHW-10S, RHW-12S, RHW-6C, and RHW-8C) must have each tile drawn diagonally over adjacent tiles. This is referred to as a "split-tile diagonal" - no diagonal pieces overlap on the same tiles.
This is in contrast to many Maxis networks that allow "shared-tile diagonals" (or "double diagonal") setups.
With the exception of L0 RHW-2, double diagonal setups are not supported.

{{< img-simple src="images/curves/rhw-multitile-diagonals.jpg" >}}

The default draggable curves for the RealHighway networks are not exactly the smoothest or most realistic.
The FLEX-based and draggable [Multi-Radius Curves (MRCs)](/docs/feature-guides/realhighway/#mrcs) and the Puzzle Piece-based [Wide-Radius Curves (WRCs)](/docs/feature-guides/realhighway/#wrcs) provide smoother curves with wider radii than the defaults.
[Fractional Angle RealHighways (FARHW)](/docs/feature-guides/realhighway/#fractional-angle-realhighways-farhw) are also available for even gentler curves. 

The default sharp 90-degree bends are only available with the RHW-2 and MIS Ramp networks (at all height levels), for the sake of realism.
The MIS Ramp's version also overrides one "buffer tile" on either side of the bend itself, to produce a smoother curve automatically.
90-degree curves for all other networks may be created by combining two 45-degree curves together.

### Multi-Radius Curves (MRCs) {#mrcs}

Both the FLEX MRCs and puzzle piece WRCs can be found under the RealHighway Curves button on the Highways menu.
{{< menu-icon icon="images/icons/rhw-curves-button.jpg" caption="_RHW Curves Button_">}}

The Multi-Radius Curves are a series of wider-radius curves that are constructed through either draggable means or with FLEX pieces.
There are five radii total included in the MRC system, R1, R2, R3, R4, and R5, as well as an S-Curve and a Basketweave setup.
The higher the number, the wider the radius.
As with all RHW FLEX items, the default network when plopping is RHW-2, but these will support overrides up to RHW-6S width.
Refer to the [RHW Compatibility Guide](/docs/tech-specs/realhighway/) for the full detail on what is supported.

{{< img-simple src="images/curves/rhw-mrc-radii.jpg" >}}

The Multi-Radius Curves do not support the creation of intersections or crossings at any point in the curve, and attempting to build one will destabilize the curve.
The [FLEXFly system](/docs/feature-guides/realhighway/#using-the-flexfly-flexible-flyover-system) does allow for an equivalent functionality, however.

#### R1 Curves

R1 45° curves, also known as "mini-curves", are constructed by draggable means, and can be easily constructed with a simple additional motion when building the default network curves.
Build the standard diagonal curve first, then drag in a straight, orthogonal motion back over the curve.
Afterward, a smoother curve will appear.

{{< carousel >}}
    images/curves/rhw-mrc-r1-1.jpg
    images/curves/rhw-mrc-r1-2.jpg
{{< /carousel >}}

Alternatively, instead of dragging the default curve, move your cursor one tile further away from the curve to automatically trigger the curve.

{{< carousel >}}
    images/curves/rhw-mrc-r1-3.jpg | Standard diagonal curve
    images/curves/rhw-mrc-r1-4.jpg | Move one tile further instead
    images/curves/rhw-mrc-r1-5.jpg
{{< /carousel >}}

When dragging R1 curves with RHW-6S, due to the overhang there may be a "bite" missing from the inside of some curve setups.
Use the RHW tool and click once in the area of the missing "bite" to fill it in.

{{< carousel >}}
    images/curves/rhw-mrc-r1-6.jpg | Standard diagonal curve
    images/curves/rhw-mrc-r1-7.jpg | Move one tile further instead
    images/curves/rhw-mrc-r1-8.jpg | A little "bite" is missing from the curve
    images/curves/rhw-mrc-r1-9.jpg | Click with RHW tool
    images/curves/rhw-mrc-r1-10.jpg
{{< /carousel >}}

#### R2 Curves

R2 45° curves may be constructed either via draggable means or FLEX pieces.
For the draggable R2 setup, drag the default R0 curve, and then build a 90° bend on the inside of the curve by dragging one tile away from the curve on the inside, then one tile back towards the curve.

{{< carousel >}}
    images/curves/rhw-mrc-r2-1.jpg | Regular diagonal
    images/curves/rhw-mrc-r2-2.jpg | Drag one tile right
    images/curves/rhw-mrc-r2-3.jpg | Drag one tile up
    images/curves/rhw-mrc-r2-4.jpg
{{< /carousel >}}

To build FLEX curves, select the desired radius and place it in the city.
Remember, FLEX pieces all default to the base L0 RHW-2 network, but dragging an override network into a FLEX MRC piece will cause it to convert to the dragged network.
The overridden network can be dragged out of either side of the FLEX curve.

{{< carousel >}}
    images/curves/rhw-mrc-flex-1.jpg
    images/curves/rhw-mrc-flex-2.jpg | Place a starter piece
    images/curves/rhw-mrc-flex-3.jpg | Drag into the curve to override
    images/curves/rhw-mrc-flex-4.jpg
    images/curves/rhw-mrc-flex-5.jpg | Network is draggable from both ends
{{< /carousel >}}


Note also that the orthogonal ends of R2 curves can overlap by one tile, allowing for one to create a smooth composite curve, which can be very useful in building aesthetically-pleasing interchange ramps.
Other radius curves do not support this feature.

{{< img-simple src="images/curves/rhw-mrc-r2-overlap.jpg" >}}

#### R3 Curves

The R3 45° radii may be constructed either via draggable means or FLEX pieces.
For the draggable setup, begin with an R2 curve.
Drag three tiles across the diagonal, parallel to the orthogonal stretch.
You may drag in either direction (in reference to the screenshot below, left-to-right or right-to-left).

{{< carousel >}}
    images/curves/rhw-mrc-r3-1.jpg | Begin with an R2 curve
    images/curves/rhw-mrc-r3-2.jpg | Drag parallel to the ortho stretch
    images/curves/rhw-mrc-r3-3.jpg
{{< /carousel >}}

The R3 FLEX pieces are constructed the same way as the R2 FLEX piece.

#### R4, R5 Curves

The R4 and R5 radii only exist as FLEX pieces, and are constructed the same way as the R2 FLEX piece.

### Wide-Radius Curves (WRCs) {#wrcs}

In addition to the MRCs, a series of puzzle piece-based Wide-Radius Curves (WRCs) also exist, which at least partially cover the gaps for ground-level RealHighway networks where FLEX pieces do not exist.
S-Curves exist for all networks, 45° curves exist for all but the RHW-6C and 8C, and 90° curves (in two radii, small and large) exist for the RHW-2 and MIS Ramps.

The Wide-Radius Curve puzzle pieces do **NOT** have starters on their ends, unlike many other older puzzle-based RealHighway items, and being puzzle-based, do not support overrides.
As such, they generally must be built on top of an existing stretch of a RealHighway network.
The network must already exist up to the point at which the curve piece begins.
With S-Curves/Lane Shifts, the presence of base network stubs may allow one to simply place starters oneself on either end.

{{< img-simple src="images/curves/rhw-wrc-use-1.jpg" >}}

The S-Curves for the RHW-6C and RHW-8C are built in a modular fashion as well, to allow support for the asymmetrical "RHW-7C" setup.
Build the full curve one half at a time.

{{< img-simple src="images/curves/rhw6c-s-curve.jpg" >}}

It is possible to also build larger composite 90° turns with the single-tile networks, using the RHW Filler Pieces, but this functionality does not exist for the RHW-8S, 10S, 6C, or 8C.

### Intersections and Crossings

The RealHighway system has two ways of connecting and crossing other networks: **At-Grade** and **Grade-Separated**. The smaller RealHighway networks, including the RHW-2 (L0-L2), RHW-3 (L0 only), MIS (L0-L2), and RHW-4 (L0-L2), have the ability to intersect and cross other networks at the same height level. To build these crossings, simply drag the desired RealHighway network through or up to the crossing network to build the type of crossing you want, just as one would with any other draggable network in the game.

{{< img-simple src="images/rhw-atgrade-int.jpg" >}}

For grade-separated crossings, where networks at different height levels--for instance, an L1 RHW-4 and the game's default Elevated Rail network (which is at L2)--follow the same exact process. All RealHighway networks at all height levels support grade-separated crossings.

{{< img-simple src="images/rhw-elcrossing.jpg" >}}

For additional information about what network crossings are supported with the other components of the Network Addon Mod, refer to the [RHW Compatibility Guide](/docs/tech-specs/realhighway/).

### QuickChange Interchanges {#QCX}

The release of NAM 45, for the first time, brought support of for full ploppable interchanges, known as QuickChange Xpress (QCX).
Like Maxis interchanges, these are able to be built with a single click.
A somewhat limited variety of these interchanges exist, mainly focusing on highway entrance and exit ramps for road-based networks.
At present, only Diamond Interchanges involving the Road, Avenue, and 6-lane Avenue (AVE-6, from the Network Widening Mod) networks exist.
Each of these interchanges has appropriate turn lanes already applied on the surface networks and the on/offramps.
Four different RHW width configurations are supported (RHW-6S/RHW-4 Adjacent, RHW-6S/RHW-4 With Median, RHW-8C/6C, and RHW-10S/8S), and the option to have the RHW go over or under the surface street (in an L0/L1 configuration).

The QCX setups are located near the end of the TAB Loop under the RHW QuickChange button on the Highways Menu.
Tab through this loop to change the surface network width (Road or Avenue) and whether the RHW is elevated or the surface network is elevated.
Rotate each piece to cycle through the different RHW widths/configurations.

To use a QCX, plop the interchange in its desired location/rotation, and connect it up with the surrounding networks. It's really that easy!

{{< carousel >}}
    images/quickchange/rhw-qcx-1.jpg | Plop the QCX
    images/quickchange/rhw-qcx-2.jpg | Drag out the Road or Avenue networks
    images/quickchange/rhw-qcx-3.jpg | Drag out the RHW networks
    images/quickchange/rhw-qcx-4.jpg
{{< /carousel >}}

It is also possible to plop a QCX directly over an existing crossing.

{{< carousel >}}
    images/quickchange/rhw-qcx-6.jpg
    images/quickchange/rhw-qcx-7.jpg
{{< /carousel >}}

### Ramp Interface Basics

At the core of the RealHighway's Modular Interchange System are the **Ramp Interfaces**, which allow exit and entrance ramps to branch from or merge into the through lanes, or "mainline", of a stretch of highway.

{{< img-simple src="images/ramps/ramp-interface-anatomy.jpg" >}}

Ramp Interfaces come in a wide variety of shapes and sizes, so to properly identify each ramp, there are two, sometimes three or even four parts to the name.
These indicate the mainline width, the branch angle and width, as well as whether any of the branch lanes were "exit only" or "acceleration" lanes - lanes added to or subtracted from the mainline.
Some more specialized ramp interfaces may append a fourth part, containing other information about the nature and location of the branch in relation to the mainline.

The mainline portion will always indicate the width of the "top" portion of the ramp interface, where the mainline is guaranteed to be at its widest.
In the case of FLEXRamps, since they are often shared by multiple networks which override a base version, the mainline network is usually excluded from the in-game description.

For the "type" designation, the number indicates the number of lanes included in the branch, while the letter indicates the branch angle and indicates whether the branch has any lanes that peel off (on exit) or join (on entrance) the mainline.
The letter/number types translate as follows:

<!-- Note, this is in HTML due to an issue with how specific tables are rendered -->
<div class="table-responsive">
    <table class="w-auto table-bordered">
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/TypeA1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeB1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeC1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeD1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeE1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeF1.png" /></td>
        </tr>
        <tr>
            <td>Type A1</td>
            <td>Type B1</td>
            <td>Type C1</td>
            <td>Type D1</td>
            <td>Type E1</td>
            <td>Type F1</td>
        </tr>
        <tr>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, with an orthogonal branch. No lanes peel off the mainline.</td>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, with a diagonal branch. No lanes peel off the mainline.</td>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, with a fractional angle (18.4°) branch. No lanes peel off the mainline.</td>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, with an orthogonal branch. The branch is formed from one lane of the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, with a diagonal branch. The branch is formed from one lane of the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A single-lane (MIS) branch off the mainline, splitting at a fractional angle (18.4°) from the mainline. The branch is formed from one lane of the mainline, and the mainline has one fewer lane at the bottom.</td>
        </tr>
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/TypeA2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeB2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeC2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeD2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeE2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeF2.png" /></td>
        </tr>
        <tr>
            <td>Type A2</td>
            <td>Type B2</td>
            <td>Type C2</td>
            <td>Type D2</td>
            <td>Type E2</td>
            <td>Type F2</td>
        </tr>
        <tr>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with an orthogonal branch. One of the two lanes on the branch is from the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with a diagonal branch. One of the two lanes on the branch is from the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with a fractional angle (18.4°) branch. One of the two lanes on the branch is from the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with an orthogonal branch. Both lanes on the branch are from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with a diagonal branch. Both lanes on the branch are from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A dual-lane (RHW-4) branch off the mainline, with a fractional angle (18.4°) branch. Both lanes on the branch are from the mainline, and the mainline has two fewer lanes at the bottom.</td>
        </tr>
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/TypeA3.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeB3.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeC3.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeD3.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeE3.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeF3.png" /></td>
        </tr>
        <tr>
            <td>Type A3</td>
            <td>Type B3<br><sup><i>Not available</i></sup></td>
            <td>Type C3</td>
            <td>Type D3</td>
            <td>Type E3<br><sup><i>Not available</i></sup></td>
            <td>Type F3<br><sup><i>Not available</i></sup></td>
        </tr>
        <tr>
            <td class="fs-6">A triple-lane (RHW-6S) branch off the mainline, with an orthogonal branch. Two of the three lanes on the branch is from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A a triple-lane (RHW-6S) branch off the mainline, with a diagonal branch. Two of the three lanes on the branch is from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A triple-lane (RHW-6S) branch off the mainline, with a fractional angle (18.4°) branch. Two of the three lanes on the branch is from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A triple-lane (RHW-6S) branch off the mainline, with an orthogonal branch. All three lanes on the branch are from the mainline, and the mainline has three fewer lanes at the bottom.</td>
            <td class="fs-6">A triple-lane (RHW-6S) branch off the mainline, with a diagonal branch. All three lanes on the branch are from the mainline, and the mainline has three fewer lanes at the bottom.</td>
            <td class="fs-6">A triple-lane (RHW-6S) branch off the mainline, with a fractional angle (18.4°) branch. All three lanes on the branch are from the mainline, and the mainline has three fewer lanes at the bottom.</td>
        </tr>
    </table>
</div>

Ramps may have an additional modifier on their name to further describe unique characteristics about the ramp:

<div class="table-responsive">
    <table class="w-auto table-bordered">
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/modifier-outside.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/modifier-inside.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/modifier-wide.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/modifier-wye.png" /></td>
            <td><img class="img-invert-dark" src="" /></td>
        </tr>
        <tr>
            <td>Outside</td>
            <td>Inside</td>
            <td>Wide</td>
            <td>Wye</td>
            <td>Shift</td>
        </tr>
        <tr>
            <td class="fs-6">The standard ramp where the branch is on the outside (right side in countries with right-hand traffic, left side in those with left-hand traffic).</td>
            <td class="fs-6">The ramp branch is on the inside (left exit/entrance in countries with right-hand traffic, right exit/entrance for those with left-hand traffic), rather than the expected outside.</td>
            <td class="fs-6">The ramp branch has a larger separation than the standard version of that type. Most commonly applied to A1 and A2 ramps.</td>
            <td class="fs-6">Both the branch and the mainline diverge from the path of the mainline at the top in a symmetrical fashion, forming a wishbone or Y-shape. Typically the mainline is the same width as the branch.</td>
            <td class="fs-6">The mainline undergoes curvature in the midst of the ramp. This occurs when the mainline shifts from an S-type network to a C-type network.</td>
        </tr>
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/modifier-dual.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/modifier-folded.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/modifier-diagonal.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeC2.png" /></td>
        </tr>
        <tr>
            <td>Dual</td>
            <td>Folded</td>
            <td>Diagonal</td>
            <td>FA</td>
        </tr>
        <tr>
            <td class="fs-6">There are two ramp branches on the ramp interface. This is most commonly seen with the bidirectional networks (RHW-2, RHW-3, and Double-Decker RHWs), or in conjunction with Shift.</td>
            <td class="fs-6">There are two ramp branches that curve off at 90-degree angles, in opposite directions. There is only one Folded ramp interface, the RHW-2 D1 Folded.</td>
            <td class="fs-6">The mainline is diagonal rather than orthogonal. The branch angles are handled the same as if the ramp were orthogonal (i.e. an orthogonal ramp branch off a diagonal ramp interface would still be an A or D-type ramp of some sort).</td>
            <td class="fs-6">The mainline is at a fractional angle rather than orthogonal. The branch angles are handled the same as if the ramp were orthogonal (i.e. an orthogonal ramp branch off an FA ramp interface would still be an A or D-type ramp of some sort).</td>
        </tr>
    </table>
</div>

### Building Ramp Interfaces

There are three possible ways to construct Ramp Interfaces:

1. **FLEXRamps** - These are ploppable, generally slope-tolerant, and conform to match the surrounding network via overrides. These can be found under the **FLEXRamps** button.
{{< menu-icon icon="images/icons/rhw-flexramps-button" caption="FLEXRamps" >}}

2. **Draggable Ramp Interfaces (DRI)** - These are pattern-based draggable items, built by dragging the RealHighway network tool according to a specific pattern. Like the FLEXRamps, these will conform to match the surrounding network via overrides.

3. **Puzzle Piece Ramp Interfeces** {{< deprecated >}} - These are conventional static puzzle pieces, many of which have starters attached to their ends. As these are static ploppables, they will not conform to the surrounding network, and one must select the specific puzzle piece for the desired network. This option is largely considered to be deprecated/outdated, with the exception of the few more specialized setups that have yet to receive FLEXRamp or DRI treatments. These can be found under the **Ramps** button.
{{< menu-icon icon="images/icons/rhw-old-ramps-button" caption="Puzzle Piece Ramp Interfaces" >}}

{{< alert context="warning" >}}
All types of ramps are not able to be constructed through all methods. Some may be possible to construct through all three methods, while some are only possible with one or two of the methods.
FLEXRamps and DRIs are the preferred method for most ramp interfaces, and are the only option for most ramps involving elevated RealHighway networks.
A few specialized types that have not been made into FLEXRamp or DRI setups still exist as puzzle pieces, however.
A full listing of capabilities can be found in the [RHW Compatibility Guide](/docs/tech-specs/realhighway)
{{< /alert >}}

In order to use a ramp interface to connect a RealHighway to one's surface network, first place the desired ramp interface.
Then, from the end of the branch, drag the RealHighway network tool out from it, just like using a starter piece.
The network will convert to match the ramp.
From there, continue dragging in the desired pattern, adding curves and transitions as necessary, and intersect the surface street with an At-Grade Crossing. (The Fractional Angle ramps, Types C and F, do not support dragging, and the appropriate Fractional Angle RealHighway (FARHW) puzzle pieces must be used instead.)

{{< img-simple src="images/rhw-ramp-to-road.jpg" >}}

In order to connect to another RealHighway, follow the same process, but instead of forming an At-Grade Crossing, connect the ramp into another Ramp Interface on the other RealHighway.

{{< img-simple src="images/rhw-ramp-to-ramp.jpg" >}}

#### Using FLEXRamps

FLEXRamps are ploppable FLEX on/offramp pieces, and are perhaps the easiest to navigate option to branch ramps off one's RealHighway system. The FLEXRamp pieces may be found under the FLEXRamps button on the Highways menu. To use the FLEXRamps, simply find the desired ramp design, and plop it down. Each FLEXRamp has a default network, but will convert to match if one drags another RHW override network through it, or plops the ramp over an existing stretch of an RHW override network. The process is shown below (the process of overriding the base setup of the Draggable Ramp Interfaces is identical):

{{< img-simple src="images/rhw-flexramp-override.jpg">}}

Due to the use of special network flags, FLEXRamps are relatively slope-tolerant, particularly compared to other ramp interface options.

Below is a list of the default networks for each FLEXRamp:

{{< table class="table table-striped table-bordered w-auto mt-0" >}}
| Ramp | Default Network |
| --- | --- |
| Type A1 | RHW-2 |
| Type B1 | RHW-2 |
| Type D1 | RHW-3 |
| Type E1 | RHW-3 |
| Type A2 | RHW-6S |
| Type B2 | RHW-6S |
| Type D2 | RHW-6S |
| Type E2 | RHW-6S |
| Type A3 | RHW-8S |
| Type D3 | RHW-8S |
| Type A1-Inside | MIS Ramp |
| Type B1-Inside | MIS Ramp |
| Type D1-Inside | RHW-4 |
| Type E1-Inside | RHW-4 |
{{< /table >}}

With the wider RHW networks (provided they are supported by the particular FLEXRamp type--see the piece description in game), for most situations, simply align the ramp interface with the shoulder tile for standard ramps, and with the median tile for the inside ramps. If trying to build an RHW-8S Type D2 or E2 setup, however, one should instead align it with the median tile. (Note also that the elevated versions of the RHW-6S do not support Type A1 setups, and the elevated versions of the RHW-8S do not support Type A1 setups, due to the overhang on the RHW-6S network.)

#### Building Draggable Ramp Interfaces (DRIs) {#dri}

Draggable Ramp Interfaces, or DRIs, are ramp interfaces that are constructed as draggable patterns using the RealHighway network.
With the exception of a very few specialized setups, virtually every RHW ramp interface setup can be built through draggable means, and at present, there are some ramps that are only possible as DRIs.
Each ramp interface type supported by the system has a special drag pattern, which when constructed, will automatically convert into the appropriate on/offramp.

The process for overriding a FLEXRamp to have another RHW network as a mainline is identical to that of the FLEXRamps, as shown above.
Elevated ramp interfaces can be constructed by dragging the appropriate elevated RHW network (L1-L4) or double-decker RHW through the DRI, which, provided the particular setup is supported by that network, will elevate the ramp.
Many setups for narrower networks can be transformed into corresponding versions for wider networks by using the same method.
This conversion is most reliable if the overriding network is dragged into the top end of the mainline.

{{< img-simple src="images/Dri-table.png" alt="DRI Drag Patterns" clickable="yes" >}}

{{< alert context="info" >}}
The drag patterns listed above are applicable for exit ramps in a right-hand traffic (RHD) setup, or entrance ramps in a left-hand traffic (LHD) setup.
The corresponding entrance (or exit) is constructed by using the mirror image of these patterns.
{{< /alert >}}

{{< alert context="warning" >}}
Since the drag patterns involve the creation of intersections, the point where the actual mainline/branch split occurs will result in flat terrain, but the rest of a DRI is not limited in this regard.
DRIs are otherwise slope-tolerant.
{{< /alert >}}

#### Older Puzzle Piece Ramp Interfaces {{< deprecated >}}

A set of Puzzle Piece Ramp Interfaces also exists. While it was the original method for constructing ramp interfaces, it has largely become a deprecated method, aside from the few setups not covered otherwise, due to the demands it places on the menu system. The Puzzle Piece Ramp Interfaces exist under two buttons, the Puzzle Piece Ramp Interfaces button, and the Fractional Angle Ramp Interfaces button (which contains all the Type C and Type F ramps). One must find the precise puzzle piece needed for the particular setup on the desired network, and place it. As static puzzle pieces, these ramp interfaces cannot carry overrides.

Most (but not all) of the Puzzle Piece Ramp Interfaces have starters attached on their mainline approaches and branches, which does allow one to use them without having to place additional starters, but the presence of these starters also severely limits their slope tolerance. As such, they can generally only be used on flat terrain, or they will end up flattening parts of slopes. If the puzzle-based interface does not have a starter stub on its ends (as it the case with most of the Fractional Angle types), one must place it after constructing the base network, and a portion of the ramp.

##### QuickChange: A Shortcut to Quicker Interchanges

In addition to the ramp interfaces, a series FLEX-based QuickChange (QC) pieces which include a base ramp interface (Type A1 by default) with a height transition already attached, which provide quadrants for standard diamond and parclo (partial-cloverleaf) interchanges.
To build a QuickChange setup, simply the desired setup, and drag an override network through the mainline portion (or plop it over an existing override network).

The QuickChange pieces may be found under the QuickChange button on the Highways menu.

{{< menu-icon icon="images/icons/rhw-qc-button.jpg" caption="_QuickChange Button_" >}}

QuickChange still operates with the RealHighway's modular design philosophy in mind, and as such, is possible to swap in a different ramp interface type for the default Type A1 (such as a Type D1), simply by plopping the other ramp interface over the existing one.

{{< img-simple src="images/qc-ramp-change.jpg" >}}

##### Tutorial: Simple Diamond Interchange with QuickChange

QuickChange pieces can be used to quickly create a diamond interchange.
Start by drawing 2 adjacent L1 RHW-4 over a stretch of L0 Road.
Place four QuickChange L1 RHW Partial Diamond pieces encircling the Road.
If the RHW-4 destabilizes, place additional starters and/or click around the interchange with the RHW tool to fix any issues.
Finish the interchange by using the RealHighway network tool to between the height transitions, right over the Road.

{{< carousel >}}
    images/quickchange/rhw-qc-simple-diamond-1.jpg | Use L1 RHW (any type) over Road
    images/quickchange/rhw-qc-simple-diamond-2.jpg | Use the QC Partial Diamond L1 over L0
    images/quickchange/rhw-qc-simple-diamond-3.jpg | Repeat 4x
    images/quickchange/rhw-qc-simple-diamond-4.jpg | Finish with the RealHighway network tool
    images/quickchange/rhw-qc-simple-diamond-5.jpg
{{< /carousel >}}

{{< alert context="info" >}}
While this example uses RHW-4, the magic of the QuickChange pieces is that they can automatically override to accommodate **any** RHW network!
{{< /alert >}}

This process can easily be adapted to other RHW networks, other surface street options (such as Avenues or Network Widening Mod networks), and to variants where the RHW is at ground level, and the surface street crosses over using one of the [Draggable Elevated Road Viaducts](/docs/features/road-viaducts/).

### Height Transitions

There are two methods of constructing Height Transitions, both of which involve ploppable items: the FLEX-based FLEXHeight (FLEX-HT) system, and the conventional puzzle piece approach.
The FLEXHeight system is the more full-featured of the two, and vastly exceeds the capabilities of the older puzzle piece form, which is now considered depreciated and is not installed by default.

{{< menu-icon icon="images/icons/rhw-flexheight-button.jpg" caption="RHW FLEXHeight Button" >}}

{{< menu-icon icon="images/icons/rhw-old-height-button.jpg" caption=`RHW Height Transition Puzzle Pieces {{< deprecated >}}` >}}

{{< img-simple src="images/flexheight/rhw-flexheight-1.jpg" >}}

The FLEXHeight family consists of a variety of pieces:
1. 1-Level FLEXHeight Transition (includes diagonal variant)
1. 2-Level FLEXHeight Transition (includes diagonal variant)
1. L0 → L1 On-Slope Transition (includes diagonal variant)
1. L0 → L2 On-Slope Transition (includes diagonal variant)
1. 1-Level FLEXHeight 90° Curved Transition
1. 1-Level MIS 180° Loop Transition
1. L0 → L1 Multi Radius Curve (R3) Transition
1. L1 → L0 Multi Radius Curve (R3) Transition

There are two subtypes of Height Transitions: **Ramp-Style** and **On-Slope**.
The Ramp-Style transitions are designed for use on (relatively) level ground, and uses a multi-tile rise transition RealHighway from one height to another.
They primarily exist in orthogonal versions, with some limited diagonal and curved variations.
The On-Slope transitions are for use on an embankment, where the RealHighway transitions to a new height but remains at the same elevation.
These also exists primarily in orthogonal versions, with some limited diagonal variations.

{{< img-simple src="images/flexheight/rhw-flexheight-types.jpg" >}}

{{< alert context="warning" >}}
Even though most FLEXHeight transitions default to the base RHW-2 network, for technical reasons, the pieces **will not** produce an elevated RHW-2 network and it is required to use a starter or connect to an already elevated RHW-2. 
For other RHW networks, connecting to the L0 side of the transition will produce the appropriate elevated network on the opposite side.
{{< /alert >}}

To use the Ramp-Style transitions, first place the desired piece, either a one level or two level transition.
Place any RealHighway starter before the transition, and drag through with the 

{{< carousel >}}
    images/flexheight/rhw-flexheight-ramp-1.jpg | Ramp-Style height transition
    images/flexheight/rhw-flexheight-ramp-2.jpg
    images/flexheight/rhw-flexheight-ramp-3.jpg
    images/flexheight/rhw-flexheight-ramp-4.jpg
{{< /carousel >}}

On the orthogonal and diagonal transitions, is also possible to transition between two different elevations (i.e. L1 and L2 instead of L0 and L1), simply by plugging the appropriate overrides into the ends.

{{< img-simple src="images/flexheight/rhw-flexheight-l1-l2.jpg" >}}

Additionally, 3-Level and 4-Level Ramp-Style transitions can be built by overlapping the ends of multiple FLEXHeight 1-Level or 2-Level pieces. Note that this can only be done with networks that support the L3 and L4 elevation (the RHW-4, MIS Ramp, and RHW-6S).

{{< img-simple src="images/flexheight/rhw-flexheight-l0-l3.jpg" >}}

To use the On-Slope transition, you first need the terrain set to the proper height, with a one tile slope between the L0 and the elevated portion.
The NAM's [Hole Diggers and Raisers](/docs/feature-guides/hole-diggers-and-raisers/) are highly recommended to achieve the precise elevations required for the transitions.
Start by placing the transition piece with the L0 side of the transition flat on the elevated ground and the L1 or L2 side hovering in the air.
Finish by dragging RealHighway through the transition to override it to the desired network.

{{< carousel >}}
    images/flexheight/rhw-flexheight-onslope-1.jpg | On-Slope height transition
    images/flexheight/rhw-flexheight-onslope-2.jpg
    images/flexheight/rhw-flexheight-onslope-3.jpg
{{< /carousel >}}

To create height transitions for multi-tile networks, place multiple FLEXHeight transitions adjacent to one another, and drag each tile of the multi-tile network into the ends of the transition.

{{< img-simple src="images/flexheight/rhw-flexheight-multiwidth.jpg" >}}

### Width Transitions

The Width Transitions include the new FLEXWidth transition (FLEX-WT) system, as well as the older deprecated puzzle piece-based Width Transitions.
The FLEXWidth transitions work very similarly to the FLEXHeight transitions - place the transition and drag the appropriate networks into each end of the transition, which will convert the transition to match the appropriate networks.

{{< carousel >}}
    images/flexwidth/rhw-flexwidth-1.jpg
    images/flexwidth/rhw-flexwidth-2.jpg
    images/flexwidth/rhw-flexwidth-3.jpg
    images/flexwidth/rhw-flexwidth-4.jpg
    images/flexwidth/rhw-flexwidth-5.jpg
    images/flexwidth/rhw-flexwidth-6.jpg
{{< /carousel >}}

For the large "S-to-C" transitions, due to the design of the FLEX piece, asymmetrical setups are possible.
All networks involved in the transition must be at the same height level, and with the exception of the RHW-2-to-4 and RHW-3-to-4 transitions, which are L0/ground-level only, all height levels are available for FLEXWidth transitions.

{{< img-simple src="images/rhw-flexwt-asymmetry.jpg" >}}

##### Puzzle Piece Width Transitions {{< deprecated >}}

With the legacy puzzle piece-based Width Transitions, find the desired puzzle piece by using <kbd>Tab</kbd>/<kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle through the options, and place it.
Most Width Transitions already have starters on the ends; note, however, that this fact significantly limits the slope tolerance of these transitions.

{{< img-simple src="images/rhw-wt-use.jpg" >}}

### Network Transitions

Network transitions cover transitions to non-RealHighway networks including the Maxis and Network Widening Mod (NWM) networks.
These transitions are created by dragging the RealHighway and non-RealHighway network together to meet. If the setup is supported, the transition will override to match the involved networks.

{{< img-simple src="images/rhw-non-rhw-transition.jpg" >}}

A full list of supported transition setups can be found [here](/docs/tech-specs/realhighway), and a listing of items under the transition-related menu buttons can be found [here](/docs/feature-guides/realhighway/#rhw-transition-menu-items).

### Advanced Curves and FLEXFly

#### Using the FLEXFly (Flexible Flyover) System

The FLEXFly (Flexible Flyover) pieces are FLEX-based curved flyover ramps, which can be crossed under or over by almost every RealHighway network (**except for the L0 RHW-2**, for the purposes of stability). They can be found under the FLEXFly button on the Highways menu.

{{< menu-icon icon="images/icons/rhw-flexfly-button.jpg" caption="_RHW FLEXFly Button_" >}}

The FLEXFly pieces come in two angles--90° and 45°--and both single-lane/MIS Ramp-based or dual-lane/RHW-4-based versions are available, at height levels from L0 to L2. Their curve radii are equivalent to the R2 Multi-Radius Curves.

To use a FLEXFly piece, first place the desired setup. Each FLEXFly will allow draggable orthogonal crossings at any point in the curve, provided the crossing network is at different height level than the FLEXFly itself. To create these crossings, just drag the network under/over the FLEXFly. To continue the flyover ramp, just drag out from the ends of the FLEXFly, just as if it were a starter piece, or connect it to other RealHighway-related items (like height transitions) as desired.

{{< img-simple src="images/rhw-flexfly-use-1.jpg" >}}

Note that FLEXFly pieces can only support a single crossing network at any given point. In certain situations, such as the first one (with the green checkmark), it is actually possible to cross one FLEXFly over another FLEXFly, though this is strictly limited.  Attempting to build unsupported overlaps, or crossing two networks under one tile of FLEXFly will yield glitched or blank network tiles, as seen in the other three images (with the red circle-and-slash).  Additionally, FLEXFly pieces do not support the overlap/composite technique of the R2 Multi-Radius Curves.

{{< gallery col-xl="2" col-lg="2" clickable="true" >}}
    images/flexfly-overlap-yes.jpg
    images/flexfly-overlap-no1.jpg
    images/flexfly-overlap-no2.jpg
    images/flexfly-overlap-no3.jpg
{{< /gallery >}}

### Fractional Angle RealHighways (FARHW)

{{< alert context="warning" >}}
Note that the current iteration of FARHW is considered "legacy" in the current NAM development paradigm as it is currently only usable via puzzle pieces. This will change in future releases.
{{< /alert >}}

One can also further their "grid-busting" efforts with the RealHighway system with the use of the Fractional Angle RealHighway (FARHW) Puzzle Pieces.
The FARHW pieces allow one to build RealHighways at angles other than orthogonal and diagonal.
Currently, only 18.4°/71.6° (or "FA-3") is supported for RHW networks.

{{< img-simple src="images/rhw-farhw-sample.jpg" >}}

The FARHW pieces exist under three different buttons: the main FARHW pieces button, which contains the base fractional angle network pieces and curves to connect to orthogonal and diagonal networks, the FARHW Ramp Interfaces button, which contain ramp interfaces involving FARHW connections (including the Type C1, C2, F1, F2, and C3 ramps), and the FARHW Intersections and Transitions button, which contains intersection pieces with FARHW approaches as well as width transitions between different FARHW widths.

{{< menu-icon icon="images/icons/rhw-farhw-button.jpg" caption="_FARHW Button_" >}}

{{< menu-icon icon="images/icons/rhw-fa-ramps-button.jpg" caption="_FARHW Ramp Interfaces Button_" >}}

{{< menu-icon icon="images/icons/rhw-fa-int-button.jpg" caption="_FARHW Intersections and Transitions Button_" >}}

When building stretches of FARHW, make sure that the line colors (or shoulder widths, if dealing with Euro textures) line up properly.

{{< img-simple src="images/rhw-farhw-use.jpg" >}}

Note that with the exception of the FARHW Ramp Interfaces, none of the other FARHW pieces have starters on their ends, so one must be sure to place the orthogonal or diagonal ends of curves over an existing stretch of network.

### Cosmetic Pieces

The Cosmetic Pieces are a set of puzzle pieces that are designed for precise control of the look of RealHighways, particularly with lane markings, including auxiliary lane and HOV lane markings.
Due to the sheer number pieces (166 total at present), the Cosmetic Pieces are divided under four separate buttons, one for each network width (1-tile, 2-tile, and 3-tile), and one for cosmetic transitions.
All four buttons can be found under the Highways menu.

{{< menu-icon icon="images/icons/rhw-1tile-cp-button.jpg" caption="_RHW 1-Tile Cosmetic Pieces Button_" >}}

{{< menu-icon icon="images/icons/rhw-2tile-cp-button.jpg" caption="_RHW 2-Tile Cosmetic Pieces Button_" >}}

{{< menu-icon icon="images/icons/rhw-3tile-cp-button.jpg" caption="_RHW 3-Tile Cosmetic Pieces Button_" >}}

{{< menu-icon icon="images/icons/rhw-cp-transition-button.jpg" caption="_RHW Cosmetic Transitions Button_" >}}

{{< img-simple src="images/rhw-cosmetic-sample.jpg" >}}

To use the Cosmetic Pieces, find the desired piece and place it.
Please note that as puzzle pieces, the Cosmetic Pieces cannot accept or pass along overrides, albeit they can be placed over starter pieces in many situations.

### Bridges

The NAM includes bridges for various RealHighway networks.
Refer to the [RealHighway Bridge](/docs/feature-guides/bridges/#realhighway) section for a listing of all bridge styles and instructions on how to build them.

### Tunnels

The base RealHighway network **does NOT support tunnels**. While certain slope settings may permit a tunnel to appear, it will be completely non-functional, due to hardcoded limitations that prevent traffic from using it.
There is no known solution to this limitation at present.
The only current workaround is to transition to another network that does support tunnels, or to use the new FLEX/Draggable version of the [Flexible Underpasses and URoads](/docs/feature-guides/flexible-underpasses/).

### Neighbor Connections

The single-tile two-way RealHighway networks (RHW-2, RHW-3, and DDRHW-4) can form functioning Neighbor Connections (NCs) the standard way, just by dragging the network over the edge of the city.
Neighbor connections for all other RealHighway networks must use special pieces for them to function correctly, otherwise only freight trucks can use the connection.
This is a game limitation, and is the same reason the game does not support NCs for one way roads.

These two special neighbor connection pieces, the **RHW FLEX Neighbor Connector** and **RHW Invisible Loop Connector**, can be found under the RHW Neighbor Connector Pieces button.

{{< menu-icon icon="images/icons/rhw-nc-button.jpg" caption="_RHW Neighbor Connector Pieces Button_" >}}

Start by building a neighbor connection through the normal draggable means with the RHW network you wish to use.

{{< carousel >}}
    images/nc/rhw-nc-1.jpg
    images/nc/rhw-nc-2.jpg
{{< /carousel >}}

{{< alert context="info" >}}
No matter how you drag the RHW to the edge, the default yellow Neighbor Connection arrows will face the same direction for both directions of travel, unlike Avenue or Maxis Highway Neighbor Connections. These arrows are purely cosmetic. There is no way to change this, nor any need to do so.
{{< /alert >}}

Place the FLEX Neighbor Connector (FLEX-NC) piece over each network tile that will be part of the Neighbor Connection, over top of the the game's default yellow Neighbor Connection arrows.
If the two sides of your RHW are separated by empty tiles, place Invisible Loop Connectors in the median area between the two NCs.
Ensure the arrows are parallel to the edge of the city.
The connector pieces are invisible when placed, but will show a subtle 'ghost model' when queried.

For "Combined" ("C-type") networks, such as the RHW-6C and 8C, place the FLEX-NC piece over each tile. No Invisible Loop Connectors are required.

{{< carousel >}}
    images/nc/rhw-nc-3.png | Use the FLEX-NC piece
    images/nc/rhw-nc-4.png | Use the FLEX-NC piece
    images/nc/rhw-nc-5.png | Use the Invisible Loop Connector
    images/nc/rhw-nc-6.png | NC pieces shown when queried
    images/nc/rhw-nc-7.jpg | Use the FLEX-NC piece 3x
    images/nc/rhw-nc-8.jpg | Paths drape over the edge of the city
{{< /carousel >}}

{{< alert context="warning" >}}
**Do not** place the Invisible Loop Connectors over top of the RHW network.
This is not what they were intended for and will actually prevent the connection from working.
Due to how the pieces have to be set up, it is also possible you will see "spider cars" going down the edge of your city tile, as the paths are be draped over the edge of the city tile.
{{< /alert >}}

To complete the neighbor connection, repeat this process identically in the neighboring city tile.
Run the traffic simulation for some time in both cities for the game to recognize that there is a valid connection.

With the addition of the FLEX Neighbor Connectors in NAM 42, all elevated networks are now supported.

### Specialized Crossings and Interchanges

The RealHighway system includes the ability to recreate three oft-requested interchange designs: the [Single-Point Urban Interchange (SPUI)](/docs/feature-guides/realhighway/#single-point-urban-interchange-spui), the [Diverging Diamond Interchange (DDI)](/docs/feature-guides/realhighway/#diverging-diamond-interchange-ddi), and the [Volleyball Interchange](/docs/feature-guides/realhighway/#volleyball-interchange).
These are "advanced" features of the plugin, and it is recommended that you are already comfortable with the RealHighways, the NAM Elevated Viaducts and the either the FLEX Turn Lanes (FTL) or Turn Lane Extension Pieces (TuLEPs) before trying to build SPUIs or DDIs.

The SPUI and DDI setups can be found under the RHW/Avenue Interface button on the Roads menu, while the Volleyball pieces can be found under the old puzzle-based Ramps button on the Highways menu.

{{< menu-icon icon="images/icons/rhw-ave-button.jpg" caption="_RHW/Avenue Interface button Connector Pieces Button (contains SPUI and DDI items)_" >}}

{{< menu-icon icon="images/icons/rhw-old-ramps-button.jpg" caption="_RHW Puzzle Piece Ramps Button (contains Volleyball pieces)_" >}}

#### Single-Point Urban Interchange (SPUI) {#spui}

A [Single-Point Urban Interchange](https://wikipedia.org/wiki/Single-point_urban_interchange) combines the two intersections of a diamond interchange into one single intersection over or under the free-flowing road.

These interchanges may either be ground level with elevated RealHighway running over them, or may be elevated over ground level RealHighway.

To build a SPUI, start by placing the the FlexSPUI pieces.
Each piece is one half of the SPUI, and they may be placed adjacent to each other or separated by a number of tiles.
If they are separated, drag avenue between the two sections to connect the center.

{{< carousel >}}
    images/flexspui/rhw-flexspui-1.jpg
    images/flexspui/rhw-flexspui-2.jpg | Second half may be adjacent or separated.
    images/flexspui/rhw-flexspui-3.jpg | Use the Avenue tool to fill any separation (if applicable)
{{< /carousel >}}

To build an elevated SPUI, place four FLEX-HT transitions of your desired height (L1 or L2) next to each ramp.
Place RHW-4 starters adjacent to each height transition to override them, and use the RealHighway tool to drag from each starter to the interchange.
When the first ramp has been completed, you'll notice the SPUI interchange has changed height automatically.
Complete the other ramps in the same manner by dragging with the RealHighway Tool.
Place four FLEXRamp pieces at each end of the ramp -- this example uses Type A2 to drop one lane for the exit (RHW-6S before the exit, to RHW-4 under the interchange, back to RHW-6S after the entrance).
Follow by dragging RealHighway under the interchange.
The interchange may be completed by using the FLEX-HT Transition for Avenue Type 120 piece, available from the Roads menu.

{{< carousel >}}
    images/flexspui/rhw-flexspui-4.jpg | Place four FLEX-HT transitions
    images/flexspui/rhw-flexspui-5.jpg | Override FLEX-HT transitions to RHW-4, drag into interchange
    images/flexspui/rhw-flexspui-6.jpg | Interchange adjusts height automatically
    images/flexspui/rhw-flexspui-7.jpg | Finish connecting the ramps
    images/flexspui/rhw-flexspui-8.jpg | Place entrance/exit ramps
    images/flexspui/rhw-flexspui-9.jpg | Drag RHW underneath
    images/flexspui/rhw-flexspui-10.jpg | Finish with Avenue height transitions
    images/flexspui/rhw-flexspui-11.jpg | 🎉
{{< /carousel >}}

To build a ground level SPUI, follow the same process, except the orientation of the FLEX-HT transitions should be reversed.
The same FLEXRamp pieces may be used, and elevated RealHighway is dragged over the intersection.

#### Diverging Diamond Interchange (DDI) {#ddi}

The [Diverging Diamond Interchange](https://wikipedia.org/wiki/Diverging_diamond_interchange) (DDI), sometimes also called "Crossing Diamond", is an interchange that has traffic cross onto the "wrong" side of the road, which allows left turn movements flow more smoothly and traffic onto (and sometimes off) the freeway to go unsignalized, with only the through movements on the surface street requiring signalization.

The construction process of a DDI is equivalent to the SPUI, with the only difference being the network in the center of the intersection OneWay Road instead of Avenue.
You may follow the FlexSPUI tutorial above, or use the DDI tutorial below.
This DDI tutorial is for a ground level DDI with a RealHighway overpass, and uses some alternative construction techniques.

Begin by placing two DDI pieces, and connect the center in both directions with OneWay Road.
Starting two tiles from the OWR, use the [Hole Diggers and Raisers](/docs/feature-guides/hole-diggers-and-raisers/) to elevate the terrain.
Use the Road tool to create a small area of elevated terrain, and repeat for the other side.
Place four FLEXOnSlope transition pieces on the edge of the slope.
Then, place four starter pieces to override the OnSlope transitions.
For maximum stability, place them in the inside gap between the OWR and slope, though they do not *necessarily* need to be placed in this location.
Continue by dragging RealHighway over the OnSlope transitions, elevated starters, and OWR.
If you are using a slope mod, be sure to drag far enough to reach flat ground again.

{{< carousel >}}
    images/flexddi/rhw-ddi-1.jpg | Place DDI pieces and connect with OWR
    images/flexddi/rhw-ddi-2.jpg | Raise terrain
    images/flexddi/rhw-ddi-3.jpg | Create a small plateau
    images/flexddi/rhw-ddi-4.jpg | Repeat on the other side
    images/flexddi/rhw-ddi-5.jpg | Place FLEXOnSlope transitions
    images/flexddi/rhw-ddi-6.jpg | Place elevated starter pieces
    images/flexddi/rhw-ddi-7.jpg | Drag RealHighway
{{< /carousel >}}

{{< alert context="success" >}}
At this point, you may finish this interchange any way you want -- the steps below describe only one of many possibilities.
{{< /alert >}}

Place one FLEXWidth transitions on each end of the DDI.
Ensure the correct FLEXWidth transitions are used, with the **lane drop** versions on entrances and the **lane add** versions on exits.
In the gap between the DDI and starter, place a starter piece to override the starter to transition between RHW-4 and MIS.
Use the RealHighway with a [DRI pattern](/docs/feature-guides/realhighway/#dri) to create an A1 Outside Wide ramp.
Repeat this four times to complete the interchange

{{< carousel >}}
    images/flexddi/rhw-ddi-8.jpg | Place four FLEXWidth transitions
    images/flexddi/rhw-ddi-9.jpg | Place four starters to override the width transitions
    images/flexddi/rhw-ddi-10.gif | Use a DRI to create the ramps.
    images/flexddi/rhw-ddi-11.jpg | 🎉
{{< /carousel >}}

#### Volleyball Interchange

The Volleyball Interchange, also commonly known as a Three-Level Diamond or Split-Level Diamond, is a three-level interchange, in which all turning motions are handled by at-grade intersections on a separate height level from through traffic.

{{< img-simple src="images/volleyball/rhw-volleyball.jpg" caption="Volleyball interchange" >}}

The old Puzzle Piece Ramp Interfaces button in the Highways menu contains 5 variations of the Volleyball Interchange intersections, two of which include traffic signals.
To use them, place the intersections, then place starter pieces between each intersection to connect them.

{{< gallery  col-xl="5" col-lg="3" col-md="3">}}
    images/volleyball/rhw-volleyball-a1.jpg
    images/volleyball/rhw-volleyball-a2.jpg
    images/volleyball/rhw-volleyball-a2a.jpg
    images/volleyball/rhw-volleyball-a2b.jpg
    images/volleyball/rhw-volleyball-a2c.jpg
{{< /gallery >}}

#### Three-Level Crossings {#tlc}

In certain situations, using special Three-Level Crossing helper pieces (located under the RHW 3-Level Crossings button), it is possible to have three different RHW elevations cross one another on a single tile, which can be useful in constructing more complex interchanges, such as compact T-Interchanges and Stack Interchanges. To use the Three-Level Crossings, connect two different height levels of diagonal network, and the desired width of mainline at a third height level. It is recommended to use the 2-Tile version for the RHW-4 and RHW-6S, the 3-Tile version for the RHW-6C and RHW-8C, and the 4-Tile version for the RHW-8S and RHW-10S.

Note that any FLEXFly or curve pieces must be _at least 1 tile away_ from a Three-Level Crossing FLEX Piece, as at present, the adjacency stability does not exist, nor does FLEXFly-over-FLEXFly functionality.

{{< carousel >}}
images/tlc/rhw-tlc-1.jpg
images/tlc/rhw-tlc-2.jpg
images/tlc/rhw-tlc-3.jpg
images/tlc/rhw-tlc-4.jpg
images/tlc/rhw-tlc-5.jpg
images/tlc/rhw-tlc-6.jpg
images/tlc/rhw-tlc-7.jpg
images/tlc/rhw-tlc-8.jpg
{{< /carousel >}}

The "Stackasaurus Rex" Interchange, built by NAM Team developer Lucario Boricua, is an example of what is possible with the Three-Level Crossings.

{{< img-simple src="images/lucarioboricua-stackasaurus-rex.jpg" >}}

#### RHW FLEX Turn Lanes (FTLs) {#ftl}

The RHW has its own set of FLEX Turn Lane (FTL) options available. Supported types include the RHW-2 (L0 only), RHW-4 Rural (L0 only), and MIS Ramps (L0 and L1).
Support for [SITAP-style signalized intersections](/docs/feature-guides/turning-lanes/#sitap) is also available in at least some instances.

{{< alert context="info">}}
The support for RHW fLEX Turn Lanes is fairly limited.
Consult the [compatibility tables](/docs/tech-specs/realhighway/#flex-turn-lane-intersection-support) for detailed information on which intersections are supported.
{{< /alert >}}

##### RHW-2 FTLs

To build the RHW-2 FTLs, begin with the transition, and drag RHW-2 out from it.
The override of the turn lane will carry until you reach an intersection with another network.
To make a +-intersection, repeat this process on the other side.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw2+-1.jpg | Use FTL starter
    images/ftl/rhw-ftl-rhw2+-2.jpg | Drag RHW-2
    images/ftl/rhw-ftl-rhw2+-3.jpg | Use FTL starter on other side, then drag RHW-2
    images/ftl/rhw-ftl-rhw2+-4.jpg | 🎉
{{< /carousel >}}

It is possible to signalize intersections with Roads and other RHW-2s, via two different methods.
The first involves transitioning to Road immediately before the intersection.
Use the bulldozer or [Network Eraser](/docs/feature-guides/network-eraser/) to remove one tile at the center of the intersection.
Use the Road tool to draw road in both directions across the intersection.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw2+-5.jpg | Remove center tile
    images/ftl/rhw-ftl-rhw2+-6.jpg | Draw road
    images/ftl/rhw-ftl-rhw2+-7.jpg | Draw road
    images/ftl/rhw-ftl-rhw2+-8.jpg | 🎉
{{< /carousel >}}

The second method involves using one of the RHW FLEX SITAP intersections in the back half of the RHW FLEX Turn Lanes Tab Loop.
Start with the unsignalized intersection, locate the appropriate piece for the intersection, and place it.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw2+-7a.jpg | Use the signalized intersection piece
    images/ftl/rhw-ftl-rhw2+-8.jpg | 🎉
{{< /carousel >}}

In the case of T-intersections, in which the RHW-2 is the thru network, use the T-Median transition on the opposite side.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw2t-1.jpg | Use FTL starter
    images/ftl/rhw-ftl-rhw2t-2.jpg | Use FTL median starter
    images/ftl/rhw-ftl-rhw2t-3.jpg | 🎉
{{< /carousel >}}

To add a traffic signal, locate the appropriate piece for the intersection from the back half of the RHW FLEX Turn Lanes Tab Loop, and place it.

{{< img-simple src="images/ftl/rhw-ftl-rhw2t-4.jpg" >}}

To add turn lanes onto the incoming road, remove a small length of the incoming road and replace with the FTL starter.
Drag RealHighway through the intersection, and finish with the appropriate Signalized T-intersection piece.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw2t-5.jpg | Use FTL starter
    images/ftl/rhw-ftl-rhw2t-6.jpg | Drag RHW up to intersection
    images/ftl/rhw-ftl-rhw2t-7.jpg | Drag RHW across intersection
    images/ftl/rhw-ftl-rhw2t-8.jpg | Place signalized intersection piece
    images/ftl/rhw-ftl-rhw2t-9.jpg | 🎉
{{< /carousel >}}

##### RHW-4 FTLs

{{< alert context="warning">}}
The Rural RHW-4 FTLs are presently the least-developed of the set, and may have instabilities, particularly involving more exotic T-intersections.
RHW-4 FTLs are supported when the RHW-4 is adjacent or separated by a single tile.
{{< /alert >}}

To build rural-style RHW-4 FTLs, start with the same transition as the RHW-2 FTLs, but use the RHW-4 starter to override it.
Drag RealHighway through the intersection.
Repeat this process from the other direction to complete the unsignalized intersection

{{< carousel >}}
    images/ftl/rhw-ftl-rhw4-1.jpg | Use the FTL starter, with an adjacent RHW-4 starter
    images/ftl/rhw-ftl-rhw4-2.jpg | Drag RealHighway
    images/ftl/rhw-ftl-rhw4-3.jpg | Repeat from the other direction
{{< /carousel >}}

Signalized intersections are also possible, again using the appropriate signalized intersection piece.

{{< carousel >}}
    images/ftl/rhw-ftl-rhw4-4.jpg | Place two signalized intersection pieces
    images/ftl/rhw-ftl-rhw4-5.jpg | 🎉
{{< /carousel >}}

##### MIS FTLs

The MIS FTLs, known in their 2-lane form as "MIS-2", currently come in two flavors: one that favors right turns, and the other that favors left turns. Each produces a different end result at a Road +-intersection (with SITAP support).

{{< gallery col-xl="3" col-lg="3" col-md="3" >}}
images/ftl/rhw-ftl-mis-1.jpg
images/ftl/rhw-ftl-mis-2.jpg
images/ftl/rhw-ftl-mis-3.jpg
{{< /gallery >}}

It is also possible to hook an RHW-4 into an MIS FTL, in which case the RHW-4 seamlessly transitions into an MIS-2 FTL.

{{< gallery col-xl="2" col-lg="2" col-md="2" >}}
images/ftl/rhw-ftl-mis-4.jpg
images/ftl/rhw-ftl-mis-5.jpg
{{< /gallery >}}

Additionally, combination FLEX Height/Turn Lane transitions exist, allowing more flexibility when adding turn lanes to ramps in interchanges.

{{< img-simple src="images/ftl/rhw-ftl-mis-6.jpg" >}}

## List of Menu Items

#### RHW Network Menu Items

{{< details "Base Network" >}}

{{< menu-icon icon="images/icons/rhw-network-button.jpg" caption="_RHW-2 Network Button (located under the Highways Menu)_" >}}

This button activates the base draggable RealHighway network tool, which defaults to the RHW-2 network. The use of Starter and various FLEX pieces can initiate overrides, transforming the RHW-2 into other networks.

{{< /details >}}

{{< details "RHW Starters" >}}

{{< menu-icon icon="images/icons/rhw-starters-button.jpg" caption="_Starter Pieces (located under the Highways Menu)_" >}}

The Starter Pieces allow one to widen and/or elevate their RealHighways, by dragging the base RealHighway network tool through them, causing them to convert to match.

1. L0 RHW-4 Starter
2. L0 MIS Starter
3. L0 RHW-3 Starter
4. L0 RHW-6S Starter
5. L0 RHW-6C Starter
6. L0 RHW-8S Starter
7. L0 RHW-8C Starter
8. L0 RHW-7C Starter
9. L0 RHW-10S Starter
10. L0 RHW-12S Starter
11. L1 RHW-2 Starter
12. L1 RHW-4 Starter
13. L1 MIS Starter
14. L1 RHW-3 Starter
15. L1 RHW-6S Starter
16. L1 RHW-6C Starter
17. L1 RHW-8S Starter
18. L1 RHW-8C Starter
19. L1 RHW-7C Starter
20. L1 RHW-10S Starter
21. L1 RHW-12S Starter
22. L2 RHW-2 Starter
23. L2 RHW-4 Starter
24. L2 MIS Starter
25. L2 RHW-3 Starter
26. L2 RHW-6S Starter
27. L2 RHW-6C Starter
28. L2 RHW-8S Starter
29. L2 RHW-8C Starter
30. L2 RHW-7C Starter
31. L2 RHW-10S Starter
32. L2 RHW-12S Starter
33. L3 RHW-4 Starter
34. L3 MIS Starter
35. L3 RHW-6S Starter
36. L4 RHW-4 Starter
37. L4 MIS Starter
38. L4 RHW-6S Starter
39. DDRHW-4 Starter
{{< /details >}}

{{< details "RHW Fillers" >}}

{{< menu-icon icon="images/icons/rhw-fillers-button.jpg" caption="_Filler Puzzle Pieces (located under the Highways Menu)_" >}}

The Filler Puzzle Pieces exist for ease of use in tight spaces, where overrides break down and the use of a starter is not feasible.
Note that the RHW-8S, 10S, 6C, and 8C do not have diagonal fillers.

1. L0 RHW-4 Filler Piece
2. L0 Diag RHW-4 Filler Pieces (A and B)
3. L0 WRHW-2 Filler Piece
4. L0 MIS Filler
5. L0 Diag MIS Filler Pieces (A and B)
6. L0 RHW-3 Filler
7. L0 Diag RHW-3 Filler Pieces (A and B)
8. L0 RHW-6S Filler
9. L0 Diag RHW-6S Filler Pieces (A and B)
10. L0 RHW-6C Filler
11. L0 RHW-8S Filler
12. L0 RHW-8C Filler
13. L0 RHW-7C Filler
14. L0 RHW-10S Filler
15. L1 RHW-2 Filler
16. L1 RHW-4 Filler
17. Diag L1 RHW-4 Filler Pieces (A and B)
18. L1 MIS Filler
19. Diag L1 MIS Filler Pieces (A and B)
20. L1 RHW-3 Filler
21. Diag L1 RHW-3 Filler Pieces (A and B)
22. L1 RHW-6S Filler
23. Diag L1 RHW-6S Filler Pieces (A and B)
24. L1 RHW-6C Filler
25. L1 RHW-8S Filler
26. L1 RHW-8C Filler
27. L1 RHW-7C Filler
28. L1 RHW-10S Filler
29. L2 RHW-2 Filler
30. L2 RHW-4 Filler
31. Diag L2 RHW-4 Filler Pieces (A and B)
32. L2 MIS Filler
33. Diag L2 MIS Filler Pieces (A and B)
34. L2 RHW-3 Filler
35. Diag L2 RHW-3 Filler Pieces (A and B)
36. L2 RHW-6S Filler
37. Diag L2 RHW-6S Filler Pieces (A and B)
38. L2 RHW-6C Filler
39. L2 RHW-8S Filler
40. L2 RHW-8C Filler
41. L2 RHW-7C Filler
42. L2 RHW-10S Filler
43. L3 RHW-4 Filler
44. Diag L3 RHW-4 Filler Pieces (A and B)
45. L3 MIS Filler
46. Diag L3 MIS Filler Pieces (A and B)
47. L3 RHW-6S Filler
48. Diag L3 RHW-6S Filler Pieces (A and B)
49. L4 RHW-4 Filler
50. Diag L4 RHW-4 Filler Pieces (A and B)
51. L4 MIS Filler
52. Diag L4 MIS Filler Pieces (A and B)
53. L4 RHW-6S Filler
54. Diag L4 RHW-6S Filler Pieces (A and B)
55. DDRHW-4 Filler
56. Diag DDRHW-4 Filler Pieces (A and B)

{{< /details >}}

#### RHW Ramp & Interchange Menu Items

{{< details "QuickChange" >}}

{{< menu-icon icon="images/icons/rhw-qc-button.jpg" caption="_QuickChange Pieces (located under the Highways Menu)_" >}}

The QuickChange Xpress button offers pre-constructed full and partial interchanges, in FLEX format.
For more details, see the [QuickChange portion of this document](/docs/feature-guides/realhighway/#quickchange-xpress-full-interchanges-in-a-click).

1. QuickChange L0 Dual Type 110 (Road)/L1 RHW
2. QuickChange L1 Dual Type 110 (Road)/L0 RHW
3. QuickChange L0 Dual Type 120 (Avenue)/L1 RHW
4. QuickChange L1 Dual Type 120 (Avenue)/L0 RHW
5. QuickChange L0 Dual Type 230 (AVE-6)/L1 RHW
6. QuickChange L1 Dual Type 230 (AVE-6)/L0 RHW
7. QuickChange L0/L1 Diamond
8. QuickChange L1/L0 Diamond
9. QuickChange L0/L1 Parclo-Inner
10. QuickChange L1/L0 Parclo-Inner

{{< /details >}}

{{< details "FLEXRamps" >}}

{{< menu-icon icon="images/icons/rhw-flexramps-button.jpg" caption="_FLEXRamps (located under the Highways Menu)_" >}}

The FLEXRamps offer an easy way to have on/offramps branch off one's RealHighways.
Being FLEX pieces, a single piece can work for multiple networks. For more details, see the [FLEXRamps portion of this document](/docs/feature-guides/realhighway/#flexramps).
To access diagonal versions (available for A1, B1, D1, and E1 ramps), simply rotate the piece with Home/End until the piece rotates appropriately.

1. Type A1 FLEXRamp
2. Type B1 FLEXRamp
3. Type D1 FLEXRamp
4. Type E1 FLEXRamp
5. Type A2 FLEXRamp
6. Type B2 FLEXRamp
7. Type D2 FLEXRamp
8. Type E2 FLEXRamp
9. Type A1-Diagonal FLEXRamp
10. Type B1-Diagonal FLEXRamp
11. Type A1-Inside FLEXRamp
12. Type B1-Inside FLEXRamp
13. Type D1-Inside FLEXRamp
14. Type E1-Inside FLEXRamp
15. Type D1-Inside Dual Shift FLEXRamp
16. Type A3 FLEXRamp
17. Type D3 FLEXRamp

{{< /details >}}

{{< details "Puzzle Piece Ramps" "deprecated" >}}

{{< menu-icon icon="images/icons/rhw-old-ramps-button.jpg" caption="_Puzzle Piece Ramp Interfaces and Specialized Crossings (located under the Highways Menu)_" >}}

These puzzle pieces allow you to connect your RHW system through grade-separated interchanges to your surface street (Road, Avenue, One-Way Road) system, or to connect with other RHWs.
Types A, B, D and E are located under this button, while Type C and F are located under the Fractional Angle RHW button.
The Volleyball Specialized Crossing Pieces are also located here, in the non-deprecated section at the beginning of the TAB Ring.
Note that aside from a few specialized setups, the pieces under this button are largely deprecated, and the use of FLEXRamps or DRIs will offer better functionality.

1. RHW-3 Type A1/Type B1 Dual
2. RHW-6C Type D1 Dual Shift
3. RHW-8S Type D1 Dual Shift
4. RHW-6C Type D1 Dual Inside Shift
5. Diagonal RHW-6C Type A1
6. RHW-10S Type D2
7. RHW-10S Type E2
8. Type 4-A1 Volleyball Intersection
9. Type 4-D1 Volleyball Intersection
10. Type 4-A2A Volleyball SCP
11. Type 4-A2B Volleyball SCP
12. Type 4-A2C Volleyball SCP
13. RHW-4 Type A1 {{< deprecated >}}
14. RHW-4 Type A1 Diagonal {{< deprecated >}}
15. RHW-4 Type B1 {{< deprecated >}}
16. RHW-4 Type B1 Diagonal {{< deprecated >}}
17. RHW-4 Type A1 Inside {{< deprecated >}}
18. RHW-4 Type A1 Wide {{< deprecated >}}
19. RHW-4 Type D1 {{< deprecated >}}
20. RHW-4 Type E1 {{< deprecated >}}
21. RHW-4 Type E1 Wye {{< deprecated >}}
22. ERHW-4 Type A1 {{< deprecated >}}
23. ERHW-4 Type A1 Inside {{< deprecated >}}
24. RHW-3 Type A1 {{< deprecated >}}
25. RHW-3 Type B1 {{< deprecated >}}
26. RHW-2 Type A1 {{< deprecated >}}
27. RHW-2 Type A1 Dual {{< deprecated >}}
28. RHW-2 Type B1 {{< deprecated >}}
29. RHW-2 Type B1 Dual {{< deprecated >}}
30. RHW-2 Type D1 {{< deprecated >}}
31. RHW-2 Type D1 Wye {{< deprecated >}}
32. RHW-2 Type D1 Folded {{< deprecated >}}
33. RHW-2 Type E1 {{< deprecated >}}
34. RHW-2 Type E1 Wye {{< deprecated >}}
35. ERHW-2 Type A1 {{< deprecated >}}
36. RHW-6S Type A1 {{< deprecated >}}
37. RHW-6S Type B1 {{< deprecated >}}
38. RHW-6S Type A1 Wide {{< deprecated >}}
39. RHW-6S Type D1 {{< deprecated >}}
40. RHW-6S Type E1 {{< deprecated >}}
41. RHW-6S Type A2 {{< deprecated >}}
42. RHW-6S Type B2 {{< deprecated >}}
43. ERHW-6S Type D1 {{< deprecated >}}
44. RHW-6C Type A1 {{< deprecated >}}
45. RHW-6C Type B1 {{< deprecated >}}
46. RHW-8S Type A1 {{< deprecated >}}
47. RHW-8S Type B1 {{< deprecated >}}
48. RHW-8S Type D1 {{< deprecated >}}
49. RHW-8S Type E1 {{< deprecated >}}
50. RHW-8S Type D2 {{< deprecated >}}
51. RHW-8S Type E2 {{< deprecated >}}
52. RHW-8C Type A1 {{< deprecated >}}
53. RHW-8C Type B1 {{< deprecated >}}
54. RHW-8C Type D1 {{< deprecated >}}
55. RHW-8C Type E1 {{< deprecated >}}
56. RHW-10S Type A1 {{< deprecated >}}
57. RHW-10S Type B1 {{< deprecated >}}
58. RHW-10S Type D1 {{< deprecated >}}
59. RHW-10S Type E1 {{< deprecated >}}
60. DDRHW-4 Type A1 {{< deprecated >}}

{{< /details >}}

#### RHW Transition Menu Items

{{< details "FLEXHeight Transitions" >}}

{{< menu-icon icon="images/icons/rhw-flexheight-button.jpg" caption="_FLEXHeight Transitions (located under the Highways Menu)_" >}}

These FLEX pieces allow you to transition to a different elevation with your RealHighway networks.
The "1-Level" and "2-Level" setups can be used with any network, while the 180° MIS Curve will only work with the L0 and L1 MIS.

1. FlexHeight 1-Level Orthogonal
2. FlexHeight 1-Level Diagonal
3. FlexHeight 2-Level Orthogonal
4. FLEXOnSlope 1-Level Orthogonal
5. FLEXOnSlope 2-Level Orthogonal
6. FLEXOnSlope 1-Level Diagonal
7. FLEXOnSlope 2-Level Diagonal
8. FlexHeight 1-Level 90-Degree Transition
9. FlexHeight MIS 1-Level 180-Degree Transition
10. FlexHeight 1-Level R3 45-Degree Transition (Orthogonal Lower/Diagonal Higher)
11. FlexHeight 1-Level R3 45-Degree Transition (Orthogonal Higher/Diagonal Lower)

{{< /details >}}

{{< details "FLEXWidth Transitions" >}}

These FLEX pieces allow you to transition to a different width with your RealHighway networks (presently Orthogonal-only).

1. FLEXWidth Transition for Same Network Type (S-to-S or C-to-C)
2. FLEXWidth Transition for Same Network Type/Tile Drop
3. FLEXWidth Transition for Different Network Type (S-to-C) Asymmetrical
4. FLEXWidth Transition for Different Network Type (S-to-C) Symmetrical/Wishbone
5. FLEXWidth Transition for RHW-2/3-to-4 (and Dual RHW-4 to DDRHW-4) Asymmetrical
6. FLEXWidth Transition for RHW-2/3-to-4 (and Dual RHW-4 to DDRHW-4) Symmetrical/Wishbone

{{< /details >}}

{{< details "Height Transition Puzzle Pieces" "deprecated" >}}

{{< menu-icon icon="images/icons/rhw-old-height-button.jpg" caption="_Height Transition Puzzle Pieces (located under the Highways Menu)_" >}}

These older puzzle pieces allow for transitions between two different height levels of RHW networks.
They generally have starter drag end stubs.
Use of the FLEXHeight Transitions is generally recommended instead, as they support more networks.

1. RHW-2-to-RHW-4 Transition A
2. RHW-2-to-RHW-4 Transition B
3. RHW-4-to-RHW-6S Transition Style A
4. RHW-6-to-8 Transition Style A
5. RHW-8-to-10 Transition Style A
6. RHW-4-to-6C Transition
7. RHW-6C-to-6S Transition A
8. RHW-6C-to-6S Transition B
9. RHW-6C to RHW-8C transition
10. RHW-6C-to-8 Transition
11. MIS-to-RHW-4 Transition
12. RHW-2-to-3 Transition
13. RHW-2-to-WRHW-2 Transition
14. WRHW-2-to-RHW-3 Transition
15. RHW-3-to-RHW-4 Transition A1/A2
16. RHW-3-to-RHW-4 Transition B1/B2
17. RHW-4 Ground-to-Elevated ON
18. RHW-4 Ground-to-Elevated OFF
19. RHW-4 Ground-to-Elevated On-Slope ON
20. RHW-4 Ground-to-Elevated On-Slope OFF
21. RHW-6S Ground-to-Elevated ON/OFF
22. RHW-6S Ground-to-Elevated On-Slope ON/OFF
23. MIS Ground-to-Elevated L2 ON
24. MIS Ground-to-Elevated L2 OFF
25. MIS Ground-to-Elevated L2 On-Slope ON
26. MIS Ground-to-Elevated L2 On-Slope OFF
27. RHW-2 Ground-to-Elevated L2
28. RHW-2 Ground-to-Elevated L2 T On-Slope
29. RHW-2 Ground-to-Elevated L2 On-Slope
30. RHW-6C Ground-to-Elevated L2
31. RHW-6C Ground-to-Elevated L2 On-Slope
32. MIS Ground-to-Elevated L2 Curved ON
33. MIS Ground-to-Elevated L2 Curved OFF
34. MIS Ground-to-Elevated L2 Curved ON Starterless
35. MIS Ground-to-Elevated L2 Curved OFF Starterless
36. L2-ERHW-4 to L3-ERHW-4 transition Starterless
37. RHW-4 Ground-to-Mid-Elevated L3 Starterless
38. MIS L2-to-L3 Starterless
39. MIS Ground-to-Mid-Elevated L3 Starterless

{{< /details >}}

{{< details "Width Transition Puzzle Pieces" "deprecated" >}}

{{< menu-icon icon="images/icons/rhw-width-transition-button.jpg" caption="_Width Transition Puzzle Pieces (located under the Highways Menu)_" >}}

These puzzle pieces allow for transitions between two different widths of RHW networks.
They generally have starter drag end stubs.
The transition allowing the DDRHW-4 to connect to the L1 and L2 RHW-4 is located here as well (as it entails a change of tile width).

1. RHW-2-to-RHW-4 Transition A
2. RHW-2-to-RHW-4 Transition B
3. RHW-4-to-RHW-6S Transition Style A
4. RHW-6-to-8 Transition Style A
5. RHW-8-to-10 Transition Style A
6. RHW-4-to-6C Transition A
7. RHW-4-to-6C Transition B
8. RHW-6C-to-6S Transition A
9. RHW-6C-to-6S Transition B
10. RHW-8S to RHW-8C Symmetrical Transition
11. RHW-8S to RHW-8C Compact Transition
12. RHW-6C to RHW-8C transition
13. RHW-6C-to-8S Transition
14. RHW4-to-MIS Transition
15. RHW-2-to-3 Transition
16. RHW-2-to-WRHW-2 Transition
17. WRHW-2-to-RHW-3 Transition
18. RHW-3-to-RHW-4 Transition A1/A2
19. RHW-3-to-RHW-4 Transition B1/B2
20. L1 RHW-4-to-RHW-6S Transition Style A
21. L1 RHW-6S-to-8S Transition Style A
22. L1 RHW-8S-to-10S Transition Style A
23. L1 RHW-6C-to-8C Transition
24. L1 RHW4-to-MIS Transition
25. L2 RHW-4-to-RHW-6S Transition Style A
26. L2 RHW-6S-to-8S Transition Style A
27. L2 RHW-8S-to-10S Transition Style A
28. L2 RHW-6C-to-8C Transition
29. L2 RHW4-to-MIS Transition
30. DDRHW-4-to-Dual-RHW-4 (L1/L2) Connector

{{< /details >}}

#### RHW Curves & FLEXFly Menu Items

{{< details "FLEXFly" >}}

{{< menu-icon icon="images/icons/rhw-flexfly-button.jpg" caption="_FLEXFly Pieces (located under the Highways Menu)_" >}}

These FLEX pieces allow for construction of flyover ramps.

1. FLEXFly MIS L0 90-Degree (Type A1)
2. FLEXFly MIS L0 90-Degree (Type A2)
3. FLEXFly MIS L0 45-Degree (Type B1)
4. FLEXFly MIS L0 45-Degree (Type B2)
5. FLEXFly MIS L1 90-Degree (Type A1)
6. FLEXFly MIS L1 90-Degree (Type A2)
7. FLEXFly MIS L1 45-Degree (Type B1)
8. FLEXFly MIS L1 45-Degree (Type B2)
9. FLEXFly MIS L2 90-Degree (Type A1)
10. FLEXFly MIS L2 90-Degree (Type A2)
11. FLEXFly MIS L2 45-Degree (Type B1)
12. FLEXFly MIS L2 45-Degree (Type B2)
13. FLEXFly RHW-4 L0 90-Degree (Type A1)
14. FLEXFly RHW-4 L0 90-Degree (Type A2)
15. FLEXFly RHW-4 L0 45-Degree (Type B1)
16. FLEXFly RHW-4 L0 45-Degree (Type B2)
17. FLEXFly RHW-4 L1 90-Degree (Type A1)
18. FLEXFly RHW-4 L1 90-Degree (Type A2)
19. FLEXFly RHW-4 L1 45-Degree (Type B1)
20. FLEXFly RHW-4 L1 45-Degree (Type B2)
21. FLEXFly RHW-4 L2 90-Degree (Type A1)
22. FLEXFly RHW-4 L2 90-Degree (Type A2)
23. FLEXFly RHW-4 L2 45-Degree (Type B1)
24. FLEXFly RHW-4 L2 45-Degree (Type B2)

{{< /details >}}

{{< details "RHW Curves" >}}

{{< menu-icon icon="images/icons/rhw-curves-button.jpg" caption="_RHW Curve Pieces (located under the Highways Menu)_" >}}

These pieces allow you to build smoother curves.

1. FLEX-MRC R2 45
2. FLEX-MRC R2 90
3. FLEX-MRC R3 45
4. FLEX-MRC R4 45
5. FLEX-MRC R5 45
6. FLEX S-Curve
7. FLEX Basketweave
8. RHW-4 Double Curve
9. RHW-4 Outer Curve
10. RHW-4 Inner Curve
11. RHW-4 Lane Shift
12. RHW-4 Dual Lane Shift
13. MIS S-Curve 1
14. MIS 45-Curve 1
15. MIS 45-Curve 2
16. MIS 90-Curve
17. RHW-2 S-Curve
18. RHW-2 45-Curve
19. RHW-2 90-Curve (Large)
20. RHW-2 90-Curve (Small)
21. RHW-3 S-Curve 1
22. RHW-3 S-Curve 2
23. RHW-3 45-Curve 1
24. RHW-3 45-Curve 2
25. RHW-6S Single Lane Shift
26. RHW-6S Dual Lane Shift
27. RHW-6S Outer Curve
28. RHW-6S Inner Curve
29. RHW-8S Outer Curve
30. RHW-8S Inner Curve
31. RHW-6C S-Curve Half
32. RHW-8C S-Curve Half
33. RHW-10 Outer Curve
34. RHW-10 Inner Curve

{{< /details >}}

#### Fractional Angle RHW Menu Items

{{< details "FARHW Puzzle Pieces" "legacy" >}}

{{< menu-icon icon="images/icons/rhw-farhw-button.jpg" caption="_Fractional Angle RHW (FARHW) Pieces (located under the Highways Menu)_" >}}

These pieces allow one to build RHW networks at fractional angles (18.4°/71.6°) in puzzle piece form.

1. FARHW-2 Straight
2. FARHW-2 Short Curve
3. FARHW-2 Long Curve
4. FARHW-2 Diagonal to FARHW-2 Curve
5. FARHW-4
6. Dual FARHW-4
7. FARHW-4 Short Curve outer
8. FARHW-4 Short Curve inner
9. Dual FARHW-4 Short Curve
10. FARHW-4 to Diag Curve outer
11. FARHW-4 to Diag Curve inner
12. Dual FARHW-4 to Diag Curve
13. FARHW-6S Short Curve outer
14. FARHW-6S Short Curve inner
15. FARHW-6S
16. FARHW-6S to Diag Curve outer
17. FARHW-6S to Diag Curve inner
18. FARHW-6C Short Curve
19. FARHW-6C to Diagonal RHW-6C Curve
20. FARHW-6C Half Straight Piece
21. FARHW-8C Short Curve
22. FARHW-8C to Diagonal RHW-8C Curve
23. FARHW-8C Half Straight Piece
24. FAMIS-1
25. FAMIS-FAMIS 143deg Curve
26. FAMIS Short Curve outer
27. FAMIS Short Curve inner
28. FAMIS to Diag Curve inner
29. FAMIS to Diag Curve outer
30. FAMIS Long Curve small outer
31. FAMIS Long Curve small inner

{{< /details >}}

{{< details "FARHW Ramp Puzzle Pieces" "legacy" >}}

{{< menu-icon icon="images/icons/rhw-fa-ramps-button.jpg" caption="_Fractional Angle RHW (FARHW) Pieces (located under the Highways Menu)_" >}}

These pieces allow one to build the Type C and Type F ramp interfaces, in puzzle piece form.

1. RHW-2 Type C1
2. RHW-2 Type C1 Dual
3. RHW-4 Type C1
4. RHW-4 Type C1 Inside
5. RHW-4 Type C1 diagonal
6. RHW-4 Type F1
7. RHW-4 Type F1 diagonal
8. RHW-6S Type C1
9. RHW-6S Type C1 diagonal
10. RHW-6S Type C2
11. RHW-6S Type F1
12. RHW-6S Type F1 diagonal
13. RHW-6C Type C1
14. RHW-6S Type F2
15. RHW-8S Type C1
16. RHW-8S Type F1
17. RHW-8C Type F1
18. RHW-8S Type C2
19. RHW-8C Type C2
20. RHW-8S Type F2
21. RHW-10S Type F1
22. RHW-10S Type C2
23. RHW-10S Type F2
24. RHW-10S Type C3
25. MIS/FAMIS Ramp Type C1 - out
26. Avenue Type C1 RHW-MIS Exit/Entrance Ramp

{{< /details >}}

{{< details "FARHW Intersection Puzzle Pieces" "legacy" >}}

{{< menu-icon icon="images/icons/rhw-fa-int-button.jpg" caption="_Fractional Angle RHW (FARHW) Intersections and Transitions (located under the Highways Menu)_" >}}

These pieces allow one to build width transitions and intersections involving Fractional Angle RealHighways (FARHWs), in puzzle piece form.

1. FA MIS-to-RHW-4 Trans A
2. FA MIS-to-RHW-4 Trans B
3. Fractional Angle Diamond M4A Full (arranged in increasing width)
4. Fractional Angle Diamond 44A Full
5. Fractional Angle Diamond 44B Full
6. Fractional Angle Diamond 64B Full
7. Fractional Angle Diamond M4 TuLEPless Full (also arranged in increasing width)
8. Fractional Angle Diamond 44 TuLEPless Full
9. Fractional Angle Diamond 44A Halves
10. Fractional Angle Diamond M2A Full

{{< /details >}}

#### Cosmetic Piece Menu Items

These pieces allow you to manipulate the appearance of your RHW networks and transitions with fine control.

{{< details "1 Tile Cosmetic Pieces" >}}

{{< menu-icon icon="images/icons/rhw-1tile-cp-button.jpg" caption="_1-Tile Cosmetic Puzzle Pieces (located under the Highways Menu)_" >}}

Ploppable cosmetic pieces for 1 tile width networks.

1. RHW-2 CP Dash Orth
2. RHW-2 CP SolDash Dash Orth
3. RHW-2 CP Dash LRA Dash Orth
4. RHW-2 CP Dash Diag
5. RHW-2 CP SolDash Diag
6. RHW-2 CC Dash S-curve
7. RHW-2 CC Dash 45-curve
8. RHW-2 CC Dash 90-curve
9. RHW-2 CC Dash 18-curve
10. RHW-2 CC Dash 72-curve
11. RHW-2 CC Dash 27-curve
12. RHW-2 CC FARHW Dash
13. RHW-2 CCFARHW SolDash1
14. RHW-2 CC Curve SolDash2
15. RHW-3 CP RM LRA IN
16. RHW-3 CP RM TpA OUT 1
17. RHW-3 CP RM TpA OUT 2
18. RHW-3 CP BM1 UM
19. RHW-3 CP BM1 LRA IN
20. RHW-3 CP BM1 EA
21. RHW-3 CP BM1 EA + TrA
22. RHW-3 CP DS1 UM
23. RHW-3 CP DS1 LRA IN
24. RHW-3 CP BM1 EA in
25. RHW-3 CP BM1 EA+TrA in
26. RHW-3 CP BM1 SpA in
27. RHW-3 CP SM1 UM
28. RHW-3 CP SM1 EA in
29. RHW-3 CP SM1 EA+TrA in
30. RHW-3 CP SM1 SpA
31. RHW-3 x RHW-2 TuLEP intersection
32. RHW-3 x RHW-3 TuLEP intersection
33. RHW-3 x WRHW-2 TuLEP intersection
34. RHW-4 CP RM LRA OUT
35. RHW-4 CP RM LRA IN
36. RHW-4 CP RM TpA OUT
37. RHW-4 CP RM TpA IN
38. RHW-4 CP RM TrA
39. RHW-4 CP BM1 UM
40. RHW-4 CP BM1 LRA OUT
41. RHW-4 CP BM1 LRA IN
42. RHW-4 CP BM1 EA OUT
43. RHW-4 CP BM1 EA+TRA OUT
44. RHW-4 CP BM1 SpA OUT
45. RHW-4 CP DS1 UM
46. RHW-4 CP DS1 LRA IN
47. RHW-4 CP DS1 EA OUT
48. RHW-4 CP DS1 EA+TRA OUT
49. RHW-4 CP SD1 UM
50. RHW-4 CP SD1 LRA IN
51. RHW-4 CP Transition NEL
52. RHW-4 CP NEL Single UM
53. RHW-4 CP NEL LRA
54. RHW-4 CP NEL EA
55. RHW-4 CP NEL EA+TrA
56. RHW-4 CP ROP Type A1
57. RHW-4 CP ROP Type B1

{{< /details >}}

{{< details "2 Tile Cosmetic Pieces" >}}

{{< menu-icon icon="images/icons/rhw-2tile-cp-button.jpg" caption="_2-Tile Cosmetic Puzzle Pieces (located under the Highways Menu)_" >}}

Ploppable cosmetic pieces for two tile width networks.

1. RHW-6S CP UM LRA OUT
2. RHW-6S CP UM LRA IN
3. RHW-6S CP UM TpA OUT
4. RHW-6S CP UM TpA IN
5. RHW-6S CP UM TrA
6. RHW-6S CP BM1 UM
7. RHW-6S CP BM1 LRA OUT
8. RHW-6S CP BM1 EA OUT
9. RHW-6S CP BM1 EA + TrA OUT
10. RHW-6S CP BM1 Ea + TpA OUT
11. RHW-6S CP BM2 UM
12. RHW-6S CP BM2 LRA IN
13. RHW-6S CP BM2 EA IN
14. RHW-6S CP BM2 EA + TrA IN
15. RHW-6S CP DS1 UM
16. RHW-6S CP DS1 EA OUT
17. RHW-6S CP DS1 EA + TrA OUT
18. RHW-6S CP DS1 Ea + TpA OUT
19. RHW-6S CP DS2 UM
20. RHW-6S CP DS2 LRA IN
21. RHW-6S CP SD1 UM
22. RHW-6S CP SD1 LRA OUT
23. RHW-8S CP UM LRA OUT
24. RHW-8S CP UM LRA IN
25. RHW-8S CP UM TpA OUT
26. RHW-8S CP UM TrA
27. RHW-8S CP BM1 UM
28. RHW-8S CP BM1 LRA OUT
29. RHW-8S CP BM1 EA OUT
30. RHW-8S CP BM1 EA + TrA OUT
31. RHW-8S CP BM1 Ea + TpA OUT
32. RHW-8S CP BM2 UM
33. RHW-8S CP BM2 EA OUT
34. RHW-8S CP BM2 EA + TrA OUT
35. RHW-8S CP BM3 UM
36. RHW-8S CP BM3 LRA IN
37. RHW-8S CP DS1 UM
38. RHW-8S CP DS1 EA OUT
39. RHW-8S CP DS1 EA + TrA OUT
40. RHW-8S CP DS1 Ea + TpA OUT
41. RHW-8S CP DS2 UM
42. RHW-8S CP DS2 EA OUT
43. RHW-8S CP DS2 EA + TrA OUT
44. RHW-8S CP DS3 UM
45. RHW-8S CP DS3 LRA IN
46. RHW-8S CP SD1 UM
47. RHW-8S CP SD1 LRA OUT
48. RHW-10S CP UM LRA OUT
49. RHW-10S CP UM LRA IN
50. RHW-10S CP UM TpA OUT
51. RHW-10S CP UM TrA
52. RHW-10S CP BM1 UM
53. RHW-10S CP BM1 LRA OUT
54. RHW-10S CP BM1 EA OUT
55. RHW-10S CP BM1 EA + TrA OUT
56. RHW-10S CP BM1 Ea + TpA OUT
57. RHW-10S CP BM2 UM
58. RHW-10S CP BM2 EA OUT
59. RHW-10S CP BM2 EA + TrA OUT
60. RHW-10S CP BM3 UM
61. RHW-10S CP BM3 LRA IN
62. RHW-10S CP DS1 UM
63. RHW-10S CP DS1 EA OUT
64. RHW-10S CP DS1 EA + TrA OUT
65. RHW-10S CP DS1 Ea + TpA OUT
66. RHW-10S CP DS2 UM
67. RHW-10S CP DS2 EA OUT
68. RHW-10S CP DS2 EA + TrA OUT
69. RHW-10S CP DS3 UM
70. RHW-10S CP DS3 LRA IN
71. RHW-10S CP SD1 UM
72. RHW-10S CP SD1 LRA OUT

{{< /details >}}

{{< details "3 Tile Cosmetic Pieces" >}}

{{< menu-icon icon="images/icons/rhw-3tile-cp-button.jpg" caption="_3-Tile Cosmetic Puzzle Pieces (located under the Highways Menu)_" >}}

Ploppable cosmetic pieces for three tile width networks.

1. RHW-6C CP UM LRA OUT
2. RHW-6C CP UM LRA IN
3. RHW-6C CP UM TpA OUT
4. RHW-6C CP UM TrA
5. RHW-6C CP BM2 UM
6. RHW-6C CP BM2 LRA IN
7. RHW-6C CP BM2 EA IN 1
8. RHW-6C CP BM2 EA IN 2
9. RHW-6C CP SD2 UM
10. RHW-6C CP SD LRA IN
11. RHW-6C CP HOV UM
12. RHW-6C CP HOV M
13. RHW-8C CP UM LRA OUT
14. RHW-8C CP UM TpA OUT
15. RHW-8C CP UM TrA
16. RHW-8C CP BM1 UM
17. RHW-8C CP BM1 LRA OUT
18. RHW-8C CP BM1 EA OUT
19. RHW-8C CP BM1 EA+TrA OUT
20. RHW-8C CP BM1 EA+TpA OUT
21. RHW-8C CP DS1 UM
22. RHW-8C CP DS1 EA OUT
23. RHW-8C CP DS1 EA+TrA OUT
24. RHW-8C CP DS1 EA+TpA OUT
25. RHW-8C CP DS1 UM
26. RHW-8C CP DS1 EA OUT

{{< /details >}}

{{< details "Cosmetic Transition Pieces" >}}

{{< menu-icon icon="images/icons/rhw-cp-transition-button.jpg" caption="_Cosmetic Transition Puzzle Pieces (located under the Highways Menu)_" >}}

Ploppable cosmetic pieces to transition between network widths.

1. RHW-4-to-RHW-6S Transition BM1
2. RHW-4-to-RHW-6S Transition BM2
3. RHW-4-to-RHW-6S Transition LRA
4. RHW-6S-to-RHW-8S Transition BM1
5. RHW-6S-to-RHW-8S Transition BM2
6. RHW-6S-to-RHW-8S Transition LRA
7. RHW-8S-to-RHW-10S Transition BM1
8. RHW-8S-to-RHW-10S Transition BM2
9. RHW-8S-to-RHW-10S Transition LRA
10. RHW-6C-to-RHW-8C Transition BM1
11. RHW-3 CP Transition BM1

{{< /details >}}

#### RHW Utility Menu Items

{{< details "RHW Neighbor Connectors" >}}

{{< menu-icon icon="images/icons/rhw-nc-button.jpg" caption="_RHW Neighbor Connectors (located under the Highways Menu)_" >}}

These pieces allow you to build properly functioning Neighbor Connections with RHWs beyond the base RHW-2 (Neighbor Connectors are also not needed for RHW-3 and Double-Decker RHW-4 connections).

1. RHW FLEX Neighbor Connector (FLEX-NC).
2. RHW Invisible Loop Connector

{{< /details >}}

#### RHW Cross-Network Menu Items

{{< details "Specialized RHW x Surface Intersections" >}}

These FLEX pieces allow for specialized intersections with RHW ramps.

1. FlexSPUI (Single-Point Urban Interchange) Terminus
2. FlexDDI (Diverging Diamond Interchange) Terminus

{{< /details >}}

{{< details summary="RHW/Road" badge="deprecated" >}}

{{< menu-icon icon="images/icons/rhw-rd-button.jpg" caption="_Road/RHW Puzzle Pieces and FLUPs (located under the Roads Menu)_" >}}

These puzzle pieces extend the NAM Elevated Road Puzzle Pieces to allow you to cross RHW networks.It also contains the current set of RHW FLUPs pieces. For most instances, use of the [Draggable Elevated Road Viaducts](/docs/feature-guides/road-viaducts/) is recommended instead.

1. Road-over-RHW-4 Orthogonal/Orthogonal
2. Road-over-RHW-4 Diagonal/Orthogonal
3. Road-over-RHW-4 Orthogonal/Diagonal
4. Road-over-RHW-4 Diagonal/Diagonal
5. Road-over-RHW-2 Orthogonal/Orthogonal
6. Road-over-RHW-2 Diagonal/Orthogonal
7. Road-over-RHW-2 Orthogonal/Diagonal
8. Road-over-RHW-2 Diagonal/Diagonal
9. Road-over-MIS Ramp Orthogonal/orthogonal
10. Road-over-RHW-6S Orthogonal/Orthogonal
11. Road-over-RHW-6C Orthogonal/Orthogonal
12. Road-over-RHW-8S Orthogonal/Orthogonal
13. Road-over-RHW-8C Orthogonal/Orthogonal
14. Road-over-RHW-10S Orthogonal/Orthogonal
15. Road-over-RHW-3 Orthogonal/Orthogonal
16. Elevated Road/EMIS +-Intersection
17. Elevated Road/EMIS T-Intersection
18. FLUPs Underpass-Under RHW-MIS/RHW-2/RHW-4/RHW-6C
19. FLUPs Underpass-Under RHW-6S/RHW-8S/RHW-10
20. FLUPs RHW-2 Ramp

{{< /details >}}

{{< details summary="RHW/One-Way Road" badge="deprecated">}}

{{< menu-icon icon="images/icons/rhw-owr-button.jpg" caption="_One-Way Road (OWR)/RHW Puzzle Pieces (located under the Roads Menu)_" >}}

These puzzle pieces extend the NAM Elevated One-Way Road Puzzle Pieces to allow you to cross RHW networks. For most instances, use of the [Draggable Elevated One-Way Road Viaducts](/docs/feature-guides/road-viaducts/) is recommended instead.

1. OWR-over-RHW-4 Orthogonal/Orthogonal
2. OWR-over-RHW-2 Orthogonal/Orthogonal
3. OWR-over-MIS Ramp Orthogonal/Orthogonal
4. OWR-over-RHW-6S Orthogonal/Orthogonal
5. OWR-over-RHW-6C Orthogonal/Orthogonal
6. OWR-over-RHW-8S Orthogonal/Orthogonal
7. OWR-over-RHW-8C Orthogonal/Orthogonal
8. OWR-over-RHW-10S Orthogonal/Orthogonal
9. OWR-over-RHW-3 Orthogonal/Orthogonal
10. Elevated OWR/EMIS +-Intersection
11. Elevated OWR/EMIS T-Intersection

{{< /details >}}

{{< details summary="RHW/Avenue" badge="deprecated" >}}

These puzzle pieces extend the NAM Elevated Avenue Puzzle Pieces to allow you to cross RHW networks.

{{< menu-icon icon="images/icons/rhw-owr-button.jpg" caption="_Avenue/RHW Puzzle Pieces and FlexSPUI (located under the Roads Menu)_" >}}

These puzzle pieces extend the NAM Elevated Avenue Puzzle Pieces to allow you to cross RHW networks. It also contains the Single-Point Urban Interchange (SPUI) and Diverging Diamond Interchange (DDI) intersection pieces. For most instances, use of the [Draggable Elevated Avenue Viaducts](/docs/feature-guides/road-viaducts/) is recommended instead.

1. Avenue-over-RHW-4 Orthogonal/Orthogonal
2. Avenue-over-RHW-2 Orthogonal/Orthogonal
3. Avenue-over-MIS Ramp Orthogonal/Orthogonal
4. Avenue-over-RHW-6S Orthogonal/Orthogonal
5. Avenue-over-RHW-6C Orthogonal/Orthogonal
6. Avenue-over-RHW-8S Orthogonal/Orthogonal
7. Avenue-over-RHW-8C Orthogonal/Orthogonal
8. Avenue-over-RHW-10S Orthogonal/Orthogonal
9. Avenue-over-RHW-3 Orthogonal/Orthogonal
10. Avenue/MIS +-Intersection Avenue/MIS T-Intersection
11. Avenue Type A1 RHW-MIS Exit/Entrance Ramp
12. Avenue Type B1 RHW-MIS Exit/Entrance Ramp
13. Diverging Diamond-Avenue
14. FlexSPUI Avenue Type A

{{< /details >}}

{{< details summary="RHW/Rail" badge="deprecated" >}}

These puzzle pieces extend the old pre-RealRailway NAM Rail Viaduct set to allow one to cross RHW networks.

{{< menu-icon icon="images/icons/rhw-rail-button.jpg" caption="_Heavy Rail/RHW Puzzle Pieces (located under the Rails Menu)_" >}}

These puzzle pieces extend the old pre-RealRailway NAM Rail Viaduct set to allow one to cross RHW networks. Note that these pieces are largely deprecated at this point, with the addition of the [Draggable Elevated RealRailway (RRW) Viaducts](/docs/feature-guides/realrailway/), and are not recommended for use with the RealRailway system.

1. Rail-over-RHW-4 Orthogonal/Orthogonal
2. Rail-over-RHW-2 Orthogonal/Orthogonal
3. Rail-over-MIS Ramp Orthogonal/Orthogonal
4. Rail-over-RHW-6S Orthogonal/Orthogonal
5. Rail-over-RHW-6C Orthogonal/Orthogonal
6. Rail-over-RHW-8S Orthogonal/Orthogonal
7. Rail-over-RHW-8C Orthogonal/Orthogonal
8. Rail-over-RHW-10S Orthogonal/Orthogonal
9. Rail-over-RHW-3 Orthogonal/Orthogonal

{{< /details >}}

## Region Transport View

The NAM includes the popular RHW Regional Transport Map mod by jondor as an optional feature, which is included by default.
This feature contains an updated and expanded map legend with the addition of the RealHighway network, as well as the addition of Monorail as a separate color from El-Rail/GLR. **This mod is NOT compatible with any other Regional Transport Map mods.**

{{< alert context="success" >}}
After installation, each city tile must be opened and saved (after opening any dataview) in order to update the region map.
If you do not open any of the dataviews before saving the game, the map will be rendered incorrectly resulting in all car traffic networks showing up as the highway color.
{{< /alert >}}

This mod utilizes a workaround to display RHWs on the regional transport map.
Because of the way this workaround functions, the red color of the Maxis Highways would show up as a halo around diagonal roads, bridges and certain puzzle pieces.
The black color does as well, but is less noticeable.
It is possible that some diagonal networks look wierd in the transit map - because of the way this workaround functions, the diagonal roads, avenues and streets show up intermingled with the highway color.
This is not possible to fix but the map colors were chosen to make it less noticable than other color combinations.

## Other Known Issues

* Placing FLEX On-Slope Transitions immediately next to crossing points, without a one-tile gap before the crossing, can destabilize the overrides and prevent the crossing from working properly.

## Information on Support and Development Updates

For technical support and information on new features coming to the RealHighway system in future releases, please check out the official _RealHighway (RHW) - Development and Support_ threads on the forums at [SimCity 4 Devotion](http://sc4devotion.com/forums/index.php?topic=990.0) and [Simtropolis](http://community.simtropolis.com/forums/topic/4381-real-highway-rhw-development-and-support/).
