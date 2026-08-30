let stackchipstock = "Instock";
let jumpystock = "Instock";
let skittlestock = "Instock";
let wfstock = "Instock";
document.getElementById("stackchipstock").textContent = stackchipstock;
document.getElementById("jumpystock").textContent = jumpystock;
document.getElementById("skittlestock").textContent = skittlestock;
document.getElementById("wfstock").textContent = wfstock;
let stockStatus = "In stock";

document.getElementById("stackchipstock").onclick = function() {

    if (stackchipstock === "In stock") {
        stackchipstock = "Not in stock";
    } else {
        stackchipstock = "In stock";
    }

    document.getElementById("stackchipstock").textContent = stackchipstock;
};