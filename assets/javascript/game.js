    // GLOBALS
  //================================================================================================================

    //Each crystal will be assigned a random hidden value between 1 & 12 at start/restart of game.
var crystal = {
  gem1: { name: "teal", value: 0},
  gem2: { name: "red", value: 0},
  gem3: { name: "purple", value: 0},
  gem4: { name: "violet", value: 0}
};

    //masterGem will be a assigned a random displayed value between 19 & 120 at start/restart of game.
var masterGem = 0;

    //SCORING
  //================================================================================================================
  
var currentGemTot = 0; 
var wins = 0;
var losses = 0;

    //FUNCTIONS
  //================================================================================================================

function play()   {

    //At start/restart of game, this number will be 0
  var currentGemTot = 0; 

    //Assign a masterGem value (random number between 19 & 120)
  masterGem = Math.floor(Math.random() * 101 + 19);
      console.log("masterGem value is " + masterGem);

    //Assign a value to each gem (random number between 1 & 12)
  crystal.gem1.value = Math.floor(Math.random() * 11 + 1);
      console.log("gem1 value is " + crystal.gem1.value);
  crystal.gem2.value = Math.floor(Math.random() * 11 + 1);
      console.log("gem2 value is " + crystal.gem2.value);
  crystal.gem3.value = Math.floor(Math.random() * 11 + 1);
      console.log("gem3 value is " + crystal.gem3.value);
  crystal.gem4.value = Math.floor(Math.random() * 11 + 1);
      console.log("gem4 value is " + crystal.gem4.value);

    //Update HTML game display
$("#current-val").html(currentGemTot);
$("#master-crystal-val").html(masterGem);
}

var addValue = function(crystal)  {
  currentGemTot = currentGemTot + crystal.value;
}




    //GAME PLAY
  //================================================================================================================  

play();

$("#gem1").click(function()  {
    //console.log("gem1 was clicked");
  addValue(crystal.gem1);
    console.log("Your current gem total is " + currentGemTot);
});
  
$("#gem2").click(function()  {
    //console.log("gem2 was clicked");
  addValue(crystal.gem2);
    console.log("Your current gem total is " + currentGemTot);
});

$("#gem3").click(function()  {
    //console.log("gem3 was clicked");
  addValue(crystal.gem3);
    console.log("Your current gem total is " + currentGemTot);
});

$("#gem4").click(function()  {
    //console.log("gem4 was clicked");
  addValue(crystal.gem4);
    console.log("Your current gem total is " + currentGemTot);
});


