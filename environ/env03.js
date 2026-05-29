let environmentTitle = "View of Ningbo";

let environmentElements = ["lantern", "subway", "man", "chang"];

let chang = {
    name: "Liu Chang",
    type: "cousin",
    feeling: "happy",
};



let count = 0;
let buttonCreature = {
    name: "Glob",
    species: "Blobfish",
    favoriteFood: "other fish",

    moods: ["sleepy", "still sleepy", "less sleepy", "nope sleepy again", "confused", "angry"]
};


$("#lantern").click(function () {
let message = "";

message = message + "<p>My current mood is " + currentMood + ".</p>";

message = message + "<p>My " + chang.type + ", " + chang.name + ", made me " + chang.feeling + ".</p>";

    $("#output").html(message);

    console.log(chang);
    console.log(currentMood);

});