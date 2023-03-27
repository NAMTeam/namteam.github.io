---
title : "Hybrid Railway"
description: "The Hybrid Railway, or HRW is an intermediate FLEX based network that provides for both heavy and High Speed (Monorail) traffic. Specifications include catenaries, textures that are the same as the RRW along with some purpose-built textures for specific pieces."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/hybrid-railway"
---

{{< docstatus status="untranslated" >}}

The **Hybrid Railway**, or HRW is an intermediate FLEX based network that provides for both heavy and High Speed (Monorail) traffic. Specifications of the HRW include catenaries, textures that are the same as the RRW, as well as including some purpose-built textures for specific pieces.

In terms of functionality, the HRW handles both Heavy Rail (in orange) and Monorail as shown (in dark blue) below.

{{< img-simple src="images/~combined_use_HRW.jpg" class="mx-auto">}}


The HRW is a FLEX network utilising dual-networking (Rail and Monorail) pieces meaning it can only be constructed with FLEX pieces provided in the menus. To gain full functionality, all items require placing FLEX pieces, with drawability only relevant for transitioning to the RRW.

## Menu Icons

The HybridRailway menu icons are grouped together above the RealRailway and all of the HybridRailway content can be accessed from these buttons. The icons are courtesy of RVT or Rivit.

<table class="table table-striped table-bordered w-auto">
    <tr>
        <td rowspan="4" valign="middle">{{< menu-icon icon="images/_HRW-Icons.jpg" >}}</td>
        <td><b>Straight Pieces</b><br/>Contains straight segments in both Orthogonal and Diagonal of various lengths.</td>
    </tr>
    <tr>
        <td><b>Elevated Pieces [L1]</b><br/>Elevated starters including a L1 Flex Height Transition, Orthogonal and Diagonal FLEX onslope transitions.</td>
    </tr>
    <tr>
        <td><b>Multi-Radius Curves</b><br/>Includes curves from R1 to R5. Smaller curves are wider than their RRW counterparts</td>
    </tr>
    <tr>
        <td><b>Switches for the Hybrid Railway</b><br/>Switches for the HRW that include A2 types, B2 Types, Compounds and the FA-2 FLEX Switch pieces.</td>
    </tr>
</table>

## Multi-Radius Curves (MRCs)

There are 5 Radii of Multi-Radius curves that are similar to the RRW specified curves. Notably, the first three curves have a wider geometry than the equivalent RRW Multi-Radius curves. These are the R1-Macro curve, and the R2 and R3 alternative curves.

### Multi-Radius Curves for the Hybrid Railway

{{< img-simple src="images/1-R1-Macro.jpg" caption="Radius #1 Macro Alternative Curve">}}

{{< img-simple src="images/2-R2-Alt.jpg" caption="Radius #2 Macro Alternative Curve">}}

{{< img-simple src="images/3-R3-Alt.jpg" caption="Radius #3 Macro Alternative Curve">}}

The above curves have a wider geometry than the corresponding curves for the Real Railway. 

For reference, "alternative" notation refers to wider or bigger radii, and "short" refers to smaller radii than the standard Multi-Radius or Fractional Angle Curve.

{{< img-simple src="images/4-R4.jpg" caption="Radius #4 Curve">}}

{{< img-simple src="images/5-R5.jpg" caption="Radius #5 Curve">}}

## Hybrid Railway FLEX Switches

There are a few switch options for the Hybrid Railway system that consist of a few FLEX-piece items that can be used to make a variety of layout combinations. Apart from the FA-2 short FLEX Switch piece, these are partially static due to the mechanics of the codebase.

{{< img-simple src="images/a-A2-DTR-HRW.jpg" caption="A2 switch orthogonal single branch">}}
{{< img-simple src="images/b-A2-DTR-Dual-HRW.jpg" caption="A2 switch orthogonal dual switch">}}
{{< img-simple src="images/c-Symmetrical-to-Asymmetrical-Transition.jpg" caption="Symmetrical to asymmetrical bend (This is technically a curve, but it is located in the asymmetric switches tab ring)">}}
{{< img-simple src="images/d-D2-Asymmetric-DTR.jpg" caption="D2 asymmetric switch">}}
{{< img-simple src="images/e-B2-Switch.jpg" caption="B2 small switch (Note that the bend has the same geometry as the R1 curve)">}}
{{< img-simple src="images/f-B2-Switch-Wide.jpg" caption="B2 large switch (Note that the bend has the same geometry as the R2 curve)">}}
{{< img-simple src="images/g-Compound-Curve-R1-R2.jpg" caption="B1-R2 compound switch">}}
{{< img-simple src="images/h-Compound-Curve-R1-B2.jpg" caption="B1-B2 compound switch">}}

