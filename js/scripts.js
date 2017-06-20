//business logic
function Candidate(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName;
  this.age = age;
  this.gender = gender;
  this.reputation = 0;
  this.funding = 0;
  this.playerTitle;
  this.choiceOne;
};

Candidate.prototype.fullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
};

Candidate.prototype.choiceOne = function(radioInput1){
  if (radioInput1 == "environmental") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 500;
    return "1A"
  } else if (radioInput1 == "industrial") {
    this.reputation = this.reputation + 2;
    this.funding = this.funding + 1000;
    return "1B"
  };
};

Candidate.prototype.choiceTwo = function(radioInput2){
  if (radioInput2 == "cuttax") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 1000;
    return "2A"
  } else if (radioInput2 == "paytax") {
    this.reputation = this.reputation + 7;
    this.funding = this.funding - 250;
    return "2B"
  } else if (radioInput2 == "avoidquestion") {
    this.reputation = this.reputation + 1;
    this.funding = this.funding + 500;
    return "2C"
  }
};

Candidate.prototype.choiceThree = function(radioInput3){
  if (radioInput3 == "attack") {
    this.reputation = this.reputation + 0;
    this.funding = this.funding - 500;
    console.log(this);
    return "3A";
  } else if (radioInput3 == "giveup") {
    this.reputation = this.reputation - 3;
    console.log(this);
    return "3B";
  } else if (radioInput3 == "defend") {
    this.reputation = this.reputation + 3;
    this.funding = this.funding - 500;
    console.log(this);
    return "3C";
  }
};


Candidate.prototype.choiceFive = function(radioInput5){
  if (radioInput5 == "Decline") {
    this.reputation = this.reputation + 2;
    console.log(this);
    return "5A";
  } else if (radioInput5 == "Cyber") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 1000;
    console.log(this);
    return "5B";
  } else if (radioInput5 == "Nakedtruth") {
    this.reputation = this.reputation + 7;
    console.log(this);
    return "5C";
  }
};


Candidate.prototype.choiceSeven = function(radioInput7){
  if (radioInput7 == "Force") {
    this.reputation = this.reputation + 3;
    this.funding = this.funding + 750;
    console.log(this);
    return "7A";
  } else if (radioInput7 == "Accuse") {
    this.reputation = this.reputation - 5;
    this.funding = this.funding + 100;
    console.log(this);
    return "7B";
  } else if (radioInput7 == "Maury") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding - 500;
    console.log(this);
    return "7C";
  }
};

Candidate.prototype.choiceNine = function(radioInput9){
  if (radioInput9 == "public") {
    this.reputation = this.reputation + 7;
    this.funding = this.funding + 1000;
    console.log(this);
    return "9A";
  } else if (radioInput9 == "private") {
    this.reputation = this.reputation + 1;
    this.funding = this.funding + 1000;
    console.log(this);
    return "9B";
  }
};
Candidate.prototype.winLose = function() {
  if (this.reputation >= 9) {
    victoryReveal();
  } else {
    lossReveal();
  }
};

Candidate.prototype.role = function() {
  if (this.gender === "male") {
    this.playerTitle = "Congressman";
  } else if (this.gender === "female") {
    this.playerTitle = "Congresswoman";
  } else {
    this.playerTitle = "Representative";
  }
  return this.playerTitle;
};

