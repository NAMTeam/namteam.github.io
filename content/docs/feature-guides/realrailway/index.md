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

![](images/Real%20Railway-2.jpg)  

Numerous other improvements followed including:
- Changing the gauge to represent standard gauge (1435 mm), which approximates to 12 pixels in absolute terms. 
- Changing the track spacing from 4 meters to 4.5 meters. 

The founder of the project, **Swordmaster**, determined the best way to make realistic railways by spacing out the tracks with the new gauge which makes the outer rails run flush with the Maxis rails but not with the inner rails. 

The following is a snapshot from the initial 2013 RealRailway documentation which demonstrates the rationale for the shift to the RRW standard:  

![](images/Real%20Railway-1.jpg)  

Notice how the road pieces line up with the real life road networks but the _Maxis_ Rail does not!  

RealRailway was at first basic in appearance and functionality.  However, further enhancements have led to RRW surpassing the functionality of Maxis rail in the NAM.

 
---

## Basic Usage  

RealRailway is a complete replacement of the rail network.  Basic double-track rail (**DTR**) is drawn using the rail tool and advanced functionality is achieved with draggable patterns or ploppable FLEX pieces.  Single-track rail (**STR**) is provided as an override network and can initiated by a dedicated starter or by certain FLEX turnouts.  RRW also covers legacy DTR puzzle pieces and wide radius curves.  

## FlexTrack

NAM 33 delivered a suite of new functionality to the RealRailway known as FlexTrack. This advancement allowed for medium to large wide radius curves rechristened as *multi-radius curves* (**MRC**).  Under the MRC nomenclature, sizes range from the smallest existing minicurves at **R1** to large, sweeping curves  at **R5**. Patterns were devised to allow the curves to drawn out with the rail tool without having to go into the puzzle piece tab loop. R1, R2 and R3 can also be made into turnouts by drawing orthogonally from the orthogonal end while there is support for diagonal turnouts with R1 and R3. R4 and R5 do not support any turnouts with there sole function to be curves! Also a range of new turnout options were introduced with the RealRailway FlexTrack component. This allowed for new turnouts in tight situations where the former parts where not applicable or accessible. FlexTrack improvements were spearheaded by **eggman121** who developed the new components building on the base provided by **Swordmaster**.

The FlexTrack currently relies on patterns to make the desired curves or turnouts/ switches. While there is the advantage of not having to go into the menu to find the pieces they can be hard to find the right patterns with conflicts if the pieces are too close to each other. Testing the capabilities in a blank region is always helpful to get the right patterns for the FlexTrack component.

The patterns and resultants are shown below.... 


### Curves

![](images/FlexTrack/Curves/R2-P.jpg)  

![](images/FlexTrack/Curves/R3-P.jpg)  

![](images/FlexTrack/Curves/R4-P.jpg)  

![](images/FlexTrack/Curves/R5-P.jpg)  

![](images/FlexTrack/Curves/S2-P.jpg)  

![](images/FlexTrack/Curves/S-D-P.jpg)  

### Fractional Angle Railroad (FARR)

![](images/Real%20Railway-3.jpg)

Fractional Angle Rail Road (**FARR**) as it will be referenced from now is
the angled sections of track that conform to three angles to compiment
the orthogonal (0 degrees) and diagional (45 degrees). They are FARR-3
(18.43 degrees), FARR-2 (26.56 degrees) and FARR-1.5 (33.69
degrees). At the time of writing this document the FARR is only able to be drawn
out using the rail tool. Flex pieces for these sections of track are
anticipated but will arrive in a future edition of the NAM.

Patterns are shown below...

FARR-3

FARR-3 Stright

![](images/FA-3-O-P.jpg)


FARR-3 to Orthogonal

![](images/O-FA-3-P.jpg)

FARR-3 to Diagonal



![](images/D-FA-3-P.jpg)

FARR-3 to FARR-2

![](images/FA-3-FA-2-P.jpg)

FARR-2



FARR-2 Stright
![](images/FA-2-O-P.jpg)

FARR-2 to Orthogonal



![](images/O-FA-2-P.jpg)

FARR-2 to Diagonal

![](images/D-FA-2-P.jpg)

FARR-2 to FARR-1.5/1.33



![](images/FA-2-FA-1.5-P.jpg)
FARR-2 G2 Tunout

![](images/G2-T-P.jpg)

FARR-1.5/1.33

FARR-1.5/1.33 Stright



![](images/FA-1.5-P.jpg)
FARR-1.5/1.33 to Orthogonal



![](images/FA-1.5-O-P.jpg)
FARR-1.5/1.33 to Diagonal



![](images/FA-1.5-D-P.jpg)

FARR-1.5/1.33 J2 Tunout

![](images/J2-T-P.jpg)



### Turnouts

The turnouts and switches come in all sorts of forms and there are a range of turnouts to use. They range from A1 Turnouts to large B2 extended turnouts as well. The set classes are shown in the table below.Not all the turnouts have been made. Some of the possibilities will need flex implementation to be realised.The table shown is just an example of the proposed turnouts.Additional turnouts have been made possible however for the Real Railway.

![Table of proposed turnouts for the RealRailway](images/flextrack/rrw_turnouts.jpg)  

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



The FARR-2 Alt has the same angle as the normal FARR-2 but has a different base and pattern. Also the geometry is slightly different and can make complex turnouts as shown further in the document. The FARR-2
Alternative implementation is considered a FlexTrack item.Below are the various setups.The base for the FARR-2 Alt is the zig zag base and is designed for flat surfaces only. This section of track has no tolerance for slopes!

![](images/Alt-FA-2-P.jpg)

![](images/Alt-FA-2-O-P.jpg)

![](images/Alt-FA-2-D-P.jpg)

![](images/Alt-FA-2-G2-P.jpg)



The small complex turnouts compliments the FARR-2 Alt with turnout setups
that cross double track rail DTR with both single track rail STR and
DTR variants. Upgrading to DTR involves drawing through the middle
pointsas shown by the red arrow. 

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
- L0 to L2  (*15.5m embankment*)
- L1 to L2  (*8m embankment*)
- L0 to L1  (*7.5m embankment*)

![](images/ERRW/OST-Orthogonal.jpg)

Diagonal on-slope transitions support the following configurations:
- L0 to L2 (*15.5m embankment*)
- L0 to L1 (*7.5m embankment*)

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
