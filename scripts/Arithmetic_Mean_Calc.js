let dataset = [];

function showData() {
    let text = "Current Dataset: ";
    if (dataset.length > 0) {
        text += dataset.join(", ");
    } else {
        text += "()";
    }
    document.getElementById("dataset").innerText = text;

    if (dataset.length > 0) {
        let total = 0;
        for (let i = 0; i < dataset.length; i++) {
            total += dataset[i];
        }
        let mean = total / dataset.length;
        document.getElementById("mean").innerText = "Current Mean: " + mean;
    } else {
        document.getElementById("mean").innerText = "Current Mean: ()";
    }
}

function addNumber() {
    let input = document.getElementById("value").value;
    let value = parseFloat(input);

    if (isNaN(value)) {
        alert("Enter a valid number.");
    } else {
        dataset.push(value);
    }

    showData();
    document.getElementById("value").value = "";
}

function removeNumber() {
    let input = document.getElementById("value").value;
    let value = parseFloat(input);

    if (isNaN(value)) {
        alert("Enter a valid number.");
    } else {
        let index = dataset.indexOf(value);
        if (index !== -1) {
            dataset.splice(index, 1);
        } else {
            alert("Value not found.");
        }
    }

    showData();
    document.getElementById("value").value = "";
}
