let stackchipstock = "In stock";
let jumpystock = "In stock";
let skittlestock = "In stock";
let wfstock = "In stock";
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
document.getElementById("jumpystock").onclick = function() {

    if (jumpystock === "In stock") {

        jumpystock = "Not in stock";

    } else {

        jumpystock = "In stock";

    }

    document.getElementById("jumpystock").textContent = jumpystock;

};document.getElementById("skittlestock").onclick = function() {

    if (skittlestock === "In stock") {

        skittlestock = "Not in stock";

    } else {

        skittlestock = "In stock";

    }

    document.getElementById("skittlestock").textContent = skittlestock;

};document.getElementById("wfstock").onclick = function() {

    if (wfstock === "In stock") {

        wfstock = "Not in stock";

    } else {

        wfstock = "In stock";

    }

    document.getElementById("wfstock").textContent = wfstock;

}