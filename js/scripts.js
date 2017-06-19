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

    var newCandidate = new Candidate(name, age, gender);
  });
});
