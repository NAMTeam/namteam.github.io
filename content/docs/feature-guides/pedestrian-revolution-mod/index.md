---
title : "Pedestrian Revolution Mod"
description: "The Pedestrian Revolution Mod introduces a variety of new network features intended for active transportation modes, including pedestrian, cycling and true multimodal corridors."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2023-03-16T10:40:00+00:00
draft: false
images: []
url: "docs/feature-guides/pedestrian-revolution-mod"
---

{{< img-simple src="images/pedrev.png" >}}

<p class="lead text-center">Pedestrian Revolution Mod: A Master Plan for the FLEXification and Expansion of Active Transportation</p>

## Introduction

The NAM Team is proud to present the newest network family, the Pedestrian Revolution Mod! This network family encompasses all future network features intended for active transportation modes, including pedestrian, cycling and true multimodal corridors. The network family will consist of two broad classes of content: FLEX-based crossing facilities and draggable pedestrian-oriented corridors. Over time, more network features will be added to this family, vastly expanding the potential city designs for the entire SimCity 4 community.

## Midblock Crosswalks

Version 45 of the Network Addon Mod introduced the first FLEX-based pedestrian-oriented transportation features, the Midblock Crosswalks. This feature starts with 9 pieces which provide dedicated Pedestrian crossings for use away from surface road intersections. These pieces are found inside the new menu named Pedestrian Revolution Mod (PRM) FLEX crossings, located between the Street Addon Mod starter pieces and the Avenue Intersections (Roundabouts) menus.

{{< img-simple src="images/image004.jpg" >}}

The initial set of 9 pieces provides crossings for all the bidirectional surface road networks: Road, Avenue, and the two-way (Road-based) Network Widening Mod overrides. Each network width has 3 sizes, measured based on the length of the crosswalk piece. All pieces use a crossing table or raised crosswalk design, where the road pavement is raised to sidewalk height, providing a continuous walking surface for pedestrians, along with traffic calming for motor vehicles.

{{< gallery col-xl=3 >}}
    images/mbc/mbc01.jpg
    images/mbc/mbc02.jpg
    images/mbc/mbc03.jpg
    images/mbc/mbc04.jpg
    images/mbc/mbc05.jpg
    images/mbc/mbc06.jpg
    images/mbc/mbc07.jpg
    images/mbc/mbc08.jpg
    images/mbc/mbc09.jpg
{{< /gallery >}}

Size 1 crosswalks use a simple and narrow design, with all the single tile networks, and most double tile networks (except RD-6) using stop control. RD-6, AVE-6 and TLA-7 use traffic signal control. The Size 2 and 3 crosswalks use a full width crosswalk design and pavement markings, indicating the approach side of the vehicle lanes. As of NAM 45, all designs use traffic signals as their traffic control. All pieces provide a traffic calming effect, where motor vehicles slow down along the crosswalk, are slightly raised when going over the raised crosswalk, and stop before the stop line.

{{< img-simple src="images/image006.jpg" >}}

The Midblock Crosswalks can be constructed using two general procedures: overplop over an existing network, or construction over blank terrain. The overplop method consists of finding the desired network segment for the crosswalk, aligning the crosswalk piece using the construction tile cursor and the HOME/END keys. Once the desired alignment is found, click to place the FLEX piece, then use the Road or Avenue tool, as appropriate, to connect across the gap formed by the construction tile.

{{< img-simple src="images/image008.jpg" >}}

The second method consists of first placing the crosswalk piece and a starter, such that they're aligned. Then, using the Road or Avenue network tool, as appropriate, connect the starter to the crosswalk. Make sure to drag at least 2 tiles beyond the crosswalk piece, to avoid creating the Road/AVE-2 width transition used for the refuge island configurations. Pay attention to the construction preview to ensure the correct configuration is being made. Once done, release the network tool cursor and admire your new piece of pedestrian infrastructure!

{{< img-simple src="images/image010.jpg" >}}

Both double and triple tile networks support the overplop method the same way the single tile networks do. The size 3 triple tile network crosswalks, due to their complexity, do require some extra help to get their full override. When placing the size 3 crosswalk piece for use with TLA-7 or AVE-6, make sure to provide the override from both sides. The override works fully along the median lanes, but the override for the outer lanes works only from the inbound lanes (approach side of crosswalk). To ensure the override completes, provide either another TLA-7 or AVE-6 starter, or connect with the existing triple tile NWM segment.

{{< img-simple src="images/image012.jpg" >}}

The road crosswalks support refuge island crosswalk designs, where the lanes are temporarily separated to provide a mid-point stopping location for pedestrians, which allows them to cross one traffic direction at a time. To build, select the Road tool and drag out a 1-tile end stub out of the crosswalk ends, which will form half of the width transition between Road and the 2-lane Avenue (AVE-2). Then, drag a road segment towards the width transition, making sure not to connect across. The end stub will automatically override the Road half of the Road/AVE-2 width transition.

{{< img-simple src="images/image014.jpg" >}}

Likewise, a refuge island configuration can be build by pairing the Avenue crosswalks with RD-4. To do so, start by placing an Avenue crosswalk, leaving at least a 2-tile gap (preferably 3 or more tiles) before putting RD-4 starters, if necessary. Then, using the Avenue tool, drag 2-tile stubs extending out of the Avenue crosswalk piece, then connect them to RD-4 using the Road Tool, repeat for the opposite end. The result will be a refuge island configuration for RD-4, transitioning to a short Avenue segment.

{{< img-simple src="images/image016.jpg" >}}
{{< img-simple src="images/image018.jpg" >}}

The crosswalk pieces are designed to support uniform wealthing textures. The resulting texture will depend on which zones, lots and buildings are placed next to the crosswalk, but is guaranteed to cover the entire piece with the same texture type. They also support full sidewalk texture coverage in tight spaces, such as a crosswalk exposed to zoned land or lots from one side or even one corner. Players can control the appearance by changing which zones, buildings, and lots the crosswalks touch, the same way Avenues support continuous zoning textures based on the most common type of zone density and wealth along its alignment.

{{< img-simple src="images/image020.jpg" >}}

The 3 size options allow players to select the optimal size of the crosswalk to match their intended application. Sizes 1 and 3 are recommended for use in front of odd-length buildings and city blocks, where they can be centered with the building's front side (city hall example), or the mid-point of transportation network between intersections. Size 2 is recommended for use in front of even-length buildings and city blocks (high school example), centered in the same manner. All crosswalks support access to RCI development, unlike their transit lot predecessors. They can also connect to transit stations and to pedmall puzzle pieces, without the need of transit stops as an intermediary.

{{< img-simple src="images/image022.jpg" >}}
