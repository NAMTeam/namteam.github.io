---
title : "The NAM Traffic Simulator"
url: "/docs/feature-guides/traffic-sim"
description: "The NAM Traffic Simulator is a traffic simulator that is derived from the original Maxis traffic simulator, but is also built upon the knowledge gained from all previous NAM traffic simulators, including work by the7trumpets, Tropod, jplumbley, mott, and z."
lead: "The NAM Traffic Simulator is a traffic simulator that is derived from the original Maxis traffic simulator, but is also built upon the knowledge gained from all previous NAM traffic simulators, including work by the7trumpets, Tropod, jplumbley, mott, and z. The NAM Traffic Simulator was originally incorporated into the NAM as Simulator Z, as at that time there were a number of different traffic simulators available in the NAM. Internally, this traffic simulator is still known as Simulator Z, and the latest version is Simulator Z v3.0. This is the first release of the NAM Traffic Simulator in over ten years that includes new functionality, and the significance of this new functionality is the greatest since the release of Simulator Z v2.1 in December, 2009, which established the value of the pathfinding heuristic that is still in use today."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/the-nam-traffic-simulator"
---
<!-- markdownlint-disable MD001 -->
### Areas of Work

One of the main areas of the work on the NAM Traffic Simulator involved increasing the efficiency of the pathfinder to close to its theoretical maximum. One of the main ways this was initially accomplished was by using a much more accurate version of the pathfinding heuristic than had been available in previous traffic simulators. Also, the Sims' maximum commute time was increased to give them enough time to get to work. These changes allow a smoother distribution of traffic throughout the city, with typically less congestion. At the same time, the congestion that does exist no longer leads to abandonment due to commute time in well-built cities; Sims know that they occasionally have to sit through traffic jams, and are a bit more patient. Better pathfinding also means that Sims act much smarter about finding jobs and routes to them; this also results in less abandonment due to commute time. As in the real world, zones can be farther apart without causing problems; this is especially helpful when building existing cities to scale, which can now be done reliably. Finally, running the pathfinder with near-optimum settings allows the simulator to run up to several times as fast as previous traffic simulators.

The second major area of work on the original Simulator Z involved a more flexible distribution of traffic among the various travel types. In combination with the pathfinder upgrading, this allows buses to be counted toward traffic and congestion, just like all other vehicles. This is a significant change from all previous simulators, and it's an important point to remember when planning your transportation infrastructure. More flexible distribution of traffic also means that the NAM Traffic Simulator is much more dynamic about allowing Sims to choose their transportation. In cities with excellent highways and road capacity, car usage has been measured at over six times that of previous simulators. Yet for cities with less extensive road networks and reasonable mass transit, car usage is actually less than in previous traffic simulators.

### Simulator Changes

##### Version 3.0 of the NAM Traffic Simulator contains the following changes from the previous version of the simulator:

