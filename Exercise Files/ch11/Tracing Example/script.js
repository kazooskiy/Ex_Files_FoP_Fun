// define several functions


function firstFunction() {

    //alert("About to call 2nd funct.");
    secondFunction();

}

function secondFunction() {

    //alert("About to call 3rd funct.");
    thirdFunction();

}

function thirdFunction() {

    //alert("About to call 4th funct.");
    fourthFunction();  //f >>> F
}


function fourthFunction() {

    //alert("About to change headline funct.");
    headline.innerHTML = "You clicked the headline!";

}




// grab the headline element

//alert("Testing");
var headline = document.getElementById("mainHeading");


// add a click event handler


headline.onclick = function() {

    //alert("About to call 1st funct.");
    firstFunction();

    //alert("Testing Again");
};





