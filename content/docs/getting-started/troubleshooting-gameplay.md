---
title : "Troubleshooting (Gameplay)"
description: "Troubleshooting for issues encountered while playing."
lead: "If you are having issues while playing the game with the Network Addon Mod, the information contained here may help."
date: 
lastmod: 
weight: 7
draft: false
images: []
url: "docs/getting-started/troubleshooting-gameplay"
---
<!-- markdownlint-disable MD029 -->
## Why is my game crashing when I try to load a city?

If you're on Windows (or Linux) and the game crashes on your first attempt to load a city, this means you have the Full 4GB Controller installed, but either have experienced a failure in the 4GB Patch installation process, or have an incompatible system (not enough RAM and/or a 32-bit operating system). Either attempt to reinstall the 4GB Patch, or choose a less intensive installation option (the Low RAM/No RHW option, or download NAM Lite instead). If you have repeated issues with this, we recommend installing NAM Lite and forgoing installing the full version of the NAM until the future release of NAM Version 50, which will remove the 4GB Patch requirement, even when using the RHW. [There is no release date or timeline for release of NAM 50](/docs/getting-started/frequently-asked-questions/#release-date).

## Why is the game crashing to desktop immediately upon opening the game?

The only reason the NAM could cause an immediate crash to desktop (CTD) would be if you're running the original version of SimCity 4 (not Deluxe/Rush Hour), or if your game is improperly configured for your hardware (in which case it will crash similarly without the NAM). If you are running Deluxe/Rush Hour, you may want to check any other plugins you may have installed.

### Why is the game crashing after I place a puzzle piece?

This is a bug in the game itself, typically triggered by attempting to place conventional puzzle pieces in the vicinity of TE lots. If, in the process of constructing a puzzle piece, the footprint of the puzzle piece overlaps that of the TE lot, even before the puzzle piece is placed, the game generally does not understand the configuration, and will immediately crash. This is an issue within the game's executable, and as a result, it was long deemed an unsolvable issue.