* Multiple parameters in the traffic simulator that affect pathfinding were tuned in order to greatly improve pathfinding. As the pathfinder is at the heart of the traffic simulator, this tuning made the other changes in this section possible.
* Early on in the development of version 3.0 of the traffic simulator, it was discovered that one of the most powerful ways of optimizing the pathfinder used congestion patterns and the associated traffic speed decreases to reroute traffic to less congested (and therefore faster) routes. This was done by modifying the pathfinder's Congestion vs. Speed curve to be more aggressive. The Congestion vs. Speed (CvS) curve is used to determine how much speed decrease is associated with each degree of congestion. There are actually two slightly different Congestion vs. Speed curves used in this version of the traffic simulator. The first works best where there is at least some congestion present, and this one is included in the Classic and Low capacity versions of the simulator. The second version of this curve works equally well at all capacity levels of the simulator. However, since the first version of the CvS curve works significantly better than the second version for low capacity simulators, the second version is used only for the Medium, High, and Ultra versions of the simulator, since these capacity levels typically have little or no congestion, and the first version of the CvS curve would perform worse than the second under these circumstances. This has the following consequences:
  * Since the first version of the CvS curve results in the best pathfinding performance in the two low capacity simulators where it can be used (Classic and Low), the Low capacity simulator is recommended for most cities. All capacity levels of the simulator result in a noticeably reduced congestion compared to previous versions of the simulator used in identical cities. Specifically, when using the Low capacity simulator, typically only scattered congestion appears until a city passes a population of about 1.5 million Sims, and the congestion becomes serious around the level of 2 million Sims. However, as long as a city's infrastructure is maintained appropriately for its population, the Low capacity can be used to support cities just as big as those supported by the Ultra capacity simulator, although cities may need additional transit infrastructure (most notably, subways) if the Low capacity simulator is used on large cities. Similarly, the Classic capacity simulator, which has half the capacities of the Low capacity simulator, starts showing congestion well before the Low capacity simulator, but can still be used to support cities of arbitrary size. As a test, the Classic capacity simulator was used to develop a city from scratch to a total of 4.129 million Sims. This city ran fine, with a mayor rating of 99, which is the same mayor rating that all the other capacity simulators produced. With different zoning, the Classic capacity simulator could easily have supported at least 5 million Sims in a healthy city. At these population levels with the low capacity simulators, though, there is massive congestion.
  * With improved pathfinding, Sims make much better use of all transportation modes, especially with the Classic and Low capacity simulators. Specifically, usage of light rail (which includes el rail and ground light rail (GLR), or trams) used to be unreasonably low, right up to the previous version of the traffic simulator. With well-built light rail systems, usage is now much higher, often by two orders of magnitude. Lesser improvements also occur in the usage of other forms of rapid transit. The end result is that rapid transit of all types now has usage patterns much closer to the theoretically ideal ones.
  * Version 3.0 of the NAM Traffic Simulator provides the first significant improvement in intercity traffic since early versions of Simulator Z. This improvement is most pronounced in the Classic and Low capacity simulators.
  * Both versions of the CvS curve provide a significant traffic spreading effect, which is the result of the simulator rerouting traffic to avoid congestion. This effect is strongest in the Classic and Low capacity versions of the simulator due to their more powerful CvS curve. In addition to reducing congestion, this phenomenon also has a couple of other beneficial effects. In areas with a lot of commercial services, the spreading out of traffic means that more traffic passes by commercial services, which increases the number of customers for them, which in turn increases their desirability. In residential areas, the spreading out of traffic means that networks have lower average levels of traffic, which results in lower average traffic noise, which in turn results in higher desirability for the residences. The inverse of these effects does not happen (i.e., customer traffic is not lowered in previously congested areas when the congestion drops and traffic noise does not increase enough to make a difference when traffic spreads out to previously unused networks) due to the way the simulator is tuned.
* Due to the improvements in the pathfinder, abandonment due to commute time is even rarer than before in all capacity levels of the simulator. In the rare cases where it does occur, it tends to be minor, and tends to represent gaps in the city's infrastructure, generally in the Education and Health areas. Looking at the Data Views for these sectors will typically show a deficit in one of these sectors in the area of abandonment, and building structures of the appropriate type in these areas should fix the problem.
* The maximum number of high wealth Sims that can live in a given city has increased substantially. Cities will see this increase only if they are well built and have the infrastructure to support a large number of high wealth Sims. Nevertheless, this change, which is also an effect of pathfinder optimization, gives the player options for city building that were not available before.
* Usage of well-built transit stations tends to be better, as the improved pathfinder is better at navigating its way through them.
* As the pathfinder improves, it is more sensitive to user actions in city construction. For example, if you want your Sims to use more mass transit, simply build more mass transit stations (and routes, if necessary). If you want your Sims to use your highways more, build more interchanges between your highways and other roadways. In these two cases, stations and interchanges may have to be placed closer together than in real life for maximum benefit, as the underlying mechanisms by which the game works are rather different from real life. For example, Sims try to take the fastest route in general, even if this means that they save only a few seconds in their commute. Normal real life constraints don't apply to them, as they never have to wait for buses or trains to arrive, they never have to stop at intermediate stations, and they don't even have to stop at stoplights. Sims are constantly on the move from the time they leave their homes until the time they arrive at their jobs. This results in a rather different commuting environment from what we are used to. Note that there is no "ideal" spacing of stations, bus stops, or highway interchanges; the best spacing depends on what usage patterns you want for your networks. Also, it's important to know that Sims will walk arbitrarily far if necessary.
* The traffic simulator works most optimally in cities that have a reasonable number of streets, especially residential streets. Since this is how real life cities are built, this is just another way of saying that the traffic simulator works best in well built cities. Streets don't have to comprise a majority of the roadways in the city; they just shouldn't be rare. If you get a warning from the transportation advisor about not having enough streets, it is best to heed it.

