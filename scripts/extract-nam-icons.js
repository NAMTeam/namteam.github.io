// Extracts all menu icon PNGs and LTEXTs from a NAM install. The menu-icon shortcode uses the menu item's exemplar name as a key to look up the appropriate icon, title, and description.
// Usage: npm run icons:extract <path-to-nam-plugins>
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { DBPF, FileType } from 'sc4/core';
import { stringify } from 'yaml';

const LANGUAGE_CODE_OFFSETS = {
    en: 0x00,
    fr: 0x03,
    de: 0x04,
    it: 0x05,
    es: 0x06,
    nl: 0x07,
    da: 0x08,
    sv: 0x09,
    no: 0x0a,
    fi: 0x0b,
    ja: 0x0f,
    pl: 0x10,
    ko: 0x14,
    pt: 0x23,
};

async function main() {
    const namFolder = process.argv[2];
    const iconFolder = 'assets/images/icons';
    const iconLocaleFolder = 'data/nam-icons';
    const iconDataFile = 'data/nam-icons.yaml';
    const dbpfExtensions = ['.dat', '.sc4lot', '.sc4model', '.sc4desc'];

    const languages = GetLanguages('config/_default/languages.toml');

    const extracted = new Map(); //ExemplarName → {File, Icon, Name, Description}
    let fileCount = 0;

    const files = walk(namFolder);
    for (const file of files) {
        if (!dbpfExtensions.includes(path.extname(file).toLowerCase())) continue;
        fileCount++;

        let dbpf;
        try {
            dbpf = new DBPF(file);
        } catch (err) {
            console.warn(`Skipping ${file}: ${err.message}`);
            continue;
        }
        const fileName = path.parse(file).name

        //Extract LTEXT strings from local files
        if (fileName.startsWith('NetworkAddonMod_Locale_')) {
            const lang = fileName.replace('NetworkAddonMod_Locale_', '').replace('.dat', '');
            const strings = new Map(); //TGI (normalized to base group) → LTEXT strings
            for (const entry of dbpf) {
                if (entry.type !== FileType.LTEXT) continue;
                let ltext;
                try {
                    ltext = entry.read();
                } catch {
                    continue; // skip unreadable/corrupt LTEXT
                }
                const [type, group, instance] = entry.tgi.toArray();
                
                //Adjust the Group by the language offset so that the same TGI can be used to look up the string in any language
                const offset = LANGUAGE_CODE_OFFSETS[lang] ?? 0;
                strings.set(TgiToString([type, group - offset, instance]), ltext.value);
            }
            writeFileSync(
                path.join(iconLocaleFolder, `${lang}.yaml`),
                stringify(Object.fromEntries(strings), { blockQuote: 'literal' })
            );
        }

        //Extract menu entry information and icon images
        for (const entry of dbpf.exemplars) {
            let exemplar;
            try {
                exemplar = entry.read();
            } catch {
                continue; // if unreadable/corrupt exemplar, skip rather than abort whole run
            }

            const exemplarName = exemplar.value('ExemplarName');
            const iconInstance = exemplar.value('ItemIcon');
            if (!iconInstance) continue;
            //I believe NAM files will always have the icon in the same dbpf file as the exemplar
            const iconEntry = dbpf.find({ type: FileType.PNG, instance: iconInstance });
            if (!iconEntry) continue;

            const props = {
                File: fileName,
                Icon: TgiToString(iconEntry.tgi.toArray()), //TGI
                Name: TgiToString(exemplar.value('UserVisibleNameKey') ?? []), //TGI
                Description: TgiToString(exemplar.value('ItemDescriptionKey') ?? []), //TGI
            }

            if (extracted.has(exemplarName)) continue; //The same exemplar name can appear multiple times in different menus (wit different TGIs), skip these as they have the same icons

            writeFileSync(path.join(iconFolder, `${props.Icon}.png`), iconEntry.decompress());
            extracted.set(exemplarName, props);
        }
        dbpf.free();
    }
    writeFileSync(iconDataFile, stringify(Object.fromEntries(extracted)));

    console.log(`Scanned ${fileCount} DBPF files, extracted ${extracted.size} icons.`);
    console.log(`Images: ${iconFolder}`);
    console.log(`Config: ${iconDataFile}`);
}

/**
 * Fetch the list of available languages in the documentation site
 * @param {string} tomlFile 
 * @returns {string[]} Array of language codes available in the documentation site
 */
function GetLanguages(tomlFile) {
    const content = readFileSync(tomlFile, 'utf8');
    return [...content.matchAll(/^\[(\w+)\]$/gm)].map(match => match[1]);
}

/**
 * Recursively walk a directory and yield all file paths
 * @param {string} dir Directory to parse
 * @returns {Generator<string>} Yields file paths
 */
function* walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else yield full;
    }
}
/**
 * Convert an array of numbers to a string representation of a TGI set
 * @param {number[]} tgiArray Array of [type, group, instance]
 * @returns {string} TGI string in the format "xxxxxxxx-xxxxxxxx-xxxxxxxx"
 */
function TgiToString(tgiArray) {
    if (tgiArray.length == 0) {
        return '00000000-00000000-00000000';
    }
    return `${ToHexString(tgiArray[0])}-${ToHexString(tgiArray[1])}-${ToHexString(tgiArray[2])}`;

    function ToHexString(n) {
        return n.toString(16).padStart(8, '0').toLowerCase();
    }
}

main();
