---
title : "Real Railway (RRW)"
description: ""
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

{{< docstatus status="workinprogress" >}}

## Development History  

The **RealRailway** or **(RRW)** is the new standard for rail transport in the NAM. RealRailway supersedes **Maxis Rail** and **Railway Addon Mod (RAM)**. RRW is the only standard of rail receiving continual updates by the NAM Team since 2013 **(NAM 32)**. Many enhancements, such as FlexTrack, Fractional Angled Rails (FARR), and the draggable Elevated RealRailway (ERRW) are products exclusive to the RealRailway.

The RealRailway began with "mini-curves", which were to replace the existing Maxis curves and turnouts with a more realistic minimum curve radius:

![RRW minimum curve radius diagram](images/RRW-Minimum-Curve-Radius.jpg)  

Numerous other improvements followed including:

- Changing the gauge to represent standard gauge (1435 mm), which approximates to 12 pixels in absolute terms.
- Changing the track spacing from 4 meters to 4.5 meters.

The founder of the project, **Swordmaster**, determined the best way to make realistic railways by spacing out the tracks with the new gauge which makes the outer rails run flush with the Maxis rails but not with the inner rails.

The following is a snapshot from the initial 2013 RealRailway documentation which demonstrates the rationale for the shift to the RRW standard:  

![RRW Development Rationale](images/RRW-Development-Rationale.jpg)  

Notice how the road pieces line up with the real life road networks but the _Maxis_ Rail does not!  

At first, RealRailway was basic in appearance and functionality.  However, further enhancements have led to RRW surpassing the functionality of Maxis rail in the NAM.

---

## Basic Usage  

RealRailway is a complete replacement of the rail network.  Basic double-track rail (**DTR**) is drawn using the rail tool and advanced functionality is achieved with draggable patterns or ploppable FLEX pieces.  Single-track rail (**STR**) is provided as an override network and can initiated by a dedicated starter or by certain FLEX turnouts.  RRW also covers legacy DTR puzzle pieces and wide radius curves.

An explanation of the RRW menu icons is given below.

![RRW Icons](images/RealRailway-RailwayAddonMod-Icons.jpg)

## FlexTrack

NAM 33 delivered a suite of new functionality to the RealRailway known as FlexTrack. This advancement allowed for medium to large wide radius curves rechristened as _multi-radius curves_ (**MRC**).  Under the MRC nomenclature, sizes range from the smallest existing minicurves at **R1** to large, sweeping curves  at **R5**. Patterns were devised to allow the curves to drawn out with the rail tool without having to go into the puzzle piece tab loop. R1, R2 and R3 can also be made into turnouts by drawing orthogonally from the orthogonal end while there is support for diagonal turnouts with R1 and R3. R4 and R5 do not support any turnouts with there sole function to be curves! Also a range of new turnout options were introduced with the RealRailway FlexTrack component. This allowed for new turnouts in tight situations where the former parts where not applicable or accessible. FlexTrack improvements were spearheaded by **eggman121** who developed the new components building on the base provided by **Swordmaster**.

The FlexTrack currently relies on patterns to make the desired curves or turnouts/ switches. While there is the advantage of not having to go into the menu to find the pieces they can be hard to find the right patterns with conflicts if the pieces are too close to each other. Testing the capabilities in a blank region is always helpful to get the right patterns for the FlexTrack component.

The patterns and resultants are shown below.

### Curves

{{< override from="images/flextrack/curves/R2-P-before.jpg" to="images/flextrack/curves/R2-P-after.jpg" caption="Drag pattern MRC R2" >}}

{{< override from="images/flextrack/curves/R3-P-before.jpg" to="images/flextrack/curves/R3-P-after.jpg" caption="Drag pattern MRC R3" >}}

{{< override from="images/flextrack/curves/R4-P-before.jpg" to="images/flextrack/curves/R4-P-after.jpg" caption="Drag pattern MRC R4" >}}

{{< override from="images/flextrack/curves/R5-P-before.jpg" to="images/flextrack/curves/R5-P-after.jpg" caption="Drag pattern MRC R5" >}}

{{< override from="images/flextrack/curves/S2-P-before.jpg" to="images/flextrack/curves/S2-P-after.jpg" caption="Drag pattern RRW Orthogonal S-Curve" >}}

{{< override from="images/flextrack/curves/S-D-P-before.jpg" to="images/flextrack/curves/S-D-P-after.jpg" caption="Drag pattern RRW Diagonal S-Curve" >}}

