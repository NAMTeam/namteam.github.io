---
title : "Bridges"
description: "Bridges are infrastructures that allow networks to cross bodies of water."
lead: "Bridges allow transportation networks to cross over bodies of water. This system includes not only the bridges developed by Maxis but also the various bridges that have been introduced by the NAM Team over time also expanding the bridge-building capabilities."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/bridges"
---

{{< docstatus status="workinprogress" >}}
{{< docstatus status="dllmod" >}}

## Maxis Bridge

TBA

## NAM Bridge

TBA

## Diagonal Bridge Enabler (DBE)

The **NAM Diagonal Bridge** is a mod intended for advanced users, containing a special "temporary" file, modifying the game's transit network slope and terrain parameters to allow for the construction of otherwise impossible diagonal bridges, coupled with starter pieces enabling several different styles of diagonal bridges.

{{< gallery col-xl="4" col-lg="2" >}}
images/dbeteaser1.jpg
images/dbeteaser2.jpg
images/dbeteaser3.jpg
images/dbeteaser4.jpg
{{< /gallery >}}

### Windows & Linux Installation (DLL Only)

Installing the mod requires that you have performed the installation of the **NAM.dll** which allows you to run the DBE Cheat in the region view allowing you to enable and disable DBE content without having to restart the game. 

Installing DBE requires moving the Diagonal Bridge Enabler folder inside the Simcity 4 folder found in the documents. "(Documents\SimCity 4)"

### Original method (No DLL)

The Diagonal Bridge Enabler contains just two file: the main file "DiagonalBridgeEnabler.dat", and "DiagonalBridgeEnabler_Locale_english.dat" (which contains description strings for pieces and menu icons). There are **temporary files** designed only to be used when you wish to construct diagonal bridges--it is recommended you take the entire **~Diagonal Bridge Enabler** folder and drop it into your Plugins, and remove the folder when you are finished constructing your diagonal bridges.

### Instructions

The installed files allow you to do the following things: 

* Lowers the sea level to 0, effectively draining any in-game bodies of water in an opened city.
* Forces the Road, One-Way Road, Rail and RealHighway networks to be completely level, allowing them to be dragged across the drained bodies of water.
* Enables buttons in the Roads and Rails menus containing draggable Diagonal Bridge starter pieces and Waterbridge Viaduct puzzle pieces.
* Adds pylon exemplars to the Rail and RealHighway networks.

Upon opening your city tile with the **Diagonal Bridge Enabler** folder installed, you will notice all game water has been drained from the map, and your terrain will have dramatically shifted color (with default Maxis terrain, it will appear that your city is now in a desert). If you attempt to drag the Road, One-Way Road, Rail or RealHighway networks, you will notice that they stay on a level plane and can be dragged across the chasms where the waterways once were in your city. You can use this to create diagonal, curving and even neighbor connecting bridges with these networks with Maxis' default pylons (see here for more information). Removing the temporary files when you are done will restore the terrain, refill your bodies of water, and return network slopes to their regular setting (either the defaults or whatever slope mod you may have installed).

{{< img-simple src="images/bridgetut-07.jpg">}}

However, these default pylon bridges may leave something to be desired from a visual, aesthetic standpoint. Thus, the DBE also enables a set of options, designed to emulate the look and feel of traditional SC4 water bridges.
The options available include the following:

**Diagonal Bridges (under the Roads Menu)**

* Road Level Bridge (drag with Road network)
* Road Lars Bridge (drag with Road network)
* Road Undertruss Bridge (drag with Road network)
* One-Way Road Level Bridge (drag with One-Way Road network)
* One-Way Road Lars Bridge (drag with One-Way Road network)
* One-Way Road Undertruss Bridge (drag with One-Way Road network)
* Avenue Level Bridge (drag with RealHighway network)
* Avenue Undertruss Bridge (drag with RealHighway network)
* Rail Level Bridge (drag with Rail network)
* Rail Undertruss Bridge (drag with Rail network)
* Ground Highway Bridge Standard (drag with RealHighway network)

These items under this button are all starter piece items, from which one drags the network listed above from the end of a puzzle piece.

First, you'll want to drag your network across the drained waterway as shown below:

{{< img-simple src="images/dbereadme1.jpg">}}

For the continuation of the ground roadway, you'll want to have a space between the bridge and the ground roadway as follows, and place the starter piece you wish to use on top in the following manner (with the arrows facing toward the bridge:

{{< img-simple src="images/dbereadme2.jpg">}}

This will convert part of the default pylon bridge.

{{< img-simple src="images/dbereadme3.jpg">}}

To continue converting the rest, simply click the network tool every few tiles along the path of the bridge, and it'll convert (tip: follow the pylons--it may be rather tricky at times because of the height of the pylons).

{{< img-simple src="images/dbereadme4.jpg">}}

Once you get to the other side, use a starter piece and place a gap between your bridge and ground roadway, and plop another starter piece. This will seal in the override and prevent the ground roadway on the other side from turning into a bridge as well.

{{< img-simple src="images/dbereadme5.jpg">}}

Now that you've built your bridge, you can now close the game, take the **~Diagonal Bridge Enabler (Temporary Files)**  folder out of your Plugins and reopen the game or return to the region and open the cheat console to write DBE OFF disabling DBE content . Your terrain and slope settings will be restored back to their previous settings, and the water will return:

{{< img-simple src="images/dbereadme6.jpg">}}

Since the techniques involved here do not support dual-tile networks, the Avenue and Ground Highway bridges are based off the RealHighway network, to keep the capacities up. Dragging a "shared tile" RealHighway setup is necessary in order for these to work.

{{< img-simple src="images/dbereadme7.jpg">}}

{{< img-simple src="images/dbereadme8.jpg">}}

While the pylon techniques do allow for curving, intersecting and neighbor connecting functionality, these draggable bridge items are currently intended for strictly diagonal usage--no curving or intersecting. Attempting to curve or intersect one of these bridges from their intended diagonal trajectory will result in the override breaking, leaving behind a default pylon bridge.

**Diagonal Viaduct Rail Waterbridges (under the Rails menu)**

* Diagonal Railroad Viaduct with Long Support
* Diagonal Railroad Viaduct Truss Bridge Start/End
* Diagonal Railroad Viaduct Truss Bridge (without supports)
* Diagonal Railroad Viaduct Truss Bridge with Long Support

These pieces allow for the construction of modular, puzzle piece-based Elevated Heavy Rail Viaduct Truss Bridges, designed to work with the NAM's Elevated Heavy Rail Viaducts. Their appearance will conform to whatever texture style you chose for the Rail Viaducts (Gray Brick, Brown Brick, or Red Brick) when you installed the NAM. To use these, simply drag out a diagonal default pylon bridge with the Rail network over your drained waterway, and plop the puzzle pieces over top.

{{< img-simple src="images/dbereadme9.jpg">}}

A finished product:

{{< img-simple src="images/dbereadme10.jpg">}}

## ABE

TBA
