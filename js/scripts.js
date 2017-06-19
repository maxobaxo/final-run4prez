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
    console.log("enviro trigger")
    console.log(this)
  } else if (radioInput1 == "industrial") {
    this.reputation = this.reputation + 2;
    this.funding = this.funding + 1000;
    console.log("industry trigger")
    console.log(this)
  };
};
Candidate.prototype.taxesDec = function(){
var radioInput2 = $("input:radio[name=dec2radio]:checked").val();
  if (radioInput2 == "cuttax") {
    this.reputation = this.reputation + 5;
    this.funding = this.funding + 1000;
    console.log(this)
  } else if (radioInput2 == "paytax") {
    this.reputation = this.reputation + 7;
    this.funding = this.funding - 250;
    console.log(this)
  } else if (radioInput2 == "avoidquestion") {
    this.reputation = this.reputation + 1;
    this.funding = this.funding + 500;
    console.log(this)
  };
};
Candidate.prototype.attackDec = function(){
var radioInput3 = $("input:radio[name=dec3radio]:checked").val();
  if (radioInput3 == "attack") {
    this.reputation = this.reputation + 0;
    this.funding = this.funding - 500;
    console.log(this)
  } else if (radioInput3 == "giveup") {
    this.reputation = this.reputation - 3;
    console.log(this)
  } else if (radioInput3 == "defend") {
    this.reputation = this.reputation + 3;
    this.funding = this.funding - 500;
    console.log(this)
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
    $("#decision1").hide();
    $("#decision2").show();
  });
  $("button#decision2Button").click(function(){
    newCandidate.taxesDec();
    $("#decision2").hide();
    $("#decision3").show();
  });
  $("button#decision3Button").click(function(){
    newCandidate.attackDec();
    $("#decision3").hide();
    
    newCandidate.winLose();
  });
  $("#final-decision-button").submit(function(event) {

  });
});
