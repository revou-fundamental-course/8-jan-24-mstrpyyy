function changeCalculationType() {
    var selectElement = document.getElementById("hitung");
    var resultLabel = document.getElementById("resultLabel");
    var resultLabel2 = document.getElementById("resultLabel2");
    var resultLabel3 = document.getElementById("resultLabel3");
    var resultLabel4 = document.getElementById("resultLabel4");
    var resultLabel5 = document.getElementById("resultLabel5");

    if (selectElement.value === "luas") {
        // resultLabel.textContent = "Luas Persegi";
        resultLabel2.textContent = "Rumus Luas Persegi";
        resultLabel3.textContent = "L = S x S";
        resultLabel4.textContent = "L : Luas";
        resultLabel5.textContent = "Hitung Luas Persegi";
    } else if (selectElement.value === "keliling") {
        // resultLabel.textContent = "Keliling Persegi";
        resultLabel2.textContent = "Rumus Keliling Persegi";
        resultLabel3.textContent = "K = 4 x S";
        resultLabel4.textContent = "K : Keliling";
        resultLabel5.textContent = "Hitung Keliling Persegi";
    }

    document.getElementById("squareside").value = "";
    document.getElementById("resultLabel6").innerHTML = "";
}

function reset() {
    document.getElementById("squareside").value = "";gi
    var resultLabel6 = document.getElementById("resultLabel6");
    resultLabel6.innerHTML = "";
}

function calculate() {
    var selectElement = document.getElementById("hitung");
    var squaresideInput = document.getElementById("squareside").value;
    var resultLabel6 = document.getElementById("resultLabel6");

    if (!isNaN(squaresideInput)) {
        var side = parseFloat(squaresideInput);
    }

    if (selectElement.value === "luas") {
        var luas = squaresideInput * squaresideInput;
        resultLabel6.innerHTML = "L = S x S<br>L = " + side + " x " + side + "<br>L = " + luas;
    } else if (selectElement.value === "keliling") {
        var keliling = squaresideInput * 4;
        resultLabel6.innerHTML = "K = 4 x S<br>K = 4 x " + side + "<br>K = " + keliling;
    }
}
