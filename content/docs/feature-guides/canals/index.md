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

## Overview

The CAN-AM is designed to work with either the **CAL SG Canals** by callagrafx (recommended) or the original **SG Canals** by SimGoober.
Both of these are available in the [SC4D LEX Legacy - BSC Canals Collection](https://www.sc4evermore.com/index.php/downloads/download/14-park/277-sc4d-lex-legacy-bsc-canals-collection). This package also includes additional passenger and freight stations, as NAM CAN-AM only includes a single passenger station.

The CAN-AM is available under **2 Network Features** → **Water Transport** → **Canal Addon Mod**. It is installed by default.

## Building CAN-AM Canals

The canal pieces are located under the Misc. Transit menu.

{{< img-simple src="images/can-am-menu-button.jpg" >}}

To build a functional canal with CAN-AM, start by building the outer walls of the canal with your canal set (in this case, the CAL SG Canals).  In between the walls, place the CAN-AM pieces, which provide the actual transportation functionality.  CAN-AM canals must be _at least 3 tiles wide:_ 2 tiles for the walls on each side, and at least 1 tile for the CAN-AM pieces.

{{< gallery col-xl="2" col-lg="2" clickable="true" >}}
    images/can-am-building-1.jpg
    images/can-am-building-2.jpg
    images/can-am-building-3.jpg
    images/can-am-building-4.jpg
{{< /gallery >}}

Crossings with CAN-AM are currently puzzle piece-based.  There are two versions of each crossing piece for the supported network crossings--one for the wall, and one for the open water.  The open water tiles allow for canal traffic to pass underneath.

The crossing can be assembled as follows:

{{< gallery col-xl="2" col-lg="2" clickable="true" >}}
    images/can-am-building-5.jpg
    images/can-am-building-6.jpg
    images/can-am-building-7.jpg
{{< /gallery >}}

Neighbor Connections with CAN-AM are possible as well.  Build a standard Road-based Neighbor Connection, and plop the CAN-AM pieces over top of the Road.

{{< gallery col-xl="2" col-lg="2" clickable="true" >}}
    images/can-am-nc-1.jpg
    images/can-am-nc-2.jpg
    images/can-am-nc-3.jpg
{{< /gallery >}}

Note that CAN-AM is an older feature that has not seen much new development in the past decade.  As such, it is reliant on a limited array of semi-deprecated/legacy features, especially in terms of crosslinks with newer/more modern NAM features.

## CAN-AM Stations

The CAN-AM canals function as a mass transit network and is technically based on the Bus vehicle type, meaning they need stations to properly function.  The CAS 1x1 Ferry Terminal (included in the mod) is one option.  Place it aligned with a canal wall, with the arrow pointing toward the water in the canal.  The stations require Power in order to function.

{{< gallery col-xl="2" col-lg="2" clickable="true" >}}
    images/can-am-building-8.jpg
    images/can-am-building-9.jpg
    images/can-am-building-10.jpg
{{< /gallery >}}

Note that in order for canal boat automata to appear on the canals, one of the "magic pieces" must be placed as part of the build process, preferrably in the open water next to the station.  These include the + and T-intersections, as well as the 90° L-bend. (Thanks to <strong>CorinaMarie</strong> for this discovery!)

{{< img-simple src="images/can-am-building-10a.jpg" >}}

{{< img-simple src="images/can-am-magic-pieces.jpg" >}}

If everything is done properly (at least two stations of the same type are needed for full functionality), traffic should begin to use the canal.

{{< img-simple src="images/can-am-building-11.jpg" >}}
