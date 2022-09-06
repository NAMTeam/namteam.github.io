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