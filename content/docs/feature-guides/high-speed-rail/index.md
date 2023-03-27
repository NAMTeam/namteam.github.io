---
title : "High Speed Rail"
description: "The High Speed Rail Project (HSRP) adds two new “model variation” overrides to the Monorail network."
lead: "The High Speed Rail Project (HSRP) adds two new “model variation” overrides to the Monorail network."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

{{< legacy >}}

In the early years of SC4, new technology was found by smoncrie which allowed us to use a single puzzle piece to create a starter for a new set of textures or models for the same network, there are already a few mods that take advantage of this technology, namely draggable GLR, SAM, and RHW. At the moment, there are two new model variations included in this mod, High Speed Rail (HSR, elevated) and Ground High Speed Rail (GHSR).

The original HSRP replaced Monorail. At the time this was the best way of implementation, and was created by 3ddz, founded by Murakamon, on the 24th of February 2006. Since then there has only been one release, HSRP Beta 1. This mod uses the original models from that release for HSR, and a lowered version for GHSR. No other modifications were made to the models.

_NOTE: The High Speed Rail Project, in its current form, is no longer in active development. Its planned successor, Real High Speed Rail (RHSR) system is currently in development._ 

{{< gallery col-xl="2" col-lg="2" >}}
    images/HSRP_01.jpg
    images/HSRP_02.jpg
{{< /gallery >}}

##  Installing the High Speed Rail Project from the NAM Installer

To install the High Speed Rail Project via Custom Installation, under the _2 Additional Network Features_ section, under _Monorail_, select the "High Speed Rail Project" option. This box is automatically selected by default.

##  HSR Override Networks

The High Speed Rail Project includes a total of two Monorail-based draggable override networks: the (Elevated) High Speed Rail network (HSR), which consists of an elevated track at a height of 15.5 meters (functionally equivalent to "Level 2" in NAM elevation nomenclature), and the Ground High Speed Rail network (GHSR), which sits essentially at ground level, at 1 meter elevation.

{{< img-simple src="images/hsr-networks.jpg" >}}

To build an HSR override network, first place the appropriate starter piece from the menu, then select the Monorail network tool, and drag Monorail through the starter. The stretch of Monorail should convert to the appropriate HSR network at that point.

{{< img-simple src="images/hsr-starter.jpg" >}}

Curves to diagonals can also be accomplished through simple dragging motions, as with any other draggable network. HSR has been designed to have a slightly wider radius for its default curve, which should be taken into consideration when building over/underpasses near curves.

{{< img-simple src="images/hsr-diagonal.jpg" >}}

Supported draggable crossing setups can be built much in the same way that Monorail crossings are, by simply dragging the HSR tracks over (or under) the desired network as appropriate. Due to game limitations, the crossing will initially show as a Monorail crossing in the preview, but provided the setup is supported, it will change to the appropriate HSR override network. HSR networks cannot cross other networks at the same height level, as grade separation is key to allowing the trains to operate at high speeds. Both HSR and GHSR, however, can cross over or under an L1 elevated network, such as the L1 RealHighway shown below.

{{< img-simple src="images/hsr-crossing.jpg" >}}

{{< img-simple src="images/ghsr-crossing.jpg" >}}

