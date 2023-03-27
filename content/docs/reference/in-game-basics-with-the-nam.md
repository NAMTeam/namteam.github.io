---
title : "In-Game Basics with the NAM"
description: "The NAM has an incredibly exhaustive array of features -- understanding these concepts will make it much easier to use various tools in the NAM."
lead: "While the NAM has an incredibly exhaustive array of features--to the point at which few players will avail themselves of all of them--there are a few basic concepts that underlie all of the transportation network expansions within the mod. Understanding these concepts will make the process of acclimating to the various tools included in the NAM much easier."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 3
draft: false
images: []
url: "docs/reference/in-game-basics"
---


## Basic Types of Content

With respect to all the transportation network expansions within the NAM, they fall into two categories: **Draggable Items**, produced through dragging a transportation network in some fashion, and **Ploppable Items**, which are placed in a single click. Within these two categories, there are distinctions.

### Subtypes of Draggable Items

* Simple Draggable Items, which are constructed simply by dragging the network (or combination of networks) in an immediately apparent and intuitive manner.
* Pattern-Based Draggable Items, which are constructed by dragging out a special pattern with a given network (or combination of networks).

### Subtypes of Ploppable Items

* Static Puzzle Pieces (often simply called "Puzzle Pieces"), which are transportation network pieces, which do not interact with surrounding stretches of network, and remain fixed in form after placement.
* Starter Pieces, which are very simple transportation network pieces, which are designed specifically to interact with the game's base transportation networks and override them on a case-by-case basis, changing their appearance and behavior. In the absence of the ability to add additional "true" transportation networks, Starter Pieces have allowed the NAM to emulate those additions. The products of Starter Piece transformations are referred to as _Override Networks_.
* FLEX Pieces, which are transportation network pieces that _do_ interact with the surrounding stretches of network, and can accept overrides from various types of Draggable Items, Starter Pieces, and other FLEX Pieces, allowing a single piece to serve multiple functions, unlike a Static Puzzle Piece. FLEX Pieces, in some instances, can also act as more complex Starter Pieces, designed to serve specific purposes.
* Disconnectors, which are more delicate versions of the game's default Bulldozer tool, primarily intended for use with the [RealHighway](/docs/feature-guides/realhighway/) plugin.
* Hole Digger/Raiser Effects, which raise or lower the terrain by specific amounts upon placement. (These are not to be confused with the older Hole Digger/Raiser Lots.)
* Transit-Enabled Lots (or "TE Lots"), which are technically not transportation network items, but Lots that can accept input from transportation networks, carry traffic, and serve additional transportation-related purposes. Generally, they are used for transit stations, as they allow sims to switch transit types (i.e. from riding a train to walking). Toll booths are also a common use of TE Lots.

## Navigating NAM Menus and Items

While Simple and Pattern-Based Draggable Items are constructed directly through dragging the game's base transportation networks, all ploppable items must be selected via the game's menu system. The positioning of a given object can be controlled by using the following keys:

* _Home_ - rotate clockwise
* _End_ - rotate counter-clockwise

Note that with some items, Home/End rotation may produce a variant on the piece (i.e. a diagonal equivalent), or in some cases--particularly with the Flexible Underpasses (FLUPs)--may be the means to access entirely different pieces. These situations will be noted in the catalogue listings in the [Feature Guides](/docs/feature-guides/) included in this documentation.

All Ploppable Items except Transit-Enabled Lots--can all be combined into a set that is accessed under a single menu button, through the use of a _TAB Loop_ (known internally as a "RotationRing"). TAB Loops are named because the use of the _TAB_ key, and key combinations involving it, allow one to cycle through the various items under the selected button. Navigation through the various options under a single button is controlled using the following keys:

* _TAB_ - forward through the loop
* _Shift-TAB_ - backward through the loop

For instance, if a TAB Loop contains a total of 10 Ploppable Items, it would begin with Item 1, TAB would move forward to Item 2, Item 3, and so on, while Shift-TAB would move in reverse to Item 10, Item 9, etc. Once the end of the loop is reached, it will cycle back around to Item 1 and continue from there.

Each Transit-Enabled Lot must have its own menu button, as Lot-based items cannot be placed in TAB Loops. For more information, see the [Technical Information](/docs/reference/technical-information/) documentation.

**Special Note to _Steam_ Users**: The Steam Overlay is set to use the key combination _Shift-TAB_ by default. Through the Steam client, you will need to either change the key combination for the overlay, or disable it altogether in order to allow backward rotation through TAB Loops. The use of TAB and Shift-TAB by SimCity 4 is hardcoded, and attempting to use Shift-TAB without changing the overlay shortcut will cause the overlay to appear, instead of allowing one to navigate a TAB Loop in reverse as intended.

