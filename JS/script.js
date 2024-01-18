function changeCalculationType() {
    var selectElement = document.getElementById("count");
    var formula = document.getElementById("formula");
    var formulaBreakdown = document.getElementById("formulaBreakdown");
    var descriptionBreakdown = document.getElementById("descriptionBreakdown");
    var calculate = document.getElementById("calculate");

    if (selectElement.value === "luas") {
        formula.textContent = "Rumus Luas Persegi";
        formulaBreakdown.textContent = "L = S x S";
        descriptionBreakdown.textContent = "L : Luas";
        resultLabel5.textContent = "Hitung Luas Persegi";
    } else if (selectElement.value === "keliling") {
        formula.textContent = "Rumus Keliling Persegi";
        formulaBreakdown.textContent = "K = 4 x S";
        descriptionBreakdown.textContent = "K : Keliling";
        calculate.textContent = "Hitung Keliling Persegi";
    }

    document.getElementById("squareside").value = "";
    document.getElementById("calculateBreakdown").innerHTML = "";
}

function reset() {
    document.getElementById("squareside").value = "";
    var calculateBreakdown = document.getElementById("calculateBreakdown");
    calculateBreakdown.innerHTML = "";
}

function calculate() {
    var selectElement = document.getElementById("count");
    var squaresideInput = document.getElementById("squareside").value;
    var calculateBreakdown = document.getElementById("calculateBreakdown");

    // Check if squaresideInput is not empty
    if (squaresideInput.trim() !== "") {
        if (!isNaN(squaresideInput)) {
            var side = parseFloat(squaresideInput);
        }

        if (selectElement.value === "luas") {
            var luas = squaresideInput * squaresideInput;
            calculateBreakdown.innerHTML = "L = S x S<br>L = " + side + " x " + side + "<br>L = " + luas;
        } else if (selectElement.value === "keliling") {
            var keliling = squaresideInput * 4;
            calculateBreakdown.innerHTML = "K = 4 x S<br>K = 4 x " + side + "<br>K = " + keliling;
        }
    } else {
        // Clear the previous result if squaresideInput is empty
        calculateBreakdown.innerHTML = "";
    }
}
