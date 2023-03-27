---
title : "Light Rail/Tram"
url: "/docs/feature-guides/light-rail-tram/"
description: "The Light Rail or Tram system in the NAM offers extensive to the game's Elevated Rail (or Light Rail) tool, which is designed primarily to provide urban and suburban passenger transit service, along the lines of real-life light rail, tram, and streetcar systems."
lead: "The Light Rail or Tram system in the NAM offers extensive to the game's Elevated Rail (or Light Rail) tool, which is designed primarily to provide urban and suburban passenger transit service, along the lines of real-life light rail, tram, and streetcar systems."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/light-rail-tram"
---

{{< docstatus status="legacy" >}}

The NAM's feature additions to this area of the transportation system include numerous Dual-Networking options, allowing for Light Rail and Tram service to be placed in the median of, or over top of, various surface street networks, including Roads, Avenues, and Streets.

{{< gallery col-xl="2">}}
    images/tramteaser1.jpg
    images/tramteaser2.jpg
{{< /gallery >}}

##  Installing the Light Rail/Tram Features from the NAM Installer

The various Light Rail/Tram features in the NAM are found in the NAM Installer under "2 Additional Network Features > Light Rail". The modules listed under this section are described in more detail in the Networks section below.

##  Light Rail/Tram Override Networks, Pseudo-Networks, and Dual-Networking Options

### Overview

The Light Rail/Tram portion of the NAM features several draggable and semi-draggable override networks, along with (still) puzzle piece-based pseudo-networks, allowing for a variety of configurations beyond the game's standard Elevated (Light) Rail network, which operates at 15.5-meter height (a small fraction above the NAM's "Level 2" (L2, 15 meters) standard).

### Ground Light Rail/Tram

One of the trademark features of the entire NAM is the Ground Light Rail (GLR)/Tram system, which offers a ground-level counterpart to the Elevated (Light) Rail network. Four different types of GLR tracks are presently available as draggable override networks: the standard Ground Light Rail, Rural Ground Light Rail, and the two customizable Extended Ground Light Rail sets (which are installed as part of the Ground Light Rail Extension option).

All of these override networks can either be constructed by first placing a Starter Piece, then dragging the appropriate default network through the starter, at which point the draggable network should convert to match the starter. This process is shown below on the standard Ground Light Rail network.

{{< gallery col-xl="2" col-lg="2" >}}
    images/glr-1.jpg
    images/glr-2.jpg
    images/glr-3.jpg
    images/glr-4.jpg
    images/glr-5.jpg
{{< /gallery >}}

Making crossings with other networks (save for with Elevated Light Rail itself--which presently requires a puzzle piece) is just a simple matter of dragging Ground Light Rail across the crossing network.

{{< gallery col-xl="2" col-lg="2" >}}
    images/glr-6.jpg
    images/glr-7.jpg
{{< /gallery >}}

Ground Light Rail junctions can be built by simply dragging Elevated Light Rail to, from, or through a Ground Light Rail line.

{{< img-simple src="images/glr-8.jpg" >}}

Should you prefer to start off your line with a proper terminus, there are special starters featuring loops at the end for line starts and ends. Transitions to Elevated Light Rail with a GLR starter on the end are also available:

{{< gallery col-xl="2" col-lg="2" >}}
    images/glr-10.jpg
    images/glr-9.jpg
{{< /gallery >}}

The two optional Extended Ground Light Rail sets (selectable in the NAM installer) have fewer supported crossings and capabilities at present, but the base texture underneath the tracks can be easily swapped for a custom one of your choosing, simply by importing a texture of the Transit Group ID (0x1abe787d) and the appropriate Instance ID for each set: 0x5f888100-04 for Extended GLR Set 1 (default is grass), 0x5f88c100-04 for Extended GLR Set 2 (default is red brick).

{{< img-simple src="images/glr-alt.jpg" >}}

In addition to Draggable GLR, the older Legacy GLR Puzzle Pieces remain available. It is **highly recommended** for users to utilize the Draggable GLR instead of the old puzzle pieces, not only for ease of construction, but because of the prospect of the TE Lot/Puzzle Piece Crash-To-Desktop issues when building stations. While this longstanding threat has been effectively solved for Windows users with **simmaster07**'s SC4Fix.dll patch, with the 64-bit version of the Aspyr macOS port disabling the use of SC4MacInjector (which allowed SC4Fix.dll and other DLL-based mods to operate on macOS), the threat still exists on the Mac platform.

The most reliable method for building stations is to plop the Ground Light Rail station in between sections of Ground Light Rail, or not-yet-overridden Elevated Light Rail, and drag the Elevated Light Rail tool through the station to activate its pathing.

{{< img-simple src="images/glr-stations.jpg" >}}

Bridges for Ground Light Rail are also possible. Drag the Elevated Light Rail tool orthogonally across a body of water, select the appropriate bridge (noting some components may initially still look like Elevated Light Rail in the construction process), and then release. The override cannot carry through a bridge, so one will need to place a Ground Light Rail starter on the other side of the bridge to initiate the overrides over there.

{{< gallery col-xl="2" col-lg="2" >}}
    images/glr-bridge-1.jpg
    images/glr-bridge-2.jpg
    images/glr-bridge-3.jpg
{{< /gallery >}}

###  Tram-in-Network Dual-Networking Options

The NAM includes a number of options to run Light Rail/Tram lines both within the medians of, and directly on various road-type networks. There are presently four different Tram Dual-Networking options available:

