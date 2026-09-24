---
title : "The NAM DLL"
url: "/docs/feature-guides/nam-dll"
description: "The NAM DLL is a building block that complements and expands the functionality of the NAM in ways that would not otherwise be possible."
lead: "The NAM DLL is a building block that complements and expands the functionality of the NAM in ways that would not otherwise be possible. Vastly reduced loading times, draggable diagonal streets, slope tolerance for curves, and new keyboard shortcuts for networks are all features enabled by the DLL would have otherwise been impossible. The DLL is a fundamental part of NAM 50, and will be a core component of all NAM releases going forward."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

## Overview

The NAM DLL brings a wide variety of fixes, many of which were previously thought impossible to implement due to limitations imposed within the game or its code.
Should you wish to disable any of the features introduced by this DLL, either because of personal preferences or for debugging purposes, this is possible by installing the optional [NAM.ini](https://github.com/NAMTeam/nam-dll/blob/main/src/NAM.ini) file.
When the game is launched, the NAM DLL will read the configuration you have specified in this file and enable or disable the features as specified.
The NAM.ini file is intentionally distributed separately; the default settings are recommended for the vast majority of users.

The NAM DLL is fully open source, and is distributed under the [LGPL-3 license](https://opensource.org/license/lgpl-3-0).
The source can be found at [Github](https://github.com/NAMTeam/nam-dll).

### New RUL2 Engine

One of the most substantial new features of the DLL is a custom RUL2 engine.
[RUL2](https://wiki.sc4devotion.com/index.php?title=RUL2) code defines what happen when a texture or model is drawn adjacent to another texture or model, and is essential for draggable networks, intersections, and overrides.
The new custom engine: 
- makes override networks much more stable,
- allows for tighter footprints (crossings of override networks that previously had to be placed one tile apart may now be placed directly adjacent to each other),
- reduces the size of the NAM codebase by almost 90% and by 10.8 million lines, making it easier to maintain and reducing the chance of bugs,
- improves performance and load time (the initial city load time is reduced by a huge amount, as a result of the controller code size reduction),
- removes the strict requirement for the 4GB patch (though usage is still recommended), and
- removes the Low-RAM/No-RHW controller as the full NAM Controller is now less than 60 MB.

{{< img-simple src="images/rul2-code-diff.jpg" class="img-fluid" caption="Lines of RUL2 removed from the controller due to the new engine" >}}

<div class="row g-4 justify-content-center">
    <div class="col-6 col-md-5 d-flex justify-content-center">
        <div class="w-100" style="max-width: 640px;">
            {{< video mp4-src="videos/loading-with-dll.mp4" ratio="16x9" attributes="controls autoplay muted loop playsinline" caption="First load, full NAM install with DLL" >}}
        </div>
    </div>
    <div class="col-6 col-md-5 d-flex justify-content-center">
        <div class="w-100" style="max-width: 640px;">
            {{< video mp4-src="videos/loading-without-dll.mp4" ratio="16x9" attributes="controls autoplay muted loop playsinline" caption="First load, full NAM install without DLL" >}}
        </div>
    </div>
</div>

### Eternal Commuter Loop Fix
The Eternal Commuter Loop is a bug (or design flaw) in the game's pathfinding by which commuters between a series of cities become stuck in a loop traveling between cities, never actually finding a job.
In short, sims in a city will attempt to find work in a neighboring city if a neighbor connection is a shorter commute than jobs within the same city. Once they enter the new city, if a neighbor connection is again shorter than jobs in the city, the sim will again choose the neighbor connection to find a job. 
Since the game does not retain any history of commutes once a sim crosses a neighbor connection, this process repeats over and over, until sims are stuck in a loop and are never able to find a job.
This is perhaps one of the longest-standing bugs in the game that has not yet been able to be solved, with posts discussing theoretical solutions and possible workarounds as far back as 2008.

The NAM DLL introduces a feature designed to halt the creation of a commute loop via a small tweak where neighbor-to-neighbor routes that connect the city to the North and the city to the West are blocked by the path finder, so loops cannot form anymore.
All other connections, such as South-to-North or East-to-West, are still allowed.

{{< img-simple src="images/commute-loop-fix.jpeg" class="img-fluid" caption="West ↔ North connections are blocked, thus preventing the loop from forming" >}}

To be clear, this patch does not hinder Sims from commuting to any adjacent cities in any direction.
Sims travelling *through* a neighboring city to look for a job in a third city is usually not desirable in the first place, as it means the Sims didn't find what they were looking for.
This can be an indication that your networks aren't connected in the best way possible.

The patch only kicks in precisely in this case, i.e. traveling through an entire city from edge to edge (but only North-to-West, or West-to-North).
If commuters enter your city at one of those two edges, they will simply find a job in your city or travel southwards or eastwards.
Note that this is similar to how Maxis has always blocked Sims from leaving a city at the same edge they entered, so loops couldn't form with just three cities.

More information about the commute loop and the community's evolution of knowledge and workarounds can be found in multiple threads across the years: [A solution to the eternal commuter problem](https://www.sc4devotion.com/forums/index.php?topic=5271.0), [Eternal Commute](https://community.simtropolis.com/forums/topic/60791-eternal-commute/), [Further Clarification on the Eternal Commuter Bug](https://community.simtropolis.com/forums/topic/52887-further-clarification-on-the-eternal-commuter-bug/), [Help Removing A Commuter Loop](https://community.simtropolis.com/forums/topic/72324-help-removing-a-commuter-loop/), [Possible (Maybe Not) Solution to Eternal Commuter Problem?](https://community.simtropolis.com/forums/topic/75411-possible-maybe-not-solution-to-eternal-commuter-problem/), and [My Real Fix for Eternal Commute Loop problem](https://community.simtropolis.com/forums/topic/762585-my-real-fix-for-eternal-commute-loop-problem/).

### Slope Tolerance for Network Pieces
The DLL significantly improves slope tolerance for many network elements.
- 45 degree curves of single-tile networks are slope-conforming now.
- All starter pieces and many FLEX pieces are slope-tolerant now.
- The FLEX on-slope pieces have been improved:
    - Their footprint has been minimized.
    - The sinkhole bug associated with them is fixed.
    - Networks can be dragged through the on-slope transition piece.

{{< gallery col-xl="2" col-lg="2" col-md="2" caption="Improved slope tolerance for stations and starters">}}
    images/slope-tolerant-starters-1.jpeg
    images/slope-tolerant-starters-2.jpeg
{{< /gallery >}}

{{< gallery col-xl="2" col-lg="2" col-md="2" caption="Improved slope tolerance for curves">}}
    images/slope-tolerant-curves-1.jpg
    images/slope-tolerant-curves-2.jpg
    images/slope-tolerant-curves-3.jpg
    images/slope-tolerant-curves-4.jpg
{{< /gallery >}}

{{< img-simple src="images/on-slope-3.jpeg" class="img-fluid" caption="Networks can pass through on-slope pieces" >}}

{{< img-simple src="images/on-slope-2.jpeg" class="img-fluid" caption="Smaller footprint of on-slope pieces allows networks to be placed adjacent to them" >}}

### Street Network updates
Multiple updates have been included for the street network:
- Streets can now be dragged diagonally.
- Tunnels can now be built using the Street network.
- Auto-connect of the Street and RHW networks has been disabled.

{{< img-simple src="images/diag-draggable-streets-and-tunnels.jpeg" class="img-fluid" >}}

{{< alert context="info" >}}
For street tunnels to work correctly, you need a compatible slope mod, such as [NAM Tunnel and Slope Mod](/docs/feature-guides/tunnel-and-slope-mod).
Alternatively, installing the [Resource Loading Hooks DLL](https://community.simtropolis.com/files/file/36242-resource-loading-hooks-dll-for-simcity-4/) adds compatibility with all existing slope mods, as the NAM already includes an Exemplar Patch for use with that mod.
{{< /alert >}}

### Keyboard Shortcuts for Missing Networks
Out of the box, SC4 never provided keyboard shortcuts for certain networks. The NAM DLL adds these shortcuts via an included KEYCFG subfile:
- Monorail: <kbd>Ctrl</kbd> + <kbd>Y</kbd>
- One-Way Road: <kbd>Shift</kbd> + <kbd>E</kbd>
- Ground Highway: <kbd>Alt</kbd> + <kbd>E</kbd>
- RHW: <kbd>Control</kbd> + <kbd>E</kbd>

{{< alert context="warning">}}
If you already have a custom KEYCFG file in your Plugins, they will conflict with each other.
Either deselect the corresponding installer option (Miscellaneous → Additional Network Shortcuts) or make sure your file loads after the NAM.
{{< /alert >}}

### Other Misc Changes
Other minor changes now enabled by the DLL include:
- the removal of the invisible cursor tile from all FLEX pieces. The handle does not interfere with any lots or networks anymore,
- a reduction of the minimum height of bridges to enable ferry clearance from 30 to 20 meters,
- an option to allow RCI zones to access RHW networks (disabled by default), and
- a fix for the "sinkhole to China" bug caused by plopping network pieces on a slight slope.

{{< img-simple src="images/sinkhole-bug-fixed" class="img-fluid" caption="Sinkholes no more!" >}}
