---
title : "Frequently Asked Questions"
description: "These are the most common questions that have been asked about the Network Addon Mod."
lead: "These are the most common questions that have been asked about the Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 5
draft: false
images: []
---

1. **What is the Network Addon Mod?**

    The Network Addon Mod, or NAM, is a transportation mod for SimCity 4 Deluxe/Rush Hour. It includes options for improved pathfinding accuracy and performance with the game's traffic simulator, as well as a myriad of new transportation network options, and bugfixes for default content. It is basically an exhaustive community-made expansion pack.

2. **What is required to run the NAM?**

    You must be running a retail copy of SimCity 4 Deluxe OR SimCity 4 with the Rush Hour Expansion, with a version number of 1.1.638 or higher. For further information, see the compatibility info on the opening page of the documentation. Any computer built since SC4's release in 2003 should have sufficient power to run the NAM, though the use of a 64-bit operating system, at least 4GB RAM, and the NTCore 4GB Patch applied to the game's executable is highly recommended, and necessary to utilize the full feature set of the mod. 
	
	The NAM is not compatible with original SimCity 4 (non-Deluxe/without Rush Hour), nor is it intended to run on Deluxe/Rush Hour copies with version numbers of 1.1.610 or 1.1.613, including the EA App/Origin version of the game (also used by EA Play/Xbox Game Pass).

