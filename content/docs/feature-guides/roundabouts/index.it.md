---
title : "Roundabouts"
description: ""
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/feature-guides/roundabouts"
---

{{< docstatus status="workinprogress" >}}
{{< docstatus status="untranslated" >}}

## Road Roundabouts

The road roundabout is created by drawing a 2x2 circle with the road tool.

{{< override from="images/rd/road_roundabout_pattern.png" to="images/rd/road_roundabout_base">}}

Road roundabouts support connections in various orthogonal & diagonal combinations involving the following networks:

- Road
- One Way Road
- OWR-1
- RHW-2
- MIS

#### All Supported Configurations

{{< gallery col-xl="8" col-lg="8" col-md="6">}}
  images/rd/connections/7AB50E44-1ABE787D-5F06BA14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06B814-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06BE14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06B114-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06B514-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06B314-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96B814-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96BA14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96BE14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C114-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C214-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C314-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C114-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06CA14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06CB14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C514-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C614-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C014-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C214-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06CC14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06CD14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C314-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C714-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C814-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C614-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06C414-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C414-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F96C514-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760D814-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760D894-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760D914-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760D994-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DA14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DA94-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DB94-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DC14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DC94-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DD14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DE14-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5760DE94-C0.jpg
  images/rd/connections/7AB50E44-1ABE787D-5F06BD14-C0.jpg
{{< /gallery >}}

#### Known Limitations

While the road roundabout supports connections to other networks, it is required that at least one of the four tiles of the roundabout remain strictly road-based.  For example, it is not possible to make a roundabout with four street connections, but it is possible to make a roundabout with 3 street connections if the fourth tile has either no connection, or has a road connection, thus remaining solely road-based.