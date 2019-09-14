// Total Sales: F = E * C
// Total Profits: G = E * D
console.log("Running");
// alert();

let unitCol = document.querySelector("#units");
console.log(unitCol);
// Change style:
unitCol.style.backgroundColor = "red";
unitCol.style.border = "1px solid black";

// Change context:
unitCol.textContent = "55555555";

// run();
try {

    run();

} catch (e) {
    console.log(e, e.message);
}