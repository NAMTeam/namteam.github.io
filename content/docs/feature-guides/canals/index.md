---
title : "Canals (CAN-AM)"
description: "The Canal Addon Mod, or CAN-AM, is a feature designed in cooperation with the BSC to add functional canals to the game capable of transporting passengers and freight."
lead: "The Canal Addon Mod, or CAN-AM, is a feature designed in cooperation with the BSC to add functional canals to the game capable of transporting passengers and freight."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/canals"
---

{{< docstatus status="legacy" >}}

## Overview

The CAN-AM is designed to work with either the **CAL SG Canals** by callagrafx (recommended) or the original **SG Canals** by SimGoober.
Both of these are available in the [SC4D LEX Legacy - BSC Canals Collection](https://www.sc4evermore.com/index.php/downloads/download/14-park/277-sc4d-lex-legacy-bsc-canals-collection). This package also includes additional passenger and freight stations. Additional ferry skins may be found in the [SC4D LEX Legacy - BSC VDK Mods Ferries](https://www.sc4evermore.com/index.php/downloads/download/41-automata-mods/298-sc4d-lex-legacy-vdk-mods-ferries) package, among others.

The CAN-AM is available under **2 Network Features** → **Water Transport** → **Canal Addon Mod**. It is installed by default.

Note that CAN-AM is an older feature that has not seen much new development in the past decade. As such, it is reliant on a limited array of semi-deprecated/legacy features, especially in terms of crosslinks with newer and more modern NAM features.

## Building Canals

To build a functional canal with CAN-AM, start by building the outer walls of the canal with your chosen canal set (in this case, the CAL SG Canals). Use the CAN-AM pieces, located in the Misc. Transit menu, in between the outer walls. These pieces provide the actual transportation functionality. Note that CAN-AM canals must be at least 3 tiles wide: 2 tiles for the walls on each side, and at least 1 tile for the CAN-AM pieces.

{{< carousel >}}
    images/can-am-building-1.jpg
    images/can-am-building-2.jpg | Place the outer walls of the canal
    images/can-am-menu-button.jpg | Use the functional canal pieces
    images/can-am-building-3.jpg | Place functional canal pieces in between the walls
    images/can-am-building-4.jpg | The finished canal must be minimum 3 tiles wide
{{< /carousel >}}

### Crossings

Crossings with CAN-AM are currently puzzle piece-based. There are two versions of each crossing piece for the supported network crossings: one for the wall, and one for the center canal traffic, allowing canal traffic to pass underneath. The crossing can be assembled as follows:

{{< carousel >}}
    images/can-am-building-5.jpg | Place the center piece allowing traffic
    images/can-am-building-6.jpg | Place the edge pieces
    images/can-am-building-7.jpg
{{< /carousel >}}

### Neighbor Connections

Neighbor Connections with CAN-AM are possible as well. Start by building a standard Road-based Neighbor Connection, and then plop the CAN-AM pieces over top of the Road.

{{< carousel >}}
    images/can-am-nc-1.jpg | Start with a road neighbor connection
    images/can-am-nc-2.jpg | Plop canal transit pieces over the road
    images/can-am-nc-3.jpg | Plop canal transit pieces over the road
{{< /carousel >}}


### Stations

The CAN-AM canals function as a mass transit network based on the Bus vehicle type, meaning they need stations to properly function. The NAM includes one passenger ferry terminal - additional passenger and freight stations are available in the BSC Canals Collection linked above. Place the station aligned with a canal wall, with the arrow pointing toward the water in the canal. The stations require power in order to function.

{{< carousel >}}
    images/can-am-building-8.jpg
    images/can-am-building-9.jpg
    images/can-am-building-10.jpg
    images/can-am-building-10a.jpg | Place one of the "magic pieces"
{{< /carousel >}}

Note that in order for canal boat automata to appear on the canals, one of the "magic pieces" must be placed as part of the build process, preferably in the open water next to the station.  These include the + and T-intersections, as well as the 90° L-bend. (Thanks to <strong>CorinaMarie</strong> for this discovery!)

{{< img-simple src="images/can-am-magic-pieces.jpg" >}}

If everything is done properly, traffic should begin to use the canal. Like any other mass transit network, at least two stations of the same type are needed for full functionality.

{{< img-simple src="images/can-am-building-11.jpg" >}}
