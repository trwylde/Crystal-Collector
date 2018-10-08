    // GLOBALS
  //================================================================================================================

    //Each crystal will be assigned a random hidden value between 1 & 12 at start/restart of game.
var crystal = {
  teal: { name: "teal", value: 0},
  red: { name: "red", value: 0},
  purple: { name: "purple", value: 0},
  violet: { name: "violet", value: 0}
};


    //INCREMENTALS
  //================================================================================================================
    //masterCrystal will be a assigned a random displayed value between 19 & 120 at start/restart of game.
var masterCrystal = 0;
var currentCrystalTotal = 0;
    
    //SCORING
  //================================================================================================================
var wins = 0;
var losses = 0;

    //FUNCTIONS
  //================================================================================================================

    //function that can be customized and assigns the five random values needed each round
var randomValue = function(min, max)  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var play = function() {

      //At start/restart of game, this number will be 0
  currentCrystalTotal = 0;

      //Assign a masterCrystal value (random number between 19 & 120)
  masterCrystal = randomValue(19, 120);

    //Assign each crystal a value (random number between 1 & 12)    
  crystal.teal.value = randomValue(1, 12);
  crystal.red.value = randomValue(1, 12);
  crystal.purple.value = randomValue(1, 12);
  crystal.violet.value = randomValue(1, 12);
  
    //Update HTML game display
  $("#current-val").html(currentCrystalTotal);
  $("#master-crystal-val").html(masterCrystal);
  $("#master").html(" ");
    //Testing in console
    console.log("================================================")
    console.log("masterCrystal value is " + masterCrystal);
    console.log("teal: " + crystal.teal.value + " | red: " + crystal.red.value + " | purple: " + crystal.purple.value + " | violet : " + crystal.violet.value);
    console.log("================================================")

}   


var addValue = function(crystal)  {
  
    //To increase currentCrystalTotal
  currentCrystalTotal = currentCrystalTotal + crystal.value;
    //Update HTML game display
    $("#current-val").text(currentCrystalTotal);
    //console.log("Your current crystal total is " + currentCrystalTotal);
    //Call checkWin function
  checkWin();

  //try moving win/loss alerts and play(); to this area
}

    //Check for win or loss
var checkWin = function() {
  if(currentCrystalTotal > masterCrystal) {
  
    //Update losses program
    ++losses;
   //document.write("You Lose! Better luck next time!")
   setTimeout(function() {
    alert("You Lose! Better luck next time!")
  }, 0)
    
     //Update losses in HTML
   $("#losses").html(losses);
   setTimeout(function() {
   play();
  }, 3)
  }
  else if (currentCrystalTotal == masterCrystal)  {
    
    setTimeout(function() {
      alert("Hooray! You win!")
    }, 0)
    //Update wins program
    ++wins;

    //Update wins in HTML
    $("#wins").html(wins);

    setTimeout(function() {
      play();
     }, 3)
  }
}

//your calling play() twice. Try refactoring code to call it only once. This should eliminate the page resetting before final total has been displyed or logged to console.

    //GAME PLAY
  //================================================================================================================  

play();

$("#teal").click(function() {
  
  addValue(crystal.teal);

});
$("#red").click(function() {
  addValue(crystal.red);
});
$("#purple").click(function() {
  addValue(crystal.purple);
});
$("#violet").click(function() {
  addValue(crystal.violet);
});
