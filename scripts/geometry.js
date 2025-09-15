function CalculatePerimeter(){
    let sideA = document.getElementById('leng').value;
    let sideB = document.getElementById('wid').value;

    let resultPerimeter = (2*sideA) + (2*sideB);
    document.getElementById("perimeterResult").innerHTML = "Perimeter: " + resultPerimeter;
}

function CalculateArea(){
    let length1 = document.getElementById('lengthArea').value;
    let breadth1 = document.getElementById('widthArea').value;

    let resultArea = (length1) * (breadth1);
    document.getElementById("areaResult").innerHTML = "Area: " + resultArea;
}

function CalculateVolume(){
    let side1 = document.getElementById('lengthVolume').value;
    let side2 = document.getElementById('widthVolume').value;
    let side3 = document.getElementById('heightVolume').value;

    let resultVolume = (side1) * (side2) * (side3);
    document.getElementById("volumeResult").innerHTML = "Volume: " + resultVolume;
}
