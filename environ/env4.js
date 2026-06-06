// let environmentTitle = "View of Ningbo";

let environmentElements = ["lantern", "subway", "man", "chang"];

// button interaction names
let interactions = {
 chang: {
    name: "Liu Hong Chang",
    type: "cousin",
    feeling: "me happy",
},

 subway:{
    name: "who I called Wai Po",
    type: "Grandma",
    feeling: "me food she bought from places around town",
},

 man:{
    name: "whom I called Wai Gong",
    type: "Grandpa",
    feeling: "the house feel alive by always playing the tv loudly",
},
};



$(".clickable").click(function () {

    let itemId = $(this).attr("id");

    let currentItem = interactions[itemId];
    
      if (itemId ==="lantern") {
        askNumber("Wu");}

    let message = "";

    message = message +
        "<p>My " +
        currentItem.type +
        ", " +
        currentItem.name +
        ", made " +
        currentItem.feeling +
        ".</p>";

    $("#output").html(message);

    console.log(currentItem);



});


function askNumber(correctAnswer) {

    let userNumber = prompt(
        "What dialect do people from Ningbo speak?"
    );
    if (userNumber === correctAnswer) {
        $("#Trivia").html("Correct!");
    } else {
        $("#Trivia").html("Incorrect :(");
    }

};


//functions

// $("#lantern").click(function () {
// let message = "";

// message = message + "<p>My " + lantern.type + ", " + lantern.name + ", made me " + lantern.feeling + ".</p>";

//     $("#output").html(message);

//     console.log(lantern);
// });

// $("#subway").click(function () {
// let message = "";

// message = message + "<p>My " + lantern.type + ", " + lantern.name + ", made me " + lantern.feeling + ".</p>";

//     $("#output").html(message);

//     console.log(lantern);
// });

// $("#man").click(function () {
// let message = "";

// message = message + "<p>My " + lantern.type + ", " + lantern.name + ", made me " + lantern.feeling + ".</p>";

//     $("#output").html(message);

//     console.log(lantern);
// });

// $("#chang").click(function () {
// let message = "";

// message = message + "<p>My " + lantern.type + ", " + lantern.name + ", made me " + lantern.feeling + ".</p>";

//     $("#output").html(message);

//     console.log(lantern);
// });