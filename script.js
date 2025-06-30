document.getElementById("myButton").onclick = function() {
    document.getElementById("myModal").style.display = "block";

    };
document.getElementById("myButton1").onclick = function() {
    document.getElementById("myModal1").style.display = "flex";

};


document.getElementById("myButton2").onclick = function() {
    document.getElementById("myModal2").style.display = "block";

};
document.getElementById("myButton3").onclick = function() {
    document.getElementById("myModal3").style.display = "block";
};
//image window

document.getElementById("button-image").onclick = function() {
    document.getElementById("myModal5").style.display = "block";
};
document.getElementById("myButton4").onclick = function() {
    let userInput = prompt("Enter your Name or Email");
    if(userInput !== null) {
        alert("I'm is blender artist. I can modeling 3d objects. You can download one my model or download all models for free.");

    }
};
document.getElementById("myButton5").onclick = function() {
    document.getElementById("myModal4").style.display = "flex";
};
  //my portfolio
document.getElementById("close-button").onclick = function() {
    document.getElementById("myModal").style.display = "none";
};
//my big project
document.getElementById("close-button2").onclick = function() {
    document.getElementById("myModal2").style.display = "none";

};
//realistic model
document.getElementById("close-button1").onclick = function() {
    document.getElementById("myModal1").style.display = "none";

};
document.getElementById("close-button3").onclick = function() {
    document.getElementById("myModal3").style.display = "none";
};

document.getElementById("myButton6").onclick = function() {
    document.getElementById("myModal4").style.display = "none";

};
//image window
document.getElementById("close-button4").onclick = function() {
    document.getElementById("myModal5").style.display = "none";

};
//show texts

document.getElementById("read-more").onclick = function() {
    document.getElementById("show-text").style.display = "block";
    document.getElementById("roll-up").style.display = "block";
    document.getElementById("read-more").style.display = "none";
    document.getElementById("show-text").style.transition = "display 5s";
    document.getElementById("myModal1").style.top = "1840px";
    document.getElementById("myModal").style.top = "2500px";



};
//rollup
document.getElementById("roll-up").onclick = function() {
    document.getElementById("show-text").style.display = "none";
    document.getElementById("read-more").style.display = "block";
    document.getElementById("roll-up").style.display = "none";
    document.getElementById("show-text").style.transition = "5s";
    document.getElementById("myModal").style.top = "1700px";

};
// loading process
document.getElementById("myButton7").onclick = function() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("myModal4").style.display = "none";
    setTimeout(function() {
        document.getElementById("complete-loading").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }, 40000);


};
document.getElementById("loading-button").onclick = function() {
    document.getElementById("loading-process").style.display = "block";
    document.getElementById("cancel").style.marginLeft = "310px";
};
document.getElementById("loading-button1").onclick = function() {
    document.getElementById("loading-process").style.display = "none";
    document.getElementById("cancel").style.marginLeft = "435px";
};
document.getElementById("cancel").onclick = function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("complete-loading").style.display = "none";

};
document.getElementById("loading-line").style.marginLeft = "380px";{
    document.getElementById("loading").style.display = "none";
}
// complete loading
document.getElementById("complete-button").onclick = function() {
    document.getElementById("complete-loading").style.display = "none";

};
    // screenshot-img
document.getElementById("image-print").onclick = function() {
    document.getElementById("image-cube-print").style.display = "block";

};
document.getElementById("close-button-in-img").onclick = function() {
    document.getElementById("image-cube-print").style.display = "none";

};



