##### Other changes in the NAM Traffic Simulator from previous traffic simulators dating before 2011 (as well as from the original Maxis traffic simulator) include the following:

* **More realistic subway costs.** Subways in Sim City are tremendously underpriced compared to the real world. The improvements to the pathfinder have made huge networks of subways less necessary, so the monthly cost for subway tiles has been multiplied by four to add a little more realism.
* **More realistic air pollution due to traffic.** Until now, the amount of air pollution emitted by traffic has been unchanged from the original game, where it was based on cities that had far less traffic capacity than that used by any of the recent traffic simulators. To keep the amount of air pollution emitted by traffic to a more realistic amount, the proportion of traffic air pollution to actual traffic has been lowered in the NAM Traffic Simulator. This lower proportion is linked to the Clean Air Act, so it is in effect only when the Clean Air Act is enabled.
* **More accurate numbers for the Commute Time Graph.** Due to a bug in the game, it is impossible to get accurate Commute Time Graph numbers for almost all situations. However, the NAM Traffic Simulator has adjusted the scaling of this graph to provide more accurate numbers for most situations.
* **Improved intersection effects.** Despite the appearance of stoplights at intersections, Sims don't actually stop; they don't even slow down unless congestion is present around the intersection. The NAM Traffic Simulator provides much more congestion around heavily-traveled intersections, thereby doing a better job of simulating stop lights and stop signs. These intersection effects also significantly aid the pathfinder in finding optimal routes; as mentioned above, congestion always makes the pathfinder work better. This particular feature may result in unexpected congestion showing up at intersections in the Congestion Traffic Data View. As this congestion is integral to the working of the pathfinder, it should be ignored by the player, other than to recognize where heavily used intersections exist. The transportation advisor may complain about these, but since he hasn't done his homework and doesn't understand how the NAM works, he should be ignored in this case.
* **Greater Monorail and High Speed Rail (HSR) usage.** Due to poor tuning of the original Maxis Traffic Simulator, Monorail and HSR usage was generally less than it should be, sometimes by quite a bit. The NAM Traffic Simulator compensates for this with improved pathfinding, which raises monorail and HSR usage to more appropriate levels.
* **Monorail and High Speed Rail trains have been fixed to contribute to and be affected by traffic congestion, just like all other vehicles.** This is essential for the pathfinder to work optimally. However, it also means that Monorail and High Speed Rail trains now contribute to vehicle air pollution. The Clean Air Act, mentioned in the second point above, helps compensate for this additional pollution.
* **Greater highway usage.** The traffic simulator has been tuned so that Sims use highways much more than ever before. This usage still tends to fall short of real world usage, though, due to the structure of the game. The amount of rapid transit available in a city will also have a big effect on highway usage.
* **All mass transit speeds have been recalibrated** to provide a more realistic simulation.
* **Improved customer levels for businesses.**
* **Capacities and speeds of one-way roads have been raised** to duplicate the real-world advantage of these roads.
* **Street capacities have been raised** so that they reflect the capacities implied by their speed limits.

### Simulator Versions

##### What are the different versions of the NAM Traffic Simulator, and how are they used?

The NAM Traffic Simulator comes in five capacity versions - Classic, Low, Medium, High, and Ultra. The name of the version refers to the network capacities in the simulator. The name "Classic" refers to the fact that the capacities are similar to those used in the original Maxis traffic simulator. The following is a list of the network capacities for each version of the simulator; all capacities are per tile (for two-tile networks such as the Avenue and Highways, multiply the value by 2):

