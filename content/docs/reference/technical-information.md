---
title : "Technical Information"
description: "Important information for NAM installations."
lead: "This document contains important information to read prior to installation of the Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 8
draft: false
images: []
---

{{< docstatus status="outdated" >}}

While it is mainly intended for persons with the skills to open the NAM's associated file(s), it contains important information about the game. Therefore the following information aims at the more technical side of things and should only be considered as an additional source of information about the mods' files &/or game. To install the mod, please refer to the [Installation Instructions](/docs/reference/installation-notes/).

## 1. Known (Game) Issue(s) &/or Bugs
This section explains currently known game issues with SimCity 4's Traffic/Network system that may be relevant to this mod. This is not all inclusive, & as such other issues may currently exist that are not covered here.

### 1.1 General

Because we do not have the same level of tools &/or degree of control over the game that Maxis does, some custom-based items may currently have Pathing, Graphical &/or other unknown/known issues with them, & exhibit behaviour that may not &/or should not occur normally. Unfortunately, some issues are beyond our control & as such may not be fixable at all. The following sections explains some of these issues in more detail

### 1.2 Networks

SimCity 4's Networks, in general, exhibit a proximity behaviour when actively using the bulldozing tool &/or the different Networking Tools (Street, Road, Avenue, Rail, etc). When actively using these tools to bulldoze &/or draw a section of network, intersection tile &/or otherwise, this proximity behaviour can sometimes invoke issues, drawing bugs &/or otherwise in certain circumstances that may not otherwise occur normally. Such issues may also prevent the drawing of an intersection &/or section of network that might otherwise be possible to draw. This proximity behaviour is generally 3 to 4 tiles, but may be higher or lower in some cases.

#### **Solution**

While this proximity behaviour may be overcome in some cases by implementing the necessary rules for the game for such issues, the time it would take outweighs the benefits of implementing such rules in most cases (though some rules have been implemented for some of these). Often times, some issues may be rectified by bulldozing &/or re-drawing a section of network, intersection tile &/or otherwise, making sure the same action, series of actions, or set-up, that invoked the issue in the first place is not repeated.

### 1.3 Paths

SimCity 4's Pathing system, in general, is controlled by a set of rules. For each tile of network that exists in the game, there is a Path file, & Paths (or Plotting Points) within that file, for the in-game tile. Unfortunately, some aspects of SimCity 4's Pathing system are controlled by the games engine (or EXE). Because of this, some custom-based items may currently have UDI/Pathing issues with them, & exhibit commuter &/or UDI behaviour that may not &/or should not occur normally. Some Custom-Based Interchanges & Rail-Based networks, at least, are known to be affected by this to some degree.

### 1.4 Interchange-Base Related Items - Placement

There are two known critical bugs that exist with the game that are related to Interchange-Base RelatedItems, & the placement of these items. The following section explains these two bugs.

#### 1.4.1 Placement & Zones

A bug exists that can potentially prevent the removal of a zones' Building/Lot. This same bug also has the potential to cause the game to crash. The exact precise cause of the issue is not known. The following outlines the general-case scenario in which these issues may arise & possible solution:

##### **Items related to known issue:**

* Zones of any type (excluding Landfill) & the associated Buildings/Lots that spur from &/or sit on these zones. This can include residential, commercial, industrial zones, of all density levels, & their related Buildings &/or Lots. These related Buildings/Lots can include both Maxis originals & any custom made Buildings/Lots related to zones.
* Interchange Related Item(s) (IRI); this can include both Maxis originals & any custom made items that are interchange-base related, such as; Highway Overpasses; Ramps; Cloverleafs; PuzzlePieces; & other similar item(s).
* Route Query Tool &/or Normal Query Tool (in the case of the game crashing).

##### **Point of Issue Arising &/or Crashing:**

If an IRI is built on already existing zones' Buildings/Lots, the removal of these buildings where the IRI is &/or was built may potentially no longer be possible to properly remove. Using either the Route Query Tool &/or Normal Query Tool on these affected Buildings/Lots, including even just hovering the Query Tool over any affected Lots, may also potentially cause the game to instantly crash to the desktop.

##### **Solution:**

