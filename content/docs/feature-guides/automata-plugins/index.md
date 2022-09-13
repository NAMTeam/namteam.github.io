---
title : "Automata Plugins"
description: "NAM Automata Plugins"
lead: 
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
---

{{< docstatus status="oldcontent" >}}

*Note:** The Automata Plugins are also referred as Automata Controllers, like other NAM files where only one file can be installed at a time.

**IT IS IMPORTANT THAT YOU ONLY USE ONE OF THE "..._Automata_Plugin_..." FILES, & ONE ONLY. The NAM Installer should ensure this.**

The information below explains which " _..._Automata_Plugin_..._" files contain what changes. See the notes at the end before using any file.

The " _..._Automata_Plugin_..._" files have a naming scheme according to the following below:

" _..._Standard_" = Default Maxis values, except: It has been slightly modified to take into account the RealHighway network's speed. It has been changed to give more of an accurate representation of the speed the vehicles are travelling at on the RealHighway network, compared to the other networks. Nothing else in this file is changed.

" _..._Automata24_..._" = Automata, of most kinds, is displayed for most of the 24-Hour Sim day.

" _..._Radical_..._" = The following changes [increases/decreases]:

* Vehicle Lifespan Range: Min:50, Max:380
* Ped Lifespan Range: Min:128, Max:255
* Sim Prop Anim range: Min:25, Max:150
* Max Peds per second [per tile]:100
* Max Vehicles per second [per tile]:250
* Max Peds [at any one time]:2500
* Max Vehicles [at any one time]:5000
* Max Aircraft [at any one time]:35
* Max Watercraft [at any one time]:100
* Sims per Train Car:100
* Sims per Bus:80
* Commute Train Length: Min:5, Max:15
* Freight Train Length: Min:9, Max:25
* Maximum level of Freight Trucks Cut-off [Industrial City Jobs]:500,000
* Curve speed multiplier:0.7 [of normal speed]
* Population Occupant Trip Radius [in tiles]:10
* Moving Van Frequency [new residence]:2
* Hill/Slope speed multiplier [% of normal speed when going up/down a hill]: 0.20
* Simulation Speed multiplier-For Cheetah Speed only [this only applies if you use "Variable Speed Automata" in the Games Options]:8

Spawn/Recall for:

* Streets: 40%/30%,10%/40%
* Roads: 50%/30%,10%/40%
* Avenues: 60%/30%,10%/40%
* Highways: 85%/60%,10%/30%

--Add Information about Persistent options here--

**Note:** Spawn/Recall is the percent chance/capacity at which more automata are added/removed for/from a tile. First set of numbers represents the percent chance at the specified capacity at which automata will be added; the second set is the percent chance at the specified capacity at which automata will be removed.

### Additional Notes

The file names explain what files contain what changes & are all based on the " _..._Standard_" file above. If a file name contains two [or more] of the above names, then that means it contains those changes as detailed above.

You do not actually need/have to use any of the " _..._Automata_Plugin_..._" file if you do not want to. It is not really imperative to the Network Addon Mod that a " _..._Automata_Plugin_..._" file is used. If you choose not to use one of the " _..._Automata_Plugin_..._" files though, then the Automata on the RealHighway network will not be represented fairly/accurately as intended.

**Automata:** Automata are basically animations; a "visual" representation. So while they represent the underlying Traffic happening [to some degree only really], they are only animations, and as such any of the changes made above do not actually change any functional aspects of networks capacities/speeds/commutes. Automata, being generated as a representation of statistical data, also may be prone to bizarre behavior that would defy real-world traffic logic. Due to the nature of how they are programmed, this is not something the NAM Team can address.