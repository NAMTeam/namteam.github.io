# Network Addon Mod official documentation

This is a living document and will be regularly updated with NAM releases.

**Want to contribute to the NAM documentation? Read the instructions below.** 👇🏻

## Pre-requisites

Please note that it's assumed that you have a level of familiarity with [Git](https://git-scm.com/). 

* [Git](https://git-scm.com/) — latest source release
* [Node.js](https://nodejs.org/) — latest LTS version or newer

### Install dependencies

In your command shell of choice, run the following:

```
git clone https://github.com/NAMTeam/namteam.github.io namdocs && cd namdocs
```

Then run:
```
npm install
```

To view the site locally:
```
npm run start
```

The site will be deployed automatically to `https://localhost:1313`.


## Editing documentation

All files are located inside `/content/`. Images are _relative_ to the document - it's highly suggested that an `images` subfolder is used within each document bundle to keep things tidy.

For instance, you can do this:

```
..
├── docs/
│   ├── example-guide/
│   │   ├── index.md
│   │   └── images
│   │       ├── image1.png
│   │       └── image2.jpg
│   └── _index.md
└── _index.md
```

Content is written in `.md` (Markdown) files, however a limited subset of HTML can be used too. To familiarise yourself with Markdown, refer to [this document](https://www.markdownguide.org/extended-syntax/).

### i18n
`i18n` refers to the localisation and internationalisation of documentation in different languages. NAM documents can be translated into a variety of different languages (e.g. `de` for German, `it` for Italian, and so on).

To create a new translation, copy the file you want to translate and rename the file to `filename.[ISOCODE].md` (e.g. `filename.de.md` if you want German).

Using the above example, you can see that a German language version of `index.md` has been created:

```
..
├── docs/
│   ├── example-guide/
│   │   ├── index.md
│   │   ├── index.de.md
│   │   └── images
│   │       ├── image1.png
│   │       └── image2.jpg
│   └── _index.md
└── _index.md
```

Please note that if you need to add a new language to the list, you will also need to edit `/config/_default/languages.toml` (pay attention to indentation!). 2 letter ISO codes are used, for a list you can [refer to this document](https://www.iban.com/country-codes). Use the lower-case versions otherwise our documentation engine freaks out.

### Short codes

There are a handful of Hugo shortcodes that can be used to make developing documentation easier. Take a look in `~/layouts/shortcodes` to see a full list of them.

#### Alert

Shortcode: 
```
{{< alert context="CONTEXT" text="This is an example alert." >}}
```
The above shortcode uses a simple string to create the alert. 

The following contexts are supported:
* primary
* info
* success
* warning
* danger

An alternative shortcode can be used using the following (if you wish to use Markdown within the alert):
```
{{< alert context="CONTEXT" >}}
This is an example multi-line alert.

<span class="text-success">You can even add custom HTML to the alert.</span>
{{< /alert >}}
```

#### Details
Shortcode:
```
{{< details <summary> [state] >}}
<content>
{{< /details >}}
```

#### Document Status

This is a variation of the Alert shortcode however it has different statuses depending on what's required.

Shortcode:
```
{{< docstatus status="STATUS" >}}
```

The following statuses are supported:

* (blank) - Defaults to "not yet written"
* `workinprogress` - Documentation is in progress and subject to change.
* `outdated` - Documentation is outdated. Optionally you can add `version="VERSION"` to the shortcode to state what version of the NAM the documentation refers to.
* `oldcontent` - Warns that the documentation refers to older content but is still useful for reference with the current NAM version.
* `compatibility` - EA App/Origin compatibility warning. Refers to the current issue with the NAM not being able to run on EA App/Origin copies of SimCity 4.

#### Simple image

(note: a feature including galleries will come out soon in a future version of this documentation)

This will allow you to create quick, simple images that can be inserted into the body of documentation, with additional CSS classes.

Shortcode:
```
{{< img-simple src="SOURCE" class="" >}}
```

Standard Bootstrap 5.2 classes can be used.

#### Override

This shortcode allows you to display override tiles for Flex-based items. This is designed to be responsive on mobile.

Shortcode:
```
{{< override from="IMAGE_1" to="IMAGE_2" caption="CAPTION" >}}
```
Parameters:

* `from` - the original tile layout
* `to` - the completed tile layout
* `caption` - a caption describing the nature of the override

For an example of this in action, [check out the RRW documentation](https://www.sc4nam.com/docs/feature-guides/real-railway-rrw/).

#### Table of Contents

While "On This Page" appears on most pages in the NAM documentation, an additional table of contents can be added. This will retrieve headings down to `h3`, any further will not display.

Shortcode:
```
{{< toc >}}
```

#### Table

Use a [Markdown table generator](https://www.tablesgenerator.com/markdown_tables) to make a Markdown table, paste it inside the below shortcode:

```
{{< table class="CLASS" >}}
MARKDOWN_TABLE
{{< /table >}}
```

`class` will accept any Bootstrap class. Note that if color is required to highlight status, add `nam-compat-status` to the `class` parameter. This will highlight individual cells based on what's inside them (yes/no/partial). Any other text will not be styled.

**NOTE:** In future this will be refined to allow us to explain why a particular piece does not have full compatibility.

## Credits

[In addition to the main NAM team](https://www.sc4nam.com/docs/reference/credits/), the following people (so far!) have contributed to getting this documentation project off the ground:

* h3ndofry
* jflann
* memo33
* ulisse99

### Developers

These are the third party developers who made this project possible:

* [h-enk](https://github.com/h-enk/doks) - creator of Doks (and Hyas) - the base on which the NAM documentation is built.
* [Hugo](https://gohugo.io/) - the Go-based templating engine