3. **Why is my game crashing to desktop when I load a city tile after installing this mod?**

    The crash to desktop (CTD) issues upon city load are the product of having a full NAM Controller installed, but without the NTCore 4GB Patch being properly installed. The .bat file recommended for Windows users to use to begin NAM installation should patch your game automatically, but Windows permissions issues can complicate this (running the .bat file as an administrator can help), and the presence of these sorts of CTDs are an indication that the process did not properly complete.

    The 4GB Patch is a small patch, usable on any 32-bit executable file (not just SimCity 4) that allows the application to access 4GB RAM instead of a mere 2GB, and has historically been used in many modding communities associated with older games. This can also happen if your system is running a 32-bit version of Windows (i.e. if you're still running Windows XP), and/or you have less than 4GB RAM. Both of these situations effectively render the improvements of the 4GB Patch (and the compatibility it provides with the Full version of the NAM Controller) moot. Note that the "LowRam/NoRHW" Controller options do not require the 4GB Patch, but they completely omit almost all the code required for the NAM's RealHighway (RHW) Plugin to function.

4. **Does this mod work on a Mac?**

    Yes. The NAM is a cross-platform mod, with a cross-platform Java installer. Being cross-platform, it will run on macOS, provided Java has been installed. The version of Java included in this package is for Windows users, so it will not work for you. Instead, go to [Adoptium](https://adoptium.net/) or [Oracle](https://www.java.com/) to download a Mac version of Java. Also, since Aspyr updated the Mac port of SimCity 4 to be a 64-bit application (and as of January 2023, has also implemented Apple Silicon support), the 4GB Patch is NOT required for Mac users. 
	
	One quirk to note is that NAM network items in TAB Loops will require the user to press Ctrl-TAB or Ctrl-Shift-TAB to cycle through, rather than the mere TAB or Shift-TAB on other operating systems (or the earlier Mac version), in order to access all the items available under each menu button.

5. **How much hard drive space will the NAM require?**

    It depends on the options you install.  Expect about about 1.2GB for a full NAM install with the RealHighway plugin, down to about 30MB if you've installed NAM Lite.

6. **Will this mod impact game performance?**

    Adding any Plugins to the game will impact performance to at least some extent--more for the game to load.  With modern hardware (as of 2023), the most prominent impacts is will be with the initial load of the game, and when loading a city tile for the first time after that initial load. This can be a noticeable difference, particularly if you've installed the full NAM after running completely "vanilla" (without plugins).

7. **What all is included in the NAM?**

    Check out the [Content Overview](/docs/content-overview) page for a brief look, and the full [Features](/docs/features) section of this documentation for a more in-depth look. The contents of the latest version can be found in the [History](/docs/history) section.

8. **Is this mod stable?**

    The NAM has been around for almost 19 years, and is the most widely-used mod for SimCity 4 Deluxe/Rush Hour. While there are always things in the NAM that are being improved, it has such wide acceptance because it is generally considered to be a stable addition to the game. If you encounter issues while using the mod, the NAM Team would like to know, as we want to ensure users of this mod have an enjoyable experience.

9. **Is using this mod considered cheating?**

    The consensus of most SC4 players is that it is not. The NAM restores the traffic simulator to something much more in line with what Maxis originally intended, before they were forced to significantly down-tune it in order to allow the game to run on a 500MHz Pentium III. While the NAM does allow one to adjust the capacity of the simulator, potentially up to levels significantly higher than the base game, using the "Classic" setting can actually provide an experience that is more challenging than that offered by the base game. Many of the NAM's expansions are designed to provide more options for managing one's grid, and they are, to the greatest extent possible, designed to be functional additions, not cheats.

10. **Is the NAM compatible with other transportation mods?**

    The NAM includes modifications to the Network Rule ("RUL") files (which handle network placement) and the Traffic Simulator Exemplar. It is not compatible with any other mod that modifies these files. Aside from earlier versions of the NAM, there are very few of these files out there. Things like stations (e.g. for Ground Light Rail/Tram, High Speed Rail, etc.) and cosmetic mods (e.g. Euro textures, different streetlights, etc.) are compatible with the NAM. Older cosmetic mods not maintained by the team, however, may not have full coverage of all relevant NAM items.

11. **Do I need to remove previous versions of the NAM and its related plugins?**

    Yes. This has changed since the release of NAM 37 in July 2020. The NAM's contents are by default installed to the My Documents\SimCity 4\Plugins\Network Addon Mod directory (on Windows, and similar directories on other OSes). NAM 31 through NAM 36 also utilized a "z___NAM" folder in that same Plugins directory, which should also be removed.

12. **How do EA and Maxis feel about this mod? Is it legal?**

    The NAM is 100% legal, and Maxis was extremely supportive of our efforts. Maxis employee Frank Simon (AKA MaxisFrank) actually encouraged NAM co-founder **the7trumpets** to undertake modification of the traffic simulator, as the company could not issue a patch themselves, due to the need to still meet the published minimum technical requirements.
	
	EA is currently using a series of screenshots featuring the NAM on their official page for SimCity 4 (though ironically, the version for sale on that page is the EA App version, which features a Version 1.1.610 executable and is not supported by the NAM).

13. **What is this CAM thing? Is it related to the NAM?**

    The NAM and CAM (short for _Colossus Addon Mod_) are completely unrelated mods. The NAM deals with transportation networks, whereas the CAM affects the simulation of growable RCI buildings, by adding new growth stages. The still-available original version of the CAM (CAM 1.0, July 2007) does include an optional traffic simulator plugin, which is incompatible with the NAM's traffic simulator plugins, and should not be installed if using the NAM. The CAM's creators believe the current NAM simulator is vastly more suited to the CAM than the CAM traffic plugin. The traffic plugin was removed in the later CAM 2.x releases published by **InvisiChem**.

14. **Are there any tutorials or videos that help explain this mod and its functionality?**

    Yes, there are some tutorials included in this documentation. There are also quite a few on the main SC4 forums, as well as on YouTube, but considering that the NAM has actually been around longer than YouTube (!), it is important to pay attention to the date of tutorial, as the NAM has changed significantly since the early days, and is still changing (particularly in light of the long-term project to move away from standard puzzle pieces).

15. **Does the NAM have dependencies?**

    The NAM requires zero dependencies. Since the NAM struck down its long-standing prohibition on including lots back in 2013, basic stations for some of the NAM's additional rail-type network options are even part of the package now. If you are encountering the infamous "brown boxes" anywhere, they are the product of having a non-NAM mod or plugin installed, without all its dependencies.

16. **Why is the game crashing to desktop immediately upon loading after installing this mod?**

    The only reason the NAM could cause an immediate crash to desktop (CTD) would be if you're running the original version of SimCity 4 (not Deluxe/Rush Hour), or if your game is improperly configured for your hardware (in which case it will crash similarly without the NAM). If you are running Deluxe/Rush Hour, you may want to check any other plugins you may have installed.

17. **What's with all the acronyms? Is there a list of what they all mean?**

    Acronyms are omnipresent in the SC4 content world, and they serve a valuable purpose as shorthand. They can seem a bit arcane at first, however. The [Glossary](/docs/glossary) in this documentation contains all the pertinent NAM-related ones you may encounter.

18. **Why are none of the icons showing up after I've installed the NAM?**

    You may not have installed the NAM correctly. See the [Installation Instructions](/docs/installation-notes/) page.

19. **Why am I seeing duplicate icons?**

    You may have two copies of a given NAM plugin installed. You'll need to find and remove the duplicate, which could be from an earlier NAM or NAM component plugin release, which could interfere with your NAM installation in other ways.

20. **Why am I getting a red arrow/gray cursor when I click one of the new icons in game?**

    In most situations, this is an indication that you have the Controller file from an outdated NAM release, or an incompatible RUL-bound transit mod installed. You'll need to remove the offending files. The one exception is with the little icon with the NAM logo at the bottom of the Highways menu--this button is not meant to be pressed, but rather, hovered over to show version information. If the version information here says anything other than "{{< param docsversion >}}", that's a definite sign there's an outdated/incompatible file lurking about your Plugins folder.

21. **After installing the NAM, why are the tiles leading up to my intersections suddenly orange or red in the Congestion Data View?**

    The NAM's traffic simulator plugin, with its default settings, amplifies the effect of the Intersection and Turn Capacity Effect property, affecting network tiles that are within a 2-tile radius of an intersection (or transition) to better simulate the effects of queues at intersections (esp. signalized ones).

22. **Why are the cars disappearing in game?**

    The "cars", or "automata", are not really there in the traffic simulation--they're simply a visual effect that merely has a casual correlation to actual traffic data in the game. Being visual effects, they can eat up processing power, and in order to keep the game from becoming overloaded, the game's engine puts a finite limit on how many vehicular automata can show up at one time. Over that limit, and they disappear. Certain Automata Plugin options can allow more automata to stay on the screen at one time, though keeping the cars on the road all the time is simply an impossibility, due to the way the game is programmed. SimCity 4 is a statistics-based simulator, not an agent-based simulator (as SimCity (2013) and Cities: Skylines are).

23. **What are the differences between "puzzle pieces", "FLEX pieces", "starter pieces", and TE lots"?**

    _Puzzle pieces_ are ploppable network items, and are placed through the IntersectionOrdering RUL file (also known as RUL 0x10000000 or RUL-0). The interchanges included in the base game for the Elevated and Ground Highway networks are puzzle pieces. They are effectively static in their implementation--once they are plopped, they cannot be altered without bulldozing. In effect, they are old dogs that cannot be taught new tricks.

    _Starter pieces_ are ploppable network items, usually small in size, which are designed primarily to initiate a network override, allowing any of the game's draggable base networks to assume a new appearance and/or new functionality, often to the point of behaving like new networks. One simply places an instance of the starter piece, and drags the appropriate base network through the starter piece to initiate the override. The technique used to make them was first developed by **smoncrie** in 2006, and was first used in the implementation of Draggable Ground Light Rail (GLR) in the Version 21 release of June 2007. Examples of starter pieces can be found all throughout the NAM, particularly with the RealHighway (RHW) plugin, the Network Widening Mod (NWM), and the Street Addon Mod (SAM).

    _FLEX pieces_ might initially appear to be identical to puzzle pieces, as they are also ploppable items, but unlike garden variety puzzle pieces, they _can_ be taught new tricks, and can change to better fit their surroundings, accepting input from starter pieces, or sometimes even acting as combination starter pieces/transitions. Examples of these include the Diagonal Street Helper Pieces, the Avenue Roundabouts, and many newer components in the RealHighway (RHW) system (almost all of which are prefaced by the term "FLEX" in their name). Because of this, a single FLEX piece can fulfill a range of functions that could otherwise require as many as 50 conventional puzzle pieces. The game also treats FLEX pieces more akin to draggable network items upon their placement in the game.

    _TE lots_ (short for _transit-enabled lots_) are lot-based items, also ploppable, but are not RUL bound, and are primarily intended to allow one's sims to switch transit types (i.e. from being on a train to walking) or add some non-transit purpose to a particular stretch of a network. The most common uses of TE lots are transit stations and toll booths.

    <!-- For more details, see here. -->

24. How do I move between the different puzzle/FLEX/starter pieces, and how do I rotate them?

    The TAB key will move forward through a given set of puzzle pieces under a single icon, and Shift-TAB will move backwards. Rotation is accomplished through the Home and End keys. On macOS, it is actually Ctrl-TAB and Ctrl-Shift-TAB (TAB and Shift-TAB will still work, but will tend to skip every other item).

25. What is up with the icon with the NAM logo at the bottom of the Highways menu, and why does it do nothing when I click it?

    The NAM logo icon is a diagnostic tool, which, if hovered over, will show you which version of the NAM Controller you are currently running. This can be useful in diagnosing issues pertaining to the NAM Controller.  It is not supposed to do anything when you click it.

26. Why is the game crashing after I place a puzzle piece?

    This is a bug in the game itself, typically triggered by attempting to place conventional puzzle pieces in the vicinity of TE lots. If, in the process of constructing a puzzle piece, the footprint of the puzzle piece overlaps that of the TE lot, even before the puzzle piece is placed, the game generally does not understand the configuration, and will immediately crash. This is an issue within the game's executable, and as a result, it was long deemed an unsolvable issue.

    _However_, **simmaster07** managed to decode enough of the framework that SimCity 4 uses to load DLL files from other sources, and was able to patch this issue with his _SC4Fix.dll_ file. SC4Fix is available at [Simtropolis](http://community.simtropolis.com/files/file/30883-sc4fix-third-party-patches-for-sc4/).

27. Why isn't it possible to add true new networks, instead of using starter pieces?

    Adding new networks is, at this time, impossible. The base RHW network was only possible as it used an unused network stub left in the game. Although game files suggest that theoretically, there is space for three more true networks (for a total of 16), there is not enough of a stub for these final three slots for us to enable them. The starter piece paradigm allows us to very closely mimic the effects of adding true new networks, however.

28. Why haven't you guys added submenus instead of using TAB loops?

    Adding new submenus is, at this time, impossible. SC4 mod developers have tried for many years, to no avail, though have come up with workarounds like Daeley's Advanced Menu Navigator (DAMN), which repurposes the game's News system, and Menu Management Lots (MMLs).

29. Certain draggable items are not working for me, and I'm following the directions. Why isn't it working?

    If you're referring to starter pieces, make sure you're dragging the specified default network out the correct end of the piece. Trying to "drag" the actual starter piece itself will get you nowhere. If you're referring to a starter piece-based network extension not cooperating with a particular setup you're trying to build, it may be that the setup is not supported. If you're getting "blank" tiles upon drawing the item, this is generally a sign of improper installation and/or conflicting files being present in your Plugins.

30. My RCI demand seems to have changed since I installed the NAM. What is happening?

    The NAM does not directly affect RCI demand. It does not modify anything other than transportation-related files. You may have installed something else recently that does modify other parts of the game, however. Because the NAM is popular and a large-scale mod, many newer players who have installed other files at the same time mistakenly presume the NAM is at fault. Additionally, if you somehow unchecked too many boxes in the installer, it is possible you somehow caused the installer to skip installation of the Traffic Simulator plugin, which would cause the game to revert to the Maxis defaults.

31. I'm having difficulty using U-Drive-It (UDI) functionality on certain NAM items. Is there any way to fix this?

    It depends on the item--Single-Track Rails (STR) and the various Turning Lane Avenue (TLA) options in the Network Widening Mod (NWM) are perhaps the most prone to issues. UDI was a last-minute addition to SimCity 4 Deluxe/Rush Hour, and is known for having a number of quirks. There really isn't a way to fix them because of these quirks, though the TLA quirks can be mitigated by disabling "Snap To Road" and driving manually.

32. I'm from North America. Why aren't the traffic signals so they're on the far side of the intersection, as they are here? Can I change this?

    The way the game's default traffic signals work with the stop point system on network path files, the signals have to be on the near-side in order to function. Some of the FLEX Turn Lane (FTL) options and Turn Lane Extension Pieces (TuLEPs) use trick stop points to allow for far-side signals, but there are feasible limits to this technique. Recently, however, there have been advances in signal modding, using true-3D props, which have allowed for offset props to be developed, getting around this issue. Offset props have not been released as of writing, but may potentially be made available as a third-party addition in the future.

33. I'm from a country where people drive on the left. Can I switch the side of the traffic signals?

    Yes. Check out the Signal Replacement Project, developed by NAM Team member MandelSoft. Please note that MandelSoft is no longer active in the SC4 community, and newer items may not be covered by that mod. It is not the NAM Team's responsibility to update independent cosmetic mods.

34. Should I use the SC4 DatPacker or JDatPacker tools to consolidate my NAM installation into a single file?

    With the Mac version, it is effectively required to consolidate the mods files using JDatPacker, due to the "number-of-files limit" issue. With the Windows version, it will speed up load times, but you'll need to ensure you remove the DatPacked files upon installing any NAM updates, or else they will interfere with the proper functionality of the update. Unless you also preserve your pre-DatPacked NAM installation, you will also be unable to use the NAM installer's ability to install the same options when updating to a new version. As such, the NAM Team generally does not recommend that Windows users DatPack their installations.

35. How do I build an interchange with the RealHighway (RHW) system?

    Rather than the pre-fabricated, one-piece interchanges of the game's default highway system, the RealHighway system was designed with the concept of modular interchange construction in mind. More details can be found in the RHW portion of the documentation. That said, NAM 45 (September 2022) did introduce the QuickChange Xpress (QCX) system, which currently adds full diamond interchanges to the RHW's repertoire.  These can be found under the QuickChanges button on the Highways Menu.

36. Why aren't my neighbor connections working on RealHighways and/or wider Roads, Avenues and One-Way Roads? How do I fix them?

    Most RealHighways (except the RHW-2 and RHW-3 networks) and some multi-tile starter-based items require the use of special "Neighbor Connector Puzzle Pieces" (NCPPs) to function. For networks that are "combined", having adjacent two-way traffic, simply drag the network to the edge of the city tile, as you normally would (ignoring the fact that the neighbor connection arrows both face the same direction), and plop the appropriate Neighbor Connection Puzzle Piece over it. You'll need to do this on both sides of the neighbor connection. For one-way/"split" networks, follow the same directions, and if there is a gap between the two directions, you'll need to place underground loop pieces next to the city edge, between the two carriageways.

37. Why are my RealHighway networks remaining at two lanes and ground level after dragging the network through one of the starter pieces?

    If your RealHighway starters are not working, and the network is remaining as the RealHighway-2 (RHW-2) after dragging through a starter, then this is likely a sign that you have the "LowRAM/NoRHW" version of the NAM Controller installed, which, as the name indicates, does not include any of the RUL2 code necessary for the RealHighway's starters to function. Reinstall the mod with the Full version of the Controller, and ensure that your system meets the minimum requirements for the RealHighway plugin (4GB Patch installed, 64-bit operating system, and at least 4GB RAM).

38. Why can't I build diagonal intersections with some of the wider Roads, Avenues and One-Way Roads?

    As of NAM 46, diagonal 4-way ("+") intersections and crossings are now possible betwen the single-tile Network Widening Mod (NWM) networks (TLA-3, AVE-2, ARD-3, OWR-1, OWR-3, and NRD-4) with all of the game's base networks, plus Ground Light Rail (GLR), Single-Track Rail (STR), and all other single-tile NWM networks.  3-way ("T") intersections are not presently available, nor are any diagonal intersection or crossing options for the multi-tile NWM networks.

39. When is the next NAM version being released?

    There is no date or timeline for the next release. We honestly have no idea. This project is a very passionate hobby for many NAM Team members, but it is still just that--a hobby, something we do in our spare time, as volunteers. It's also a technically complex undertaking, where things can unexpectedly go wrong in development. It's simply not possible for us to predict when we'll be done with a release, and coming up with arbitrary release dates just leads to extremely buggy releases or postponement, disappointing everyone in the process. The one time we did it (in 2013), it did not go well. Besides, we like to surprise people.

40. I'm a user from outside the North America--are there Euro road textures to make the roads look more familiar to me?

    Yes, just select either the "EU_Right Side" or "EU_Left Side" option (depending on your drive side) under "8 Texture and Drive Side Support".

41. I have ideas for new features. Does the NAM Team take requests?

    Certainly. That said, being the transportation fiends we are, we probably want a lot of the same stuff you do, and there's a good chance it's either in development or planned.

42. I'd like to contribute to the NAM. How do I do so?

    As far membership on the NAM Team or the NAM Associates testing group goes, we're always on the lookout for folks with the right skills on the forums. If you're looking to add something to the mod, show us a prototype of some sort--we'll help you figure out the best way to realize it. We don't, however, have open sign-ups for development or testing positions.

43. Are you guys crazy, making this extensive mod for a 20-year-old game?!

    Yes. Always have been, always will be.