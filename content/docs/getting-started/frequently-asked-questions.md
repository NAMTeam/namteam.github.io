---
title : "Frequently Asked Questions"
description: "These are the most common questions that have been asked about the Network Addon Mod."
lead: "These are the most common questions that have been asked about the Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 5
draft: false
images: []
url: "docs/getting-started/frequently-asked-questions"
---
<!-- markdownlint-disable MD029 -->
### What is the Network Addon Mod?

Take a peek at the [Overview](/docs/getting-started/what-is-the-nam/) page.

### What is the difference between NAM and NAMLite?

NAMLite is a bite-sized package for users looking for a minimal install. Think of NAMLite as a collection of the NAM's "best hits".

### What all is included in the NAM?

Check out the [Content Overview](/docs/getting-started/what-is-the-nam/) page for a brief look, and the full [Features](/docs/feature-guides) section of this documentation for a more in-depth look. The contents of the latest version can be found in the [History](/docs/reference/nam-version-history/) section.

### What is the 4GB Patch?
The 4GB Patch is a small patch, usable on any 32-bit executable file (not just SimCity 4) that allows the application to access 4GB RAM instead of a mere 2GB, and has historically been used in many modding communities associated with older games. The application will only use at most 2GB of RAM, even if you have far more available. This can also happen if your system is running a 32-bit version of Windows (i.e. if you're still running Windows XP), and/or you have less than 4GB RAM. For more information, refer to [A Note About the "4GB Patch"](/docs/getting-started/troubleshooting-installation#4gb-patch).

### Does this mod work on a Mac?

Yes. The NAM is a cross-platform mod, with a cross-platform Java installer. Being cross-platform, it will run on macOS, provided Java has been installed. The version of Java included in this package is for Windows users, so it will not work for you. Instead, go to [Adoptium](https://adoptium.net/) or [Oracle](https://www.java.com/) to download a Mac version of Java. Also, since Aspyr updated the Mac port of SimCity 4 to be a 64-bit application (and as of January 2023, has also implemented Apple Silicon support), the 4GB Patch is NOT required for Mac users.

One quirk to note is that NAM network items in TAB Loops will require the user to press **Ctrl+Tab** or **Ctrl+Shift+Tab** to cycle through, rather than the mere TAB or Shift-TAB on other operating systems (or the earlier Mac version), in order to access all the items available under each menu button.

### How much hard drive space will the NAM require?

It depends on the options you install.  Expect about about 1.2GB for a full NAM install with the RealHighway plugin, down to about 30MB if you've installed NAM Lite.

### Will this mod impact game performance?

Adding any Plugins to the game will impact performance to at least some extent -- more for the game to load.  With modern hardware (as of 2023), the most prominent impacts is will be with the initial load of the game and when loading a city tile for the first time after that initial load. This can be a noticeable difference, particularly if you've installed the full NAM after running completely "vanilla" (without plugins). The loading time will shorten with subsequent loads of other cities in the same play session. If you exit and re-enter the game, subsequent re-entries will also be quicker. Installing Null 45's [Startup Performance Optimization DLL for SimCity 4](https://community.simtropolis.com/files/file/36244-startup-performance-optimization-dll-for-simcity-4/) has been shown to make a dramatic difference in reducing load times.

### Is this mod stable?

The NAM has been around since shortly after the game released in 2003, and is the most widely-used mod for SimCity 4 Deluxe/Rush Hour. While there are always things in the NAM that are being improved, it has such wide acceptance because it is generally considered to be a stable addition to the game. If you encounter issues while using the mod, the NAM Team would like to know, as we want to ensure users of this mod have an enjoyable experience.

### Is using this mod considered cheating?

The consensus of most SC4 players is that it is not. The NAM restores the traffic simulator to something much more in line with what Maxis originally intended, before they were forced to significantly down-tune it in order to allow the game to run on a 500MHz Pentium III. While the NAM does allow one to adjust the capacity of the simulator, potentially up to levels significantly higher than the base game, using the "Classic" setting can actually provide an experience that is more challenging than that offered by the base game. Many of the NAM's expansions are designed to provide more options for managing one's grid, and they are, to the greatest extent possible, designed to be functional additions, not cheats.

### Is the NAM compatible with other transportation mods?

The NAM includes modifications to the Network Rule ("RUL") files (which handle network placement) and the Traffic Simulator Exemplar. It is not compatible with any other mod that modifies these files. Aside from earlier versions of the NAM, there are very few of these files out there. Things like stations (e.g. for Ground Light Rail/Tram, High Speed Rail, etc.) and cosmetic mods (e.g. Euro textures, different streetlights, etc.) are compatible with the NAM. Older cosmetic mods not maintained by the team, however, may not have full coverage of all relevant NAM items.

### How can I know what version of the NAM I currently have installed?

At the very bottom of the Highways menu in the game you will find the NAM icon. Hover over this icon to show information about your current NAM installation.

### Do I need to remove previous versions of the NAM and its related plugins?

Yes. This has changed since the release of NAM 37 in July 2020. The NAM's contents are by default installed to the My Documents\SimCity 4\Plugins\Network Addon Mod directory (on Windows, and similar directories on other OSes). NAM 31 through NAM 36 also utilized a "z___NAM" folder in that same Plugins directory, which should also be removed.

### What happened to the Traffic Simulation Configuration Tool (TSCT)?

As of NAM 45, the TSCT is discontinued and no longer available in NAM releases. With NAM 45, the NAM Traffic Simulator has been upgraded to Simulator Z 3.0, resulting in further optimizations to both the speed and accuracy of the simulation, and improved network utilization.  The improved pathfinding in the new traffic simulator makes it much more responsive to user actions in building a city. To significantly bump up sim willingness to use transit, simply add more transit stations and/or more transit lines.

The extremely thorough testing done on Simulator Z 3.0 determined that many properties of the simulator are more sensitive than previously expected, and that many of the modifications previously allowed in the TSCT actually can significantly degrade the performance of the traffic simulation, to levels we found unacceptable.  More details about this can be found in the [Traffic Simulator Feature Guide](/docs/feature-guides/the-nam-traffic-simulator/).

As such, use of the TSCT is no longer endorsed by the NAM Team, and we cannot provide technical support to users who have modified the "unsafe" properties in the Traffic Simulator via the TSCT or other means. 

### How do EA and Maxis feel about this mod? Is it legal?

The NAM is 100% legal, and Maxis was extremely supportive of our efforts. Maxis employee Frank Simon (AKA MaxisFrank) actually encouraged NAM co-founder **the7trumpets** to undertake modification of the traffic simulator, as the company could not issue a patch themselves, due to the need to still meet the published minimum technical requirements.

Additionally, EA is currently using a series of screenshots featuring the NAM, among other custom content, on their official store page for SimCity 4.

### What is this CAM thing? Is it related to the NAM?

The NAM and CAM (short for _Colossus Addon Mod_) are completely unrelated mods. The NAM deals with transportation networks, whereas the CAM affects the simulation of growable RCI buildings, by adding new growth stages. The still-available original version of the CAM (CAM 1.0, July 2007) does include an optional traffic simulator plugin, which is incompatible with the NAM's traffic simulator plugins, and should not be installed if using the NAM. The CAM's creators believe the current NAM simulator is vastly more suited to the CAM than the CAM traffic plugin. The traffic plugin was removed in the later CAM 2.x releases published by **InvisiChem**.

### Are there any tutorials or videos that help explain this mod and its functionality?

Yes, there are some tutorials included in this documentation. There are also quite a few on the main SC4 forums, as well as on YouTube, but considering that the NAM has actually been around longer than YouTube (!), it is important to pay attention to the date of tutorial, as the NAM has changed significantly since the early days, and is still changing (particularly in light of the long-term project to move away from standard puzzle pieces).

### Does the NAM have dependencies?

**The NAM requires zero dependencies**. Since the NAM struck down its long-standing prohibition on including lots back in 2013, basic stations for some of the NAM's additional rail-type network options are even part of the package now. If you are encountering the infamous "brown boxes" anywhere, they are the product of having a non-NAM mod or plugin installed, without all its dependencies.

### What's with all the acronyms? Is there a list of what they all mean?

Acronyms are omnipresent in the SC4 content world, and they serve a valuable purpose as shorthand. They can seem a bit arcane at first, however. The [Glossary](/docs/reference/glossary) in this documentation contains all the pertinent NAM-related ones you may encounter.

### What are the differences between "puzzle pieces", "FLEX pieces", "starter pieces", and TE lots"?

_Puzzle pieces_ are ploppable network items, and are placed through the IntersectionOrdering RUL file (also known as RUL 0x10000000 or RUL-0). The interchanges included in the base game for the Elevated and Ground Highway networks are puzzle pieces. They are effectively static in their implementation -- once they are plopped, they cannot be altered without bulldozing. In effect, they are old dogs that cannot be taught new tricks.

_Starter pieces_ are ploppable network items, usually small in size, which are designed primarily to initiate a network override, allowing any of the game's draggable base networks to assume a new appearance and/or new functionality, often to the point of behaving like new networks. One simply places an instance of the starter piece, and drags the appropriate base network through the starter piece to initiate the override. The technique used to make them was first developed by **smoncrie** in 2006, and was first used in the implementation of Draggable Ground Light Rail (GLR) in the Version 21 release of June 2007. Examples of starter pieces can be found all throughout the NAM, particularly with the RealHighway (RHW) plugin, the Network Widening Mod (NWM), and the Street Addon Mod (SAM).

_FLEX pieces_ might initially appear to be identical to puzzle pieces, as they are also ploppable items, but unlike garden variety puzzle pieces, they _can_ be taught new tricks, and can change to better fit their surroundings, accepting input from starter pieces, or sometimes even acting as combination starter pieces/transitions. Examples of these include the Diagonal Street Helper Pieces, the Avenue Roundabouts, and many newer components in the RealHighway (RHW) system (almost all of which are prefaced by the term "FLEX" in their name). Because of this, a single FLEX piece can fulfill a range of functions that could otherwise require as many as 50 conventional puzzle pieces. The game also treats FLEX pieces more akin to draggable network items upon their placement in the game.

_TE lots_ (short for _transit-enabled lots_) are lot-based items, also ploppable, but are not RUL bound, and are primarily intended to allow one's sims to switch transit types (i.e. from being on a train to walking) or add some non-transit purpose to a particular stretch of a network. The most common uses of TE lots are transit stations and toll booths.

<!-- For more details, see here. -->

### How do I move between the different puzzle/FLEX/starter pieces, and how do I rotate them?

The TAB key will move forward through a given set of puzzle pieces under a single icon, and Shift-TAB will move backwards. Rotation is accomplished through the Home and End keys. On macOS, it is actually Ctrl-TAB and Ctrl-Shift-TAB (TAB and Shift-TAB will still work, but will tend to skip every other item).

### What is up with the icon with the NAM logo at the bottom of the Highways menu, and why does it do nothing when I click it?

The NAM logo icon is a diagnostic tool, which, if hovered over, will show you which version of the NAM Controller you are currently running. This can be useful in diagnosing issues pertaining to the NAM Controller.  It is not supposed to do anything when you click it.

### Why isn't it possible to add true new networks, instead of using starter pieces?

Adding new networks is, at this time, impossible. The base RHW network was only possible as it used an existing unused network stub left in the game. Although game files suggest that theoretically, there is space for three more true networks (for a total of 16), there is not enough of a stub for these final three slots for us to enable them. However, the starter piece paradigm allows us to very closely mimic the effects of adding true new networks.

### Why haven't you guys added submenus instead of using TAB loops?

Adding new submenus is, at this time, impossible. SC4 mod developers have tried for many years, to no avail, though have come up with workarounds like Daeley's Advanced Menu Navigator (DAMN), which repurposes the game's News system, and Menu Management Lots (MMLs).

### I'm from North America. Why aren't the traffic signals on the far side of the intersection, as they are here? Can I change this?

With the way the game's default traffic signals work with the stop point system on network path files, the signals have to be on the near-side in order to function. Some of the FLEX Turn Lane (FTL) options and Turn Lane Extension Pieces (TuLEPs) use trick stop points to allow for far-side signals, but there are feasible limits to this technique. Recently, however, there have been advances in signal modding, using true-3D props, which have allowed for offset props to be developed, getting around this issue. Offset props have not been released as of writing, but may potentially be made available as a third-party addition in the future.

### I'm a user from outside the North America -- are there Euro road textures to make the roads look more familiar to me?

Yes, just select either the "EU_Right Side" or "EU_Left Side" option (depending on your drive side) under "8 Texture and Drive Side Support".

### I'm from a country where people drive on the left. Can I switch the side of the traffic signals?

Yes. Check out the Signal Replacement Project, developed by NAM Team member MandelSoft. Please note that MandelSoft is no longer active in the SC4 community, and newer items may not be covered by that mod. It is not the NAM Team's responsibility to update independent cosmetic mods.

### Should I use the SC4 DatPacker or JDatPacker tools to consolidate my NAM installation into a single file?

With the Mac version, it is effectively required to consolidate the mods files using JDatPacker, due to the "number-of-files limit" issue. With the Windows version, it will speed up load times, but you'll need to ensure you remove the DatPacked files upon installing any NAM updates, or else they will interfere with the proper functionality of the update. Unless you also preserve your pre-DatPacked NAM installation, you will also be unable to use the NAM installer's ability to install the same options when updating to a new version. As such, the NAM Team generally does not recommend that Windows users DatPack their installations.

### How do I build an interchange with the RealHighway (RHW) system?

Rather than the pre-fabricated, one-piece interchanges of the game's default highway system, the RealHighway system was designed with the concept of modular interchange construction in mind. More details can be found in the RHW portion of the documentation. That said, NAM 45 (September 2022) did introduce the QuickChange Xpress (QCX) system, which currently adds full diamond interchanges to the RHW's repertoire.  These can be found under the QuickChanges button on the Highways Menu.

### When is the next NAM version being released? {#release-date}

There is no date or timeline for the next release. We honestly have no idea. This project is a very passionate hobby for many NAM Team members, but it is still just that -- a hobby, something we do in our spare time, as volunteers. It's also a very technically complex undertaking, where things can unexpectedly go wrong in development. It's simply not possible for us to predict when we'll be done with a release, and coming up with arbitrary release dates just leads to extremely buggy releases or postponement, disappointing everyone in the process. The one time we did it (in 2013), it did not go well. Besides, we like to surprise people.

### I want to use an older version of the NAM? Where can I download previous versions? {#old-versions}

The NAM Team only provides support and allows distribution of the most recent NAM version. With the exception of older non-English language versions (which are supported by their respective sites, not the NAM Team), no technical support will be provided to users of prior versions of the NAM, nor will any past versions of the NAM be made available for download, by request or otherwise. The team does not keep an official archive of past releases, and does not have the resources to answer questions regarding them. Each release includes improvements across the board to features new and old, is designed to be as compatible with cities built with previous versions as is humanly possible, and is also intended to improve the end user experience. Old releases are inherently inferior, and not "simpler" or "easier" to use.

Users wanting a smaller feature set, due to technical limitations, or unfamiliarity with the NAM's vast options, should instead seek to install NAMLite, or fewer options in the current NAM, potentially coupled with the "Low RAM/No RHW" option, .

Users wishing to hold onto old versions should back them up in their personal archives. Note again that no technical support will be provided for this, nor may any user or site redistribute any old versions.

### I have ideas for new features. Does the NAM Team take requests?

Certainly. That said, being the transportation fiends we are, we probably want a lot of the same stuff you do, and there's a good chance it's either in development or planned.

### I'd like to contribute to the NAM. How do I do so?

As far membership on the NAM Team or the NAM Associates testing group goes, we're always on the lookout for folks with the right skills on the forums. If you're looking to add something to the mod, show us a prototype of some sort -- we'll help you figure out the best way to realize it. We don't, however, have open sign-ups for development or testing positions.

### Are you guys crazy, making this extensive mod for a 20-year-old game?!

Yes. Always have been, always will be.
