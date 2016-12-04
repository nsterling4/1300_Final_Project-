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














//Code to control the nav bar animation

/**
$(document).ready( function() {
    $(".top_bar_main").hide(); //intially hides the nav bar
    var BottomOfPic = ($(window).height())*.7; //Sets depth that bar will appear
    $(window).scroll(function() {
        if($(window).scrollTop() > BottomOfPic) { //If below set point, fades bar in
            $(".top_bar_main").fadeIn(1000); 
        }
        else if($(window).scrollTop() < BottomOfPic) { //If above set point again, fades bar out
            $(".top_bar_main").fadeOut(1000); 
        }
    });
});
**/

// $(document).ready( function() {
//     var BottomOfPic =  100; //Sets depth that bar will appear
//     $(window).scroll(function() {
//         if($(window).scrollTop() > BottomOfPic) { //If below set point, fades bar out
//             $(".top_bar").fadeOut(1000); 
//         }
//         else if($(window).scrollTop() < BottomOfPic) { //If above set point again, fades bar in
//             $(".top_bar").fadeIn(1000); 
//         }
//     });
// });




// $('document').ready(function(){
//         $( "div.top_bar_main")
//         .mouseenter(function(){
//             $(".top_bar_main").fadeToggle();
//         })
//         .mouseleave( function(){
//             $(".top_bar_main").fadeToggle();
//     }); 
// });

// $('document').ready(function(){
//         $( "div.top_bar")
//         .mouseenter(function(){
//             $(".top_bar").fadeToggle();
//         })
//         .mouseleave( function(){
//             $(".top_bar_main").fadeToggle();
//     }); 
// });




// $('document').ready(function(){
//     $(".test").on({
//         mouseenter: function(){
//             $(".top_bar_main").show();
//         },
//         mouseleave: function(){
//             $(".top_bar_main").hide();
//         },
//         click: function(){
//             $(."top_bar_main").show();
//         }
//     }); 
// });



// $('document').ready(function(){
//     $(".top_bar_main").mouseleave(function(){
//         $(".top_bar_main").fadeToggle(); 
//     }); 
// }); 
// $(document).ready(function(){
//     $(".top_bar_main").on('mouseenter', function(){
//         $(".top_bar_main").show();
//     }); 
// }); 


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






//Old sample code which needs to be removed at some point 



// $(document).ready( function() {
//     var BottomOfPic = $( window ).height();
//     $(window).scroll(function() {
//         if($(window).scrollTop() < BottomOfPic) { //scrolled past the other div?
//             $(".top_bar_main").fadeOut(1000); //reached the desired point -- show div
//         }
//     });
// });


// // Function to hide the footer
// $(document).ready(function(){
//     $("footer a").click(function(){
//         $("footer").hide();
//     })
// });



// //Function to move the car
// $(document).ready(function(){
//     $("#car img").click(function(){
//         $("#car img").animate({"left": '685px'}, 1000);
//     });
// });


// //Function to fade the ghost in and out
// $(document).ready(function(){
//     $("p a").click(function(){
//         $("#ghost").fadeToggle(3000);
//     });
// });



// //Functios to set the background colors
// function setFallTheme(){
//         $("nav").css("background-color", "#5E450E");
//         $("body").css("background-color", "#DEA220");
// }

// function setSpringTheme() {
//         $("nav").css("background-color", "#1C4905"); 
//         $("body").css("background-color", "#D8ECC3");
// }



