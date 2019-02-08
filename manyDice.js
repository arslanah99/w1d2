//Take input from command line
//Multiply the amount of dice written in command line
//Get random numbers between 1 - 6 from the multiplyed number in command line


// var diceNum = [1, 2, 3, 4, 5, 6];
var diceArgument = process.argv;


// function randomManyDice(dice){
//     //get a random number between 1 and 6
//     for(var i = 0; i < diceNum.length; i++){
//         console.log(Math.floor(Math.random() * diceNum[i]) + 1) 

//     }// We can print out the numbers but we need to make 


// }

// randomManyDice();
console.log('------------------')

// var argument = process.argv;
// var firstInput = argument.slice(2)[0]
// //This prints out input from command line


// function randomManyDice(diceNumber){
//     var rolls = [];
//     for(var i = 0; i < diceNumber; i++){
//         var roll = Math.ceil(Math.random() * 6)
//         rolls.push(roll)
//     }
//     console.log(rolls)
// }

// randomManyDice(firstInput)


var argument = process.argv;
var firstInput = argument.slice(2)[0]


function manyDiceNumber(diceNumber){
    var rolls = []
    for(var i = 0; i < diceNumber; i++){
        var roll = Math.ceil(Math.random() * 6)
        rolls.push(roll)

    }
    var commaAdder = rolls.join(', ')
     console.log('Rolled ' + firstInput + ' dice: ' + commaAdder)
} 
manyDiceNumber(firstInput)
