---
title : "Underground Rail"
description: "The Underground Rail (URail) system consists of a plethora of puzzle pieces, designed to allow the Rail network and its two transit types, Passenger Trains and Freight Trains, to travel below ground, as well as below other networks with Dual-Networking capabilities."
lead: "The Underground Rail (URail) system consists of a plethora of puzzle pieces, designed to allow the Rail network and its two transit types, Passenger Trains and Freight Trains, to travel below ground, as well as below other networks with Dual-Networking capabilities."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/underground-rail"
---

## Menu Buttons

The URail system contains a total of six menu buttons.

### On the Rails Menu

<table class="table table-striped table-bordered w-auto">
    <tr>
        <td rowspan="5" valign="middle" class="px-3">{{< menu-icon icon="images/urail-menu-buttons-rail.jpg" >}}</td>
        <td><b>Underground Rail, Rail Tunnel under Roads Dual Networking Pieces</b><br/>This button contains the base URail portal, as well as all of the various parallel Road-over-URail Dual Network items.</td>
    </tr>
    <tr>
        <td><b>Underground Rail, Rail Tunnel under PedMalls Dual Networking Pieces</b><br/>This button contains all of the various parallel PedMall-over-URail Dual Network items.</td>
    </tr>
    <tr>
        <td><b>Underground Rail Maxis Roadway Intersection Pieces</b><br/>This button contains perpendicular crossings over URail for all of the base Road and Highway-type transportation networks in the game (Road, Street, One-Way Road, Avenue, Ground Highway, and Elevated Highway)</td>
    </tr>
    <tr>
        <td><b>Underground Rail Maxis Railway Intersection Pieces</b><br/>This button contains perpendicular crossings over URail for all of the base Rail and Mass Transit-type transportation networks in the game (Rail, Elevated Light Rail, and Monorail), as well as under the NAM's Single-Track Rail (STR) override network and Rail Viaducts.</td>
    </tr>
    <tr>
        <td><b>Underground Rail Maxis Miscellaneous Puzzle Pieces</b><br/>This button contains miscellaneous URail items, including URail 4-way Rail Intersections (basically, FURLs from the ESURE, or Express Subways and Underground Rail Extensions), often under various other networks and intersections in a Dual Network format.</td>
    </tr>
</table>

### On the Misc. Transit Menu

<table class="table table-striped table-bordered w-auto">
    <tr>
        <td rowspan="1" valign="middle" class="px-3">{{< menu-icon icon="images/urail-menu-buttons-misc.jpg" >}}</td>
        <td><b>Underground Rail Maxis Tramway Intersection Pieces</b><br/>This button contains perpendicular crossings over URail for Ground Light Rail (GLR)/Tram, as well as Tram-on-Street (TOS) and Tram-in-Avenue (TIA). (Tram-in Road (TIR) and Tram-on-Road (TOR) are not presently supported.)</td>
    </tr>
</table>

Note that there presently is no crosslinkage to support crossings under (or Dual-Networking with) any RealHighway (RHW), Network Widening Mod (NWM), or Street Addon Mod (SAM) networks, or with Road Viaducts.

## Building A URail System

To build a URail system, first hook a Rail line into a URail portal (or Rail Tunnel Ramp), found at the end of the **Underground Rail, Rail Tunnel under Roads Dual Networking Pieces** (the first URail button on the Rails Menu). Pressing Shift-TAB (or Ctrl-Shift-TAB on Mac) will take you right to the portal. To return to ground level with your line, simply place another URail portal/Rail Tunnel Ramp at the desired location.

{{< gallery col-xl="2" col-lg="1" col-md="1" >}}
images/urail-construction-1.jpg
images/urail-construction-1.jpg
{{< /gallery >}}

As there are no base URail pieces under blank terrain, if you wish to continue your URail line under effectively blank terrain without having another network parallel overhead, use the PedMall-over-URail pieces, found under the **Underground Rail, Rail Tunnel under PedMalls Dual Networking Pieces** button for such cases. Orient the Rail textures shown in the preview to fit with the intended direction of your URail line.

{{< gallery col-xl="2" col-lg="1" col-md="1" >}}
images/urail-construction-3.jpg
images/urail-construction-4.jpg
{{< /gallery >}}

Hovering over top of a URail piece with one of the game's Query Tools will show a Rail "ghost texture", allowing you to discreetly see where your URail line is located.

{{< img-simple src="images/urail-ghost-texture.jpg" >}}

To cross under an above-ground network, use the appropriate intersection or miscellaneous piece, and align the preview model's Rail textures with your URail line.

{{< gallery col-xl="2" col-lg="1" col-md="1" >}}
images/urail-construction-5.jpg
images/urail-construction-6.jpg
{{< /gallery >}}

Alternatively, to start a segment of Dual Networking, build the appropriate Dual-Networking intersection piece, and then continue with the parallel Dual-Networking pieces as appropriate.

{{< gallery col-xl="2" col-lg="1" col-md="1" >}}
images/urail-construction-7.jpg
images/urail-construction-8.jpg
images/urail-construction-9.jpg
images/urail-construction-10.jpg
{{< /gallery >}}

## Limitations

* Due to game limitations with the Train transit types, a draggable implementation similar to Subway-based FLUPs is unfortunately not currently feasible. A Rail-based draggable would alter terrain above ground in undesirable ways.
* Note that due to the game's limitation of two true networks on a single tile, intersections above a URail line can only be of a single network, since URail is itself Rail-based.
* Any Dual-Networking setup must be with a network type other than Rail (i.e. Road). Rail-over-URail Dual-Networking is not possible, due to the prospects of path jumping (in which case a Train could jump between above and below ground).