### Macro Curves

At the start of the TAB loop for FLEX-Pieces there are a number of Pieces called _macro_-curves and switches. These are switches with wider geometry than previously-developed _mini_-curves which occupy a similar footprint. The curves and switches are offered as FLEX only due to the drag patterns arlready being used for the mini-curves. Macro-curves and switches are quite flexible in that drawing the rail tool through the piece placed down can make an array of different switches as shown in the table below.

![RRW macro-curve switch chart](images/FlexTrack/macro-curves/macro-switch-chart.jpg)

### Fractional Angle Railroad (FARR)

![Screenshot of RealRailway FARR](images/RRW-FARR.jpg)

Fractional Angle Rail Road (**FARR**) is the angled sections of track that conform to three angles which compiment the orthogonal (0 degrees) and diagional (45 degrees). They are FARR-3 (18.43 degrees), FARR-2 (26.56 degrees) and FARR-1.5 (33.69 degrees). FARR was originally developed to use drag patterns as the means of creation, however, the majority these patterns were replaced by FLEX piece implementation with NAM 37.  FARR Flex piece usage and remaining drag patterns are documented in this section.

#### FARR Flex Piece Usage

![FARR Flex Piece Usage](images/flextrack/FARR/RRW-FARR-Demonstration.jpg)

#### FARR-2 Drag Patterns

FARR-2 G2 Turnout

![Drag pattern FARR-2 G2 Turnout](images/FlexTrack/FARR/FA-2/G2-T-P.jpg)

#### FARR-1.5 Drag Patterns

FARR-1.5 to Diagonal

![Drag pattern FARR-1.5 to diagonal](images/FlexTrack/FARR/FA-1.5/FA-1.5-D-P.jpg)

FARR-1.5 J2 Turnout

![Drag pattern FARR-1.5 J2 turnout](images/FlexTrack/FARR/FA-1.5/J2-T-P.jpg)

#### FARR-2 Alt

The FARR-2 Alt has the same angle as the normal FARR-2 but has a different base and pattern. Also the geometry is slightly different and can make complex turnouts as shown further in the document. The FARR-2 Alternative implementation is considered a FlexTrack item.  Below are the various setups.  The base for the FARR-2 Alt is the zig zag base and is designed for _flat surfaces only_. This section of track has **no slope tolerance**.

FARR-2 Alt Straight

![Drag pattern FARR-2 alt straight](images/FlexTrack/FARR/FA-2-Alt/Alt-FA-2-P.jpg)

FARR-2 Alt to Orthogonal

![Drag pattern FARR-2 alt to orthogonal](images/FlexTrack/FARR/FA-2-Alt/Alt-FA-2-O-P.jpg)

FARR-2 Alt to Diagonal

![Drag pattern FARR-2 alt to diagonal](images/FlexTrack/FARR/FA-2-Alt/Alt-FA-2-D-P.jpg)

FARR-2 Alt G2 Turnout

![Drag pattern FARR-2 alt G2 turnout](images/FlexTrack/FARR/FA-2-Alt/Alt-FA-2-G2-P.jpg)

### Turnouts

The turnouts and switches come in all sorts of forms and there are a range of turnouts to use. They range from A1 Turnouts to large B2 extended turnouts as well. The set classes are shown in the table below. Not all the turnouts have been made. Some of the possibilities will need flex implementation to be realised. The table shown is just an example of the proposed turnouts. Additional turnouts have been made possible however for the Real Railway.

{{< img-simple src="images/flextrack/rrw_turnouts.jpg" clickable="yes" >}}

#### A Class Turnouts

![](images/flextrack/turnouts/A/A1-P.jpg)

![](images/flextrack/turnouts/A/A1-T1-Dual-P.jpg)

![](images/flextrack/turnouts/A/A1-Dual-P.jpg)

![](images/flextrack/turnouts/A/A2-P.jpg)

![](images/flextrack/turnouts/A/A2-Dual-P.jpg)

![](images/flextrack/turnouts/A/A2-T2-P.jpg)

![](images/flextrack/turnouts/A/A2-T3-P.jpg)

![](images/flextrack/turnouts/A/A2-X-P.jpg)

![](images/flextrack/turnouts/A/A2-D-P.jpg)

#### B Class Turnouts

![](images/flextrack/turnouts/B/B1-P.jpg)

![](images/flextrack/turnouts/B/B2-R2-P.jpg)

![](images/flextrack/turnouts/B/B2-R3-P.jpg)

