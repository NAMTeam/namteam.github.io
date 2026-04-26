---
title : "RealExpressway (REW)"
description: "The RealExpressway (REW) system expands upon the Maxis One-Way Road network, adding Ramp Interfaces and enhancing the Network Widening Mod's OWR components."
lead: "The RealExpressway (REW) system adds a series of Ramp Interfaces (both FLEX Piece-based and draggable) to the base One-Way Road (OWR) network and the additional OWR widths of Network Widening Mod (NWM). As such, it requires that the Network Widening Mod be installed. The REW's ramps can be used to recreate urban and suburban surface arterials that have expressway/freeway-like features, Texas-style frontage roads supporting RCI development/access (especially in combination with RealHighways), or various novel intersection configurations."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/realexpressway-mod"
---

## Constructing RealExpressways

### Ramp Interface Basics

At the core of the RealExpressway are the **Ramp Interfaces**, which allow exit and entrance ramps to branch from or merge into the through lanes, or "mainline", of a stretch of highway.

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
            <td><img class="img-invert-dark" src="images/ramps/TypeD1.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeE1.png" /></td>
        </tr>
        <tr>
            <td>Type A1</td>
            <td>Type B1</td>
            <td>Type D1</td>
            <td>Type E1</td>
        </tr>
        <tr>
            <td class="fs-6">A single-lane (OWR-1) branch off the mainline, with an orthogonal branch. No lanes peel off the mainline.</td>
            <td class="fs-6">A single-lane (OWR-1) branch off the mainline, with a diagonal branch. No lanes peel off the mainline.</td>
            <td class="fs-6">A single-lane (OWR-1) branch off the mainline, with an orthogonal branch. The branch is formed from one lane of the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A single-lane (OWR-1) branch off the mainline, with a diagonal branch. The branch is formed from one lane of the mainline, and the mainline has one fewer lane at the bottom.</td>
        </tr>
        <tr>
            <td><img class="img-invert-dark" src="images/ramps/TypeA2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeB2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeD2.png" /></td>
            <td><img class="img-invert-dark" src="images/ramps/TypeE2.png" /></td>
        </tr>
        <tr>
            <td>Type A2</td>
            <td>Type B2</td>
            <td>Type D2</td>
            <td>Type E2</td>
        </tr>
        <tr>
            <td class="fs-6">A dual-lane (OWR-2) branch off the mainline, with an orthogonal branch. One of the two lanes on the branch is from the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A dual-lane (OWR-2) branch off the mainline, with a diagonal branch. One of the two lanes on the branch is from the mainline, and the mainline has one fewer lane at the bottom.</td>
            <td class="fs-6">A dual-lane (OWR-2) branch off the mainline, with an orthogonal branch. Both lanes on the branch are from the mainline, and the mainline has two fewer lanes at the bottom.</td>
            <td class="fs-6">A dual-lane (OWR-2) branch off the mainline, with a diagonal branch. Both lanes on the branch are from the mainline, and the mainline has two fewer lanes at the bottom.</td>
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

There are two methods of building REW Ramp Interfaces: using the FLEX Pieces (found under the RealExpressway One-Way Road FLEXRamps button on the Roads Menu), or through draggable means (only available for certain ramps).

The FLEX Pieces are the simpler way to build REW ramps. First, under the REW Ramp Interfaces button, cycle through TAB or Shift-TAB (Ctrl-TAB or Ctrl-Shift-TAB on Mac) to the desired ramp interface, and place it. Then, drag the One-Way Road tool through the mainline, and finally, through the ramp--which, in this case, will convert to the 1-Lane One-Way Road network (OWR-1) from the Network Widening Mod (NWM). In the case of the Road splitter ramps (new to NAM 45), use the Road network out the top of the ramp instead.

{{< gallery col-xl="2" col-lg="2" col-md="1" >}}
    images/rew-flex-1.jpg
    images/rew-flex-2.jpg
    images/rew-flex-3.jpg
    images/rew-flex-4.jpg
    images/rew-flex-5.jpg
{{< /gallery >}}

As the REW FLEXRamps use special network flags to counteract the game's hardcoded "Tidal Flow" system of determining the direction of a One-Way Road, they are effectively bidirectionally-pathed at all times (as shown in the image below, in which the DrawPaths cheat from SimCity 4 Extra Cheats.dll has been turned on). The directionality is irrelevant. Note, however, that this means that REW FLEXRamps CANNOT be placed directly over an existing stretch of One-Way Road (or an NWM OWR). One must use the Bulldozer or the NAM's Network Eraser to make a place for the FLEXRamp to be plopped.

{{< img-simple src="images/rew-flex-drawpaths.jpg" >}}

The Draggable Ramp Interfaces (DRIs) behave differently, and are not bidirectionally-pathed, instead aligning with the Tidal Flow system. Note that in both cases, separate Outside and Inside ramps are not needed, unlike the RHW's ramp system.

{{< img-simple src="images/rew-draggable-drawpaths.jpg" >}}

The build methods are shown below:

{{< gallery col-xl="3" col-lg="3" col-md="1" caption="_A1 Orthogonal Ramp_" >}}
    images/rew-draggable-a1-orth-1.jpg
    images/rew-draggable-a1-orth-2.jpg
    images/rew-draggable-a1-orth-3.jpg
{{< /gallery >}}

{{< gallery col-xl="2" col-lg="2" col-md="1" caption="_B1 Orthogonal Ramp_" >}}
    images/rew-draggable-b1-orth-1.jpg
    images/rew-draggable-b1-orth-2.jpg
{{< /gallery >}}

{{< gallery col-xl="3" col-lg="3" col-md="1" caption="_A1 Diagonal Ramp_" >}}
    images/rew-draggable-a1-diag-1.jpg
    images/rew-draggable-a1-diag-2.jpg
    images/rew-draggable-a1-diag-3.jpg
{{< /gallery >}}

{{< gallery col-xl="2" col-lg="2" col-md="1" caption="_B1 Diagonal Ramp_" >}}
    images/rew-draggable-b1-diag-1.jpg
    images/rew-draggable-b1-diag-2.jpg
{{< /gallery >}}

The current set of FLEXRamps available for the REW (22 in total) is shown below:

{{< img-simple src="images/rew-ramps.jpg" >}}
