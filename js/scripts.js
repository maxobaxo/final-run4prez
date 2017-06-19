//business logic
function Candidate(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.reputation = 0;
  this.funding = 0;
}
Candidate.prototype.policyDec = function(){
var radioInput1 = $("input:radio[name=dec1radio]:checked").val();
  if (radioInput1 == "environmental") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 500;
    console.log(this)
    showExplanationd11();
  } else if (radioInput1 == "industrial") {
    this.reputation = this.reputation + 2;
    this.funding = this.funding + 1000;
    console.log(this)
    showExplanationd12();
  };
};
Candidate.prototype.taxesDec = function(){
var radioInput2 = $("input:radio[name=dec2radio]:checked").val();
  if (radioInput2 == "cuttax") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 1000;
    console.log(this)
    showExplanationd21();
  } else if (radioInput2 == "paytax") {
    this.reputation = this.reputation + 7;
    this.funding = this.funding - 250;
    console.log(this)
    showExplanationd22();
  } else if (radioInput2 == "avoidquestion") {
    this.reputation = this.reputation + 1;
    this.funding = this.funding + 500;
    console.log(this)
    showExplanationd23();
  };
};
Candidate.prototype.attackDec = function(){
var radioInput3 = $("input:radio[name=dec3radio]:checked").val();
  if (radioInput3 == "attack") {
    this.reputation = this.reputation + 0;
    this.funding = this.funding - 500;
    console.log(this)
    showExplanationd31();
  } else if (radioInput3 == "giveup") {
    this.reputation = this.reputation - 3;
    console.log(this)
    showExplanationd32();
  } else if (radioInput3 == "defend") {
    this.reputation = this.reputation + 3;
    this.funding = this.funding - 500;
    console.log(this)
    showExplanationd33();
  };
};
Candidate.prototype.winLose = function() {
  if (this.reputation >= 9) {
    victoryReveal();
  } else {
    lossReveal();
  }
}


//user interface logic
$(document).ready(function() {
  var newCandidate;
  victoryReveal = function() {
    $("#win").show();
  };
  lossReveal = function() {
    $("#lose").show();
  };
  showExplanationd11 = function() {
    $("#explanationd1-1").show()
  };
  showExplanationd12 = function() {
    $("#explanationd1-2").show()
  };
  showExplanationd21 = function() {
    $("#explanationd2-1").show()
  };
  showExplanationd22 = function() {
    $("#explanationd2-2").show()
  };
  showExplanationd23 = function() {
    $("#explanationd2-3").show()
  };
  showExplanationd31 = function() {
    $("#explanationd3-1").show()
  };
  showExplanationd32 = function() {
    $("#explanationd3-2").show()
  };
  showExplanationd33 = function() {
    $("#explanationd3-3").show()
  };
  $("#register").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var age = $("input#age").val();
    var gender = $("input#gender").val();
    newCandidate = new Candidate(name, age, gender);
    $("#decision1").show();
  });
  $("button#decision1Button").click(function(){
    newCandidate.policyDec();
    $("button#decision1Button").hide();
    $("button#moveon1Button").show();
  });
  $("button#moveon1Button").click(function(){
    $("#decision1").hide();
    $("#decision2").show();
  });
  $("button#decision2Button").click(function(){
    newCandidate.taxesDec();
    $("button#decision2Button").hide();
    $("button#moveon2Button").show();
  });
  $("button#moveon2Button").click(function(){
    $("#decision2").hide();
    $("#decision3").show();
  });
  $("button#decision3Button").click(function(){
    newCandidate.attackDec();
    $("button#decision3Button").hide();
    $("button#moveon3Button").show();
  });
  $("button#moveon3Button").click(function(){
    $("#decision3").hide();
    newCandidate.winLose();
  });
  $("#final-decision-button").submit(function(event) {

  });
});
