---
title : "Network Eraser"
description: "The Network Eraser acts as a more refined version of the game's default Bulldozer tool which allows one to erase a single cell/tile (1x1) of any network without affecting surrounding tiles."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 
draft: false
images: []
url: "docs/feature-guides/network-eraser"
---

## Overview

The **Network Eraser** (previously known as the _RHW Disconnector_) is a special tool which erases a single tile of any network or FLEX Piece. It does not affect the surrounding sections of network, so the Network Eraser is safer to use and less destructive when one needs to remove or rebuild a section of network than the game's Bulldozer tool, especially when complex setups are involved. It can be found near the top of the Roads, Highways, Rails, and Misc. Transit menus.

{{< menu-icon icon="images/icons/rhw-network-eraser-button" caption="_Network Eraser Button_" >}}

To use the Network Eraser, select it from the menu, hover it over the stretch of network you wish to erase, and then click to erase. The Network Eraser can be found near the top of the Highways menu, as well as the the Roads, Rails, and Miscellaneous Transportation menus.

{{< gallery col-xl="2" col-lg="1" col-md="1">}}
    images/network-eraser-1.jpg
    images/network-eraser-2.jpg
    images/network-eraser-3.jpg
{{< /gallery >}}

The Network Eraser can work on any draggable intersection combination between two different networks:

{{< gallery col-xl="2" col-lg="1" col-md="1">}}
    images/network-eraser-4.jpg
    images/network-eraser-5.jpg
{{< /gallery >}}

It can also work on FLEX Pieces, such as this RealHighway (RHW) FLEXRamp:

{{< gallery col-xl="2" col-lg="1" col-md="1">}}
    images/network-eraser-6.jpg
    images/network-eraser-7.jpg
{{< /gallery >}}

It does not, however, work on old-style puzzle pieces or Maxis Highway interchanges (notice how attempting to hover over the interchange puts the Network Eraser one tile to the side):

{{< gallery col-xl="1" col-lg="1" col-md="1">}}
    images/network-eraser-8.jpg
{{< /gallery >}}

## Using with RealHighway

The base RealHighway network has auto-connect functionality, similar to the way the Street network operates. This can make the network behave erratically when using the Bulldozer tool, and may result in more destruction than one intended, particularly when dealing with complicated interchanges constructed entirely from RealHighway components.

{{< override from="images/rhw-bulldozer-before.jpg" to="images/rhw-bulldozer-after.jpg">}}

To combat this issue, use the Network Eraser instead. The Network Eraser is also used as part of some Pattern-Based Draggable setups used by the RealHighway, particularly the [Draggable Ramp Interfaces (DRIs)](/docs/feature-guides/realhighway-mod#DRI). Additionally, it can be used in many situations with non-RHW networks as well.

{{< override from="images/rhw-eraser-before.jpg" to="images/rhw-eraser-after.jpg">}}
