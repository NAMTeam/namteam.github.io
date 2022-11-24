// manipulate tables marked with specific compatibility status
// browser support: all modern browsers (not you, IE)
var namCompatTables = document.getElementsByClassName("nam-compat-status");

// :)
const safeWords = ["yes", "partial", "limited", "no", "n/a", "--"];

for (const table of namCompatTables) {

    // we don't want to add data-compat to tables we've done manually
    if (table.classList.contains("processed")) {
        continue;
    }

    var cells = table.getElementsByTagName("td");
    for (const cell of cells) {
        // match containing table cell data against safeWords
        const cellText = cell.innerText.toLowerCase();
        const idx = safeWords.findIndex(v => cellText.startsWith(v));

        if (idx > -1) {
            cell.setAttribute("data-compat", safeWords[idx])
        }

    }
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))