## Using Static Puzzle Pieces

Static Puzzle Pieces, once selected, will produce a hovering preview, showing the footprint of the piece over the terrain. Simply align the footprint with the desired position, using the Home and End keys to rotate and the mouse to align, and click the left mouse button to place the piece. If the preview appears to be highlighted in red, this means that the terrain or existing transportation network/lot setup underneath will not permit the piece to be placed. Static Puzzle Pieces can generally be placed over growable RCI (Residential/Commercial/Industrial) buildings, and will destroy any that lie in the footprint.

If you are planning on using sections of draggable network in the vicinity of the Static Puzzle Piece, unless the piece happens to have connector stubs, it is generally advisable to build the draggable network first, at least up to the edge of the Static Puzzle Piece's footprint, and then place the piece itself over top.

Some Static Puzzle Pieces--particularly those in the RealHighway (RHW) plugin--may have Starter Piece stubs attached to them, which, while easing the process of connecting the piece to the surrounding network, does limit the placement options for the piece to mostly flat terrain.

Static Puzzle Pieces do not accept overrides, and in addition to not changing to match their surroundings, will block the continuation of Override Networks. The only way to change the setup is to bulldoze the Static Puzzle Piece, and replace it with something else.

## Using Starter Pieces and Override Networks

Starter Pieces, once selected, will produce a hovering preview, showing the footprint of the piece over the terrain. Simply align t he footprint with the desired position, using the Home and End keys to rotate and the mouse to align, and click the left mouse button to place the piece. If the preview appears to be highlighted in red, this means that the terrain or existing transportation network/lot setup underneath will not permit the piece to be placed.

All Starter Pieces have a "Construction Tile", which is required by the game. The Construction Tile will be placed at the site of the cursor, and will self-destruct upon placement. If there is an existing stretch of network underneath the Construction Tile, a 1x1 "gap" will appear in its place after placement. Starter Pieces can generally be placed over growable RCI (Residential/Commercial/Industrial) buildings, and will destroy any that lie in the footprint--this is true of both the starter itself, and the Construction Tile.

Each Starter Piece will have a "base network" associated with it, which will be indicated on the tool-tip for the Starter Piece, shown while the piece is selected. In order to activate the override permitted by the Starter Piece, select the indicated network, and then drag the base network _through_ the Starter Piece. It should cause the base draggable network to convert to match the appearance of the Starter Piece, producing an Override Network.

## Using FLEX Pieces

FLEX Pieces, once selected, will produce a hovering preview, showing the footprint of the piece over the terrain. Simply align the footprint with the desired position, using the Home and End keys to rotate and the mouse to align, and click the left mouse button to place the piece. If the preview appears to be highlighted in red, this means that the terrain or existing transportation network/lot setup underneath will not permit the piece to be placed.

All FLEX Pieces have a "Construction Tile", which is required by the game. The Construction Tile will be placed at the site of the cursor, and will self-destruct upon placement. If there is an existing stretch of network underneath the Construction Tile, a 1x1 "gap" will appear in its place after placement. FLEX Pieces can generally be placed over growable RCI (Residential/Commercial/Industrial) buildings, and will destroy any that lie in the footprint--this is true of both the starter itself, and the Construction Tile.

Many FLEX Pieces will accept input from Override Networks, changing their appearance and function accordingly. To transform a FLEX Piece to a new configuration, simply drag the Override Network into the appropriate part of the FLEX Piece. If the setup is supported, it should transform to fit.

Some pieces of this type can also serve as Starter Pieces. For specific instances, see the [Feature Guides](/docs/feature-guides/).

## Using Pattern-Based Draggable Items

Pattern-Based Draggable Items are items built using a specific dragging pattern with one of the game's base networks. Upon completing the appropriate pattern, the item will convert over to the desired setup. Pattern-Based Draggable Items exist throughout the NAM's Plugins, with prominent examples in the Roundabout plugins, Wide-Radius Curves and Fractional Angle Networking, the transitions in the Network Widening Mod (NWM) plugin, and on/offramps in the RealHighway plugin.

Many Pattern-Based Draggable Items will accept input from the default networks and/or Override Networks, changing their appearance and function accordingly. To transform a Pattern-Based Draggable Item to a new configuration, simply drag the desired network into the appropriate part of the pattern. If the setup is supported, it should transform to fit.