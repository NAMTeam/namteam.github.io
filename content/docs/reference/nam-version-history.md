---
title: "NAM Version History"
description: "NAM Version History"
lead: "An appendix of hosted documentation for nearly every release of the Network Addon Mod."
date: 2021-09-24T08:50:23+02:00
lastmod: 2021-09-24T08:50:23+02:00
draft: false
images: []
weight: 7
---

# Agile Releases (2020 and later)

## Version 47 (?? March 2023)
* **Pedestrian Revolution Mod Features**:
  - The NAM team is pleased to present the Classic Draggable Pedmalls, courtesy of Ulisse Wolf and Lucario Boricua. These come in 8 styles, 6 of which are equivalents to the Pedmall Puzzle Pieces, and introducing 2 new designs: the Retrowave Red Brick, inspired in the old brick texture used for the U-Rail in earlier NAM versions, and the Industrial Style, using the concrete surface typical of industrial lots. The initially supported features of these pedmalls include:
    - Multidirectional draggable starter pieces using the Street network, supporting all orthogonal, diagonal, intersection and roundabout configurations, with the exception of wide radius curves.
    - Intersection support (OXO T and 4-way) in the form of mid-block crosswalks. These support Road, Avenue, and all two-way Network Widening Mod override networks (TLA-3, AVE-2, ARD-3, NRD-4, TLA-5, RD-4, RD-6, TLA-7 and AVE-6). These draggable pedmalls are also compatible with the FLEX mid-block crosswalk pieces.
    - Special underground paths enable residential zone development, while crossings discourage car traffic through restricted car paths.
  - In addition, some enhancements to existing functionality have been implemented:
    - The override code for the size 3 mid-block crosswalks for TLA-7 and AVE-6 have been overhauled, enabling these to be overridden from one side.

* **RealHighway (RHW) Features**:
  - **RHW-12S**: A new, 12-lane quadruple-tile RHW network (separable into two dual-tile halves, carrying 6 lanes in each direction) has been added, with the following features:
    - Three height levels are supported: L0/Ground, L1/7.5-meter elevation, and L2/15-meter elevation.  Transitioning between these height levels is supported by the ramp-style FLEX Height Transitions (FLEX-HT), as well as the FLEX OnSlope Transitions (FLEX-OSTs), by connecting them to the RHW-12S networks.
    - The RHW-12S features the same network crossings presently available to the other S-Type RHW networks, including crossings in all orientations for all Maxis base networks, all other RHW networks, Draggable Ground Light Rail, and Draggable Road Viaducts (L0-under-Viaduct-only), plus Orthogonal x Orthogonal (OxO)-only support for Network Widening Mod networks, Elevated RealRailway (ERRW) Viaducts, Tram-on-Street, Tram-in-Road, and Tram-in-Avenue.  Limited Hybrid Railway (HRW) support also exists.
    - Extensive ramp interface support: supported ramps using FLEXRamps and Draggable Ramp Interfaces (when applicable) include Orthogonal Type A1 (all levels), Type B1 (all levels), Type D1 (all levels), Type E1 (all levels), Type A2 (all levels), Type B2 (L0 only), Type D2 (all levels), Type E2 (L0 only), Type A1-Inside (all levels), Type B1-Inside (all levels), Type D1-Inside (L0 only), Type E1-Inside (L0 only), the new Type A3 (L0 only) and Type D3 (L0 only), plus Diagonal Type A1 (L0 only), Type B1 (L0 only), Type D1 (L0 only), and Type E1 (L0 only).
    - FLEX Width Transition (FLEX-WT) has been added, to support width transitions between RHW-12S and RHW-10S at all applicable height levels.
    - FLEXFly over and undercrossings are supported with the RHW-12S (orthogonal-only, as diagonal undercrossings for FLEXFly do not presently exist for any network).
    - Several bridges have been added (see Bridge section).
    - Support for FlexSPUI is presently limited, and Three-Level Crossings are not yet supported.
  - **RHW X3 Ramps**: The first two FLEX 3-lane ramps, in A3 and D3 configurations, have been provided for RHW-8S, 10S and 12S. At present, only L0 support is available.
  - **General Improvements**
    - Some enhancements, courtesy of **memo99**, have been made to facilitate FLEXFly-over-FLEXFly functionality.
    - Some enhancements, courtesy of **Flann**, to elevated RHW network models have been added.
* **Bridges**:
  - A multitude of new bridges have been added, courtesy of **IDS2** and **Kitsune**.
* **Base Network Features**:
  - A new 5x5 90° Wide Radius Curve FLEX piece has been added to the Avenue network.
* **Miscellaneous**:
  - A huge list of bugfixes have been done for this release, including:
    - Various RHW situations involving "tile drops", such as the RHW-8S-to-6S FLEX Width Transitions, the RHW-8S Type D1, E1, and B2 ramps, and the RHW-10S Type D2 and E2 ramps, have received considerable stability upgrades.
    - The orientation of the Road end-T on OWR-1 intersection has been corrected.
    - The orientations of certain NWM intersections involving the OWR-1 network with Euro textures have been corrected.
    - Stability improvements have been made to the Ground Light Rail crossings with various wider RHW networks.
    - The Dual Type 230 QCXs with L1 Dual Type 230-over-RHW-8C/6C and RHW-10S/8S have been improved.
    - Issues in which lane drop arrows appeared in the wrong places on the S-to-C FLEX Width Transitions have been corrected.
    - The ramp textures for the RHW-10S Type D2 and E2 ramps, as well as for the RHW-8S Type A2-Wide and B2 ramps have been improved.
    - Orientation and stability issues have been fixed with the Avenue-based AVE-6 and its Thru-T-intersections with Street, Road, and One-Way Road (both Short-T and Long-T).
    - Orthogonal x Diagonal slip lanes involving Road and One-way Road (OWR) have been re-implemented.

## Version 46 (15 January 2023) (SC4 20th Anniversary)
* **Network Widening Mod (NWM) Features**:
  - Support for diagonal 4-way (+) intersections and crossings has been added for all six single-tile NWM networks (TLA-3, AVE-2, ARD-3, OWR-1, OWR-3, and NRD-4), including orthogonal X diagonal (OXD), diagonal X orthogonal (DXO) and diagonal X diagonal (DXD). These networks may cross one another, along with all base Maxis networks, Ground Light Rail (GLR), and Single-Track Rail (STR). Support for 3-way intersections, other NAM network families (i.e. RHW, SAM, etc.), and those involving multi-tile NWM networks will be added in a future phase.
  - A preliminary version of an Avenue-based form of the 6-lane Avenue (AVE-6) network has been added, which supports full wealthing. To build an AVE-6 with the Avenue tool, overlap two orthogonal Avenues, and they will convert (diagonals are not presently supported). Most intersections supported by the existing AVE-6 are supported with this new implementation, and it is also possible to transition to the traditional Road-based AVE-6 for any functionality not yet supported.
* **Network Widening Mod (NWM) Features**: Over 20 new Bridges have been added, courtesy of IDS2, including the first Bridges for the OWR-4 and OWR-5 networks (which are Avenue-based Bridges, due to the side-by-side Bridge limitation). Further bridge support has been added for RD-4, RD-6, SAM-6 (Klinker Streets), SAM-11 (MGB Industial), Double-Track Rail (DTR) and Single Track Rail (STR).
* **Hybrid Railway (HRW) Features**: L2 HRW support has been added, along with LHD improvements, and a reimplementation of the OnSlope Transitions to improve slope handling. Elevated support includes R2 elevated curves (at L1 and L2), orthogonal X orthogonal (OXO) crossings with the base road networks (Road, OWR, Avenue), the Network Widening Mod and the RealHighway, and diagonal X orthogonal (DXO) includes the base road networks and the RealHighway.
* **Rail Slope Settings**: An improved set of Rail Slope Settings has been prepared, providing more user choice and greater usability with the smoother/more restrictive options.
* **Base Network Features**:
  - Courtesy of the recently-returned Shadow Assassin, the diagonal transitions between the Avenue network and the Road and RHW-2 networks have been dramatically improved, and extended versions have been added. Direct connection transitions were re-designed for a smoother look, and the new extended versions use a stub-to-stub override.
  - In preparation for future phases of the NWM diagonal intersection expansion, the base T-intersections involving diagonal Road and/or One-Way Road have been revamped.