* Tram-in-Avenue (TiA)
* Tram-in-Road (TiR)
* Tram-on-Road (ToR) (perhaps more accurately, Tram-on-NRD-4)
* Tram-on-Street (ToS)

{{< img-simple src="images/tram-dual-networks.jpg" >}}

All four may be constructed via puzzle pieces, and three of the four--all but Tram-on Road (ToR)--may be at least partially constructed through semi-draggable means, by clicking over the individual tiles of the respective base road-type network (Avenue, Road, or Street) with the Elevated (Light) Rail network tool. (Note that the semi-draggable method is the only way to construct certain crossings, including RHW and Road Viaduct crossings.) Diagonal versions of the dual networks require puzzle pieces.

####  Tram Dual-Networking Semi-Draggable Construction

Tram-in-Avenue
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-ave-1.jpg
    images/tram-in-ave-2.jpg
{{< /gallery >}}


Tram-in-Road
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-road-1.jpg
    images/tram-in-road-2.jpg
{{< /gallery >}}

Tram-on-Street
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-on-street-1.jpg
    images/tram-on-street-2.jpg
{{< /gallery >}}

To build intersections with the Semi-Draggable Tram Dual Networks, simply drag the network up to the edge of the dual network, ending in a stub just before it. This will form a T-intersection (if ground level) or the start of an overcrossing (if elevated).
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-ave-int-1.jpg
    images/tram-in-ave-int-2.jpg
{{< /gallery >}}

To complete a full 4-way +-intersection (or a full network overcrossing), simply follow the same process on the opposite side.
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-ave-int-3.jpg
    images/tram-in-ave-int-4.jpg
{{< /gallery >}}

If you are seeking to build an intersection between two Tram Dual Networks, simply convert the crossing base single network to a dual network by using the Elevated (Light) Rail overplop method on it. It will convert to an intersection between two dual networks. Note that some additional overclick with the Elevated (Light) Rail tool may be required to fully convert the intersection.
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-ave-int-5.jpg
    images/tram-in-ave-int-6.jpg
{{< /gallery >}}

Not all crossings and setups are supported yet with the semi-draggable method, in which cases it may become necessary to use the older puzzle pieces.

Zone access can also be somewhat complicated with the Tram Dual Networks as well. It is recommended to build the base network without the Tram function first, zone, and then add the Dual Network.
{{< gallery col-xl="2" col-lg="2" >}}
    images/tram-in-ave-zones-1.jpg
    images/tram-in-ave-zones-2.jpg
{{< /gallery >}}

To allow passengers to board and depart trams/trains, use one of the NAM's included Tram/GLR Dual-Networking stations. To activate pathing, drag two stretches of One-Way Road for the Tram-in-Avenue, use Road for Tram-in/on-Road, and Street for Tram-on-Street.

{{< gallery col-xl="3" col-lg="3" >}}
    images/tram-in-ave-station-1.jpg
    images/tram-in-ave-station-2.jpg
    images/tram-in-ave-station-3.jpg
{{< /gallery >}}

### Light Rail-over-Network Dual-Networking Options

In addition to the surface running of Light Rail/Tram lines within and directly on road-type networks, some support is available to run them on viaducts directly overhead of networks:

* Elevated Light Rail-over-Road
* Elevated Light Rail-over-Street
* Elevated Light Rail-over-Avenue
* Elevated Light Rail-over-RD-4 (4-lane Road, from the NAM's Network Widening Mod (NWM) Plugin)
* Elevated Light Rail-over-PedMall

{{< img-simple src="images/el-rail-dual-networks.jpg" >}}

The Over-Road, Over-Street, and Over-PedMall options currently exist as puzzle pieces, and can be found under the Elevated Light Rail-over-Road button. Crossings are built using puzzle pieces, such as the ones below:

{{< img-simple src="images/elr-over-road-pp.jpg" >}}

The Over-Avenue and Over-RD-4 options, however, exist primarily as FLEX Pieces, with some transitions being puzzle piece-based. Supported intersections between other networks and Elevated Light Rail-over-Avenue and RD-4 can be made simply by dragging those networks through the Over-Avenue/RD-4 FLEX Pieces:

{{< gallery col-xl="3" col-lg="3" >}}
    images/elr-over-ave-int-1.jpg
    images/elr-over-ave-int-2.jpg
    images/elr-over-ave-int-3.jpg
{{< /gallery >}}

###  High Elevated (Light) Rail Pseudo-Network (Puzzle Piece-Based) {{% legacy %}} {#high-elevated-rail}

In addition to support for Light Rail/Tram at the ground level, there is limited "legacy" support for High Elevated (Light) Rail (30.5-meter height, a fraction above the NAM's "Level 4" (L4, 30 meters) standard), via puzzle pieces. This system is limited, but does provide an additional height level (note that full draggable support for another height level of Elevated (Light) Rail has been discussed for a future NAM release, though which height is yet to be determined, and there is no timeline for when this addition may occur).

{{< img-simple src="images/high-el-rail.jpg" >}}

##  A Note Regarding Neighbor Connections

Neighbor Connections are possible for all of the items listed here. Simply build the draggable, semi-draggable, or puzzle-based component at the edge of both city tiles, using the base network (Elevated Light Rail for base Ground Light Rail and High Elevated Rail, the appropriate road-type network for Tram and Elevated Rail Dual Networks).

##  Known Issues

There may be some issues with Fire Engine access on Tram and Elevated Light Rail Dual Networks, if a fire is on the opposite side of the tracks from the Fire Engine.