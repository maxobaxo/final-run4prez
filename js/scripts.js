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
};

Candidate.prototype.fullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
};

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

    console.log(newCandidate.reputation);
  });

  $("button#decision1Button").click(function(){
    newCandidate.policyDec();
  });

  $("#final-decision-button").submit(function(event) {

  });
});