* **RealHighway (RHW) Features**:
  - The long-awaited Dual Type 230 QuickChange Xpress Diamond Interchange setups are now available, which allow one to quickly build pre-fabricated interchanges between various RealHighway (RHW) networks and the triple-tile NWM networks, complete with turn lanes and all the bells and whistles.
  - The Diagonal Ramp-Style FLEX Height Transitions now support RHW-3 and RHW-6S.
  - The Double-Decker RHW-4 (DDRHW-4) models have been revamped, courtesy of Ulisse, coupled with some improvements to base functionality.
  - The Type E1-Inside ramps now have elevated forms, and various incremental improvements have been made to the elevated ramp interface models.
  - The Type A2 and B2 merging ramps have been re-designed to feature a lane drop prior to connecting with the mainline lanes.
  - A new FLEX Width Transition piece has been added, to better facilitate transitions involving multi-tile S-type networks (especially the previously unstable RHW-8S-to-6S transitions, with their tile drop).
  - The MIS 2-Lane FLEX Turn Lanes (including the FLEX Height Transition) can now connect smoothly to FlexSPUI and FlexDDI.
 * **FLEX Turn Lane (FTL) Streetlights**: The FLEX Turn Lane (FTL) setups (except the very limited Avenue Type 020) now support streetlights.
 * **New NAM Website**: An official Network Addon Mod website has been launched, [https://www.sc4nam.com](https://www.sc4nam.com), featuring NAM documentation and feature guides.
 * **NAM Lite**: NAM Lite has now been spun off as a standalone download.

## Version 45 (8 September 2022)

* **Traffic Simulator Updates**: The NAM Traffic Simulator has been upgraded to Simulator Z 3.0, resulting in further optimizations to both the speed and accuracy of the simulation, and improved network utilization. The Low capacity version of the simulator is now the recommended version, as it provides the most optimized simulation. The Traffic Volume View Plugins have also been updated. The Traffic Simulator Configuration Tool (TSCT) has been discontinued and is no longer supported, as it was designed to work with the 2.x releases of Simulator Z, and because of the nature of the changes in the 3.0 release.
* **Ploppable Interchanges for the RealHighway (RHW) System**: The initial QuickChange Xpress (QCX) ploppable interchanges for the RHW have been incorporated, featuring 16 Road and Avenue Diamond Interchanges, which are FLEX-based, adding to their ease-of-use and post-plop customization potential. The QCX interchanges are at the end of the RHW QuickChange menu button on the Highways Menu.
* **Pedestrian Revolution Mod (PRM) Midblock Crosswalks**: The initial phase of the new Pedestrian Revolution Mod (PRM, or PedRev), spearheaded by developer **Lucario Boricua** has been added, featuring Midblock Crosswalk options for Roads, Avenues, and the two-way Network Widening Mod (NWM) override networks, in three sizes. These crosswalks calm traffic and allow for connections to the NAM's existing Pedestrian Mall (PedMall) features. The Midblock Crossings button can be found on the Roads Menu.
* **NAMLite Package**: The initial version of NAMLite, a bite-sized package for users looking for a minimal install has been added to the download, with its own installer. NAMLite Version 1 features the Traffic Simulator, Automata Controllers, bugfixes, One-Way Roads, Roundabouts, Diagonal Streets, and the option to install the Diagonal Street FLEX/Helper Pieces, Avenue Roundabouts, and Additional Highway Interchanges for the Maxis (Elevated) Highway and Ground Highway networks.
* **Hybrid Railway (HRW) Features**: L1 Diagonal support has been added, along with a number of new crossings.
* **Left-Hand Driving (LHD) Improvements**: The Left-Hand Driving (LHD) functionality of the NAM has been dramatically overhauled and improved, fixing numerous bugs and improving reliability for users playing the game with traffic running on the left side of roads and rails. Note that some RHW ramp interfaces and FLEX transitions may need to be reclicked as a result of their LHD reimplementation.
* **Documentation Upgrades**: The documentation has been thoroughly updated and now covers almost all NAM features to at least some extent, with the addition of feature guides for Hybrid Railway (HRW), the Pedestrian Revolution Mod, Ground Light Rail (GLR) and Tram Dual-Networking, the Elevated Road Viaducts, RealExpressway (REW), Utility Items (Network Eraser and Hole Diggers/Raisers), Underground Rail (URail), and the Canal Addon Mod (CAN-AM), alongside an updated glossary page.
* **Euro Texture Optimization**: As a result of the large-scale file cleanup effort undertaken following the release of NAM 44 (known as "NAM 44X"), the NAM's Euro textures largely operate independently, and no longer rely upon overrides of the default US texture set. This has decreased the size of a Euro Texture installation of the NAM by about 300MB, and along with other optimizations, has dropped the size of the NAM download package by about 150MB.
* **New Bridges**: A plethora of new bridges designed by **IDS2** have been added this release:
  - Walnut Street (V-Shaped Girder) Bridges: Support for Road, Street, One-Way Road, SAM Sets 2, 6, 7, 8, 9, and 10, RHW-2, and RHW-4.
  - Antheor Viaduct (Brick Arch Viaduct) Bridges: Support for RealRailway (RRW) Dual-Track Rail (DTR) and Single-Track Rail (STR).
  - Additionally, the existing Cable-Stayed Bridge has been ported to cover Ground Light Rail (GLR).
* **Additional RealExpressway Ramps**: New Road-to-OWR-1 splits have been added to the RealExpressway Mod, and can be found at the end of the RealExpressway Ramps button on the Roads Menu.
    RHW MIS Ramp and FLEX Turn Lane Additions: L1 support for MIS 2-Lane FLEX Turn Lanes (FTLs) has been added, including a new combination upward height/width transition. Additionally, network support for the MIS 2-Lane FTLs has been improved, along with the ability to use the same draggable method used on the One-Way Roads (via transition to Road prior to an intersection) for SITAP (Signalized Intersection and Turn Arrow Project) support has been incorporated. The 3x3 90° Curves for the MIS have also been ported to L1-L4 elevations.
* **RHW Model Improvements**: Courtesy of **Flann**, the elevated versions of the RHW-6C and RHW-8C now feature a single median barrier, matching their ground counterparts, and eliminating the previous gap between the two halves/carriageways of the highways. Additionally, the elevated versions of the 2x2 MIS Short 90° Curves have also received further optimization. New barrier and pillar textures by **Bipin** have also been incorporated to coincide with these changes.
* **Italian Translation**: As a result of the efforts of **ulisse99**, the entirety of the NAM has been translated into Italian.
* **Other Bugfixes**:
  - The level crossings for Ground Light Rail (GLR) and RealRailway (RRW) have been properly color-corrected.
  - Adjacency issues involving the RHW-8S Type D1 and Type D1-Inside ramps have been addressed.
  - 3x3 Street circles have been stabilized and modified to use a smoother blend curve.
  - The Ground Light Rail (GLR) pathing on the ulisse Transit Stations has been fixed.
  - The rotation of some intersections involving OWR-3 (esp. OWR-3 x AVE-2 +) has been corrected.
  - Various issues with the Maxis Highway and Maxis Highway Override crossings with the RealHighway (RHW) system have been addressed.
  - Fixes have been applied to the Elevated Light Rail and Monorail versions of the Cable-Stayed Bridge, the Steel Arch Rail Bridge, the High Elevated (30m) Monorail Bridge, and the L1/L2 RHW-8S and RHW-10S Viaduct Bridges.
  - Some stop point issues causing some signals on AVE-6 intersections with Avenue to remain permanently green have been addressed.
  - The model for the SimGoober-Style Canal Station in the Canal Addon Mod (CAN-AM) plugin has been fixed by **Tyberius06**.


## Version 44 (22 March 2022)

* **Hybrid Railway (HRW) Features**: The Hybrid Railway system now features FA-2 Alt content, new textures to blend with the RealRailway (RRW) system, improvements to catenaries, and major improvements to Left-Hand Drive [LHD] support.
* **RealHighway (RHW) x Avenue Features**:
  - The RealHighway (RHW) now has a FlexDDI system, allowing for FLEX-based Diverging Diamond interchanges with the Avenue network at ground level, and L1 and L2 elevations. Additionally, the FlexSPUI system now supports the L1 height level for the Type 120/Avenue configuration, along with stability improvements for all height levels. Both of these FLEX-based items can be found under a new button on the Roads menu.
  - Additionally, the Avenue Type A1 and B1 MIS Ramp Interfaces have received draggable forms, following the same basic drag patterns as the RHW Type A1 and B1 Ramp Interfaces.
* **RealHighway (RHW) Curves**: new 90° draggable Mini-Curves have been added.
  - The new 3x3 R1 90° Curves support the ground-level RHW-2, RHW-3, RHW-4, and MIS Ramp networks.
  - The new 4x4 R1.5 90° Curves support the ground-level RHW-2, RHW-3, RHW-4, RHW-6S, and MIS Ramp networks.
  - The RHW-6S also now supports the 5x5 R2 90° Curve configuration.
  - MIS Ramp network support has been added to the FLEX S-Curve, and minor aesthetic improvements have been made to the L1 and above RHW-4 FLEX S-Curves.
* **RealHighway (RHW) Transitions**:
  - 45° Curved FLEX Height Transitions at the R3 radius have been added, covering the RHW-2 (L0-L1), RHW-4 (L0-L1, L1-L2, L2-L3, L3-L4), and MIS Ramp (L0-L1, L1-L2, L2-L3, L3-L4) networks.
  - Diagonal FLEX OnSlope (FLEX-OST) support has been added for the RHW-3 and RHW-6S networks.
  - Additionally, further adjacency stability has been added to the 4x4 90° Curved FLEX Height Transitions.
* **Bridges**: New Viaduct Bridges have been added for Avenue (L0, L1, and L2), RHW-8S and RHW-10S (L1 and L2), and RealRailway (L0, L1, L2 for double track, L0 and L1 for single track).
* **Flexible Turn Lane (FTL) Features**:
  - FLEX-based FTL Height Transitions have been added, including for the Type 120 Avenue (Ascending, L0-L1 and L0-L2--use the FLEX Pieces for ramp-style transitions, or drag the FTL setup into the ground end of the On-Slope Transitions to transition the turn lanes to elevation), and RealHighway MIS-2 Lane (Descending, L1-L0, with FLEX Pieces for ramp-style transitions) configurations.
  - Limited L1 and L2 Type 120 Avenue FTL support has been added (primarily for connecting to the L1 and L2 FlexSPUI).
  - The Type 230 configuration for the Triple-Tile Network Widening Mod (NWM) networks has received draggable support for rail-type crossings, including Rail (both Dual and Single-Track), L1 and L2 Rail Viaducts, Standard and Rural Ground Light Rail (GLR), Elevated (Light) Rail, and Monorail. The MIS 2-Lane configuration has also received support for Avenue + and T-intersections (without FTLs), and One-Way Road intersections (with SITAP--Signalization and Turn Arrow Project--support, using the appropriate FLEX intersections).
  - Additionally, Avenues can now end at T-intersections with the Road/NWM Type 110 configuration, with turn arrows provided by the new Avenue Type 020 FTLs.
* **Streets and the Street Addon Mod (SAM)**: The draggable Diagonal S-Curves now work for SAM Sets 2 through 11.
* **Network Widening Mod (NWM) x Street Addon Mod (SAM)**: Adjacency support for the Network Widening Mod (NWM) networks' intersections with the Street Addon Mod (SAM) sets has been vastly improved.
* **FLEX Overpasses**: The Road, One-Way Road (OWR), and Avenue networks have now received FLEX Overpasses, which allow for prefabricated orthogonal viaduct overcrossings of 1-4 tiles to be built. The length can be selected by using Home and End to rotate the overpass. Simply drag any orthogonal network underneath the FLEX Overpasses to cross below them.
* **RHW Disconnector/NAM Eraser**: The RHW Disconnector Tool has been rechristened the NAM Eraser, reflecting its ability to erase 1x1 network tiles of any network or network crossing combination. Additionally, it is also now available on all network menus.
* **User Interface**:
  - The NAM's menu buttons have been reworked, providing a cleaner image and, to improve internationalization (i18n), the English text has been removed from the icons themselves.
  - The buttons have also been reordered, in an effort to improve the overall experience.
  - Additionally, the old puzzle piece-based overpasses have been related to legacy status.
* **Left-Hand Drive Support**: Various improvements have been made across the board to LHD pathing.
* **Morifari Victorian Stations**: The Morifari Victorian Stations for Elevated Light Rail and Rail Viaducts have been restored, with some associated bugs fixed.
* **Other Bugfixes**:
  - The RHW-10S will no longer flip improperly under Elevated RealRailway (ERRW) crossings.
  - Diagonal x Diagonal (DxD) crossings involving the MIS Ramp and RHW-8C network have been improved.
  - Pathing issues on the RHW-6C and RHW-8C FLEX Neighbor Connections have been addressed.
  - Fixed the Euro textures on the RHW-6S Type A2 Wide ramp.
  - The extraneous arrows on the RHW-2-to-4 and RHW-4-to-6C FLEX Width Transitions in LHD have been addressed.
  - Drag-through issues involving the Triple-Tile-Thru x Dual-Tile-End FLEX T-intersections in the Flexible Turn Lanes (FTLs) have been fixed.

## Version 43 (24 December 2021)

* The NAM Traffic Simulator (also known as "Simulator Z") has been upgraded to Version 2.6.2, further refining pathfinding.
* Type 230 FLEX Turn Lanes (FTL) have been added for the triple-tile networks (TLA-7 and AVE-6) in the Network Widening Mod (NWM), allowing for dual left turns (or in Left-Hand Drive [LHD], dual right turns). Use the RealHighway (RHW) network tool to draw the center tile of this new FTL type. Additionally, the FLEX intersections for use with the wider FTL types have been improved.
* A number of new bridges have been added, including ones supporting the L1 and L2 elevated forms of the Road, One-Way Road, RHW-2, RHW-3, RHW-4, RHW-6S, and MIS Ramp networks .
* New curved switch, double-track median split (for use with overhanging stations), and L0/L1 "basketweave" FLEX pieces have been added to the Hybrid Railway (HRW) system, which allows for joint Rail and High Speed Rail (Monorail) traffic. Additionally, the HRW FLEX Height Transitions have been given their own button.
* Two new transit stations by ulisse99 have been added, the HRW Union Station (for Hybrid Railway) and the GLR Transit Hub (for Light Rail/Tram). Additionally, the transit switches for all recently-added stations have been updated, improving their functionality.
* The RealHighway (RHW) system has received an initial round of FLEX Turn Lanes (FTLs), covering the RHW-2 (Type 110), RHW-4 (Type 120--built by overriding the Type 110 transition with an RHW-4), and MIS Ramp (2-Lane) networks. Additionally, FLEX-based SITAP (Signalized Intersection and Turn Arrow Project) support has been added to the base RHW-2 network, with all new FTL intersections (except Street intersections) supporting signalized and unsignalized forms. All such items can be found under the RHW FLEX Turn Lanes button, on the Highways menu.
* The One-Way Road version of SITAP has been given FLEX intersections and a new FLEX transition/starter (OWR Type 020), which allows the turn lane arrows to be extended by the user. All of these items can be found under the FLEX Turn Lanes button, under the Roads menu. Additionally, Left-Hand Drive (LHD) support for SITAP has been improved.
* A transition from the Network Widening Mod (NWM)'s RD-4 network to the Type 120 FLEX Turn Lanes (FTLs) has been added.
* A new draggable version of the OWR-3-to-OWR-5 transition in the NWM has been added.
* Two new FLEX items have been added to the RealRailway (RRW) system: a double-track median split (for use with overhanging stations), and an L1-L2 ramp-style height transition. Additionally, the orthogonal 1-Level FLEX On-Slope now supports L1-L2 transitions.
* The RealHighway (RHW) FLEX-based Multi-Radius Curves (MRCs) in all radii (R1-R5), as well as the FLEX S-Curve, now all support the L0 RHW-3 network.
* Draggable stub-to-stub Height Transitions have been added for many RHW networks (except the base RHW-2). To construct, click over one of the stubs with the Elevated (Light) Rail tool to prevent the RHW's normal auto-connect behavior, thereby allowing the transition overrides to initiate.
* An issue causing the old RHW-2, MIS, and RHW-4 Flexible Underpass (FLUPs) Overcrossing Puzzle Pieces (from the Roads x RHW button on the Roads menu) has been addressed. Since this issue was the result of an Instance ID conflict with the new RHW-3 and RHW-4 FLEX FLUPs Portals, **any existing RHW-3 and RHW-4 FLEX FLUPs Portal will need to be rebuilt, by simply clicking over the portal with the RHW network tool**. Additionally, the preview models for the FLEX-FLUPs Road and One-Way Road Portals have been corrected, and all portals should now function properly in LHD.
* Some directional flip issues with multi-tile Network Widening Mod (NWM) networks crossing under elevated RealHighway (RHW) networks have been addressed.
* A conflict between the Road Roundabouts and the Network Widening Mod (NWM) that was preventing T-intersections involving two triple-tile networks has been resolved.
* An issue in which the "strict" version of the RealRailway (RRW) Slope Parameters would be installed regardless has been fixed.
* The streetlight placement on the Draggable Road Viaducts (L1 and L2 Road, One-Way Road, and Avenue) has been improved.
* **Holiday Bonus**: A special holiday highway sign by **Lucario Boricua** is available in the NAM 43 download. Simply move **_NAM_Christmas_Sign.dat_** into your Plugins folder and look for the new sign under the Misc Transit Menu to enjoy.

## Version 42 (24 August 2021)

* The long-awaited 3-Level Crossings for the RealHighway (RHW) system have been added.
* The Network Widening Mod (NWM) networks now have vastly improved stability, including in tight situations. Note that some intersections have been rotated as part of this process, and may appear to be in the wrong position upon loading. Simply clicking these situations with the appropriate network tool with re-orient them.
* RHW FLEX Width Transitions (FLEX-WTs) are now available, supporting over 200 possible network configurations with only 5 FLEX Pieces, with vastly improved slope tolerance. To use the FLEX-WTs, simply connect the desired networks into each end of the transition.
* The RHW FLEX Height Transitions (FLEX-HT) have been expanded to include a new 1-Level 90° Curved version, which presently supports L0-L1 RHW-2, L0-L1 MIS, and L0-L1 RHW-4.
* RHW FLEX Neighbor Connectors (FLEX-NCs) are now available, supporting every RHW network, including the L1-L4 elevated networks.
* An RHW Basketweave FLEX Piece has been added, allowing for ramp crossings in tight quarters, presently for L0 and L1 RHW-4.
* An RHW FLEX S-Curve has been added, allowing support for L0-L2 RHW-2 and L0-L4 RHW-4.
* Draggable Smooth Diagonal S-Curves have been added to the Road, One-Way Road, OWR-1, RHW-2, and MIS networks, along with the ability to make a Street version via the existing Diagonal Street FLEX/Helper Pieces.
* The Road Roundabouts have been overhauled, with revamped textures, a new center island prop, and support for new intersection combinations with Road, Street, One-Way Road, RHW-2, and MIS.
* The NAM's Bridge system has undergone a revamp, with a new file architecture, a new OWR-3 Thru Truss bridge, various cosmetic fixes for bridges at various lengths, and pathing corrections to the RHW-6S Compact Box Girder.
* Several new large, multi-line stations for the Hybrid Railway (HRW) and RealRailway (RRW) networks have been added.
* The Diagonal Streets textures have been revamped.
* Stop-controlled "rural" intersections have been added: Road x Road +, Road x Road T, Avenue x Road +, Avenue x Road T (Avenue-Thru/Road-End), FTL Type 110 x Road +, and FTL Type 110 x Road T (FTL-Thru/Road-End). To add stop control, transition a Road to Street one tile before an intersection, and then cross/intersect it with Street. Limited support was provided for these in previous recent releases, and any such existing intersections will need to be rebuilt.
* A long-standing issue with the RHW-8S Type E1 ramps, when overridden from the bottom of the ramp, has been corrected.
* The Canal Addon Mod (CAN-AM) now has improved automata generation, as well as improvements to station functionality.
* The RRW Slope and Tunnel Parameters section now has three options: Maxis Default (which now changes the tunnel models to match the RRW), Moderate (the new default), and Strict (the only option previously).
* Various stability issues with the ERRW Viaduct crossings with RHW networks have been addressed.
* A shell script has been added to the installation package, to improve the user experience on Linux (thanks to **Durfsurn**.
* Various LHD path fixes for the RRW and Avenue Roundabouts have been incorporated.
* The draggable form of the RHW-8S Type D2 Wide ramp has been stabilized.
* An option to remove "legacy" RHW menu buttons from the Highways menu has been added, along with general Highways menu improvements. The "Compact" RHW-6C-to-4 Transition Puzzle Piece has been disabled from the Legacy Width Transitions menu, due to conflict with other items.
* The Single-Tile Roundabouts have undergone revision, and may need to be rebuilt in existing cities.

## Version 41 (24 April 2021)

* **Note: in order to ensure proper installation of NAM releases using the current installer, please remove the "Network Addon Mod" folder (and if still present, "z___NAM" folder) from the Plugins directory (usually My Documents\SimCity 4\Plugins on Windows) before installing a new NAM version. The Cleanup/Cleanitol functionality is not presently designed to remove full NAM installations.**
* The RealExpressway (REW) system for the One-Way Road network has been reimplemented and expanded. In addition to the previous Draggable Ramp Interfaces (DRIs), new FLEXRamps and Multi-Radius Curves (MRCs) have been added, and options for new, more consistent Avenue-style striping for all the One-Way Road networks have been added. The new FLEXRamps available include the Orthogonal and Diagonal OWR-2 Type A1 (Orthogonal overrideable with OWR-1), Orthogonal, Diagonal, and Curved OWR-2 Type B1 (Orthogonal overrideable with OWR-1), Orthogonal and Diagonal OWR-2 Type D1, Orthogonal OWR-3 Type D1, Orthogonal OWR-2 Type E1, and Orthogonal OWR-3 Type E1. MRCs supported include R1-R5 radii for OWR-2, R1-R3 for OWR-1, and R2-R5 for OWR-3. Note that in order to combat hardcoded "Tidal Flow" issues, the FLEX-based REW items are bidirectionally pathed, and use special network flags that do not allow them to be overplopped on existing stretches of One-Way Road.
* The SAM-to-SAM and SAM-to-Street Transitions for the Street Addon Mod (SAM) have been revamped, stabilized, and expanded, adding wealth texture support, new support for SAM Set 1, and improved support for SAM Set 11.
* The new Subway-based FLUPs system has been revamped to be easier to use. New underground starter pieces for the URoad-2, URoad-3, URamp, and URoad-4 (underground equivalents of the RHW-2, RHW-3, MIS, and RHW-4, respectively) have been added, and can be placed directly over top of Subway, allowing the network to be converted with a simple click of the Subway tool afterward. The starters at the ends of the FLUPs Portals have been removed, making construction--particularly involving side-by-side RHW-4 portals--far less temperamental. More details can be found in the Flexible Underpasses (FLUPs) Feature Guide.
* A conflict between the new FLUPs and the old, legacy RHW FLUPs Crossing Puzzle Pieces (particularly the RHW-2 and RHW-4 crossings) has been resolved. Note that any old RHW-2 and RHW-4 FLUPs Crossing Puzzle Pieces will need to be rebuilt.
* The Rails and Misc Transit menus have been revamped, to bring the base networks back up to the top of the menu.
* A pathing issue preventing traffic from utilizing the center tile on RHW-6C and RHW-8C crossings involving the Road and One-Way Road Draggable Viaducts has been resolved.
* The RHW Diagonal FLEXHeight Transitions (FLEX-HT) should now properly support L3-L4 MIS and L3-L4 RHW-4.
* A new FLEX Piece has been added to the Avenue intersections button, allowing two Streets to intersect an Avenue without crossing. Being FLEX-based, it also supports SAM Streets.
* The RHW Orthgonal Type E1 FLEXRamps and DRIs should no longer automatically produce RHW-3 out the top of the ramp's mainline, improving overall stability with other networks.
* A glitch involving intersections following Dual Slip Lanes off the Type 110 FLEX Turn Lanes (FTLs) has been resolved.
* Fractional Angle Road intersections with the Street network now feature improved textures by Jiwoahn.

## Version 40 (1 April 2021)

* The installation package has been refined to minimize the potential for Windows users failing to properly install the 4GB Patch and having the game crash to desktop (CTD) as a result--the #1 tech support issue with recent NAM releases. A new batch file has been introduced to automate the process of applying the 4GB Patch to the game's executable (special thanks to **CorinaMarie**), and installation options for "Low RAM/No RHW" versions of the NAM Controller have been added for users who on Windows XP and other 32-bit operating systems, and/or have less than 4GB RAM. (The Mac version, being 64-bit, does not require the 4GB Patch.) Windows users should begin the installation process with "NetworkAddonMod_Setup_Version40.bat" instead of the .jar file.
* Draggable Slip Lanes are now possible at Orthogonal x Diagonal (OxD) intersections involving base Streets, Roads, One-Way Roads, and Avenues. Simply drag the One-Way Road tool between the intersecting networks at the appropriate corner to make the connection.
* About 40 new ramp interfaces have been added to the RealHighway (RHW) system, including Diagonal Type A1 and B1 ramps for all ground networks, Diagonal Type D1 and E1 for the L0 RHW-2, RHW-3, RHW-4, RHW-6S, RHW-8S, RHW-8C, and RHW-10S, along with Orthogonal Type D1 and E1 ramps for the L0 RHW-3. Additionally, the D1 and E1 ramps have been rebased from RHW-4 to RHW-3, improving override stability in the process.
* The new Subway-based FLUPs system has been expanded to include entrance/exit portals for the RHW-3 and RHW-4 networks, along with underground ramp interfaces for all present networks. Additionally, some path jumping issues with certain NWM overrides of the FLEX Overcrossing Pieces (FLEX-OCPs) have been corrected.
* Small 90° Curve (2x2) support has been expanded. The Road Small 90° can now accept overrides from the Road-based Network Widening Mod (NWM) networks (TLA-3, AVE-2, ARD-3, and NRD-4), and One-Way Road Small 90° Curves are now supported as well, which allow overrides from the NWM's OWR-1 and OWR-3.
* It is now possible to build Diverters for Road, Street, and (same type) SAM +-intersections, allowing one to divert thru traffic and convert the intersections into pairs of Small 90° Wide Radius Curves, while still allowing Pedestrian usage. For instructions on the build process, please consult the Base Features Guide in the main documentation package.
* All of the override networks included in the Network Widening Mod (NWM) can now form Orthogonal x Orthogonal (OxO) + and T-intersections with Street Addon Mod (SAM) Sets 2 through 11.
* The Auto-Destruct Hole Diggers and Raisers have been expanded to include smaller increments--0.1 meters, 0.5 meters, 1 meter, 2 meters, and 5 meters.
* The Orthogonal RHW FLEX On-Slope Transitions (FLEX-OSTs) have undergone further refinement.
* The Diagonal RHW FLEX Height Transitions (FLEX-HTs) now support overrides for higher elevations of the RHW-4 and MIS Ramp networks (L1-L2, L2-L3, and L3-L4).
* The Network Widening Mod (NWM) is once again referred to by its original name in the installer, rather than as "Additional Widths and Turn Lanes".
* The newer overrideable versions of the Multi-Radius Curves (MRCs) for Road now have proper Euro textures.
* The stability of the OWR-1 override of the RIRO/LILO (Right/Left In, Right/Left Out) Slip Lanes has been improved.
* Stability improvements have been made to the Type 220 x Type 220 T-Intersection in the FLEX Turn Lane/QuickTurn system.
* Issues with the Single-Tile Roundabouts allowing the network to drag out the incorrect side (and not out the correct side) in Left-Hand Driving (LHD) mode have been addressed.
* + and T-intersections involving One-Way Road-based "Boulevards" (a configuration in which two One-Way Roads are separated by a one-tile median) no longer inadvertently convert into One-Way Road Roundabouts.
* Minor file architecture improvements have been made to prevent installation errors involving the Legacy Auto Avenue Turn Lanes and Legacy Semi-Auto Road Turning Lanes, which would lead to blank intersections and approaches at Avenue x Avenue and Road x Road intersections--the #2 tech support issue in recent NAM releases.
* A long-standing missing texture glitch with the L1-L4 RHW-4 Type E1 ramps has been corrected.
* An adjacency glitch involving the RHW-2 connection to the One-Way Road Roundabouts when next to a Diagonal Road connection has been addressed.
* Various other minor stability improvements have been made to the RHW, NWM, and HRW (Hybrid Railway) RUL2 override code.

## Version 39 (3 December 2020)

* New Subway-based draggable implementation of the Flexible Underpass (FLUPs) system added, with FLEX-based network portals (modeled by **Girafe**) and underground networks for the RealHighway's RHW-2 and MIS networks. These portals include working nightlights, and options for both Maxis Nite and Dark Nite (selectable under the "Texture and Drive Side Support" section of the installer).
* Three new draggable "Alternate Viaduct" styles added for the Road Viaducts--Stone Arch, Steel Arch, and Japanese (JPN) Facelift. These new viaducts act as separate networks, and are designed specifically for use as part of short oorthogonal overpasses over orthogonal networks, starting from On-Slope Transitions. Additionally, the Alternate Viaducts can be overridden by the Street network and some SAM types.
* A FLEX On-Slope transition (FLEX-OST) has been added for the Hybrid Railway (HRW) FLEX-based dual-network.
* FLEX On-Slope Transitions (FLEX-OSTs) for the RealHighway (RHW) plugin have been fixed, and now function as intended.
* Support for 90° R1 "Mini-Curves" (3x3 footprint) has been added for the Road network.
* Diagonal crossover paths and DIPs (Distilled Intersection Paths) have been added to the diagonals for the Wider RHW networks (courtesy of **McDuell** and Triple-Tile NWM networks (courtesy of **Ganaram Inukshuk**), improving capacity and functionality of the diagonal RHW-8S, RHW-10S, RHW-6C, RHW-8C, TLA-7, and AVE-6 networks.
* Various improvements have been made to the NWM TLA-7/AVE-6-to-Dual-OWR-3 draggable transition, including the addition of proper Distilled Intersection Paths (DIPs) to mitigate capacity issues, along with fixing broken LHD pathing
* The RULs for the LHD version of the FLEX Turn Lanes (FTL) Type 130 x Type 110 intersections have been improved, to eliminate previous texture and path flipping errors.

## Version 38 (3 September 2020)

* The L1 (Level 1, 7.5m height) Draggable Road, One-Way Road, and Avenue Viaducts can now form diagonal crossings with the following networks: Street, Road, One-Way Road, Avenue, Rail, Single-Track Rail (STR), Ground Light Rail (GLR), Elevated Light Rail, Monorail, L0 RHW-2, L0 RHW-3, L0 MIS, L0 RHW-4, L0 RHW-6S, L0 RHW-8S, L0 RHW-10S, L0 RHW-6C, L0 RHW-8C, and L1 MIS. Adjacency stability has been dramatically improved for all L1 Road, One-Way Road, and Avenue Viaduct crossings, and Diagonal FLEX Height Transitions have been added.
* Diagonal FLEX Height Transitions (FLEX-HT) for the RHW-2, MIS, and RHW-4 have been added (all L0-L1 only). Note that the RHW-2 version does not automatically produce L1 RHW-2 by dragging out the top--a change that has been extended to the Orthogonal FLEX-HT as well, to improve stability.
* The Hybrid Rail (HR) FLEX Piece system has been added. Hybrid Rail tracks allow both Passenger Rail and Monorail/High Speed Rail traffic (designed for use with the future Real High Speed Rail (RHSR)), and also feature overhead catenaries. Stations, switches, and a base set of L1 Viaducts have been included.
* Transitions between different Street sets in the Street Addon Mod (SAM) plugin are now possible, thanks to the addition of a new FLEX Transition piece.
* New Single-Tile Roundabout FLEX Piece added. The Single-Tile Roundabout allows for connections to Road and Street, and as the name indicates, takes up less room than the NAM's other Roundabout options.
* The Road Roundabouts have become more flexible, allowing double corner connections. Stability and pathng improvements have also been made.
* The diagonals for the Wider RHWs have received stability coding improvements. In addition, a capacity issue with the RHW-6C and RHW-8C diagonals has been addressed.
* The RHW Disconnector now covers all possible network combinations (including Non-RHW Combinations), allowing for more gentle bulldozing of any network setting.
* A multitude of pathing issues have been addressed, including a number of paths dating back to the original game, which had somehow escaped both Maxis and the NAM Team for the past 16 years.
* Some of the overridable Road Multi-Radius Curves (MRCs) added in NAM 37 have been migrated to new Instance IDs (IIDs) and may need to be rebuilt. This change is designed to better accomodate future expansion of One-Way Road Multi-Radius Curve and Fractional Angle capabilities.
* The GLR/Tram-in-Road and GLR/Tram-on-Street stations have been restored.

## Version 37 (2 July 2020)

* The NAM has switched over to a new Java-based installer designed by **daeley**, with cross-platform support for any operating system that supports the [Java Runtime Environment (JRE)](https://www.oracle.com/java/technologies/javase-jre8-downloads.html).
* The RealHighway (RHW) system has undergone a massive code overhaul ("Mark IV"), greatly improving stability, especially in compact situations. Diagonal x Diagonal (DxD) crossings (grade-separated) between wider RHW networks should now be possible in most situations.
* The RealRailway (RRW) system is now the default (and only) option for the Rail network. Users wishing to retain the original Maxis Rail should download the separate Maxis Rail Legacy Plugin.
* Various cosmetic/legacy plugins, such as the Bullet Train Mod (BTM) and El-Rail Alternate Implementation, are no longer directly available within the main NAM download, due to crosslink and support issues. They will be available as separate downloads, as Legacy Plugins with no guarantee of support or further upgrades.
* An initial basic version of the RealExpressway (REW) mod is now available.
* A pathing issue affecting intersections with the Diagonal Streets Plugin, dating back to NAM 20 (!) has now been fixed (thanks to **McDuell**).
* RRW Fractional Angle and FlexTrack switch content can now be constructed using easier-to-use FLEX Pieces, rather than memorizing drag/draw patterns. Some limited Fractional Angle elevated support is now available.
* The Road-based Single-Tile and Dual-Tile Network Widening Mod (NWM) networks now support Multi-Radius Curves (MRCs). For the single-tile networks, override the base Road MRCs with the appropriate NWM network to convert them, and use the dedicated pieces for the dual-tile versions (the RD-6 uses an override of the TLA-5 version--place Road stubs to fill in the "bites" on the RD-6 R4 curve).
* L3 and L4 FLEXFly pieces are now available for the RHW.
* RHW FlexSPUI has been redesigned, with improved support for the current array of RHW networks. Support for L0 and L2 is present (use the legacy TuLEP OnSlope to connect to the L2 version).
* Orthogonal TLA-3 and AVE-2 connections to the One-Way Road Roundabouts are now supported.
* Three new RHW FLEXRamps are now supported: Type D1-Inside (RHW-4 base), Type E1-Inside (RHW-4 base), and Type D1-Inside Dual Shift (RHW-6C base). Additionally, L1 and L2 support has been added to the Type A2 ramps for the RHW-8C and RHW-10S networks, and the L1 and L2 versions of the RHW-3 network now support Type A1 and B1 ramps.
* Various "tidal flow"-related pathing issues with the Draggable Elevated One-Way Road Viaducts have been addressed.
* File encoding issues with certain NAM files that have been known to cause crash-to-desktop (CTD) errors with Aspyr's new 64-bit macOS port of SimCity 4 (currently just the App Store version) have been fixed.
* A new bridge has been added for the NWM's NRD-4 network.

### _Changes introduced since the NAM 37 Release Candidate of 23/24 April 2020:_

* The new FlexSPUI V2 now works properly in LHD mode.
* Drag pattern interference between the new draggable Road Small 90° Curve and the Road Long FA3 (71.6°) curve has been eliminated.
* Issues with various RHW and NWM bridges have been addressed, including the RHW-4 Small Steel Arch, the RHW-6S Concrete Arch Dual, and the NRD-4 Thru Truss. The accidentally-omitted DDRHW-4 bridge has also (again) be re-added.
* Missing textures/paths on some RHW T-intersections involving diagonals have been addressed.
* New draggable Road curves (Small 90° and Small S) have received Euro texture support.
* Issues involving the L1 RHW-8C crossings over Avenue have been addressed.
* Pathing for the RHW-3-to-ARD-3 transition has been fixed.
* The texture for the OWR-3 x OWR-2 +-intersection has been rotated to the correct direction.
* Tidal flow issues with the Slip Lane functionality, causing paths to not function in certain directions (esp. in LHD) have been fixed.
* Various Euro texture issues with the RHW-8C Type D1 ramp have been fixed.
* The OWR-1-to-MIS transition has been fixed.
* Avenue-to-MIS transitions have been fixed.
* Both US and EU textures for the RHW-6C and 8C Type D1 Dual Shift Inside FLEXRamp have been fixed.
* Various fixes have been made to the RealRailway (RRW) network.
* Pathing fixes have been made to the draggable Wide-Radius Curve (WRC)/Multi-Radius Curve (MRC) and Fractional Angle (FA) functionality.
* TLA Center Turn Arrow cosmetic mod now installed as option under Texture and Drive Side options, fixing previous file architecture issues.
* Mac-only issues with GHSR network showing Monorail supports have been fixed.
* Some INRUL-based issues with the RRW FlexTrack system have been addressed, particularly with the J2 Turnout (Ortho-to-FARR-1.33/1.5). Note that these changes have altered the availability of some drag patterns, and clicking on some existing switches may break them. Such switches will need to be rebuilt using their FLEX Piece equivalent.
* Note that no new features have been added since the NAM 37 Release Candidate. Addition of new content will resume with NAM 38 development.

# Monolithic Releases (2013 through 2017)

## Version 36 (13 September 2017)

* New FLEX Turn Lanes (FTL) feature added, providing a more intuitive and flexible alternative to the old Turn Lane Extension Pieces (TuLEPs, now deprecated).
* Draggable Elevated RealRailway (RRW) viaducts added at L1 (7.5 meter) and L2 (15 meter) heights.
* One-Way Road Signalized Intersection and Turn Arrow Project (SITAP) expanded to cover intersections with FLEX Turn Lanes and Road-based multi-tile NWM networks.
* Street Addon Mod (SAM) Set 11 - IndustrieSAM by mgb204 added, providing a new, industrial-style Street texture.
* Draggable Wide-Radius Curve functionality added to all applicable Street Addon Mod (SAM) override networks.
* RealRailway (RRW) FlexTrack functionality expanded to cover additional setups.
* R5 radius Multi-Radius Curves (MRCs) added to the Road network.
* Diagonal FLEX On-Slope Transitions added to the RHW, supporting 1 and 2-level transitions for the RHW-2, RHW-4, and MIS networks.
* R4 and R5 radii Multi-Radius Curves (MRCs) added to the RealHighway (RHW) system, with support for the L0 RHW-2, L0 RHW-4, and L0 RHW-6S netwoks. Overlap ability also added to the ground-level R2 curves for the RHW, allowing for smoother loop ramps.
* Diagonal MIS Connection support added to the One-Way Road Roundabouts.
* Texture glitch fixed with the Euro version of the L1-L4 RHW-6S Type A2 FLEXRamps/DRIs.
* Minor pathing fix to improve zone access on the TLA-7 network in the Network Widening Mod (NWM).
* The compression scheme on the NAM Installer has been changed, making it such that the external 7-Zip SFX layer surrounding it is no longer needed.
* New edition of the NAM documentation started, marking a return to the HTML format used prior to the NAM 31.x releases of 2013. Please note that due to the incredible scope of the mod, and the amount of time to adequately document features, that some sections may remain in an incomplete state.

## Version 35 (4 November 2016)

* New RealRailway (RRW) FlexTrack functionality, including draggable Fractional Angle Railroads (FARR) at three angles (FA-2, FA-3, and FA-1.33/1.5) and improved Single-Track Rail (STR) support.
* Vastly improved adjacency stability for ramp-style RealHighway (RHW) FLEX Height Transitions, including many adjacencies with FLEXRamps and Draggable Ramp Interfaces (DRIs).
* Several new draggable NWM transitions: NRD-4-to-ARD-3, NRD-4-to-Avenue, NRD-4-to-TLA-5, NRD-4-to-RD-4, Road-to-RD-4, TLA-3-to-Avenue, TLA-3-to-TLA-5, AVE-2-to-TLA-5, AVE-2-to-Avenue, TLA-7/AVE-6-to-Dual-OWR-3, OWR-4-to-RHW-8S, OWR-5-to-RHW-10S, and OWR-1-to-MIS. These transitions can either be built through the stub method, or (in case of different base networks), direct connection.
* At-grade intersection support for the Road, OWR, and Avenue Viaducts, plus other stability and cosmetic improvements.
* Multi-Radius Curve (MRC) functionality added to the L1 and L2 RHW-2.
* A number of path fixes involving elevated RHW networks.
* Support for at-grade RHW-4 x Avenue, RHW-3 x Avenue and MIS x Street intersections (OxO only), as well as improvements and additions to RHW-2 and MIS diagonal intersections with Maxis surface networks.
* Proper P57-era RHW support for Moonlinght's Alternate El-Rail and Bullet Train (Shinkansen) mods (OxO only).
* Various fixes to the Maxis Highway Override (MHO), including improved RealRailway (RRW) support, support for moonlinght's Alternate El-Rail and Bullet Train, and Level Bridges for both L0 and L2 MHO networks.
* Re-implementation of some multi-tile RHW and NWM starter pieces, to improve stability in preparation for future additions. Legacy code has been added to provide stability to older, unconverted starters.

## Version 34 (25 December 2015)

* The Tram-in-Avenue (TiA), Tram-in-Road (TiR), Tram-on-Road (ToR), and Tram-on-Street (ToS) dual networks are now partially draggable. To activate the dual networks, click the Elevated Rail tool over Avenue for TiA, the Elevated Rail tool over Road for TiR, the Rail tool for ToR, and the Elevated Rail tool on Street for ToS.
* Elevated RealHighway (RHW) networks and draggable Elevated Road, One-Way Road, and Avenue Viaducts can now form overpasses over Tram-in-Avenue, Tram-in-Road, Tram-on-Road, and Tram-on-Street dual networks. Simply drag the crossing network up to the edge of the Tram Dual-Network to form a stub, and begin dragging from stub on the other side of the Tram Dual-Network to continue the network. Some support for networks besides RHWs and the Road Viaducts has also been added, using similar means.
* RealHighway crossings over Network Widening Mod networks are now vastly more stable.
* Multi-Radius Curves (MRCs) for the Road network have been added in draggable form, in four different radii (R1-R4).
* Signalized intersections for One-Way Roads are now possible in the initial phase of the OWR Signalization and Turn Arrow Project (SITAP), complete with turn arrows before the intersection (**NOTE: LHD functionality for this feature may still be limited**). These signals cannot automatically appear, due to the game's handling of One-Way Road mechanics, but can be activated by transitioning from One-Way Road to Road just before the intersection. For intersections between two One-Way Roads, it is necessary to click over the resultant 90-degree Road bend with the One-Way Road tool. +-intersections and T-intersections between One-Way Roads and Roads, One-Way Roads, Avenues, and +-intersections (no T-intersections) with single-tile Road-based NWM networks (TLA-3, AVE-2, ARD-3, NRD-4) are available.
* 7 new bridges by eggman121 have been added, including the first-ever NWM bridges for the RD-4 and RD-6 networks, plus a new RHW-4 bridge, and four RealRailway (RRW) bridges.
* FLEX On-Slope Transitions for the Elevated Road, One-Way Road, and Avenue Viaducts have been improved to support tighter situations, where a network is directly below the elevated end of the transition.
* Many Elevated RHW base network features now show preview textures.
* An issue with High Speed Rail crossings over wider ground-level RHW networks has been addressed.
* An issue preventing the proper override of the ramp interfaces on L1 RHW QuickChanges has been fixed. Some clickaround may still be necessary to force the overrides to continue.

## Version 33 (26 November 2015)

* Massive update to the Draggable Ramp Interface (DRI) and FLEXRamp systems in the RealHighway (RHW) Mod. 90% of all previous static puzzle piece ramps have been given easier-to-use FLEX and/or draggable counterparts, and a plethora of new ramp interfaces for elevated RHW networks are now available, Wealth textures are included for ground level versions.
* The RHW FLEXFly system has been completely overhauled, and now includes 90-degree and 45-degree versions, in single and dual-lane configurations, at Ground Level (L0), 7.5m (L1), and 15m (L2) heights.
* The double-decker RHW-4 (DDRHW-4) has been lowered one level (from L2/L3 to L1/L2), increasing ease of use. The DDRHW-4 has also gained support for DRIs and FLEXRamps, including A1 and B1 Outside and Inside Ramps.
* Disconnector added, to simplify demolition of FLEX-based RHW pieces.
* Multi-Radius Curves (MRCs), in both draggable and FLEX form, have been added to the RealHighway Mod, in three different radii, for the RHW-2, MIS, RHW-4, and RHW-6S.
* Stability improvements to the FLEX Height Transitions.
* Major improvements to the RealRailway (RRW) plugin, which now supports most crossings.
* Transit station functionality and compatibility has been further improved.
* Minor fixes to other NAM components.
* New High Speed Rail Project (HSRP) textures, courtesy of **vershner**.

### _Changes introduced since the NAM 33 Pre-Release of 29 July 2015:_

* The RealRailway (RRW) FlexTrack system makes an earlier-than-expected debut. See the FlexTrack User's Guide in the Documentation folder for more details.
* PedMall functionality greatly enhanced with the addition of access paths to most non-Highway-type road networks, including NWM networks and Tram/El-Rail Dual-Networking items. Pedestrians may now directly access the PedMalls from these other networks without the need of a station or other transit-enabled lot/switch.
* Many custom bridges that previously blocked all ferry traffic have now been corrected.
* MandelSoft's previous RHW texture sets, including Euro, Ontario, and Irish/South African textures, have been discontinued. A new standard Euro RHW set, based on the default US set, has been added as a replacement, and adds compatibility for all current RHW features.
* An issue with the NAM 33 Pre-Release in which the Controller Compiler would fail due to an XML read error has been fixed.
* Several overhanging texture issues with the new RHW ramp interfaces have been corrected.
* The R3 FLEX-Multi Radius Curve now rotates fully as intended.
* A number of Left-Hand Drive transit path file issues across the entire mod have been added or corrected for proper functionality.

## Version 32.1 [Mac-only] (28 June 2014)

* Solved file encoding issues on Additional Bridges, High Monorail, and High Elevated Rail, which prevented the NAM from running on Universal Binary versions of the Aspyr Mac port of SimCity 4 Deluxe.
* Introduced an installer to NAM Mac version, using a Wineskin wrapper of the Windows installer.
* Addressed some other transportation-related issues present in the Aspyr Mac port.

## Version 32 (14 January 2014)

* The NAM Elevated Viaducts for Roads, One-Way Roads, and Avenues are now available in a draggable form, at both Level 1 (7.5 meter) and Level 2 (15 meter) heights, complete with FLEX Height and On-Slope transitions. Overpass situations involving one or more diagonal networks are not yet supported.
* Elevated Rail-over-Avenue and Elevated Rail-over-NWM Road-4 dual-networking support has been added, complete with a new station supporting both networks.
* The initial phases of the RealRailway (RRW) system have been added. This feature must be selected as part of a custom install.
* The RealHighway (RHW) system has been expanded to include the QuickChange interchange system, which blends the RHW's modularity with the ease of Maxis Highway construction techniques for certain situations, which will be expanded in future NAM releases. Additionally, several new types of FLEXRamps are available--please read the instructions in the description text. FLEX Transitions have also been given stability improvements for certain situations.
* Coupled with the RHW system, the NAM now offers Bus Rapid Transit (BRT) functionality, including stations.
* Transit station functionality has been further improved, including the beginning of the implementation of the SLURP, which will gradually raise all transit stations to NAM standards.
* The NAM Controller Compiler has been included with the installer, with which it now communicates, ensuring that only the installed features are incorporated into the NAM Controller, reducing file size and load times. (The e-series and s-series controllers have been discontinued.)
* About 50 bugs reported since the start of the NAM 32 Pre-Release have also been squished, including some that had been present since earlier versions of the NAM. It is highly recommended that users update to the latest NAM in order to enjoy a more stable experience.

## Version 31.2 (4 June 2013)

* Integration of 4GB Patch into installer, further preventing risk of CTDs on newer systems.
* Maxis Highway Custom Interchanges button re-enabled, after fixing HID re-index issue in RUL0 file.
* "Sinkhole-to-China" bugs fixed on several RealHighway (RHW) pieces.
* L2 RHW x RHW OxD Stability improved.
* Maxis Highway Override/"Project Symphony" Type A ramp is now able to be fully rotated.
* RHW-10S bridge no longer has issues with missing tiles.
* DDRHW-4 paths now at proper heights.
* Maxis Highway Override/"Project Symphony" no longer causes CTDs when dragged under High Speed Rail.
* Further improvements to RealHighway filler pieces.
* Maxis Highway Override/"Project Symphony" OxD crossing with Rail Viaducts now facing the correct direction on all tiles.
* Multiple "rainbow tile" issues fixed.
* Some files moved from Rail Viaducts to Base Contents, to address issue with "missing tiles" reported by users who did not install the viaducts.
* Several LHD path fixes for bridges.
* Under/overpass on starter situations improved for RHW starters.
* While the expanded RealHighway functionality available in the 31.x-series releases is much more stable in Version 31.2, issues still exist with the L1 and L2 Diagonal RHW-6C, 8C, 8S, and 10S, when crossing over other RealHighways. The overpass may behave as if it is prevented, or produce inexplicable results. Due to the complexity of the coding for any sort of crosslinking between two override networks (especially when one is multi-tile and diagonal), solving this issue is a veritable "needle in the haystack" situation, and will take substantial time to correct. *Support will not be provided for issues involving these overpasses.*
* Two multi-purpose transit stations by E-N of BriPizza have been added, serving the orthogonal intersections of almost all single-width networks that differ in height by 15m.
* The NAM Ideal Transit Switches (NITS) have been introduced. The NITS provide greatly increased efficiency for all combo NAM transit stations (e.g., all stations with subway access and at least one other major network), which results in greater network usage.
* Controller updated to version r184.
* Please note that the installer will "seek and destroy" old NAM installations in your Plugins, so there is no need to worry about uninstalling/deleting your old NAM.

## Version 31.1 (6 April 2013)

* Controller divided into two different packages to improve stability--the smaller "standard" (or "s-series") package, and the larger "extreme" (or "e-series"), to improve stability issues present with NAM 31.
* Road Turning Lanes "semi-automatic" functionality has changed implementation, from Rail overclick to One-Way Road overclick.
* A number of transit stations have had bugs fixed or performance otherwise enhanced, and several optional new stations have been added. For PC users, any stations plopped in your cities from NAM 31 will automatically be upgraded when you install NAM 31.1.For Mac users, the replacement set of basic Maxis stations had to be modified, along with the Modern El Train Station by Brenda Xne. These fixes were necessary due to a bug in the Mac version of SC4. If you're a Mac user and you plopped any of these stations from the NAM using version 31, you will have to bulldoze them and replop them once you have installed NAM 31.1.
* New Street network functionality: Some new draggable wide-radius curves, and intersections along wide-radius curves, are now possible with the Street network. Credit for this new feature goes to Swordmaster from the NAM Team.
* RealHighway Filler Pieces have been restored and expanded after previous issues.
* Installing over previous versions: NAM 31.1 may be installed directly over top of any previous NAM releases. It is a full release, not a patch or a hotfix. All future updates are planned to be in full package form, and there are no plans to issue patches or hotfixes in the future. Please also note that the NAM Team only provides technical support for the most recent version, which, as of this document, is NAM 31.1. We cannot assist users of the original NAM 31 release, or NAM 30 (or earlier).
* Special Thanks: The NAM Team would like to thank the following members of the community, who have tested the penultimate build of the NAM 31.1 controller and given their feedback on its stability, and/or assisted with other controller-related tests after the NAM 31 release, in an effort to nail down the game stability issues: A Nonny Moose, dyoungyn, Joe 90, mgarcia, mneonnew, shanghai kid, spot, and txrailcat74.

## Version 31.0 (2 March 2013)

* The NAM has changed to a "monolithic" package. With the exception of the Diagonal Bridge Enabler (DBE), all other separate-download NAM plugins have been merged into the main package, including the RealHighway Mod (RHW), the Railway Addon Mod (RAM), the Network Widening Mod (NWM), the High Speed Rail Project (HSRP), the Street Addon Mod (SAM), and the Rural Roads Plugin (RuRP). All NAM-issued bridges have also been incorporated into the package. These plugins may all be selected as options in the new and improved NAM installer.
* Substantial expansion of the RealHighway (RHW) Mod network options, including the addition of the full Multi-Height System, which allows four elevated heights-L1 (7.5m), L2 (15m), L3 (22.5m), and L4 (30m). All widths of the RHW also now have L1 and L2 elevated counterparts, and the RHW-4, RHW-6S, and MIS Ramps have L3 and L4 available.
* The RHW also now includes FLEX Height Transitions (FLEX-HT), FLEX On-Slope Transitions (FLEX-OST), FLEX Ramp Interfaces (FLEXRamps), accommodating many of the new networks without adding massive numbers of new puzzle pieces.
* Draggable Fractional Angle Roads have been added at two different angles-FA3 (18.4°/71.6°) and a new angle, FA2 (26.6°/63.4°).
* For the first time ever, the NAM now includes Lots, adding a basic variety of stations for NAM override networks that require them, including Ground Light Rail, the Tram/El-Rail Dual Networks, and High Speed Rail.
* Starter Pieces have now been converted to include a self-destructing construction lot, simplifying construction.
* Hole Diggers and Raisers have also been added in two forms: the conventional Lot-based approach, and a new self-destructing variant.
* Maxis Highway Override, AKA Project Symphony, has been added. This plugin converts the Maxis Highways from 6 undersized lanes, to 4 RHW-scaled lanes, and better allows the network to interface with RHW functionality.
* Wide Radius Curves added to the Monorail network.
* Moonlinght's popular Alternate El-Rail Mod and Bullet Train (Shinkansen) Mod have been added as optional skins for the El-Rail and Monorail networks, respectively.
* Two new SAM sets have been added: the Klinker Streets by squidi, and moonlinght's Japanese Streets.

# "Modular" Releases (2007 through 2011)

## Version 30 (15 September 2011)

* Elevated Road, One-Way Road and Avenue viaduct models have been revamped, with new orthogonal-to-diagonal curves added to One-Way Road and Avenue Viaduct sets.
* Numerous new Tram-in-Avenue, Tram-in-Road and Tram-on-Road puzzle pieces, many of which dramatically improve diagonal functionality.
* New Elevated Maxis Highway Interchanges for Tram-in-Avenue, and improvements to existing Diagonal Avenue Elevated Maxis Highway interchanges.
* New Underground Rail puzzle pieces have been added.
* NAM Controller and Bridge Controller files have been updated.
* New Turn Lane Extension Pieces (TuLEPs) have been added, including TuLEP Rail Crossings.
* Avenue Roundabouts Plugin updated, adding new BSC Ripptide filler, and support for Flexible Underpass (FLUPs) functionality.
* Two new styles of Draggable Ground Light Rail/Tram with easily-customizable base textures have been added with the Draggable GLR/Tram Extension Plugin. (**Please note** that due to the model-based nature of this functionality, the natively-built pillars on the Elevated Rail network had to be removed. You may need to reconstruct sections of your Elevated Rail network to re-add the pillars with this plugin installed.)
* RUL updates for the RealHighway Mod (RHW), Network Widening Mod (NWM), Street Addon Mod (SAM) and Diagonal Bridge Enabler (DBE), all downloaded separately.
* Traffic Simulator Configuration Tool (TSCT) updated to Version 1.2.6, reflecting proper One-Way Road capacities.

## Version 29 (14 August 2010)

* New Underground Rail puzzle pieces have been added.
* Numerous RUL, texture and pathing errors have been fixed, including the Car Ferry issue.
* NAM Controller and Bridge Controller files have been updated.
* Updates to the Traffic Simulator Configuration tool to support capacity improvements to TuLEPs, the RHW and the NWM.
* Nightlighting fixed on Elevated Rail/Tram vehicles (since removed due to issues with custom automata).

## Version 28 (9 May 2010)

* New modular Turning Lane Plugin has been added.
* New GLR-in-Avenue puzzle pieces have been added.
* New GLR-in-Road puzzle pieces have been added.
* New GLR-in-Street puzzle pieces plugin have been updated.
* New FLUP pieces have been added.
* New Underground Rail puzzle pieces have been added.
* Rail Viaduct Wide Radius Curve has been added.
* Traffic Simulators and Data View Plugins have been updated once again and reduced to five basic settings.
* Custom Traffic Simulators and Data View Plugins can be created with the "Traffic Simulator Configuration Tool".
* Numerous RUL, texture and pathing errors have been fixed.
* NAM Controller and Bridge Controller files have been updated to support the latest NAM features, several new bridges and the upcoming RHW 4.0 and NWM 1.0 releases.
* NAM Installer has been improved for easier handling and additional help for installing new Traffic Simulators.

## Version 27 (15 July 2009)

* Minor bugfixes to Version 26, and small additions on Tram and URail content.

## Version 26 (21 June 2009)

* Canal Addon Mod (CAN-AM) plugin has been added.
* GLR-in-Street puzzle pieces plugin has been added.
* Wide Radius Curve plugin for streets has been added.
* New FAR intersections have been added.
* New GLR-in-Avenue puzzle pieces have been added.
* New GLR-in-Road puzzle pieces have been added, including modular GLR-in-Road roundabout.
* New FLUP pieces have been added, such as Avenue and OneWayRoad ramps and underground intersections.
* All GLR puzzle pieces have been modified to minimize the "crash to desktop" bug.
* Two new Underground Rail puzzle pieces have been added.
* New Ground Highway Y Interchange has been added.
* New Data View plugins have been included.
* Traffic Plugins have been updated.
* There are now separate NAM Controller files for RHD and LHD versions of the game.
* Some RUL, texture and pathing errors have been fixed.
* NAM Controller, Bridge Controller and NAM UI files have been updated.

## Version 25 (8 March 2009)

* Added two sets of Rail textures that fix the color shift between Maxis and custom Rail textures for zoom levels 1 to 4.
* A variety of RUL, texture and pathing errors have been fixed.
* NAM Controller contains RULs for RHW (Rural Highway Mod), SAM (Street Addon Mod), HSR (High Speed Rail) and the new RAM (Rail Addon Mod)/STR (Single Track Rail) and Rural Roads plugins (released separately).

## Version 24 (14 January 2009)

* Wide Radius Curves (WRC) have been moved to a separate plugin, new curves and Fractional Angled Roads (FAR) and Railways (FARR) have been added, old wide radius curve preview models and textures have been improved.
* Flexible Underpass (FLUP) puzzle pieces plugin for roads has been added, featuring modular road underpasses.
* Tram-in-Road (T-RAM) puzzle pieces plugin has been added, featuring a wide variety of Tram-in-Road puzzle pieces.
* New GLR-in-Avenue puzzle pieces have been added, i. e. GLR-in-Avenue with grass textures.
* New GLR-in-Avenue roundabouts (GLR curve, T intersection, + intersection) have been added.
* New Rail Viaduct puzzle pieces have been added, i. e. new diagonal pieces, diagonal on-slope pieces, and Rail Viaduct on PedMall puzzle pieces.
* New straight Ground Highway exits have been added.
* Two new Ground Highway Interchanges (trumpet and partial Y) have been included.
* A new set of Traffic Plugins has been included.
* A variety of RUL, texture and pathing errors have been fixed.
* NAM Controller contains RULs for updated RHW (Rural Highway Mod), SAM (Street Addon Mod), HSR (High Speed Rail) and the new RAM (Rail Addon Mod)/STR (Single Track Rail) plugins (released separately).

## Version 23 (24 April 2008)

* The NAM celebrates its 4th birthday!
* Double-height Elevated Rail and Monorail puzzle pieces have been added.
* GLR bridge has been added.
* New GLR-in-Avenue puzzle pieces have been added, including Avenue Roundabout with GLR crossing.
* New Rail Viaduct puzzle pieces have been added.
* Diagonal Highway on-slope puzzle pieces have been added, existing on-slope puzzle pieces have been revamped to eliminate shadow bug.
* All overpasses have been modified to eliminate the color shift of the network that crosses under another (both Maxis and custom overpasses).
* Elevated Rail-to-GLR transition has been improved visually.
* Dual-networking puzzle pieces have been improved visually.
* Elevated Rail and Monorail over Elevated Highway overpasses have been improved visually.
* Various other overpasses and puzzle pieces have been improved visually.
* Diagonal Highway shift by one tile is now possible.
* One-Way Road Arrow Removal Plugin has been updated.
* Custom Menu Plugins have been added to reorder icons in Rail and Misc Transportation menu.
* A new set of Traffic Simulator (Traffic Plugin) files have been added, outdated Traffic Plugin files have been removed.
* A variety of RUL, texture and pathing errors have been fixed.
* NAM Controller contains RULs for updated RHW (Rural Highway mod), updated SAM (Street Addon Mod) and new HSR (High Speed Rail) plugins (released separately).

## Version 22 (1 January 2008)

* Elevated (heavy) Rail puzzle pieces completely revamped, three different texture styles available, some new pieces added.
* Underground Rail puzzle pieces with Ped Malls have been added.
* Increased connectivity for Avenue Roundabout and Avenue Roundabout with Elevated Highway overpass puzzle piece have been added.
* Smooth Avenue Curve puzzle pieces have been added.
* Reworked textures for smooth Road Curves.
* Raised Avenue Bridge has been added.
* RHW (Rural Highway mod, released as individual plugin) is now independent of ANT tool.
* NAM Controller contains RULs for updated RHW (Rural Highway Mod) and SAM (Street Addon Mod) plugins (released separately).

## Version 21 (1 June 2007)

* The main NAM file has been divided into five resource files that can be updated individually. The RUL and INI files have been separated as "NAM Controller" for easier updates as well. GLR and dual-networking puzzle pieces have been made optional. **Please note:** If you are using the GLR or dual-networking puzzle pieces, make sure to select them in the optional components dialogue of the NAM installer. The same counts for other optional plugins, such as the roundabouts or turning lanes.
* Additional plugins, such as bridges or the RHW mod, are released as individual plugins. **Please note:** If you are using additional bridges that use custom bridge models in your cities, you will have to install them separately. They are no longer contained in the main NAM download.
* The LTEXT labels have been separated from the NAM DATs in order to make translations easier.
* In addition to the GLR puzzle pieces, draggable GLR is now available, using dedicated starter puzzle pieces (both urban and rural versions).
* GLR-in-Avenue puzzle pieces have been added, as well as GLR-on-slope puzzle pieces.
* The appearance of the GLR tracks has been changed to a more urban look. The old textures for the puzzle pieces are still available as an optional plugin. Similar textures for the draggable GLR might be released in the future.
* Avenue Roundabouts have been added, available under a new menu button that also contains the other avenue intersections, such as the Avenue Y-Stack.
* Highway-on-slope puzzle pieces has been added.
* Elevated (heavy) Rail and Underground Rail puzzle pieces now have more options, such as 45° turns and diagonals.
* Smooth Road Curve and S-Curve puzzle pieces have been added.
* A plugin that removes most of the OneWayRoad arrows has been added.
* Some menu icons have been graphically improved.
* The number of files contained in all NAM DATs reaches 19,000.
* The NAM core files are not longer considered as a "beta" version. However, certain plugins might still be in beta status.
* A BSC Cleanitol file has been created that helps removing outdated NAM files and related transit mods.

# Early Releases (2004 through 2007)

## Version 20 (26 December 2006)

* Diagonal Streets plugin has been enhanced. There are now some additional puzzle pieces to be used on sloped terrains to avoid flattening. Furthermore, there are a few helper pieces which allow you to drag other networks over it to build intersections.
* All the game effects on the ped mall puzzle pieces have been removed again because ped malls had acted like a cheat. The generation of crowds has also been removed because it forced older computers to be very slow.
* Many cosmetic issues have been done. Some raised puzzle pieces have been remodelled, and the one-way bridges come with one-way textures now.
* A set of puzzle pieces to build commute rail tunnels has been added. You may use the default Maxis railway station to handle the traffic switching or (may be) any upcoming underground commute rail station.
* Long Turn Rail puzzle piece has been added.
* European-style lateral highway exits and another one for raised roads have been added.
* The custom bridges MOD became part of the NAM. You may choose different new styles of bridges for the common networks.
* NAM readme updated to a more convenient layout. Some screenshots illustrate the usage of puzzle pieces and roundabouts.

## Version 19 (30 September 2005)

* NAM now has an Installer which can guide users through the installation.
* Format of NAM versions changed from MMDDYY to YYMMDD.
* The Structure of the NAM Folders & Documentation has been modified. This has been done due to an Installer now being available.
* Missing Rail Y-Stack added. Yes, it is actually added this time (those of you with the temporary fix for this, be sure to remove it).
* Diagonal Start/End Road & OneWayRoad PuzzlePiece items adjusted to reduce possible terrain indentation when being placed.
* Graphical improvements made to GLR on PedMallTile items.
* Various ElevatedRail on Street Dual-Networking PuzzlePieces added. See the [Contents](/docs/overview-of-content-and-features) for more details.
* GLR Loop PuzzlePiece item added.
* Rail double Width\Tile Orthogonal S-Curve added.
* Rail (Double) Diagonal x Orthogonal Unlimited. This supersedes the previous Double Diagonal x (single) Orthogonal Rail junction.
* Avenue Intersections\Junctions: several new avenue intersections &/or junction types have now been added &/or are now possible. See the [Contents](/docs/overview-of-content-and-features) for more details.
* OneWayRoad Roundabouts have now been added & currently exist as an additional optional plugin. The existing OneWayRoad network tool is used for this.
* Street Roundabouts have now been added & currently exists as an additional optional plugin. The existing Street network tool is used for this.
* Adjustments implemented for Avenue curve x Road/Street/OneWayRoad to address graphical issues.
* Adjustments made to several PedMallTile items due to graphical conflicts.
* Shadows fixed on ElevatedHighway Curve & several ElevatedHighway Curve x Street/Road/Rail/OneWayRoad/Avenue junctions.
* A list of Additional Intersections & Junctions (for normal networks) has now been included & can be found in the [Contents](/docs/overview-of-content-and-features).
* YIMBY Effects on Ped Mall Tiles & Footbridges adjusted to more balanced levels & are as follows:
  - Type of Effect (Magnitude, Radius)
  - Landmark Effect (70,7)
  - Park Effect (35,7)
  - Mayor Rating Effect (5,8)
  - Air Pollution Reduction (-5,3)
  - Water Pollution Reduction (0,0)
  - Garbage Reduction (1,0)

## Version 18 (25 July 2005)

* Due to a recent file format discovery a number of intersections' files have been adjusted to address current & possible future issues. Due to these adjustments, any existing items that made use of these adjusted items will be affected & may show as an invisible tile in-game. If this occurs, please bulldoze & rebuild the given intersection &/or section of network to correct the problem.
* The Structure of the NAM Folders & Installation Files has been modified. This has been done to better handle some of the additional plugins that this mod contains. Please see the [Installation Instructions](/docs/) regarding installation.
* Diagonal Streets have now been added & currently exist as an additional optional plugin. The existing Street Network tool is used for this. **Please note:** This does not change the inherent functionality of the Street Tool. To trigger diagonal streets, simply zig-zag the street tool & the tiles will automatically change & update. **Please note:** As at the time of writing this particular item was currently in Beta still.
* Roundabouts have now been added & currently exist as an additional optional plugin. The existing Network Tools, where applicable, are used for this. To trigger roundabouts, simply join road in a four tile area like a circle. Many variations exist with the Road, OneWayRoad & Street networks. If in doubt, please experiment. **Please note:** As at the time of writing this particular item was currently in Beta still.
* Rail Y-Stack added. This is currently located in the Rail PuzzlePieces menu button. This is similar to the AvenueY-stack.
* Avenue & OneWayRoad Onslope PuzzlePieces added & can be found in their appropriate PuzzlePiece menu button.
* Over 50+ new intersections, junction &/or network possibility types added. These are many & varied but encompass most of the above ground networks. If in doubt, please experiment.
* Several new path, drawing &/or graphical bug fixes added. These fixes relate to original Maxis items & also custom content items. **Please note:** It may require rebuilding some sections of network &/or also the game given several game months, if not a lot longer (i.e. 2 years depending on city size, pc specs etc), in order for some of these fixes to take affect.
* Most internal files have now been compressed to help reduce the overall file size of the NAM. This should not affect functionality.
* Main NAM.dat surpasses 10,000 files mark.

## Version 17 (17 June 2005)

* Main mod file by default, no longer contains Avenue Tuning Lanes (ATL). This portion of the mod exists as an optional component by way of an additional Plugin file. Please see the [Installation Instructions](2.InstallationInstructionsFile.htm) regarding this optional plugin file.
* Numerous visual improvements made to various existing items.
* 70 plus new junctions &/or intersection types added. These new junctions typically involve "Network1 Piece or JunctionType, Network2 Overhead (or underneath ~ relative to Network1)". As some examples; Orthogonal Street + Junction, Diagonal ElevatedRail. Also; Orthogonal Rail + Junction, Diagonal ElevatedHighway. And; Orthogonal ElevatedRail + Junction, Diagonal Avenue. And many others similar to these involving all the different (above ground) networks. If in doubt, please experiment.

## Version 16 (8 June 2005)

* Ground Light Rail (GLR) Mod (Alpha 3) has been merged & included with the NAM. Currently at this time this inclusion only extends to Puzzle Piece related items. Please see the [Contents](/docs/overview-of-content-and-features) for more details.
* Avenue Turning Lane (ATL) Mod (beta_04) has been merged & included with the NAM. Left-Hand Version players please see [Installation Instructions](2.InstallationInstructionsFile.htm) for additional Plugin(s) required.
* Left Hand Version Rail-Networks Fix: A fix has been made, for players who actively use Left Hand Version of the game, for all of the Rail-Based networks. This fix encompasses Rail, ElevatedRail, MonoRail, & Subway networks & any intersections involving these networks. This fix makes adjustments so that the Trains on these networks operate & run on their proper side for Left-Hand Version players, just like cars do on road based networks. This fix is also UDI compliant (where applicable). This fix is only applicable & only intended for active Left-Hand Version players. This fix subsequently has a bearing on Transit Enabled Lots. Left-Hand Version players please see the [Installation Instructions](2.InstallationInstructionsFile.htm) for additional Plugin(s) required. For more details regarding this fix please read the [Technical Notes](5.TechnicalNotesFile.htm).
* Numerous visual improvements made to various existing items ~ of which there is to many to list.
* OneWayRoad Bridges have been adjusted. The models & textures they use are no longer dependent on the games own files, & hence can be changed. Please see the [Contents](/docs/overview-of-content-and-features) for more details.
* Monorail over Elevated Highway overpass.
* Double Diagonal Rail x Orthogonal Avenue (this is a normal ground intersection).
* Numerous new Puzzle Pieces added. Any new Puzzle Pieces have been placed in their appropriate menu button. A majority of new Puzzle Piece items have been integrated into their existing appropriate Puzzle Pieces menu position & can be accessed via the Home/End keyboard key. For example; the Diagonal Road Start/End Puzzle Piece is integrated along with the existing Orthogonal Road Start/End Puzzle Piece. Using the Home/End keyboard keys will rotate the item from orthogonal to diagonal to orthogonal etc. The same applies to many other Puzzle Pieces containing a Diagonal component. Please see the [Contents](/docs/overview-of-content-and-features) for more details.
* OneWayRoad Puzzle Pieces have been overhauled to address Pathing/Automata issues that currently exist with them. Most OneWayRoad Puzzle Pieces now contain Directional Enforcing & contain Directional Arrows to assist with their placement & general use. **Please note:** For this reason any existing OneWayRoad Puzzle Pieces should be checked, preferably bulldozed & replaced, especially if Pathing issues start to arise. The game should also be given some time to adjust & update because of this. This adjustment will ultimately reduce the Pathing/Automata issues that currently exist with this item & make them function more efficiently. Using either query tools &/or the bulldozing tool & highlighting OneWayRoad Puzzle Pieces (one tile at a time only) will show these Directional Arrows, & hence the flow of direction.
* The above paragraph subsequently also applies to OneWayRoad Overpasses.
* The existing 1x1 Avenue Filler Puzzle Piece has been overhauled to address pathing/automata issue that currently exist with the item & now contain Directional Enforcing. **Please note:** For this reason any existing 1x1 Avenue Filler Puzzle Pieces should be checked, preferably bulldozed & replaced, especially if Pathing issues start to arise. The game should also be given some time to adjust & update because of this. This adjustment will ultimately reduce the Pathing/Automata issues that currently exist with this item. Directional Arrows have now also been added to applicable 1x1 Avenue Filler Puzzle Pieces & preview models to assist with their placement & general use. Using either query tools &/or the bulldozing tool & highlighting applicable 1x1 Avenue Filler Puzzle Pieces (one tile at a time only) will show these Directional Arrows, & hence the flow of direction.
* Various other file item adjustments, improvements &/or fixes ~ of which there is to many to list.
* Main NAM.dat surpasses 8,000 files.

## Version 15 (8 March 2005)

* Orthogonal Elevated Highway over Orthogonal Ground Highway Stack. Note; if you've used a previous (file) version of this in-game, for best usage be sure to bulldoze the item & re-build it.
* Diagonal Avenue transition into Orthogonal Road. To join, simply drag a straight road into a dead-end diagonal avenue.
* Orthogonal Road transition into Double Diagonal OneWayRoad – this must be joined using the Road tool, in a similar fashion as the Diagonal Avenue to Orthogonal Road transition above. Be sure when/if connecting this, that the Double Diagonal OneWayRoads' flow of traffic matches up with the road it's transitioning into.
* Elevated Highway transition into Double OneWayRoad – Orthogonal & Diagonal. The Elevated Highway tool must be used to join the two networks, in the same fashion as ElevatedHighway<>Avenue transition; in order to join, the OneWayRoad section of network must be two tiles width.
* Fixed a pathing issue with games original Diagonal Elevated Highway over Orthogonal Elevated Highway overpass, which prevented vehicles from using the whole of one side of the diagonal highway overpass.
* New Orthogonal Elevated Highway (Raised) over Diagonal Elevated Highway (Flat) Overpass. The Orthogonal portion of the Elevated Highway rises over the Diagonal portion of the Elevated Highway. This is in addition to the games original overpass of this type, which has the Diagonal portion rising over the Orthogonal portion. If the conditions are right, this will be built automatically when using the Elevated Highway Tool.
* New Orthogonal Ground Highway (Raised) over Diagonal Ground Highway (Flat) Overpass. The Orthogonal portion of the Ground Highway rises over the Diagonal portion of the Ground Highway. This is in addition to the games original overpass of this type, which has the Diagonal portion rising over the Orthogonal portion. If the conditions are right, this will be built automatically when using the Ground Highway Tool.
* Minor fix of issues resulting from custom content (seems some particular custom related Overpasses have been unable to draw/build – this should now be fixed though).
* Double Diagonal Rail Merge, as well as new intersections related to this. It should now also be easier to draw/drag Double Diagonal Rail. Please note; that while numerous bugs related to this have been addressed, some may still exist.
* (Single) Orthogonal Rail x Double Diagonal Rail intersection, as well as new intersections related to this. Please note; that while numerous bugs related to the implementation of this have been addressed, some may still exist.
* A number of (other) Rail related (drawing) bugs &/or intersections addressed. Please note; that it may require bulldozing &/or (re-)drawing some sections/intersections of rail network in order for some of these addressed bugs to take effect.
* All existing Road/OneWayRoad/Avenue Overpasses, Puzzle Pieces, Ground & Elevated Highway Ramps Preview Models have been given a facelift.
* Following (diagonal-based) Puzzle Pieces added:
  - Orthogonal Road over diagonal/double diagonal Rail
  - Orthogonal Road over diagonal/double diagonal Road
  - Orthogonal Road over diagonal/double diagonal OneWayRoad
  - Orthogonal Road over diagonal Avenue
  - Orthogonal Road over diagonal GroundHighway
  - Orthogonal OneWayRoad over diagonal/double diagonal Rail
  - Orthogonal OneWayRoad over diagonal/double diagonal Road
  - Orthogonal OneWayRoad over diagonal/double diagonal OneWayRoad
  - Orthogonal OneWayRoad over diagonal Avenue
  - Orthogonal OneWayRoad over diagonal GroundHighway
  - Orthogonal Avenue over diagonal/double diagonal Rail
  - Orthogonal Avenue over diagonal/double diagonal Road
  - Orthogonal Avenue over diagonal/double diagonal OneWayRoad
  - Orthogonal Avenue over diagonal Avenue
  - Orthogonal Avenue over diagonal GroundHighway
  - Orthogonal Rail over diagonal/double diagonal Rail
  - Orthogonal Rail over diagonal/double diagonal Road
  - Orthogonal Rail over diagonal/double diagonal OneWayRoad
  - Orthogonal Rail over diagonal Avenue
  - Orthogonal Rail over diagonal GroundHighway
* **Please note:** Diagonal-based Puzzle Pieces are more temperamental. Extra care should be taken when interacting with these (placement, bulldozing etc.)

## Version 14 (29 November 2004)

* All Ped Mall Tiles & Footbridges now contain YIMBY Effects. Specific details of the (YIMBY) Effects are as follows:
  - Type of Effect (Magnitude, Radius)
  - Landmark Effect (150,7)
  - Park Effect (150,7)
  - Mayor Rating Effect (5,8)
  - Air Pollution Reduction (-150,3)
  - Water Pollution Reduction (-100,3)
  - Garbage Reduction (-10,0)

## Version 13 (15 November 2004)

* ElevatedHighway to GroundHighway Extended Transition (This is actually an Interchange item).
* Missing Paths fixed for the Avenue Y-Stack, causing a delayed reaction/freezing with the game when placed.
* Avenue curve missing Pedestrian Path files fixed; this prevented Sims from being able to walk along an Avenue Curve, & potentially preventing them from accessing Mass Transit buildings along Diagonal Avenue.
* Lights added to Elevated Rail Dual/Double-Decker Networking Pieces.
* Diagonal Avenue to Diagonal Road transition. The Avenue tool &/or Road tool can be used to connect the two on the diagonal.
* Orthogonal OneWayRoad to Orthogonal Road transition.
* Diagonal OneWayRoad to Diagonal Road transition.
* Improvements made to Double-Diagonal OneWayRoad to Diagonal Avenue Transition & Double-Diagonal OneWayRoad to Diagonal GroundHighway Transition. The OneWayRoad tool itself can now be used as well, to join to Diagonal Avenue/GroundHighway.
* Various GroundHighway, ElevatedHighway, & Avenue; intersections &/or tiles; fixes &/or improvements, & are as follows;
* GroundHighways & ElevatedHighways can now be shifted over sidewards by just one tile in a single continuous stretch, thus removing the previous two tile restriction. This is applicable to both Orthogonal & Diagonal directions (try a little experimenting).
* Models, Textures, &/or Paths addressed as applicable for the following items (References to "S-Curve" can & do encompass a sideward shift of the network mentioned by one tile &/or two tiles, as applicable); PLEASE NOTE; that some of these may still have some minor issues with them.
* ElevatedHighway Curve by Orthogonal Street - Enabled
* ElevatedHighway S-Curve by Orthogonal Street - Implemented
* ElevatedHighway Curve by Orthogonal Road - Enabled
* ElevatedHighway S-Curve by Orthogonal Road - Implemented
* ElevatedHighway Curve by Diagonal Road - Enabled
* ElevatedHighway Curve by Orthogonal OneWayRoad - Fixed
* ElevatedHighway S-Curve by Orthogonal OneWayRoad - Implemented
* ElevatedHighway Curve by Diagonal OneWayRoad - Enabled
* ElevatedHighway Curve by Orthogonal Rail - Fixed
* ElevatedHighway S-Curve by Orthogonal Rail - Implemented
* ElevatedHighway Curve by Diagonal Rail - Enabled
* ElevatedHighway Curve by Orthogonal Avenue - Enabled
* ElevatedHighway Curve by Diagonal Avenue - Fixed
* ElevatedHighway S-Curve by Orthogonal Avenue - Enabled
* ElevatedHighway S-Curve by Diagonal Avenue - Fixed
* ElevatedHighway Curve by Orthogonal GroundHighway - Fixed
* ElevatedHighway Curve by Diagonal GroundHighway - Enabled
* ElevatedHighway S-Curve by Orthogonal GroundHighway - Fixed
* ElevatedHighway S-Curve by Diagonal GroundHighway - Enabled
* GroundHighway Curve by Orthogonal ElevatedRail - Improved
* GroundHighway S-Curve by Orthogonal ElevatedRail - Implemented
* GroundHighway Curve by Diagonal ElevatedRail - Enabled
* GroundHighway Curve by Orthogonal MonoRail - Improved
* GroundHighway S-Curve by Orthogonal MonoRail - Implemented
* GroundHighway Curve by Diagonal MonoRail - Enabled
* GroundHighway Curve by Orthogonal ElevatedHighway - Fixed
* GroundHighway Curve by Diagonal ElevatedHighway - Enabled
* GroundHighway S-Curve by Orthogonal ElevatedHighway - Fixed
* GroundHighway S-Curve by Diagonal ElevatedHighway - Enabled
* GroundHighway S-Curve by S-Curve ElevatedHighway - Implemented
* Avenue Curve by Orthogonal ElevatedRail - Fixed
* Avenue Curve by Diagonal ElevatedRail - Fixed
* Avenue S-Curve by Orthogonal ElevatedRail - Fixed
* Avenue Curve by Orthogonal MonoRail - Fixed
* Avenue Curve by Diagonal MonoRail - Fixed
* Avenue S-Curve by Orthogonal MonoRail - Fixed
* Avenue Curve by Orthogonal ElevatedHighway - Fixed
* Avenue Curve by Diagonal ElevatedHighway - Fixed
* Avenue S-Curve by Orthogonal ElevatedHighway - Fixed

## Version 12 (28 October 2004)

* Important note(s) regarding a known game issue. See the [Contents](/docs/overview-of-content-and-features) or [Technical Notes](5.TechnicalNotesFile.htm) for more details.
* The optional Auto Prompting file is no longer supported. See the [Installation Instructions](2.InstallationInstructionsFile.htm) for more details.
* Ground Rail Puzzle Pieces.
* Additional Pedestrian Mall Tiles.
* Pedestrian Footbridges (Puzzle Pieces) added.
* Lights added to various Puzzle Pieces & Overpasses.
* Elevated Rail Dual Networking (This is only just new, & currently rather limited).
* Double-Diagonal OneWayRoads to Diagonal GroundHighway transition.
* Minor Path fixes; includes pathing for the games original 1x1 Road & 1x1 Street; having to many of these in a city (previously) caused issues with the game.
* 1x1 Rail single tile & pathing added ~ similar as above.

## Version 11 (4 September 2004)

* U-Drive-It for Elevated Rail.
* Avenue Y-Stack.
* New radical Traffic Plugin file. See the [Traffic Plugin](10A.Traffic_Plugin_Files.htm) file for full details.
* Several path file changes & fixes pertinent to UDI EI Rail, & various other file improvements.
* NAM now contains well over 2100 files (This is just the main NAM .dat file, & doesn't take into account any of the other additional .dat files).

## Version 10 (14 August 2004)

* Monorail has been changed, so that it no longer creates Air Pollution - **Note:** The " _Traffic_Plugin_" file used must be replaced in order to make use of this; Be sure to let the game [city/cities] run for a few months so that it can update this.
* All Custom preview models now contain a 'red' [or bad] draw preview; that appears when a network item can not be placed.
* New intersections added;
* Orthogonal Elevated Highway x Double-Diagonal rail
* Orthogonal Elevated Highway x Double-Diagonal road
* Diagonal Elevated Highway x Double-Diagonal rail
* Diagonal Elevated Highway x Double-Diagonal road
* Orthogonal Elevated Rail x Double-Diagonal rail
* Orthogonal Elevated Rail x Double-Diagonal road
* Orthogonal Elevated Rail x Double-Diagonal OneWayRoad
* Diagonal Elevated Rail x Double-Diagonal rail
* Diagonal Elevated Rail x Double-Diagonal road
* Diagonal Elevated Rail x Double-Diagonal OneWayRoad
* Orthogonal Monorail x Double-Diagonal rail
* Orthogonal Monorail x Double-Diagonal road
* Orthogonal Monorail x Double-Diagonal OneWayRoad
* Diagonal Monorail x Double-Diagonal rail
* Diagonal Monorail x Double-Diagonal road
* Diagonal Monorail x Double-Diagonal OneWayRoads
* Orthogonal OneWayRoad x Double-Diagonal rail

## Version 9 (18 July 2004)

* Double-Diagonal OneWayRoads - **Note:** The OneWayRoad Tool behaves slightly differently with these than with typical normal OneWayRoads. It's highly advisable you do not use the "NoOneWayRoadArrows" Mod with these as it may cause problems. Using these may take some trial & error.
* Double-Diagonal OneWayRoads to Diagonal Avenue transition.
* Complete overhaul of all Ped Mall Tiles and all Puzzle Pieces - The previous Flat Terrain requirement is no longer necessary in order to use & place these, even when next to each other. This includes now being able to place them on water. **Note:** Be mindful/careful of how you use these with the terrain.
* Orthogonal road by Double-diagonal Rail intersection.

## Version 8 (13 July 2004)

* Diagonal Single-Sided Ramps added for all the [current Single Sided] Parallel Ground/Elevated Highway Ramps
* Improvements made to all custom Ground/Elevated Highway Single Sided Orthogonal Ramps-Terrain movement should now be minimized/minimal when placing orthogonal single sided ramps.
* Slight improvements made to the preview models for Ground/Elevated Highway Single Sided Parallel Ramps.
* Elevated Highway Avenue One-Sided [dual] Ramp [not single sided; but one sided].

## Version 7 (6 July 2004)

* Various improvements made to the games original Elevated Highway 'X' type junction; which includes additional Rotation among other things.
* Improvements made to the games original Elevated Highway Orthogonal by Diagonal highway Overpass junction.
* Fixed an issue regarding Elevated Highway Perpendicular Single-Sided Road Ramps.
* Fixed an issue with Ped Mall Tiles, causing the game to crash [this should be fixed].

## Version 6 (2 July 2004)

* Various improvements made to the games original Elevated Highway '+' type junction; which includes additional Rotation among other things.
* Four (4) Elevated Cloverleaf-based interchanges added.
* Optional Custom Highway Menu file added.
* A new feature added; Ped Mall Tiles.
* Various changes & improvements made to the documentation and files [both internal & external changes]
* A "[Q&A](7.Q&A.htm)" file added.
* Path fixes for Orthogonal by Diagonal Elevated Highway Interchange.

## Version 5 (19 June 2004)

* Visual display issue fixed for the new Orthogonal by Diagonal Elevated Highway Interchange-This affected players using Software Mode.
* A number of Single-Sided Perpendicular & Parallel Ramps added for both Ground &/or Elevated Highway
* Puzzle Pieces added for OneWayRoad.
* New & Improved Menu Icons for additional menu buttons that this mod has added.
* Main mod file by default, no longer contains AutoPrompting.

## Version 4 (12 June 2004)

* Orthogonal by Diagonal Elevated Highway Interchange added.
* Puzzle Pieces feature added. See the [Contents](/docs/overview-of-content-and-features) file for list of Puzzle Pieces included.
* Various improvements made to the games original Ground Highway '+' & 'X' type junctions; which includes additional Rotation among other things.

## Version 3 (4 June 2004)

* Various New Overpasses added [see the [Contents](/docs/overview-of-content-and-features) file].
* Elevated Highway single sided OnRamp & OffRamp added.

## Version 2 (9 May 2004)

* Additional Network Overpasses added.
* Additional Traffic & Automata related Plugin options added. See the [Traffic Plugin](10A.Traffic_Plugin_Files.htm) &/or [Automata Plugin](10B.Automata_Plugin_Files.htm) files for full details.
* Ground Highway to One way road transitions added.

## Version 1 (24 April 2004)

* NetworkAddonMod Beta Version released. Please consult this file in conjunction with the [Contents](/docs/overview-of-content-and-features) file for a list of Transit related items added for this mod to date.

# Pre-NAM Features (2003-2004, incorporated in NAM Version 1)

* Textures changed for Street to Avenue intersections for better visual look.
* Made it possible to have double-wide diagonal rail transition into double wide orthogonal rail and vice-versa
* Created a work-around for a bug that prevented one-way roads from intersecting at a road-avenue t-intersection. In order to build this intersection, draw the one-way road last and draw it only to/from the tile next to the road/avenue intersection
* Made street intersections with road/avenue t-intersections easier. Draw the street last and draw it only to/from the tile next to the road/avenue intersection
* Made it possible for a orth 1-way road to intersect with a diag road/ave t-intersection
* Made it possible for a diag 1-way road to intersect with a orth road/ave t-intersection
* Fixed a visual bug that caused traffic to drive on the wrong side of the road on a diag ave-diag ave T-intersection.
* Fixed a bug that prevented U-turns on diagonal avenues that intersected or T-intersected with a diagonal road.
* Fixed a bug that prevented U-turns on orthagonal avenues that intersected with a diagonal avenue.
* Fixed a U-Drive-It bug for a ground rail intersection that previously did not allow you to switch the track while driving a train in U-Drive-It.
* On Avenue intersections between a straight (orthogonal) avenue and a diagonal avenue, Sims coming from the diagonal avenue could not turn left onto the straight avenue. This is fixed.
* The ability to dead end straight (orthogonal) roads or oneways into a diagonal avenue has been added. Thanks to Teirusu for the textures. Enjoy!
* Diagonal T interchanges have improved graphics.
* Sims could not drive straight through the road in a parallel road onramp to a ground highway when driving so the highway is on their right. This is fixed.
* One of the bugs causing cars to jump to different ramps on diagonal T ground highway interchanges was fixed.
* Avenue/oneway transitions now have custom graphics so they look better, textures compliments of Teirusu.
* When entering a ferry terminal in U-Drive it, your mission could fail instead of being redirected back onto the road. This is fixed, thanks to Karybdis.
* When driving over a ground level highway on an avenue overpass with onramps in the left lane, a U-Drive-it mission would fail. This is fixed.
* U turns immediately bordering avenue onramps on an avenue crossing a ground level highway could not be used by people just leaving or about to enter the highway. This is fixed.
* U turns immediately bordering avenue onramps on an avenue crossing an elevated highway could not be used by people just leaving or about to enter the highway. This is fixed.
* Half of the time Sims went underneath a diagonal elevated highway on a road with onramps, they could not turn left on the onramp. This has been fixed in Rush Hour.
* Half of the time Sims exited a diagonal elevated highway onto a diagonal road with offramps, they could not turn left on the road. This has been fixed in Rush Hour.
* Added the ability to end diagonal Oneways in a T-intersection with a perpendicular diagonal avenue.
* When Sims approached a diagonal avenue from a diagonal oneway, they could not turn left on the avenue. This is fixed.
* When Sims were driving on a diagonal avenue, they could not make a U-turn at half of the intersections with a perpendicular oneway road. This is fixed.
* Added the ability to end diagonal roads in a T-intersection with a perpendicular diagonal avenue.
* Fixed another avenue/oneway transition bug. It should be out of beta now, and fully operational with no further issues.
* Fixed avenue/oneway transitions so that U-Drive-it works in both lanes.
* Transitioning avenues to one way roads without an intersection.
* Previously, cars could not make some left turns onto a diagonal road when approaching from a straight one way road. This is now fixed.
* In three way monorail junctions, you could not change the switch's direction. Driving the monorail over the switch would end your U-Drive-It mission instantly. This has been fixed.
* 3 Bugs fixed which prohibited cars from turning in various directions when a diagonal road crossed a straight avenue.
* Avenues dead ending into streets were completely impassable by any form of transit.
* Perpendicular road to one way intersections oriented on the diagonal did not allow left turns from the one way.
* The rest of the perpendicular road to road intersections oriented on the diagonal were fixed. Sims could not turn left from one of the roads coming from either direction.
* Updated some intersections between avenues and one way roads to show better automata.
* Diagonal Avenues with grid aligned (non-diagonal) ground train tracks crossing the avenue would not allow any cars to pass.
* A road to road diagonal T intersection was not allowing Sims to turn left onto one of the roads.
* Continuing an avenue with one way streets from an avenue/one way intersection did not allow any cars to pass through the avenue/one way intersection.
* Sims could not turn left at some diagonal avenues when approaching from a diagonal road.
* Elevated rail lines crossing ground highways prevented cars from travelling on the ground highway below.
* North or Southbound one way roads could not create T intersections with Westward avenues.
* Some intersections between avenues and one way roads did not allow correct turns.
* Avenues dead ending into one way roads did not allow any Sims to pass through the intersection.
* On half of the perpendicular road to road intersections oriented on the diagonal, Sims could not turn left from one of the roads coming from either direction.