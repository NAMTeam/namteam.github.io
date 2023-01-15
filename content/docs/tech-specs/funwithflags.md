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

* {{< menu-icon icon="images/0x00.png" caption=" **0x00 - No connection**" >}}

{{< table class="table-bordered w-auto" >}}
| NETWORK         | Base Network     |
|-----------------|:----------------:|
| RHW-2           |       RHW-2      |
| RHW-3           |       RHW-2      |
| MIS Ramp        |       RHW-2      |
| RHW-4 (single)  |       RHW-2      |
| RHW-4 (dual)    |       GHWY       |
| RHW-6S (single) |       RHW-2      |
| RHW-6S (dual)   |       GHWY       |
| RHW-8S          |       GHWY       |
| RHW-10S         |       GHWY       |
| RHW-6C          |    No support    |
| RHW-8C          |    No support    |
| DD RHW-4        |       RHW-2      |
{{< /table >}}

### Intersection RUL (INRUL)

Intersection RUL files