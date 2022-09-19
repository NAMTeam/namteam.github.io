// manipulate tables marked with specific compatibility status
// browser support: all modern browsers (not you, IE)
var namCompatTables = document.getElementsByClassName("nam-compat-status");

for (const table of namCompatTables) {
    var cells = table.getElementsByTagName("td");
    for (const cell of cells) {
        console.log(cell);
        cell.setAttribute("data-compat", cell.innerText.replace(/\s+/g, '-').toLowerCase())
    }
}