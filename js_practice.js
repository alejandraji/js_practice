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