If a crossing reverts back to the base Monorail network, or results in a "blank spot" in the network, it is a sign that the particular setup is not supported by the plugin. Refer to the Network Capabilities section of this document for guidance. Note that some setups not possible through draggable means can be constructed through the use of static puzzle pieces (see [List of Menu Items](#list-of-menu-items) below).

##  Capacities and Speeds

The capacity and speed of both the Elevated and Ground High Speed Rail override networks is identical to that of the base Monorail network. The precise capacity depends on the Traffic Plugin one has installed. Capacity is generally calculated on a per tile basis by the game.

**Capacities**
{{< table class="table table-striped table-bordered w-auto" >}}
| Network | Classic | Low | Medium | High | Ultra |
| --- | --- | --- | --- | --- | --- |
| All HSR Networks | 5000 | 10000 | 16000 | 30000 | 65200 |
{{< /table >}}

**Speeds**
{{< table class="table table-striped table-bordered w-auto" >}}
| Network | Speed |
| --- | --- |
| HSR Train | 225 |
{{< /table >}}


## A Note Regarding Automata

As the High Speed Rail Project's override networks are Monorail-based, Monorail automata will appear on HSR tracks by default. If one wishes to change the appearance of the HSR trains, are several third-party HSRP automata skins available (which probably look nice on your Monorail tracks as well). One such set is the [VDK Train Mods Vol 7](http://sc4devotion.com/csxlex/lex_filedesc.php?lotGET=2975) package by NAM Team member **vester**.

## Bridges

The High Speed Rail Project supports several different types of bridges, for both the elevated HSR network and GHSR. To build the bridges, simply drag the Monorail network across the body of water (or sufficiently deep canyon), and options for HSR bridges will appear.

### HSR Bridges

* Cable-Stayed HSR Bridge
* HSR Bridge
* Bailey Truss HSR Bridge
* Concrete HSR Bridge
* High Speed Rail Suspension Bridge

{{< img-simple src="images/hsr-bridges1.jpg" >}}

### GHSR Bridges

* GHSR Bridge
* Concrete GHSR Bridge
* Warren Thru-Truss GHSR Bridge
* Box Girder GHSR Bridge
* Cable-Stayed GHSR Bridge

{{< img-simple src="images/hsr-bridges2.jpg" >}}

## Tunnels

Being based on the Monorail network, HSR and GHSR do NOT support the construction of properly functioning tunnels. However, one can convert to the Subway network from HSR by using third-party lots, such as the [HSRP Subway Converters](http://sc4devotion.com/csxlex/lex_filedesc.php?lotGET=2040) by **ebina** and **3ddz**.

## Stations

The NAM includes several stations for the HSR family of override networks, all of are Transit-Enabled Lots. In order to enable network passage through the network, simply drag the Monorail network through the station in the appropriate direction. All of these stations can be found under the Rails Menu.

1.	HSR Transit Hub by 3ddz
2.	Overhanging HSR Station by Xyloxadoria
3.	Ground High Speed Rail Station by Xyloxadoria
4.	High Speed Rail Station by Xyloxadoria
5.	High Speed Rail Station - Straight by morifari
6.	High Speed Rail Station - Diagonal by Xyloxadoria

{{< img-simple src="images/hsr-stations.jpg" >}}

## List of Menu Items

{{< menu-icon icon="images/ghsr-button.jpg" caption="_GHSR Pieces Button_" >}}

This button includes the base starter piece for the Ground High Speed Rail override network, plus various puzzle piece-based crossings.

1.	Ground High Speed Rail Starter Piece
2.	Orth/Diag L2 Road Viaduct x Orth GHSR
3.	Orth/Diag L2 One-Way Road Viaduct x Orth GHSR
4.	Orth/Diag L2 Rail Viaduct x Orth GHSR
5.	Orth L2 Avenue Viaduct x Orth GHSR
6.	Orth L2 Elevated Maxis Highway x Orth GHSR
7.	Orth Elevated Rail x Orth GHSR
8.	Orth High Elevated Rail x Orth GHSR
9.	Orth Monorail x Orth GHSR
10.	Orth High Monorail x Orth GHSR
11.	Orth HSR x Orth GHSR
12.	GHSR S-Curve
13.	GHSR-to-HSR Transition Ramp
14.	GHSR-to-HSR On-Slope Transition with HSR Starter
15.	GHSR-to-HSR On-Slope Transition without HSR Starter
16.	Underground Routes (FLUPs) under Orth HSR (various configurations)
17.	Ortho URail under Orth/Diag HSR
18.	Diag URail under Orth/Diag HSR

{{< menu-icon icon="images/hsr-button.jpg" caption="_HSR Pieces Button_" >}}

This button includes the base starter piece for the (elevated) High Speed Rail override network, plus various puzzle piece-based crossings.

1.	High Speed Rail Starter Piece
2.	High Speed Rail Filler Piece Orthogonal/Diagonal
3.	Orth HSR x Orth SAM Set 2 Crossing
4.	Orth HSR x Orth SAM Set 3 Crossing
5.	Orth HSR x Orth SAM Set 4 Crossing
6.	Orth HSR x Orth SAM Set 5 Crossing
7.	Orth HSR x Orth SAM Set 7 Crossing
8.	Orth HSR x Orth SAM Set 8 Crossing
9.	Orth HSR x Orth SAM Set 9 Crossing
10.	Orth HSR x Orth High El-Rail Crossing
11.	Orth HSR x Orth High Monorail Crossing
12.	Diag HSR x Orth Street
13.	Diag HSR x Orth Road
14.	Diag HSR x Orth One-Way Road
15.	Diag HSR x Orth Rail
16.	Diag HSR x Orth Avenue
17.	Diag HSR x Diag Street
18.	Diag HSR x Diag Road
19.	Diag HSR x Diag One-Way Road
20.	Diag HSR x Diag Rail
21.	Diag HSR x Diag Avenue
22.	Orth underground route (FLUPs) under Orth HSR No Pillar/Pillar
23.	Orth Perpendicular URail under Perpendicular Orth HSR
24.	Orth Perpendicular URail under Diag HSR
25.	Diag URail under Orth HSR
26.	Diag URail under Diag HSR

## Known Issues

* Monorail automata will show up on HSR tracks by default, unless new automata are installed.
* Placing under/overcrossings too close to curves will cause reversion to Monorail and other strange behavior. This is due to the wider radii of the default HSR curves.
* HSR Pieces button TAB Loop may not rotate fully back to starter pieces. If this occurs, simply re-select the button.

## Information on Support and Development Updates {{< legacy >}}

For technical support and information about the High Speed Rail Project in future releases, please check out the official High Speed Rail Project (HSRP) thread on the forums at [SimCity 4 Devotion](http://sc4devotion.com/forums/index.php?topic=2089.0).

_NOTE: The High Speed Rail Project, in its current form, is no longer in active development. Its planned successor, Real High Speed Rail (RHSR) system is currently in development._ 