_However_, **simmaster07** managed to decode enough of the framework that SimCity 4 uses to load DLL files from other sources, and was able to patch this issue with his _SC4Fix.dll_ file. SC4Fix is available at [Simtropolis](http://community.simtropolis.com/files/file/30883-sc4fix-third-party-patches-for-sc4/).

### Why are none of the icons showing up after I've installed the NAM?

You may not have installed the NAM correctly, or your installation ended up in the wrong location. See the [Installation Instructions](/docs/getting-started/installation#install) page to reinstall, making sure the files go into your `Documents\SimCity 4\Plugins folder` (true of Windows and the Steam Mac version), or, if you're on the Mac App Store version, make sure you copy the files into the `.app` container.

### Why am I seeing duplicate icons?

You likely have two copies of a given NAM release installed simultaneously. We recommend you find and remove both copies in your Plugins folder, and reinstall the latest version again.

### Why am I getting a red arrow/gray cursor when I click one of the new icons in game?

In most situations, this is an indication that you have the Controller file from an outdated NAM release, or an incompatible RUL-bound transit mod installed. You'll need to remove the offending files. The one exception is with the little icon with the NAM logo at the bottom of the Highways menu -- this button is not meant to be pressed, but rather, hovered over to show version information. If the version information here says anything other than "{{< param docsversion >}}", that's a definite sign there's an outdated/incompatible file lurking about your Plugins folder.

### Why are the tiles leading up to my intersections suddenly orange or red in the Congestion Data View?

The NAM's traffic simulator plugin, with its default settings, amplifies the effect of the _Intersection and Turn Capacity Effect_ property, affecting network tiles that are within a 2-tile radius of an intersection (or transition). This better simulates the effects of queues at intersections, especially signalized ones.

### Why are the cars disappearing in game?

The "cars", or "automata", are not really there in the traffic simulation -- they're simply a visual effect that has a casual correlation to actual traffic data in the game. Being visual effects, they can eat up processing power, and in order to keep the game from becoming overloaded, the game's engine puts a finite limit on how many vehicular automata can show up at one time. Over that limit, and they disappear. Certain Automata Plugin options can allow more automata to stay on the screen at one time, though keeping the cars on the road all the time is simply an impossibility, due to the way the game is programmed. SimCity 4 is a statistics-based simulator, not an agent-based simulator (as SimCity (2013) and Cities: Skylines are).

### Certain draggable items are not working for me, and I'm following the directions. Why isn't it working?

If you're referring to starter pieces, make sure you're dragging the specified default network out the correct end of the piece. Trying to "drag" the actual starter piece itself will get you nowhere. If you're referring to a starter piece-based network extension not cooperating with a particular setup you're trying to build, it may be that the setup is not supported. If you're getting "blank" tiles upon drawing the item, this is generally a sign of improper installation and/or conflicting files being present in your Plugins.

### My RCI demand seems to have changed since I installed the NAM. What is happening?

The NAM does not directly affect RCI demand. It does not modify anything other than transportation-related files. You may have installed something else recently that does modify other parts of the game, however. Because the NAM is popular and a large-scale mod, many newer players who have installed other files at the same time mistakenly presume the NAM is at fault. Additionally, if you somehow unchecked too many boxes in the installer, it is possible you somehow caused the installer to skip installation of the Traffic Simulator plugin, which would cause the game to revert to the Maxis defaults.

### I'm having difficulty using U-Drive-It (UDI) functionality on certain NAM items. Is there any way to fix this?

It depends on the item -- Single-Track Rails (STR) and the various Turning Lane Avenue (TLA) options in the Network Widening Mod (NWM) are perhaps the most prone to issues. UDI was a last-minute addition to SimCity 4 Deluxe/Rush Hour, and is known for having a number of quirks. There really isn't a way to fix them because of these quirks, though the TLA quirks can be mitigated by disabling "Snap To Road" and driving manually.

### Why aren't my neighbor connections working on RealHighways and/or wider Roads, Avenues and One-Way Roads? How do I fix them?

Most RealHighways (except the RHW-2 and RHW-3 networks) and some multi-tile starter-based items require the use of special "Neighbor Connector Puzzle Pieces" (NCPPs) to function. For networks that are "combined", having adjacent two-way traffic, simply drag the network to the edge of the city tile, as you normally would (ignoring the fact that the neighbor connection arrows both face the same direction), and plop the appropriate Neighbor Connection Puzzle Piece over it. You'll need to do this on both sides of the neighbor connection. For one-way/"split" networks, follow the same directions, and if there is a gap between the two directions, you'll need to place underground loop pieces next to the city edge, between the two carriageways.

### Why are my RealHighway networks remaining at two lanes and ground level after dragging the network through one of the starter pieces?

If your RealHighway starters are not working, and the network is remaining as the RealHighway-2 (RHW-2) after dragging through a starter, then this is likely a sign that you have the "LowRAM/NoRHW" version of the NAM Controller installed, which, as the name indicates, does not include any of the RUL2 code necessary for the RealHighway's starters to function. Reinstall the mod with the Full version of the Controller, and ensure that your system meets the minimum requirements for the RealHighway plugin (4GB Patch installed, 64-bit operating system, and at least 4GB RAM).

### Why can't I build diagonal intersections with some of the wider Roads, Avenues and One-Way Roads?

As of NAM 46, diagonal 4-way ("+") intersections and crossings are now possible between the single-tile Network Widening Mod (NWM) networks (TLA-3, AVE-2, ARD-3, OWR-1, OWR-3, and NRD-4) with all of the game's base networks, plus Ground Light Rail (GLR), Single-Track Rail (STR), and all other single-tile NWM networks.  3-way ("T") intersections are not presently available, nor are any diagonal intersection or crossing options for the multi-tile NWM networks.