### FA-2 Short FLEX Switch Piece
The HRW also has a piece that can be made by placing down straight orthogonal segments to make a variety of switches for the Hybrid Railway. The piece is in the switches tab loop and can be used for fractional angle straight segments, bends, and switches.

{{< img-simple src="images/i-FLEXswitch-FA2s.jpg" caption="FA-2 short Flex-Switch piece">}}

The switches are made by adding in segments of straight to the FA2-s piece. Straight pieces can be compounded to make a longer straight section. This piece has limited slope tolerance. Below are the patterns for making various switches.

{{< img-simple src="images/FlexSwitch-FA2s.jpg" caption="These are just some of the combinations for the HRW FLEX-switch Piece">}}

{{< img-simple src="images/j-FLEXswitch-Demo.jpg" caption="A few possibilities with the FLEX-switch piece">}}

## Hybrid Railway Elevated Content

The Hybrid Railway has orthogonal and diagonal L1 sections or sections elevated to 7.5m. Only straight pieces can be elevated. Curves and swiches will remain at Ground level.

{{< img-simple src="images/El-Preview.jpg" caption="Diagonal overpass over the RHW6S">}}

## Stub-to-Stub (STS) Crossing Construction Method

The Hybrid Railway currently supports L1 or 7.5m elevation for straight pieces (orthogonal and diagonal), as well as crossings that are initated with the *stub to stub (STS)* method of crossings.

The STS method is very important for the construction of crosssings for the Hybrid Railway. Since the Hybrid Railway is a multi-network override in itself, the HRW crossings neet to use the Stub to Stub or STS method of making a crossing. A demonstration is below.

{{< img-simple src="images/StubToStubSTS_Crossing.jpg" caption="A diagram demonstrating the stub to stub method">}}

## Crossing Support

The Hybrid Railway supports a large amount of, but not all, crossings in the Network Addon Mod (NAM). Orthogonal crossing orthogonal has significant coverage in addition to other configurations. However, with the exception of HRW X HRW configurations, all crossings require the stub to stub method to complete them. 

> In the interests of keeping this document to a reasonable length, refer to [this section](/docs/tech-specs/hybrid-railway#intersection-support) of the Hybrid Railway technical document to see what crossings are supported.

## Stations for the Hybrid Railway

In addition, the HRW has a number of station options capable of utilizing both heavy rail and monorail/HSR traffic.

These stations have been created by **Tyberius06** and **ulisse99**.

{{< menu-icon icon="images/T_Station-Icons.jpg" caption="An example of various stations that were created to accompany the Hybrid Railway Mod. These stations are highlighted by the icons shown on the left." >}}
{{< menu-icon icon="images/U_Station-Icons.jpg" >}}

In most situations, the monorail tool will need to be drawn through the station to make a successful connection to the Hybrid Railway. For the Station to function correctly with both Heavy Rail and High Speed/Monorail traffic, the station needs to use monorail. If only Heavy Rail is used, the station will only accept Heavy Rail traffic.

{{< gallery col-xl="1" col-lg="1" col-md="1" caption="*Connecting a station to the Hybrid Railway*">}}
    images/FLEX-STATION-1.jpg
    images/FLEX-STATION-2.jpg
{{< /gallery >}}

The HRW network can support both Heavy Rail and High Speed/Monorail Traffic. Existing stations in a given city can be used with the Hybrid Railway, however will only support Heavy Rail.

## Tips and Tricks

There is one way to make or convert segments of the RRW to the HRW specification by following the below instructions. Note that this method only works with straight orthogonal or diagonal sections of the Real Railway.  

1. Draw out an Orthogonal or Diagonal segment of Railway.
{{< img-simple src="images/FLEX-1.jpg">}}

2. Click on each Rail section with the Monorail tool.
{{< img-simple src="images/FLEX-2.jpg">}}

3. After progressively clicking the RRW will be converted to the HRW as shown by the overhead wires and poles.
{{< img-simple src="images/FLEX-3.jpg">}}

Additionally, the height of the HRW L1 is the same as the L1 ERRW. Unfortunately the RRW flex On-Slope Transition is NOT compatible with the monorail network, however, an onslope piece can be used from the Elevated HRW menu instead.

{{< img-simple src="images/FLEX-HT-1.jpg">}}

With straight sections of L1 RRW, click on each tile with the Monorail network. An override is needed to make this function.

{{< img-simple src="images/FLEX-HT-2.jpg">}}

Tutorial pictures provided by **ulisse99**

## Credits

Without input from the NAM team this project would have not have been started. 

Some notable members that have contributed to the Hybrid Railway project are listed below.

* eggman121
* LucarioBoricua
* Rivit
* Tarkus
* Tyberius06
* ulisse99
* Vester