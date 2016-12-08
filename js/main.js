/*
* INFO/CS 1300
* Fall 2016
*
* JS Main File
*
*/



//Code to control the image gallery

var slideIndex = 0;
// Image Array
var pix = ["images/apple_fest_1.jpg","images/apple_fest_2.jpg","images/apple_fest_3.jpg","images/apple_fest_4.jpg",
"images/apple_fest_5.jpg", "images/apple_fest_6.jpg", "images/apple_fest_7.jpg", "images/apple_fest_8.jpg",
"images/apple_fest_9.jpg", "images/apple_fest_10.jpg"];

function change_index(n) {
  //Increments index reference 
  show_index(slideIndex += n);
}

function show_index(n) {

   //Handles wrap around case
   if (n > (pix.length-1)) {document.getElementById("curr_img").src=pix[0]; slideIndex=0;}
   //Handles the reverse wrap around case
   else if (n < 0) {document.getElementById("curr_img").src=pix[pix.length-1]; slideIndex=(pix.length-1);}
   //Normal sequencial index changes
   else {document.getElementById("curr_img").src=pix[n]}
}



//Code to control the footer information and formatting

window.onload = function date() {
    //Creates new date item
    var x = new Date(); 
    //Stores the year
    var y = x.getFullYear();
    //Stores the date
    var da = x.getDate();
    //Adds proper suffix to the date
    if (da==1){
        da=da+"st";
    }
    else if (da==2){
        da=da+"nd";
    }
    else if (da==3){
        da=da+"rd";
    }
    else {
        da=da+"th";
    }

    //Array of month names
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
    //Stores month name using the index number that is returned 
    var m = monthNames[x.getMonth()]; 
    
    //Creates the new paragraph elements
    var new_p = document.createElement('p');
    var foot1p = document.createElement('p');
    var foot2p = document.createElement('p');
    //Creates a new text element for that paragraph
    var new_text = document.createTextNode(m + " " + da + ", " + y);
    //Creates the static text element
    var foot1 = document.createTextNode("CS1300 Final Project, ©2016");
    var foot2 = document.createTextNode("Last Updated: November 2016");
    //Isolates the footer element
    var location = document.getElementsByTagName('footer')[0];
    //Appends items to footer
    new_p.appendChild(new_text);
    foot1p.appendChild(foot1);
    foot2p.appendChild(foot2);
    location.appendChild(foot1p);
    location.appendChild(new_p);
    location.appendChild(foot2p);

                
}






