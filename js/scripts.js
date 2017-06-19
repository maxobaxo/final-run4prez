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
  } else {
    console.log("conditions have failed")
  }
  $("#decision1").hide()
  $("#decision2").show()
};

//user interface logic
$(document).ready(function() {
  var name; age; gender;
  var radioInput1;
  var newCandidate = new Candidate(name, age, gender);
  $("button#decision1Button").click(function(){
    newCandidate.policyDec();
  });
  $("#register").submit(function(event) {
    event.preventDefault();
    showdecision1();
  });
});