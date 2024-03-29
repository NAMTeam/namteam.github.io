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


## Style guide

Style guides provide a guideline as to how to write a technical document to ensure consistency across multiple authors. At this time of writing, no formal style guide has been created.

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

When you add content in other languages, note that you do not need to update the links to point to the language-specific version of the documentation - the documentation engine will sort this out for you.

### Convenience Functions

#### Section Headings

Sometimes you may want to change the URLs for section titles that are automatically generated.

To do this, on a Markdown heading, add `{#ID}`. 

For example, a heading might have a very long name, so to simplify the link you would do the below in the Markdown documentation:

```
## Heading that is really long, way too long to have as an anchor {#short-name-of-heading}
```

This is extremely useful if you need to link from legacy documentation.

### Short codes

There are a handful of Hugo shortcodes that can be used to make developing documentation easier. Take a look in `~/layouts/shortcodes` to see a full list of them.

Shortcodes are written in the `{{< SHORTCODE >}}` syntax. However there may be some cases where you need to use a particular shortcode inside an automatically-generated heading. For these, you will need to use the `{{% SHORTCODE %}}` syntax.

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
* `legacy` - States that the particular NAM component has not been worked on in some time but development will likely resume in the future.
* `obsolete` - States that no further development will occur on this component, but it is retained for compatibility reasons.
* `untranslated` - Documentation has not been translated into your native language yet. This will gradually disappear as more efforts are put into translation for various locales.

#### Simple image

This will allow you to create quick, simple images that can be inserted into the body of documentation, with additional CSS classes.

Shortcode:
```
{{< img-simple src="SOURCE" class="" clickable="" caption="" >}}
```

* `src`: image source
* `class`: any CSS class
* `clickable`: boolean, true or false. This enables clicking through to larger versions of the image.
* `caption`: brief description of the image

#### Gallery

You can create quick, flexible galleries by using the following shortcode:

```
{{< gallery col-xl="2" col-lg="1" col-md="1" >}}
    images/foo.jpg
    images/bar.jpg
    images/baz.jpg
    ...
{{< /gallery >}}
```

Parameters:

* `col-xl`: a number between 1 and 6, this only affects extra-large (desktop) screen sizes. Default setting is `3`.
* `col-lg`: a number between 1 and 6, this only affects large (desktop) screen sizes. Default setting is `3`.
* `col-md`: a number between 1 and 6, this only affects medium (tablet) screen sizes. Default setting is `2`.
* `clickable`: boolean, true or false. This enables clicking through to larger versions of the images in the gallery. At time of writing this is not fully implemented.

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

#### Menu Icon

A convenience function is included to show menu icons in a nice format.

```
{{< menu-icon icon="ICON" caption="CAPTION" >}}
```

Parameters:

* `icon` - the menu icon. Icon can be blank, in which case it simply won't be displayed.
* `caption` - a short caption describing the menu icon and the caption supports standard Markdown

For example, the below is what's used in the RHW documentation:

```
{{< menu-icon icon="images/icons/rhw-network-button.jpg" caption="RHW-2 Network Button" >}}
```


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

`class` will accept any Bootstrap class. Note that if color is required to highlight status, add `nam-compat-status` to the `class` parameter. This will highlight individual cells based on what's inside them (yes/no/partial/limited). A Javascript function will process the table to automatically add `data-compat` tags to fields that fit requirements. Add the `processed` class to prevent this from happening, as it's assumed you will have customised the table accordingly. Any other text will not be styled.

**NOTE:** Table headings are mandatory, otherwise if you want finer control use HTML instead.


## Credits

[In addition to the main NAM team](https://www.sc4nam.com/docs/reference/credits/), the following people (so far!) have contributed to getting this documentation project off the ground:

* h3ndofry
* jflann
* memo33
* Tarkus
* ulisse99

### Developers

These are the third party developers who made this project possible:

* [h-enk](https://github.com/h-enk/doks) - creator of Doks (and Hyas) - the base on which the NAM documentation is built.
* [Hugo](https://gohugo.io/) - the Go-based templating engine