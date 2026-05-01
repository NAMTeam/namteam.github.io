---
title : "RealExpressway"
description: "Technical specifications for the RealExpressway are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
lead: "Technical specifications for the RealExpressway are located here. This page shows values, attributes and level of compatibility with other components of the NAM that are useful for end users and developers alike."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/realexpressway"
---

{{< feature-guide link="/docs/feature-guides/realexpressway" >}}

## Key

{{< compatibility-key >}}

## Network and FLEX Piece Capabilities

### FLEXRamp / Draggable Ramp Interfaces (DRI)

#### Orthogonal Mainline

Items with full compatibility have both FLEX and draggable construction methods implemented.
Exceptions are noted with partial compatibility.
Only L0 networks have support for ramps.

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | A1     | B1     | A2                  | B2                  | C1  | C2  | D1                  | D2                  | E1                  | E2                  | F1  | F2  |
| ------: | :----: | :----: | :-----------------: | :-----------------: | :-: | :-: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-: | :-: |
| OWR-2   | Yes    | Yes    | No                  | No                  | No  | No  | Partial<sup>1</sup> | No                  | Partial<sup>1</sup> | No                  | No  | No  |
| OWR-3   | No     | No     | Partial<sup>1</sup> | Partial<sup>1</sup> | No  | No  | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | Partial<sup>1</sup> | No  | No  |
{{< /table >}}

A1 Wide

<span class="fs-6">**<sup>1</sup>** With FLEX or puzzle pieces only, draggable patterns are not supported.</span><br>

#### Diagonal Mainline

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | A1                  | B1                  | A2                  | B2                  | C1  | C2  | D1                  | D2                  | E1                  | E2                  | F1  | F2  |
| ------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-: | :-: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-: | :-: | 
| OWR-2   | Yes                 | Yes                 | No                  | No                  | No  | No  | No                  | No                  | Partial<sup>1</sup> | No                  | No  | No  |
| OWR-3   | No                  | No                  | No                  | No                  | No  | No  | No                  | No                  | No                  | No                  | No  | No  |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** With FLEX or puzzle pieces only, draggable patterns are not supported.</span><br>

#### Fractional Angle Mainline

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | A1                  | B1                  | A2                  | B2                  | C1  | C2  | D1                  | D2                  | E1                  | E2                  | F1  | F2  |
| ------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-: | :-: | :-----------------: | :-----------------: | :-----------------: | :-----------------: | :-: | :-: | 
| OWR-2   | No                  | No                  | No                  | No                  | No  | No  | No                  | No                  | No                  | No                  | No  | No  |
| OWR-3   | No                  | No                  | No                  | No                  | No  | No  | No                  | No                  | No                  | No                  | No  | No  |
{{< /table >}}

#### Orthogonal Splitters

{{< table class="table-bordered nam-compat-status w-auto" >}}
|                                   | Road ⇄ OWR-1        |
| --------------------------------: | :-----------------: |
| Ortho Symmetrical Wye (Type D)    | Partial<sup>1</sup> |
| Ortho Asymetrical Wye (Type D)    | Partial<sup>1</sup> |
| Ortho/Diag Wye (Type E)           | Partial<sup>1</sup> |
| Diag Symmetrical Wye (Type E)     | Partial<sup>1</sup> |
| Diag & Wide Ortho Wye (Type D/E)  | Partial<sup>1</sup> |
| Folded Wye                        | Partial<sup>1</sup> |
| Half-Folded Wye                   | Partial<sup>1</sup> |
{{< /table >}}

<span class="fs-6">**<sup>1</sup>** With FLEX or puzzle pieces only, draggable patterns are not supported.</span><br>

#### Diagonal Splitters

{{< table class="table-bordered nam-compat-status w-auto" >}}
|                                   | Road ⇄ OWR-1        |
| --------------------------------: | :-----------------: |
| Ortho Symmetrical Wye (Type D)    | No                  |
| Ortho Asymetrical Wye (Type D)    | No                  |
| Ortho/Diag Wye (Type E)           | No                  |
| Diag Symmetrical Wye (Type E)     | No                  |
| Diag & Wide Ortho Wye (Type D/E)  | No                  |
| Folded Wye                        | No                  |
| Half-Folded Wye                   | No                  |
{{< /table >}}

#### Fractional Angle Splitters

{{< table class="table-bordered nam-compat-status w-auto" >}}
| Width                             | Road ⇄ OWR-1        |
| --------------------------------: | :-----------------: |
| Ortho Symmetrical Wye (Type D)    | No                  |
| Ortho Asymetrical Wye (Type D)    | No                  |
| Ortho/Diag Wye (Type E)           | No                  |
| Diag Symmetrical Wye (Type E)     | No                  |
| Diag & Wide Ortho Wye (Type D/E)  | No                  |
| Folded Wye                        | No                  |
| Half-Folded Wye                   | No                  |
{{< /table >}}
