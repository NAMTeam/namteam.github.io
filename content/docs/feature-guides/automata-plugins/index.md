---
title : "Automata Plugins"
description: "NAM Automata Plugins"
lead: Automata are animations of cars, trains, trucks, boats, etc which travel over transit networks.
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/automata-plugins"
---

## Overview
SimCity 4 is not an "agent-based" game where each object you see on a road represents one "item" in the simulation. Automata are only a visual approximation of what is happening in the underlying traffic simulation and  maintain only a loose correlation to the actual statistical measures of the simulation. As such, any of the changes made to the Automata settings do not actually change any functional aspects of a network's capacity, speed, or commute attributes. Automata, being generated as a representation of statistical data, also may be prone to bizarre behavior that would defy real-world traffic logic. Due to the nature of how they are programmed, this is not something the NAM Team can address.

The Automata Plugins are also referred as **Automata Controllers**, in the sense that they control how the automata is shown in-game.

## Automata Options
The Network Addon Mod provides a variety Automata Controllers to choose from, and each of them made from a combination of options which affect automata in a slightly different way. The two base options are:
* **Standard** - Maintains the default Maxis values for the quantity of automata and speed they visually travel over a network. The only exception is for the [RealHighway](/docs/feature-guides/realhighway-mod) network, which has had its speed increased to give more of an accurate representation of the speed the vehicles traveling at on a highway network.

* **Radical** - Increases the speed of automata travel and the maximum amount of automata able to be visible at a given time.

There are two additional options that may be stacked on the base options for additional customization:

* **24-hour** - Varies the volume of automata present depending on the time of day. This option creates a low volume of traffic at night, a high volume of traffic during the morning and evening rush hours, and a medium volume of traffic in the middle of the day.

* **Persistent** - Automata is visible for a longer period of time before it disappears.

* **LB** - Increases the duration of the traffic signal cycles and increases the appearance of pedestrians, but otherwise functions like the 24-hour radical persistent variant. This option is not available for NAM Lite.

The additional options may be combined with one base option to produce your desired configuration. As an example, *"Standard"*, and *"Standard 24-Hour"*, and *"Standard Persistent 24-Hour"* are all valid configurations.

### Standard vs Radical Option Details
The following parameters have been tweaked with the **Radical** option compared to the Maxis default **Standard** option. For more information on the details of each property, refer to the [Automata Tuning Exemplars list](https://wiki.sc4devotion.com/index.php?title=Exemplar_properties#Automata_Tuning_Exemplar) in the SC4D Wiki.

| Property                        | Standard     | Radical      |
|---------------------------------|--------------|--------------|
| Sims Per Train Car              | 40           | 100          |
| Curve Speed Multiplier          | 0.5          | 0.7          |
| Max Vehicles Per Second         | 10           | 250          |
| Max Vehicles                    | 250          | 5000         |
| Vehicle Lifespan Range          | 10, 20       | 50, 124      |
| Max Peds Per Second             | 4            | 100          |
| Max Peds                        | 512          | 2500         |
| Max Aircraft                    | 20           | 35           |
| Ped Lifespan Range              | 2, 4         | 128, 0       |
| Max Watercraft                  | 20           | 100          |
| Occupant Trip Population Radius | 3            | 10           |
| Sim Prop Animation Range        | 3, 10        | 25, 150      |
| Simulation Speed Multiplier     | 1, 2, 4, 0.5 | 1, 2, 8, 0.5 |
| Commute Train Length            | 3, 8         | 5, 15        |
| Travelers Per Bus               | 50           | 80           |
| Moving Van Frequency            | 1            | 2            |
| Grade Speed Multiplier          | 0.3          | 0.2          |
| Freight Train Length            | 9, 15        | 9, 25        |
| Spawn/Recall: Streets           | 40%/30%, 40%/30% | 40%/30%, 10%/40% |
| Spawn/Recall: Roads             | 40%/30%, 40%/30% | 50%/30%, 10%/40% |
| Spawn/Recall: Avenues           | 40%/30%, 40%/30% | 60%/30%, 10%/40% |
| Spawn/Recall: Highway           | 40%/30%, 40%/30% | 85%/60%, 10%/30% |

### Additional Notes
An automata controller is not technically a required component of the Network Addon Mod, as if one is not present, the Maxis default values will be used (equivalent to the *Standard* automata controller option). If you choose not to use one an automata controller, however, then the Automata on the RealHighway network will not be represented accurately as intended. If you do use an automata controller, the **only one controller may be installed at a time**.
