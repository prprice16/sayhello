"use strict";
/*
   simple hello application
   Author:  P. Price

*/

//window.alert("start");


function sayHello()
{
    //window.alert("say hello");
    //get name entered in textbox
    var yourname = document.getElementById("username").value;
    //make sure you have it
    //window.alert(yourname);
    
    //create output
    var output = "Hello " + yourname + "!";
   // window.alert(output);
    
    //display in h1 element
    document.getElementById("msg").innerHTML = output;
    
}



    

    
    


