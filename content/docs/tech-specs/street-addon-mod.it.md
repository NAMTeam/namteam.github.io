---
title : "Street Addon Mod"
description: "Technical specifications for the Street Addon Mod are located here. This page shows values and attributes that are useful for end users and developers alike."
lead: "Technical specifications for the Street Addon Mod are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/street-addon-mod"
---

{{< feature-guide link="docs/feature-guides/street-addon-mod" mod="Street Addon Mod feature guide" >}}

{{< docstatus status="workinprogress" >}}
{{< docstatus status="untranslated" >}}

## Network and FLEX Piece Capabilities

### Key

<table class="table-bordered nam-compat-status processed">
<tr>
    <td data-compat="yes"> Yes </td>
    <td>This particular feature can be constructed, with minimal (if any) limitations.</td>
</tr>
<tr>
    <td data-compat="partial"> Partial Support </td>
    <td>This particular feature can be constructed, but not in all instances. Details will be given as to what is/is not possible. Partial support may be for intentional design reasons (such as realism or general unfeasibility), or simply because the feature has not been fully developed.</td>
</tr>
<tr>
    <td data-compat="limited"> Limited Support </td>
    <td>This particular feature can be constructed, but only in extremely limited circumstances. Instances that are possible may be listed, insofar as it is possible. Use at your own risk.</td>
</tr>
<tr>
    <td data-compat="no"> No Support </td>
    <td>This particular feature cannot be constructed. This restriction could be for intentional design reasons (such as realism, general unfeasibility, or game limitations), or simply because it has not yet been developed.</td>
</tr>
</table>

### Additional Notes

**OxO**: OxO stands for "orthogonal x orthogonal", and refers to a situation where both networks are orthogonal (in a straight line) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

**OxD**: OxD stands for "orthogonal x diagonal", and refers to a situation where the given network is orthogonal (in a straight line) along the game's grid, and the cross network is diagonal (running at a 45° angle).

**DxO**: DxO stands for "diagonal x orthogonal", and refers to a situation where the base network is diagonal (running at a 45° angle), and the cross network is orthogonal (in a straight line) along the game's grid.

**DxD**: DxD stands for "diagonal x diagonal", and refers to a situation where both networks are diagonal (running at a 45° angle) along the game's grid, intersecting perpendicularly (at 90° angles at all corners).

### Base Network Features

#### Orthogonal Transitions to Maxis Networks

#### Orthogonal Transitions to Other NWM Networks

#### Orthogonal Transitions to RealHighway (RHW) Networks

#### Diagonal Transitions

#### Fractional Angle Transitions

Not currently supported.

### Wide-Radius / Multi-Radius Curves

### Fractional Angle Support

Not currently supported.

#### Orthogonal x Orthogonal (OxO) Intersections

#### Diagonal (OxD, DxO, and DxD) Intersections

### Bridges

> Refer to [the *Bridges* section](/docs/feature-guides/street-addon-mod/#bridges) of the RealHighway Mod feature guide for a list of bridge styles that are available.

### Tunnels

The base Street network does not support tunnels, and thus, nor do any of the SAM networks.

## Network ID Assignments

The Street Addon Mod uses the following ID ranges:

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25">Network Range</th>
        <th>Purpose</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5E5 - 0x5E6</code></td>
        <td>Current SAM range</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x7E5 - 0x7E6</code></td>
        <td>LHD Path remapping range</td>
    </tr>
</table>

Within the Network Addon Mod, the Street Addon Mod and related features occupy the entire 0x5E5 and 0x5E6 ranges.

### Detailed information

#### 0x5E5

Primarily contains the base features for the SAM.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25" style="max-width:120px;">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5E5pp100</code></td>
        <td>SAM Set 1</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp200</code></td>
        <td>SAM Set 2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp300</code></td>
        <td>SAM Set 3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp400</code></td>
        <td>SAM Set 4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp500</code></td>
        <td>SAM Set 5</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp600</code></td>
        <td>SAM Set 6</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp700</code></td>
        <td>SAM Set 7</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp800</code></td>
        <td>SAM Set 8</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5pp900</code></td>
        <td>SAM Set 9</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5ppA00</code></td>
        <td>SAM Set 10 (A)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E5ppB00</code></td>
        <td>SAM Set 11 (B)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E5ppC00</code></td>
        <td>SAM Set 12 (C) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E5ppD00</code></td>
        <td>SAM Set 13 (D) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E5ppE00</code></td>
        <td>SAM Set 14 (E) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E5ppF00</code></td>
        <td>SAM Set 15 (F) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E5pp000</code></td>
        <td>SAM Set 16 (0) (does not yet exist)</td>
    </tr>
</table>

#### 0x5E6

Extended/overflow SAM range, containing NWM crossings, future RHW crossings, and any other such expansion.

<table class="table-bordered w-full">
    <thead class="text-center">
        <th class="w-25" style="max-width:120px;">Range</th>
        <th>Used by</th>
    </thead>
    <tr>
        <td class="text-center"><code>0x5E6pp100</code></td>
        <td>SAM Set 1</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp200</code></td>
        <td>SAM Set 2</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp300</code></td>
        <td>SAM Set 3</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp400</code></td>
        <td>SAM Set 4</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp500</code></td>
        <td>SAM Set 5</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp600</code></td>
        <td>SAM Set 6</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp700</code></td>
        <td>SAM Set 7</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp800</code></td>
        <td>SAM Set 8</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6pp900</code></td>
        <td>SAM Set 9</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6ppA00</code></td>
        <td>SAM Set 10 (A)</td>
    </tr>
    <tr>
        <td class="text-center"><code>0x5E6ppB00</code></td>
        <td>SAM Set 11 (B)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E6ppC00</code></td>
        <td>SAM Set 12 (C) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E6ppD00</code></td>
        <td>SAM Set 13 (D) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E6ppE00</code></td>
        <td>SAM Set 14 (E) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E6ppF00</code></td>
        <td>SAM Set 15 (F) (does not yet exist)</td>
    </tr>
 <tr>
        <td class="text-center"><code>0x5E6pp000</code></td>
        <td>SAM Set 16 (0) (does not yet exist)</td>
    </tr>
</table>

#### Other

Some SAM features that are tied in with Single-Track Railway and Rural Roads lie in those projects respective ranges.  (More details forthcoming.)