![](images/flextrack/turnouts/B/B1-D-P.jpg)

![](images/flextrack/turnouts/B/B2-T2-P.jpg)

#### C Class Turnouts

![](images/flextrack/turnouts/C/C1-P.jpg)

![](images/flextrack/turnouts/C/C2-P.jpg)

![](images/flextrack/turnouts/C/C2-FA3-P.jpg)

#### D Class Turnouts

![](images/flextrack/turnouts/D/D1-P.jpg)

![](images/flextrack/turnouts/D/D2-P.jpg)

#### E Class Turnouts

![](images/flextrack/turnouts/E/E1-P.jpg)

![](images/flextrack/turnouts/E/E2-P.jpg)

![](images/CC-R2S-R3-P.jpg)

![](images/CC-R3-R2-P.jpg)

![](images/D2-CC-P.jpg)

#### FARR-2 Alt Turnouts

The small complex turnouts compliments the FARR-2 Alt with turnout setups that cross DTR with both STR and DTR variants. Upgrading to DTR involves drawing through the middle points as shown by the red arrow.  

![](images/ST-3-P.jpg)

![](images/ST-O-P.jpg)

![](images/ST-D-P.jpg)  

---  

## Elevated RealRailway (ERRW)  

Elevated RealRailway (**ERRW**) is the draggable implementation of heavy rail viaducts. ERRW is implemented at both L1 (7.5m) and L2 (15.5m). Both variants include support for some minicurves and multi radius curves. The MRCs supported are Radius (1, 2 and 3). 

### Height Transitions

Switching between ground level (L0) RRW and ERRW is accomplished using FLEX transition pieces found in the *Draggable Elevated Railways (ERRW)* menu.  

![](images/ERRW/Draggable-Elevated-Railways-ERRW_menu.jpg)

#### Usage Notes  

The rail is not to be drawn through the transition but to the stub at each end shown in the pictures below...

![](images/4.jpg)  ![](images/5.jpg)

White represents the adjoining stub connections while Black represents the network you want to cross.  

Upon a successful draw you should see something like this...

![](images/6.jpg)

This is the preview of the ERRW before placing it. Previews are in-place for the majority of the ERRW.

#### On-Slope Transitions  

Orthogonal on-slope transitions support the following configurations:

- L0 to L2  (_15.5m embankment_)
- L1 to L2  (_8m embankment_)
- L0 to L1  (_7.5m embankment_)

![](images/ERRW/OST-Orthogonal.jpg)

Diagonal on-slope transitions support the following configurations:

- L0 to L2 (_15.5m embankment_)
- L0 to L1 (_7.5m embankment_)

![](images/3.jpg)


#### Ramp-style Transitions  

It is also possible to transition from RRW to ERRW using ramp-style transitions.

![](images/ERRW/ERRW-Ramp-HT.jpg)  

### Curves and Turnouts


As mentioned above the R1, R2 and R3 curves can have overrides at each level for making elevated smooth curves. They use the flextrack base to work so they only work with the RRW flextrack curves.

R1 Curve  

![](images/7-0.jpg)
![](images/7-1.jpg)

R2 Curve  

![](images/8-0.jpg)
![](images/8-1.jpg)

R3 Curve  

![](images/9-0.jpg)
![](images/9-1.jpg)

MiniCurves

Some Minicurves and Mini Turnouts can be override to have elevated turnouts. Only some are shown below...

A2 Turnout  

![](images/A-0.jpg)
![](images/A-1.jpg)

B2 Turnout

![](images/B-0.jpg)
![](images/B-1.jpg)

A2 Wye Turnout  

![](images/C-0.jpg)
![](images/C-1.jpg)  

### Crossings


When crossing other networks a rail piece MUST! be placed on the concerning tile if you are crossing a non-rail network. This is due to the fact that rail code must be present in the network. Level crossing (LX) overridden by the ERRW are exempt however. A picture of what you should do is shown below...

![](images/D.jpg)

Of course this action is not needed if the network being crossed is the Rail network itself.

![](images/E.jpg)

#### Crossing Support