{{< table class="table table-md-responsive w-auto table-bordered border-default table-striped-columns" >}}
|Network|Classic|Low|Medium|High|Ultra|
|:----|:----:|:---:|:---:|:---:|:---:|
|Street:|750|1500|2400|3600|7200|
|Road:|1200|2400|4000|6000|12000|
|Avenue:|1200|2400|4000|6000|12000|
|One-Way Road:|1800|3600|6000|9000|18000|
|Highway (Ground and Elevated):|3750|7500|12500|18750|37500|
|RealHighway:|3000|6000|10000|15000|30000|
|Subway/Elevated Rail/Ground Light Rail:|5000|10000|16000|30000|65200|
|Monorail/High Speed Rail:|5000|10000|16000|30000|65200|
|Rail:|5000|10000|16000|30000|65200|
{{< /table >}}

{{< table class="table table-md-responsive w-auto table-bordered border-default table-striped-columns" >}}
|Vehicle Type|Rail|
|:----|:----:|
|Passenger Train|140|
|Freight Train|105|
{{< /table >}}

{{< table class="table table-md-responsive w-auto table-bordered border-default table-striped-columns" >}}
|Vehicle Type|Ground/Elevated Light Rail/Subway|
|:----|:----:|
|Light Rail Train/Tram|115|
{{< /table >}}

{{< table class="table table-md-responsive w-auto table-bordered border-default table-striped-columns" >}}
|Vehicle Type|Monorail/High Speed Rail|
|:----|:----:|
|Monorail/High Speed Rail Train|225|
{{< /table >}}

Which simulator version is appropriate for a particular city depends primarily on three things: the population of the city, the amount of rapid transit (rails) available, and the type of simulator used. Less capacity is needed for lower population cities, but less capacity is also required for cities with a lot of rapid transit. Finally, as mentioned above, the Classic and Low capacity simulators use the best pathfinder, and will therefore give the best simulation results if they can be used. So pick a simulator version based on these three factors; if it doesn't seem to be the right capacity, you can always switch it out for a different capacity version by rerunning the NAM installer. Experience has shown that in large cities, the effects of such a switch may take up to five years to fully manifest. You can tell when things have stabilized by looking at the Traffic Volume Graph in the following way: First, let the game run until there is a sudden shift in traffic patterns. Sometimes, this may take over a year. Then run the game until you go at least a full year without any sudden change in traffic patterns. At that point, the transition to the new capacity simulator is complete. All this can be done without any harmful effects to your city.

### The Traffic Simulator Configuration Tool (TSCT) {#TSCT}

*If you don't know what the Traffic Simulator Configuration Tool (TSCT) is, or if you don't use it, you may skip this section.*

As of NAM 45, the TSCT is discontinued and no longer available in NAM releases. With NAM 45, the NAM Traffic Simulator has been upgraded to Simulator Z 3.0, resulting in further optimizations to both the speed and accuracy of the simulation, and improved network utilization.  The improved pathfinding in the new traffic simulator makes it much more responsive to user actions in building a city. To significantly bump up sim willingness to use transit, simply add more transit stations and/or more transit lines.

The extremely thorough testing done on Simulator Z 3.0 determined that many properties of the simulator are more sensitive than previously expected, and that many of the modifications previously allowed in the TSCT actually can significantly degrade the performance of the traffic simulation, to levels we found unacceptable. It was discovered that many of the properties adjustable in the TSCT affect the simulation as a whole, and not just the function that is documented for them. This means that many properties in the TSCT that were thought to be safe to modify actually are not, and modifying them will almost always degrade the performance of the simulator. Second, with the significant improvement in simulator pathfinding, some properties of the simulator have become self-tuning, and this makes the settings for them in the TSCT unnecessary.

Use of the TSCT is no longer endorsed by the NAM Team, and we cannot provide technical support to users who have modified the "unsafe" properties in the Traffic Simulator via the TSCT or other means.

Here is the disposition of the various fields that were customizable in the TSCT:

