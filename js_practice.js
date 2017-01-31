//code academy practice---rock, paper, scissors


var userChoice = prompt("Do you choose rock, paper, or scissors?");

var computerChoice = Math.random()

if (computerChoice<=0.33){
    alert("rock");
} else if (computerChoice<=0.66) {
    alert("paper");
} else {
    alert("scissors");
}

var compare = function(choice1, choice2){
    if(choice1 === choice2){
            return "The result is a tie!";
    }
};



//var compare = function(choice1, choice2)
 //   if(choice1 === choice2){
 //         return "The result is a tie!";
 // }
 //        if(choice2 === "scissors") {
  //       return "rock wins";
  //      }
  //      else {
  //          return "paper wins";
   //      }


var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  }

  if (choice1 < 0.34) {
    if (choice2 === "scissors") {
      return "rock wins";
    } else if (choice2 === "paper") {
      return "paper wins";
    }
  }
}



/// for loops breakdown
// Edit this for loop to start at 4 and end at 23

for (var i = 4; i <=23; i = i + 1) {
  console.log(i);
}


// created a for loop that counts every number 0 to 35, made it start at 5 and stop counting with 50
// only counts every fifth number so i+=5

for (var i = 5; i <=50; i+=5) {
  console.log(i);
}

// created a for loop starts at 8 and keeps counting until 120, and

for (var i = 8 ; i < 120; i+=12) {
  console.log(i);
}


/// starts counting from 10 and it stops once it gets to 0, and is counting down by 1
for (var i = 10; i >= 0; i--) {
  console.log(i);
}

//for loop that counts down from 100 until 0 by 5 (and does not print out 0)

for(var i=100; i>0; i-=5){
    console.log(i);
}

// created an array with 5 names and a for loop to call all 5
var names = ["alejandra", "armando", "andrea", "amir","allison"];
    for(var i=0; i < 5;i++){
     console.log("I know someone called " + names[i]);
 }

///completed search text for your name

/*jshint multistr:true */
 var text = "resist resist ale resist resist resist\ resist ale resist resist ale resist";

 var myName = "ale";
 var hits = []

    for(var i=0;i<text.length; i++) {

if (text[i] === myName[0]){
for (var j = i; j < myName.length + i; j++) {
    hits.push(text[j]);
        }
      }
}
if(hits === 0){
    console.log("Your name wasn't found!");
    } else {
        console.log(hits);
    }

