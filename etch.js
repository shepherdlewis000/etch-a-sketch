var gridpx = 960; // how many pixels 
var gridsize = 16;
var color = 'grey';
var paint = true;
var randomColor = false;

document.getElementById("numBlocks").value = 16;
document.getElementById("onOff").innerText = "ON";

document.getElementById("numBlocks").addEventListener("input", resetGrid);
document.getElementsByClassName("jscolor")[0].value = "808080";

document.getElementById("onOff").addEventListener("click", () => {
    if(paint == true) disablePaint();
    else enablePaint();
});

displayGrid();
enablePaint();

/* Initializes event handler for checkbox to hide and show color choice
NEEDS to change visual of 
*/
var checkbox = document.querySelector("input[name=randomCheckBox]");
checkbox.checked = false;
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        randomColor = true;
        // document.getElementsByClassName("jscolor")[0].style.display = none;
        document.getElementById("colorPicker").style.display = "none";
        setRandomColor();
    } else {
        randomColor = false;
        // document.getElementsByClassName("jscolor")[0].style.display = inline;
        document.getElementById("colorPicker").style.display = "block";
    }
});

function colorit(event){
    if(paint == true){
        event.target.style.backgroundColor = color;
        if(randomColor == true) 
            setRandomColor();
    }
}

function enablePaint(){
    paint = true;
    document.getElementById("onOff").innerText = "ON"; 
    document.getElementById("onOff").style.color = "green";
    document.getElementById("onOff").style.border = "green 2px solid";
}

function disablePaint(){
    paint = false;
    document.getElementById("onOff").style.border = "red 2px solid";
    document.getElementById("onOff").style.color = "red";
    document.getElementById("onOff").innerText = "OFF";
}

document.body.onkeyup = function(e){   
    if(e.keyCode == 13){
        //your code
        if(paint == true){
            disablePaint();
            
        }
        else{
            enablePaint();
        }
    }
}

function resetGrid(){
    gridsize = document.getElementById("numBlocks").value;
    displayGrid();

}
function setColor(picker) {
    color = '#' + picker.toString()
}

function displayGrid(){
    document.getElementById("grid").innerHTML = "";

    for(var i = 0; i < gridsize * gridsize; i++){
        var div = document.createElement("div");
        div.style.height = (gridpx / gridsize) + "px";
        div.style.width = (gridpx / gridsize) + "px";
        div.style.backgroundColor = "white";
        div.style.border = "solid black 1px";
        div.style.boxSizing = "border-box";
    
        div.addEventListener("mouseover", colorit);
        document.getElementById("grid").appendChild(div);
    }
}

function setRandomColor(){
    var rValue = Math.floor(Math.random() * 256);
    var gValue = Math.floor(Math.random() * 256);
    var bValue = Math.floor(Math.random() * 256);
    // document.getElementsByClassName("jscolor")[0].value = "rgb(" + rValue + "," + gValue + "," + bValue + ")";
    document.getElementById('jsc').jscolor.fromRGB(rValue, gValue, bValue);
    color = "rgb(" + rValue + "," + gValue + "," + bValue + ")";
    console.log(color);
}
