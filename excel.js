// Total Sales: F = E * C
// Total Profits: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log(unitCol);
/*
// Change style:
unitCol.style.backgroundColor = "red";
unitCol.style.border = "1px solid black";

// Change context:
unitCol.textContent = "55555555";
*/

// HTMLElement.addEventListener(EVENT, CALLBACK);
// unitCol.addEventListener("click", handleClick);
unitCol.addEventListener("input", handleInput);

// Hoisting - Μεταφέρει τις δηλώσεις των function στην αρχή του scope (εδώ page) - Μέσα σε function -> στην αρχή της function
// function handleClick(e) {
//     console.log(1, e);
//     console.log(2, e.target);
//     console.log(3, e.target.textContent);
//     e.target.textContent = "WOW";
// }
function handleInput(e) {
    // G = E * D (Columns)
    // E: 
    let unitsProjected = e.target; 
    // G:
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    // D:
    let D = unitsProjected.previousElementSibling;

    let valE = unitsProjected.textContent;
    let valD = D.textContent;
    valE = parseFloat(valE);
    valD = parseInt(valD);

    console.log(typeof valE, typeof valD);
    console.log("G = ", (valE * valD));
    G.textContent = valE * valD;
}

// run();
try {

    run();

} catch (e) {
    console.log(e, e.message);
}

console.log("run code");