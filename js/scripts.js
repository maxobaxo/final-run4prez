//business logic
function Candidate(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.reputation = 0;
  this.funding = 0;
}

//user interface logic
$(document).ready(function() {
  $("#register").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var age = $("input#age").val();
    var gender = $("input#gender").val()
    var newCandidate = new Candidate(name, age, gender);


  });

  $("#final-decision-button").submit(function(event) {

  });
});