In order for this bug not to be triggered in the first place, it is highly advisable that when placing an IRI that the terrain below the item be clear, & not contain any zones, &/or related buildings.

If by some reason the bug has been triggered, i.e. an IRI has been built on some zones, then be sure not to use either Query Tools on &/or over any of the zones' Buildings/Lots otherwise the game may instantly crash. In order to remove any buildings (that have been affected) that can not immediately be bulldozed/removed properly; re-zone the affected area, making sure there is still normal road access. Wait for a period of several (game) months, & then attempt to remove the affected Buildings/Lots. This may potentially enable the affected buildings/lots to be properly removed.

#### 1.4.2 Placement & Transit Enabled Lots

An issue with the game which may cause the game to **crash** has been identified. At this time the exact precise cause of the issue is yet to be determined. The following outlines the general-case scenario in which the issue may cause the game to crash:

##### **Items related to known issue:**

* Transit Enabled Lot(s) (TEL); this can include both Maxis originals & any custom made TEL.
* Interchange Related Item(s) (IRI); this can include both Maxis originals & any custom made items that are interchange-base related, such as; Highway Overpasses; Ramps; Cloverleafs; PuzzlePieces; & other similar item(s).
* Cursor of Interchange-base Related Item(s).

##### **Point of Crashing:**

If the Cursor contains an IRI on it & then this Cursor is hovered over &/or clicked on (&/or repeated) a TEL, it can in some circumstantial cases cause the game to instantly crash to the desktop. Currently this is only known to occur if the IRIs' network on the Cursor is the same network with which the TEL is compatible with.

##### **Solution:**

Currently at this time, a full-proof work-around to the issue is not yet known. It is simply advised that users avoid moving the Cursor over a TEL if the Cursor has an IRI on it to minimize the chances of the game crashing. It is also advised that any TEL that exists in a city has its compatible network drawn right into/through the Lot, as this will also minimize the chances of the game crashing.

