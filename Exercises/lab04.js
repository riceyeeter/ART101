let count = 0;
let buttonCreature = {
    name: "Glob",
    species: "Blobfish",
    favoriteFood: "other fish",

    moods: ["sleepy", "still sleepy", "less sleepy", "nope sleepy again", "confused", "angry"]
};


$("#needy-button").click(function () {

    count = count + 1;

   let arrayPosition = (count - 1) % buttonCreature.moods.length;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";

    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>I want to be fed " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
