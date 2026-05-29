// store all creatures in a(n array
let allCreatures=[];

$("#crAdd").click( function(){

    //functions
     //grabbing data 
    function getCreatureFromForm(){
    const freshCreature={
        name: "".val(),
        color: "".val(),
        eyesnum: $("").val()
    };

    return freshCreature; //data is returned as freshcreature, not on page

};


    //create new creature object from the form inputs
    const newCreature=getCreatureFromForm(); // this ensures new creature is always created from the form
    
console.log (newCreature);

}




// the checks function
function isCreatureValid(){
    if (isCreatureValid.name==="") return false;
    if (creature.name.length >12) return false;
    if (isNaN(creature.eyesNum)|| creature.eyesNum >5) return false;
    return true;
// nan is nothing, || means or
}

// safety checks
console.log (isCreatureValid.newCreature)
if (isCreatureValid()==false) {
    return;
}
// == is a less strict comparison than ===


// store all creatures in an array

let allCreatures=[];


// functions
// function to grab data from the form
function getCreatureFromForm(){
  
  const freshCreature={
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };

return freshCreature;
};

// the checks function
function isCreatureValid(creature) {
  if (creature.name === "" ) return false;
  if (creature.name.length >12) return false;
  if ( isNaN(creature.eyesNum) || creature.eyesNum >5 ) return false;
  return true;
}

// the main brain
$("#crAdd").click( function(){

    // create creature object from the form inputs
    const newCreature = getCreatureFromForm();
    console.log(newCreature);
  
  // safety checks
    console.log( isCreatureValid(newCreature) );
    if ( isCreatureValid(newCreature)==false ) { // true==false 
     return; // stops the function which is "click" one
    }


    // add creature to the page
    // save to the memory 
    // reset the fporm prepare for the next iteration

});




















//Ctrl+/= comment out a section of code 



// // add creature to the garden
// $("#crAdd").click( function(){


//     //create creature object
//     //safety check
//     //add creature to page
//     //save the creature to memory
//     //reset the form for the next iteration
//     // grab the value from the text input and assign it to a variable crName
//     let crName=$("#crName").val();
//     let crColor=$("#crColor").val();
//     let crEyesNum=$("#crEyesNum").val();


//     // html eye construction, using cycles (repeat till condition is met)
//     let crEyesHtml=""
//     for(let i=0; i<crEyesNum; i++){
//         crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";

//     }
// //i++ is increment the value of this variable by one, like count
//     if( crName.length > 2) { 
//         $("#creature-list").append(`
//             <div class="creature">
//                 <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml} </div>
//                 <div class="creature-info">${crName}</div>
//             </div>
//         `);
//     }
   
//     //form resets 
//      $("#crName").val(""); // write the value
//     // $("#crName").val(); // retrieve the value

     
//         // test in console
//     console.log(crName);  
//     console.log(crColor); 
//     console.log(crEyesNum); 
//     console.log(crEyesHtml);

// }); 