For more information on the above issue, see the following thread:[Cursor + Transit Enabled Lot = Crashing](http://www.simtropolis.com/forum/messageview.cfm?catid=124&threadid=55794).

The issue described above has been looked into, & currently at this time evidence seems to point to the problem existing within the games' executable itself, therefore there is nothing that can (currently) be done about this to completely & properly rid of the bug (unless Maxis decides to address the issue). The reason the issue has been mentioned here is because it has a probable significant impact on the use of this mod & those that use it.


## 2. Files used
### 2.1 Existing files used indirectly in association with the Network Addon Mod

The Network Addon Mod currently relies on a number of the games existing files that you will already have.

These files include, but are not limited to, the following:

* Various FSH files. Also known as Texture files.
* Various Exemplar files.
* Various S3D files. Also known as 3D files or Models.
* Various SC4Path files.
* Various Text based files.
* UI or User-Interface Files
* LUA Files. Also known as script files.

Quite a number of the above files are also included in the Network Addon Mod and form part of Transit related Bugfixes &/or other Additional features.

If you've changed the look and/or contents of any of these above files, &/or used a mod or Bat/Lot file that has, there is a big chance that any/all of the features of this Mod will be affected. The extent of this is not something that can be told, it all really depends on what, if anything, may have been done to any of the above file types that are connected with the look &/or functionality of the contents of the Network Addon Mod.

### 2.2 Unique files used directly within the Network Addon Mod

The Network Addon Mod includes, depends on, and uses a number of files that are unique to games' engine. Because of this, certain files can not be replicated, changed, removed, &/or modified without any change, consequences &/or adverse affects on the game. These files include, but are not limited to, the following specific files [with Instance IDs]:

#### **Cohort File(s)**

* ElTrain Cohort - 0x8BBF6D45

#### **Exemplar File(s)**

* Traffic Simulator - 0xC9133286
* Automata Tuning - 0x00000001
* DirtRoad - 0x0000001A
* Dirt Road Placement Tuning Parameters - 0xEBE08CDA
* Traffic Commute Graph - 0x0000000B [This file is included with " _..._10xCommute_" files]

#### **RUL File(s)**

* Highway - 0x00000001
* Highway - 0x00000002
* Rail - 0x00000005
* Rail - 0x00000006
* Road - 0x00000007
* Road - 0x00000008
* Street - 0x00000009
* Street - 0x0000000A
* Avenue - 0x0000000D
* Avenue - 0x0000000E
* OneWayRoad - 0x00000011
* OneWayRoad - 0x00000012
* DirtRoad - 0x00000013
* DirtRoad - 0x00000014
* Ground Highway Rules - 0x00000017
* Ground Highway Rules - 0x00000018
* OneWayRoad Bridge Specializations - 0x0000100A
* Intersection Ordering - 0x10000000
* Intersection Solutions - 0x10000001
* Rule Overrides - 0x10000002

#### **INI File(s)**

* Network Parameters - 0x8A5993B9

## 3. Path(s) (files)

### 3.1 Puzzle Pieces & Overpasses

Because the game has Left-hand & Right-hand driving versions, covering all the different Pathing possibilities involved in relation to OneWayRoad Puzzle Pieces, in an efficient & effective manner, sometimes makes them somewhat problematic to code/path for. For this reason some OneWayRoad Puzzle Pieces, namely **Intersection-Based** related Puzzle Pieces, contain Bi-Directional Pathing for both forward and reverse Pathing files, or Right-hand & Left-hand drive. The same also applies to some Road & Avenue Intersection-Based Puzzle Pieces. This was done as a preventative measure to overcome any complication issues that may have arisen with players using the items of this mod that are associated with, namely OneWayRoad, Puzzle Pieces, with having any functional &/or just general problems with them. As a result players may notice some pathing &/or automata oddities &/or issues with/when using these particular items of the mod.

The above paragraph typically does not apply to Puzzle Pieces or Overpasses that contain **Directional Arrows**. Puzzle Pieces & Overpasses that contain **Directional Arrows** should function properly as they should, typically without any Pathing/Automata oddities, as long as they are placed & linked up properly according to their **Directional Arrows**.

### 3.2 U-Drive-It &/for EI Rail

There exists some game limitations with which we had to work with in order to make UDI for EI Rail possible. Unfortunately, for certain aspects of UDI for a Rail-based network, the game will only recognise certain paths for the track switches (Track switches are what make it possible to go in different directions at junctions during UDI). Because of this, UDI EI Rail &/or EI Rail Path files contains a replicated set of paths; one set of paths for its own original intended network; & one set for the UDI EI Rail mode. The set of paths for UDI EI Rail mode are technically ground-rail-based pathing. Because of this, it should be possible to take a UDI passenger train &/or UDI freight train from ground rail to EI Rail using a Transit Enabled Lot (& visa-versa for EI Rail Train to ground rail). The Transit Enabled Lot would have to contain special custom path files though, in order to achieve this. This however, is currently outside the scope of this mod.  |

## 4. Network Hierarchy
There exists a hierarchy in the game with the different Networks. The following is a guideline on the hierarchy of the different above ground Network types:

[In order of Top of the hierarchy to the bottom of the hierarchy]

* Monorail Network
* Elevated Rail Network
* Highway Network
* Rail Network
* GroundHighway Network
* Avenue Network
* OneWayRoad Network
* Road Network
* Street Network
* ANT Network (RHW Network)

The higher up the hierarchy a network is, a higher priority is given to the network when drawing one network over another (in a parallel overlapping fashion). For this reason it is not possible to drag a network at the lower end of the hierarchy over a network that is higher up the hierarchy, & for the network to be converted to that of the lower hierarchical network. This is something defined in the games engine and it is highly doubtful that it can be changed. Apart from this though, generally this hierarchy should not cause any problems, unless you are a modder trying to mod Networks(s) &/or associated files.

## 5. Lots
This mod does not contain Lots &/or Lot [Exemplar] files at all, such as those found in Buildings Lots; in any way what so ever.


## 6. ANT Item
The ANT item that Maxis left incomplete/inactive in the game, with the technical name of "DirtRoad", was an optional plugin that has been superseeded by the Rural Highway Mod (RHW). The complete functionality of the ANT Plugin has been transferred to the RHW and is not longer supported by the NAM. For more information about the RHW, please refer to the RHW readme file.

## 7. NAM ID Conventions
This section briefly covers the file conventions that the NAM typically follows for its custom content (where applicable). These conventions are guidelines only & as such some pre-existing items pre-date when these guidelines were established & may not follow the conventions. Also; some limited exceptions &/or variations may apply or (need to) exist due to functional, technical &/or internal housekeeping purposes.

Most conventions are governed by or have been influenced by Maxis conventions. These conventions mostly apply to Network related files, & while it is not completely comprehensive, it does cover InstanceID conventions, Network conventions, &/or any other conventions that may be applicable or appropriate for this section at this time. These conventions encompass S3D Model files, SC4Path files, Network-Based Exemplar files, Network-Based FSH files, Network-Based EffectDir files, Network-Based Prop related files, & possibly others.

* GroupID designations: GroupIDs of the various items &/or areas of the game are typically used as flags for functional purposes & are usually governed by Maxis file formats.
* InstanceID designations for Interchange base items: 0x5NDDD##Z
* InstanceID designations for Non-Interchange base items. 0x5FNDDDWZ
* InstanceID designations for Bridges & Network Props (like custom Traffic Lights): 0x5NDDDZR0
* N = Network designation. See table below for these.
* DDD = MonthMonthDayDay in full extended decimal form (with all leading zeros) converted into hex. Where 2004 is the baseyear & each subsequent year 12+ Month per year should be added to MonthMonth before converting to hex. For multiple items on a set date, increase/decrease accordingly based on the initial date.
* \# = remaining portion of hex making up the whole InstanceID. This portion of the InstanceID typically based on the base InstanceID of the item.
* W= Wealth. This typically only applies to referenced S3D files & FSH files (where applicable).
* Z = Zoom level. This typically only applies to referenced S3D files & FSH files (where applicable).
* R = Rotation. This typically only applies to referenced S3D files & FSH files (where applicable).

|         |   |              |   |               |   |
|---------|:-:|--------------|:-:|---------------|:-:|
| Road    | 0 | Street       | 5 | GroundHighway | A |
| Highway | 2 | Subway       | 6 | Monorail      | D |
| Rail    | 3 | ElevatedRail | 8 | ANT (RHW)     | E |
| Avenue  | 4 | OneWayRoad   | 9 |               |   |

## 8. Left Hand Version Rail Networks Fix
This section is an extension from the above section that deals with NAM ID Conventions. The conventions in this section however only apply to SC4Path files.

This section deals with the 'Left-Hand Version Rail Networks fix' included in the Network Addon Mod.

Right-Hand Drive Version versus Left-Hand Drive Version; SimCity 4 path files were written with Right-Hand Drive players in mind. Nearly all **Path files** were written with Right-Hand drive as the default. This applies to road-based networks such as street, road, avenue, & rail-based networks such as rail, monorail & elevated rail. For Left-Hand Drive versions, the game automatically reverses all road based pathing (or "Car" pathing), with the exception of onewayroads. The game does not however, apply this same automatic reversal for rail-based networks; and this is why this fix has, in part, been created.

This fix makes use of the games INI Network file that enables manual reversing of path files specifically for Left Hand Versions through the use of special InstanceID masking & path file replacement, upon which the exe automatically scans at runtime. Unfortunately, current tests show that the Subway network is an exception to this. For this reason these paths have been included in an additional Plugin for Left-Hand versions. This extra additional Plugin also contains other files for Left-Hand versions. This extra dat Plugin should only be used for Left Hand drive versions. See the [Installation Instructions](/docs/installation-notes/) regarding the installation of this extra Plugin file.

This particular fix will impact on Left-Hand Drive Versions. Because of the necessary adjustments that have been made, this fix will subsequently impact on Transit Enabled Lots, for Left Hand Versions. The following explains this impact in more detail.

### Transit Enabled Lots

Transit Enabled Lots that do not specify an actual Path file &/or just use simple RUL Flags in its LotConFig property, then it should not be affected & no change should need to be made. However, Transit Enabled Lots that actually specify path file(s) in any of their LotConFig Properties will most likely be affected & may need modifying. Transit Enabled Lots of this type will typically have 0x00000007 type LotConFig properties (or in other words; 0x00000007 as the first value), & have 16+ values for the LotConFig property, specifying actual path files (i.e. InstanceID) in the 16th+ value. To overcome any adverse affects this fix may cause, for Transit Enabled Lots for Left Hand Versions, please read the following very carefully;

Transit Enabled Lots specifying Path files will already have the necessary path file(s) for Right Hand versions. For Left Hand Versions though, the path file(s) may need to be replicated, IIDs changed, & the **Rail-Related**Pathing reversed for Left Hand versions (& only rail-related pathing. Car-based pathing should not be reversed. There may exist some very limited exceptions to this). So in essence there will be two sets of Path files; one for Right Hand versions & one for Left Hand versions. Both the Right-Hand Version Path file(s) InstanceID & Left Hand Version Path file(s) InstanceID then need to be in a particular InstanceID range(s), in order to work properly for both Right Hand & Left Hand players. The following ranges are valid Path File Instance ID conversion ranges in which the game will automatically use the replacement Path files in the case of Left Hand Drive Versions;

(Other IID reversal ranges exist, but the following ones are the main ones. Please see the INI file itself for a raw & thorough breakdown).

Short abbreviated version

* 0x0N###### --> 0x4N######
* 0x5N###### --> 0x7N######
* 0x5FN##### --> 0x7FN#####

Where 'N' = Network designation.

Long version (actual specific IID ranges)

* Default Path File(s) --> Replacement Path File(s)
* Right-Hand Version --> Left-Hand Version
* 0x03###### --> 0x43######
* 0x53###### --> 0x73######
* 0x5F3##### --> 0x7F3#####
* 0x08###### --> 0x48######
* 0x58###### --> 0x78######
* 0x5F8##### --> 0x7F8#####
* 0x0D###### --> 0x4D######
* 0x5D###### --> 0x7D######
* 0x5FD##### --> 0x7FD#####
* 0xEA###### --> 0x4A######

\# = remaining hex of the InstanceID of the Path file(s). This portion of the Instance ID should be exactly the same for both Right-Hand & Left-Hand versions. As some **examples**:

* 0x 0 **3031500** --> 0x 4 **3031500** ~ _these are actual path files found in the NAM &/or the games own files_
* 0x 5F8 **32900** --> 0x 7F8 **32900** ~ _these are actual path files found in the NAM_
* 0x 5D **123900** --> 0x 7D **123900** ~ _in the case of a Rail-based Bridge_

All Rail-Related IID Ranges are covered & reversed for Left Hand Drive versions. Any Path file(s) that fall within the ranges listed above, regardless of the type of Paths it contains, will be scanned by the exe, replacement Path File(s) used & then reversed (NOTE: If a replacement Path file does not exist, the tile in question may not function). Since the exe does not actually reverse rail-based networks, it will simply use the Replacement Path file(s) as is for Left Hand Versions. If there exists car pathing in the replacement file(s) though, then the exe will only reverse the car pathing portion of the path file for Left Hand Drive versions.  |

## 9. End Notes
### A.1

Commute Graph Exemplar: This has only been included in files with the " _..._10xCommute_" in its name. The only reason for this is to try and off-set the Commute Graph display so as to give a more representable idea of the commute time being experienced [against/compared to what people might usually consider/expect]. It's highly advisable that any time you change which Traffic Plugin file is used, that you give the game ample time to update everything/anything related &/or connected to the Paths/Commutes. Twelve months game time, at least, should be given. This time will vary though depending on city size, game options, &/or computer system.

### A.2

Please note that some files have been replicated, used, &/or referenced multiply times by different items &/or areas of the files, including referencing the games own original files. One such example of this is some of the Puzzle Pieces; which basically makes use of the overpasses files [not necessarily all of them though].

### A.3

It is highly advisable that you do not change the contents of these files, nor change any of the files TGI, not unless you know very well what you're doing. Since modifying any of these files may cause the file(s) &/or fixes/features of the Network Addon Mod &/or other items not to function properly, not at all, &/or not as intended.

_File Last Updated: Thursday, 24 April 2008_