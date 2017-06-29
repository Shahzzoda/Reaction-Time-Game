var start = new Date().getTime();
var recordedTimes = new Array();
var counter = 0;

function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("target").style.backgroundColor = color;
}

function RandomSize() {
    var dimmension = (Math.random() * 200) + 100;
    document.getElementById("target").style.width = dimmension + "px";
    document.getElementById("target").style.height = dimmension + "px";
}

function MoveTarget() {
    var dimmension = (Math.random() * 500) + 50;
    document.getElementById("target").style.top = dimmension + "px";
    var dimmension2 = (Math.random() * 1000) + 50;
    document.getElementById("target").style.left = dimmension2 + "px";
}

function makeShapesAppear() {
    MoveTarget();
    RandomColor();
    RandomSize();    
    if (Math.random() > 0.5 ) {
        document.getElementById("target").style.borderRadius = "50%";
    } else {
        document.getElementById("target").style.borderRadius = "0";
    }
    document.getElementById("target").style.display = "block";
    start = new Date().getTime();
}

document.getElementById("target").onclick = function() {
    recordedTimes = start;
}

document.getElementById("target").onclick = function(){
    counter++;
    document.getElementById("target").style.display = "none";   
    var end = new Date().getTime();
    var time = (end - start)/1000;
    recordedTimes.push(time);
    document.getElementById("reactionTime").innerHTML = recordedTimes[counter-1];
    makeShapesAppear();              
    recordedTimes.sort();
    document.getElementById("highScore").innerHTML = recordedTimes[0] + " sec.";
}

console.log(recordedTimes);