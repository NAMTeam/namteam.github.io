// manipulate tables marked with specific compatibility status
// browser support: all modern browsers (not you, IE)
var namCompatTables = document.getElementsByClassName("nam-compat-status");

for (const table of namCompatTables) {
    var cells = table.getElementsByTagName("td");
    for (const cell of cells) {
        cell.setAttribute("data-compat", cell.innerText.replace(/\s+/g, '-').toLowerCase())
    }
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))