//user interface logic
$(document).ready(function() {
  var newCandidate;
  victoryReveal = function() {
    $("#win").show();
  };
  lossReveal = function() {
    $("#lose").show();
  };


  var turns = 0;
  nextDecision = function() {
    turns = turns + 1;
    if (turns == 9) {
      $("#finalDecision").show();
    } else {
      var counter = Math.floor((Math.random() * decisionPoints.length) + 0);
      if (decisionPoints[counter] == 2) {
        $("#decision2").show();
        decisionPoints.splice(counter, 1);
      } else if (decisionPoints[counter] == 3) {
          $("#decision3").show();
          decisionPoints.splice(counter, 1);
      } else if (decisionPoints[counter] == 4) {
          $("#decision4").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 5) {
          $("#decision5").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 6) {
          $("#decision6").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 7) {
          $("#decision7").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 8) {
          $("#decision8").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 9) {
          $("#decision9").show();
          decisionPoints.splice(counter, 1);
      }  else if (decisionPoints[counter] == 10) {
          $("#decision10").show();
          decisionPoints.splice(counter, 1);
      };
    }
  }
  var decisionPoints = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  $("#register").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var age = $("input#age").val();
    var gender = $("input#gender").val()
    newCandidate = new Candidate(firstName, lastName, age, gender);
    var fullName = newCandidate.fullName();
    $(".title").text(newCandidate.role());
    $(".lastName").text(newCandidate.lastName);
    $("#intro").hide();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").append(newCandidate.funding);
    $("#status").show();
    $("#decision1").show();
  });

  $("button#decision1Button").click(function(){
    var radioInput1 = $("input:radio[name=dec1radio]:checked").val();
    var choiceOne = newCandidate.choiceOne(radioInput1);
    $("#explanation" + choiceOne).show();

    $("button#decision1Button").hide();
    $("#prompt1").hide();
    $("#question1").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon1Button").show();
  });

  $("button#moveon1Button").click(function(){
    nextDecision();
    $("#decision1").hide();
  });

  $("button#decision2Button").click(function(){
    var radioInput2 = $("input:radio[name=dec2radio]:checked").val();
    var choiceTwo = newCandidate.choiceTwo(radioInput2);
    $("#explanation" + choiceTwo).show();

    $("button#decision2Button").hide();
    $("#prompt2").hide();
    $("#question2").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon2Button").show();
  });

  $("button#moveon2Button").click(function(){
    nextDecision();
    $("#decision2").hide();
  });

  $("button#decision3Button").click(function(){
    var radioInput3 = $("input:radio[name=dec3radio]:checked").val();
    var choiceThree = newCandidate.choiceThree(radioInput3);
    $("#explanation" + choiceThree).show();

    $("button#decision3Button").hide();
    $("#prompt3").hide();
    $("#question3").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon3Button").show();
  });

  $("button#moveon3Button").click(function(){
    nextDecision();
    $("#decision3").hide();
  });

  $("button#decision4Button").click(function(){
    newCandidate.choiceFour();
    $("button#decision4Button").hide();
    $("button#moveon4Button").show();
  });
  $("button#moveon4Button").click(function(){
    nextDecision();
    $("#decision4").hide();
  });
  $("button#decision5Button").click(function(){
    var radioInput5 = $("input:radio[name=dec5radio]:checked").val();
    var choiceFive = newCandidate.choiceFive(radioInput5);
    $("#explanation" + choiceFive).show();

    $("button#decision5Button").hide();
    $("#prompt5").hide();
    $("#question5").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon5Button").show();
  });
  $("button#moveon5Button").click(function(){
    nextDecision();
    $("#decision5").hide();
  });
  $("button#decision6Button").click(function(){
    newCandidate.choiceSix();
    $("button#decision6Button").hide();
    $("button#moveon6Button").show();
  });
  $("button#moveon6Button").click(function(){
    nextDecision();
    $("#decision6").hide();
  });
  $("button#decision7Button").click(function(){
    var radioInput7 = $("input:radio[name=dec7radio]:checked").val();
    var choiceSeven = newCandidate.choiceSeven(radioInput7);
    $("#explanation" + choiceSeven).show();

    $("button#decision7Button").hide();
    $("#prompt7").hide();
    $("#question7").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon7Button").show();
  });
  $("button#moveon7Button").click(function(){
    nextDecision();
    $("#decision7").hide();
  });
  $("button#decision8Button").click(function(){
    newCandidate.choiceEight();
    $("button#decision8Button").hide();
    $("button#moveon8Button").show();
  });
  $("button#moveon8Button").click(function(){
    nextDecision();
    $("#decision8").hide();
  });
  $("button#decision9Button").click(function(){
    var radioInput9 = $("input:radio[name=dec9radio]:checked").val();
    var choiceNine = newCandidate.choiceNine(radioInput9);
    $("#explanation" + choiceNine).show();

    $("button#decision9Button").hide();
    $("#prompt9").hide();
    $("#question9").hide();
    $(".reputation-points").empty();
    $(".reputation-points").append(newCandidate.reputation);
    $(".funds").empty();
    $(".funds").append(newCandidate.funding);
    $("button#moveon9Button").show();
  });
  $("button#moveon9Button").click(function(){
    nextDecision();
    $("#decision9").hide();
  });
  $("button#decision10Button").click(function(){
    newCandidate.choiceTen();
    $("button#decision10Button").hide();
    $("button#moveon10Button").show();
  });
  $("button#moveon10Button").click(function(){
    nextDecision();
    $("#decision10").hide();
  });
  $("#finalDecisionButton").click(function() {
    newCandidate.winLose();
    $("#finalDecision").hide();
  });
});
