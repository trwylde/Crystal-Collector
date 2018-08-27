    // GLOBALS
  //================================================================================================================

    //Each crystal will be assigned a random hidden value between 1 & 12 at start/restart of game.
var crystal = {
  gem1: {
    name: "teal",
    value: 0
  },
  gem2: {
    name: "red",
    value: 0
  },
  gem3: {
    name: "purple",
    value: 0
  },
  gem4: {
    name: "violet",
    value: 0
  },
};

    //masterGem will be a assigned a random displayed value between 19 & 120 at start/restart of game.
var masterGem =0;

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
  gem1 = Math.floor(Math.random() * 11 + 1);
      console.log("gem1 value is " + gem1);
  gem2 = Math.floor(Math.random() * 11 + 1);
      console.log("gem2 value is " + gem2);
  gem3 = Math.floor(Math.random() * 11 + 1);
      console.log("gem3 value is " + gem3);
  gem4 = Math.floor(Math.random() * 11 + 1);
      console.log("gem4 value is " + gem4);
}




    //GAME PLAY
  //================================================================================================================  

play();

$("#gem1").click(function()  {
    console.log("gem1 was clicked");
});
  
$("#gem2").click(function()  {
    console.log("gem2 was clicked");
});

$("#gem3").click(function()  {
    console.log("gem3 was clicked");
});

$("#gem4").click(function()  {
    console.log("gem4 was clicked");
});
