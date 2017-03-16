
var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

var blockStr = "#"
function returnBlock(){
    blockStr = document.getElementById("Brick Symbol").value;
    drawPyramid(document.getElementById("height").value);
}



function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    document.getElementById("bold").innerHTML = "";


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += blockStr;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
