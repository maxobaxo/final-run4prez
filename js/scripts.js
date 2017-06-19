//business logic
function Candidate(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.reputation = 0;
  this.funding = 0;
}
showdecision1 = function(){
  $("#decision1").show()
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
  $("#decision1").hide()
  $("#decision2").show()
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
  $("#decision2").hide()
  $("#decision3").show()
};



//user interface logic
$(document).ready(function() {
  var newCandidate;
  $("#register").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var age = $("input#age").val();
    var gender = $("input#gender").val()
    newCandidate = new Candidate(name, age, gender);
    showdecision1();
  });
  $("button#decision1Button").click(function(){
    newCandidate.policyDec();
  });
  $("button#decision2Button").click(function(){
    newCandidate.taxesDec();
  });
  $("#final-decision-button").submit(function(event) {

  });
});
