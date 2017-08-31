# Run for President #
An exercise for Intro to Programming at Epicodus | 06.21.17

By Rena Rallis, Max Scher, Steve Spitz, Nathan Stewart

### Description ###
This webpage is an interactive role-playing game where the user submits him or herself as a candidate for the US Presidency. The journey requires the candidate to make strategic decisions, which ultimately determine the outcome of the election.

### Setup/Installation Requirements ###
* Copy URL from GitHub repository
* Open terminal then:
  * $ git clone https://github/maxobaxo/run4prez
  * $ cd run4prez
  * $ open index.html

### Specifications ###
* It can create a candidate based on user input.
 - Input: [firstName: Max, lastName: Aurelius, age: 25, gender: male]
 - Output: "Congressman Aurelius's Current Stats"
* It can return an alert if user submits incomplete input.
 - Input: [Name:       ]
 - Output: "You need to make a selection, silly-pants!"
* It can update and return the value of a candidate's reputation points and funding amount based on the candidate's new decision and its predetermined values.
 - Input: Candidate with 5 Reputation Points and Funds: $500 makes new decision.
 - Output: Reputation Points: 10, Campaign Funds: $300
* It can determine the winner of the election based on the candidate's cumulative reputation points.
 - Input: Reputation: 20 points
 - Output: "You win the election!"
* It can force the candidate to withdraw from the race if (s)he ends the campaign with no liquid funds.
 - Input: Candidate reaches final decision with Campaign Funds: - $150
 - Output: "You are broke, you must withdraw"
* It can randomly decide which decision a candidate is forced to make.

### Technologies Used: ###
html, Bootstrap, CSS, JavaScript, jQuery, GitHUb

### Legal ###
Copyright &copy; 2017 Rena Rallis, Max Scher, Steve Spitz, Nathan Stewart

This application is licensed under the MIT License
