---
title : "Understanding RUL Flags"
description: "This document provides information about common flags used in the game by the NAM to create a variety of FLEX and other puzzle pieces."
lead: ""
date: 1970-01-01T10:09:26+00:00
lastmod: 1970-01-01T10:09:26+00:00
draft: false
images: []
---

RUL files control the placement of network items in the game. An example of a network item is the road you drag out. RUL flags refer to a specific combination of hexadecimal values that tell each network tile what to do.

## Understanding Flags

### Basic Flags

Network flags are the game's encoding of transit network connections for a given tile.  Each tile has four flags, one for each edge.  A flag defines whether a connection exists across an edge and its relative direction.

Five primitive flags are used in the various RUL files:

- 0 - no connection
- 1 - left diagonal
- 2 - orthogonal
- 3 - right diagonal
- 4 - median (for double-width networks, e.g. avenue)

Individual Network RULs make use of additional flags:

- 11 - left diagonal to orthogonal blend
- 13 - right diagonal to orthogonal blend

Rail networks use additional complex flags:

- 21 - left diagonal switch
- 23 - right diagonal switch
- 22 - left secondary blend
- 42 - right secondary blend
- 32 - left orthogonal to diagonal crossover/switch
- 52 - right orthogonal to diagonal crossover/switch
- 62 - wye flag (also used for crossover/switch)
- 72 - 'W' flag (used for 'W' switches)

### Individual Network RUL (INRUL)

Individual network RULs define the standalone behavior of the game's twelve networks.  Each network has a <em>basic</em> and <em>advanced</em> INRUL file.  Basic INRUL defines typical placement, while advanced INRUL handles more complex situations.

INRULs are composed in a 5x5 grid of tiles in which flags and network piece IDs are defined.  Conventionally, basic INRUL uses only tile to define a rule, while advanced INRUL defines multiple tiles.

### Intersection Solutions RUL (RUL1)

RUL1 defines tiles for the intersections between two different network types.  

### Override RUL (RUL2)

RUL2 is used to override the results of INRUL and RUL1 definitions.  It works by reassigning a pair of adjacent pieces to another pair, replacing one or both pieces.  RUL2 is the mechanism used to create override networks such as SAM or RHW.

### Intersection Ordering RUL (RUL0)

RUL0 defines interchanges, puzzle pieces and FLEX-style pieces which can be placed using menu buttons.