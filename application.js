$(document).ready(function(){
 
  var bankroll = 100;
  
  function placeBet() {
    var bet = parseInt($("#bet").val());

    if (bet >= 5 && bet <= 10) {
     return bet;
    } else {
      alert("Please place a bet that's between $5 and $10 only.");
      return false;
      bankroll += 0;
    }
  };

  function getGuessAndValidate() {
    var guess = parseInt($("#guess").val());

    if (guess >= 1 && guess <= 10) {
      return guess;
    } else {
      alert("Number must be between 1 and 10.");
      return false;
    } 
  };

  function playGame() {
    alert("Ready to try your luck?");
    
    $('#playForm').submit(function(event) {
      event.preventDefault();

      var bet = placeBet();
      var guess = getGuessAndValidate();
      if(guess && bet) {
        var actualNumber = Math.floor(Math.random() * 10 + 1);

        if (guess === actualNumber) {
          $("#message").text("Correct!").css("color", "green");
          bankroll += bet;
        } else if (Math.abs(actualNumber - guess) === 1) {
          $("#message").text("Sorry, the actual number was "+ actualNumber + ", but you didn't lose any money!").css("color", "blue");
        } else {
          $("#message").text("That's incorrect! The number was " + actualNumber + "!").css("color", "red");
          bankroll -= bet;
        }
   
        $("#bankroll").text("$"+bankroll);
     
        if (bankroll < 0) {
        alert("Sorry, game over! You lost all your money.");
        window.location.reload();
        };
      };
    });
  };

  playGame();
  
 });
     
