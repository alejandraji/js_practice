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


/// practice with while loops, created a while loop that logs "I'm looping!" three times

var count = 0;

var loop = function(){
  while(count < 3){
    console.log("I'm looping!");
    count++
  }
};

loop();

///
var theLoop = true;

var soloLoop = function(){
  while(theLoop) {
    console.log("Looped once!");
    theLoop = false;
  }
};

soloLoop();

/// wrote a for loop and a while loop
var blackCat = true;

  while(blackCat) {
    console.log("the cat is black");
    blackCat = false;
  }

// prints out numbers 1-20
for (var i = 1; i <21; i++){
    console.log(i);
}

///

var getToDaChoppa = function(){
var exit = true;
do {
    console.log("only exit is the car");

} while(!exit);

};

getToDaChoppa();


//completing the 'slaying the dragon' exercise
var slaying = true;
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0;

while(slaying){
    if (youHit){
        console.log("You hit!");
    } else {
         console.log("You missed!");
    }
    var slaying = false;
}


/// return true if number is divisible by 2

var isEven = function(number) {
 if (number % 2 === 0) {
     return true;
 }
 else{
     return false;
 }
};


/// using the switch statements

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
case 'yellow':
    console.log("I love bright and yellow hats");
    break;
  //Add your case here!

  default:
    console.log("I don't think that's a primary color!");
}

/// created own switch statement
var growlers = prompt("which one is your favorite song from them?");

switch(growlers) {
    case 'black memories':
    console.log("favorite chinese fountain song")
    break;
    case 'going gets tough':
        console.log("also a good one from CF album");
        break;
    case 'night ride':
        console.log("favorite song from the last album");
        break;
    default :
    console.log("they have amazing music and albums");
}

///using logical operatos &&


var hungry = true;
var foodHere = true;

var eat = function() {
    if (hungry && foodHere){
        return true;
    } else {
        return false;
    }
};