* **Mass Transit Usage:** This field is now always set to the Medium value; the actual wealth and transit distributions can be seen int the greyed-out boxes on the right, in the box labeled "Custom". However, the label "American" no longer applies to these values, as the increased flexibility of the new simulator allows the player to set the balance between car and mass transit simply by the way they build their transit systems. A city with lots of highways but little mass transit will encourage car usage, while a city with with lots of mass transit and few or no highways will encourage mass transit usage.
* **Highway Bus Lanes:** Contrary to the description of this field, checking its box does not increase bus usage. In fact, it degraded simulator performance slightly.
* **Park & Ride:** This is discussed in its own section below.
* **Buses contribute to traffic:** This property is always set in the simulator, as it is necessary for optimal operation of the pathfinder.
* **Monthly Fares per Sim per Tile:** For people who really want to modify these values, they can safely be changed in the same way that the Park and Ride feature can be changed, as described below.
* **Monthly Costs per Network Tile:** As with the previous property, these values can safely be changed in the same way that the Park and Ride feature can be changed.
* **Network Traffic Capacities:** These are now fixed in the five capacity levels listed in the table above. Choosing different capacities degrades the performance of the traffic simulator.
* **Base Network Capacity:** This is set when the NAM is installed. To change it, you need to run the NAM installer again.
* **Customers/Traffic Noise Coefficient:** This is set to the optimal value for each simulator capacity and should not be changed.
* **Commute Time Graph Scaling Factor:** This is set to its optimal value and should not be changed.
* **Commute Trip Max Time:** This is set to the optimal value for each simulator capacity and should not be changed.
* **Network Capacity Multiplier:** This field is obsolete, as only the five listed capacities are supported.
* **Intersection Effect Multiplier:** This is set to its optimal value and should not be changed.
* **Vehicle Air Pollution:** Changing the value of this field is no longer supported.
* **Data View:** For now, customization of these data views is no longer supported. This is configurable in the NAM installer.

### Park & Ride

Park & Ride is an option that was only supported in the TSCT. Park and Ride changes the game slightly so that cars cannot reach their destination directly. Instead, those Sims who prefer to drive must park near some sort of mass transit station and then take mass transit to the stop closest to their workplace. From there, they must walk the rest of the way. For this to work well, you need to have an extensive mass transit system. You also need to build parking lots and/or parking garages near key mass transit stops; generally the best places are at the edges of your residential areas that are closest to your jobs. Or you could just build parking facilities near the Sims' jobs (the ones that come with buildings generally don't count), but this really defeats the main purpose of Park and Ride.

The ability to enable the Park & Ride functionality will eventually be incorporated into the NAM installer. Until then, this feature can be enabled only by modifying the traffic simulator file directly. This can be done with [Ilive's Reader (0.9.3)](https://community.simtropolis.com/files/file/21343-ilive-reader-093/); you can find the manual for the Reader [here](https://community.simtropolis.com/files/file/21372-the-reader-beginners-guide/).

1. To turn on the Park & Ride feature of the traffic simulator, open the Reader and click the Open button. Navigate to the folder containing your traffic simulator and select it. If only the "Name" column appears in the right pane, you will have to click on the first "Exemplar file" row in the left pane to make all the other columns in the right pane visible.

2. Next, you will have to edit the "Travel type can reach destination" property, which is about two thirds of the way down in the right pane. Double click on this property name, and a list of values will come up. The second one applies to cars; its value is 0x01. Click on this value, type a zero, and then hit Enter twice. The list of values should disappear and the second value for this property in the right pane should have changed from True to False. If it has, save your new simulator. Park and Ride is now enabled.

3. To disable Park & Ride, follow the same steps as above, except that in the list of values that pops up, the second value will be 0x00, and you need to change it to a one. Once you do that, the second value for the "Travel type can reach destination" property in the right pane should have changed from False to True. You can now save the simulator and exit.

The **Monthly Fares per Sim per Tile** and the **Monthly Costs per Network Tile** can be modified in a similar fashion; the first one of these is named "Income per tile by travel type" in the simulator. Note that when you select a property in the reader, some helpful information about that property is displayed in the little window at the bottom.

These three properties are the only ones in the traffic simulator that are safe to modify. Modifying other properties, especially those that interact with the pathfinder, will almost always degrade the performance of the traffic simulator. The NAM Team cannot support installations where properties other than the three described above have been modified.

For further questions about using the NAM Traffic Simulator, please see either the [NAM Unified Traffic Simulator and Data View Help](http://sc4devotion.com/forums/index.php?topic=6812.0) thread on SC4 Devotion or the [NAM Traffic Simulator and Data View Support Thread](https://community.simtropolis.com/forums/topic/29437-nam-traffic-simulator-and-data-view-support-thread/) on Simtropolis.