##### L1
{{< table class="table-bordered nam-compat-status" >}}
|      Network     |   OxO   | OxD | DxO | DxD |
|:----------------:|:-------:|:---:|:---:|:---:|
|      Street      |   Yes   |  No |  No |  No |
|       Road       |   Yes   |  No |  No |  No |
|   One Way Road   |   Yes   |  No |  No |  No |
|      Avenue      |   Yes   |  No |  No |  No |
|   Maxis Highway  |   Yes   |  No |  No |  No |
| Real Railway DTR |   Yes   |  No |  No | Yes |
| Real Railway STR |   Yes   |  No |  No | Yes |
|        MIS       |   Yes   |  No |  No |  No |
|       RHW-2      |   Yes   |  No |  No |  No |
|       RHW-3      | Partial |  No |  No |  No |
|      RHW-4S      |   Yes   |  No |  No |  No |
|      RHW-6S      |   Yes   |  No |  No |  No |
|      RHW-6C      |   Yes   |  No |  No |  No |
|      RHW-8S      |   Yes   |  No |  No |  No |
|      RHW-8C      |   Yes   |  No |  No |  No |
|      RHW-10S     |   Yes   |  No |  No |  No |
|       TLA3       |   Yes   |  No |  No |  No |
|       AVE2       |   Yes   |  No |  No |  No |
|       OWR-1      |   Yes   |  No |  No |  No |
|       OWR-3      |   Yes   |  No |  No |  No |
|       NRD-4      |   Yes   |  No |  No |  No |
|       TLA-5      |   Yes   |  No |  No |  No |
|       OWR-4      |   Yes   |  No |  No |  No |
|       OWR-5      |   Yes   |  No |  No |  No |
|       RD-4       |   Yes   |  No |  No |  No |
|       RD-6       |   Yes   |  No |  No |  No |
|       TLA-7      |   Yes   |  No |  No |  No |
|       AVE-6      |   Yes   |  No |  No |  No |
|     GLR Sets     |   Yes   |  No |  No |  No |
|        TOS       | Partial |  No |  No |  No |
|        TOR       | Partial |  No |  No |  No |
|        TIA       | Partial |  No |  No |  No |
|     SAM Sets     |   Yes   |  No |  No |  No |
|       GHSR       |   Yes   |  No |  No |  No |
{{< /table >}}

##### L2

{{< table class="table-bordered nam-compat-status" >}}
|      Network     |   OxO   | OxD | DxO | DxD |
|:----------------:|:-------:|:---:|:---:|:---:|
|      Street      |   Yes   |  No |  No |  No |
|       Road       |   Yes   |  No |  No |  No |
|   One Way Road   |   Yes   |  No |  No |  No |
|      Avenue      |   Yes   |  No |  No |  No |
|   Maxis Highway  |   Yes   |  No |  No |  No |
| Real Railway DTR |   Yes   |  No |  No | Yes |
| Real Railway STR |   Yes   |  No |  No | Yes |
|        MIS       |   Yes   |  No |  No |  No |
|       RHW-2      |   Yes   |  No |  No |  No |
|       RHW-3      | Partial |  No |  No |  No |
|      RHW-4S      |   Yes   |  No |  No |  No |
|      RHW-6S      |   Yes   |  No |  No |  No |
|      RHW-6C      |   Yes   |  No |  No |  No |
|      RHW-8S      |   Yes   |  No |  No |  No |
|      RHW-8C      |   Yes   |  No |  No |  No |
|      RHW-10S     |   Yes   |  No |  No |  No |
|       TLA3       |   Yes   |  No |  No |  No |
|       AVE2       |   Yes   |  No |  No |  No |
|       OWR-1      |   Yes   |  No |  No |  No |
|       OWR-3      |   Yes   |  No |  No |  No |
|       NRD-4      |   Yes   |  No |  No |  No |
|       TLA-5      |   Yes   |  No |  No |  No |
|       OWR-4      |   Yes   |  No |  No |  No |
|       OWR-5      |   Yes   |  No |  No |  No |
|       RD-4       |   Yes   |  No |  No |  No |
|       RD-6       |   Yes   |  No |  No |  No |
|       TLA-7      |   Yes   |  No |  No |  No |
|       AVE-6      |   Yes   |  No |  No |  No |
|     GLR Sets     |   Yes   |  No |  No |  No |
|        TOS       | Partial |  No |  No |  No |
|        TOR       | Partial |  No |  No |  No |
|        TIA       | Partial |  No |  No |  No |
|     SAM Sets     |   Yes   |  No |  No |  No |
|       GHSR       |   Yes   |  No |  No |  No |
{{< /table >}}

## Credits

The following members contributed to the development of the RealRailway:

- Swordmaster
- eggman121
- mgb204/rsc204
- woodb3kmaster
- Tarkus
- memo
- Shadow Assassin
- rivit
- Simmer2
- flann
