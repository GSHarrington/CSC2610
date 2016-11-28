//--------------------------Calculator ----------------------------
function calculator(){
var calculatoractivation = true;
while(calculatoractivation){
    console.log("Calculator Activated.");
    var number,result = 0;
    var operationchoice = prompt("Which operation would you like to perform?\n 1 ) Division \n 2 ) Square \n 3 ) Area of a Circle \n 4 ) Percentage\n x ) Exit", "1, 2, 3, 4 , or exit?");switch(operationchoice){
    case "1":
    case "division":
        console.log("Operation: Division.");
        var A = prompt ("Operation: Division\nPlease enter a number to be divided by 2:");
        divide(A);
        break;
    case "2":
    case "square":
        console.log("Operation: Square .");
        var A = prompt ("Operation: Square\nPlease enter a number to be squared: ");
        square(A);
        break;
    case "3":
    case "area of a circle":
        console.log("Operation: Area of a Circle.");
        var A = prompt ("Operation: Area of a Circle\nPlease enter a radius for a circle:");
        areaWithRadius(A);
        break;
    case "4":
    case "percentage":
        console.log("Operation: Percentage.");
        var A = prompt ("Operation : Percentage\nPlease enter a 1st number: ");
        var B = prompt ("Operation : Percentage\nPlease enter a 2nd number: ");
        percentOf(A, B);
        break;
    case "x":
    case "X":
    case "exit":
    case "Exit":
        calculatoractivation = false;
        console.log("Calculator Deactivated");
        break;
    default:
        console.log("You have selected: Non-valid operation");
        //calculatoractivation = false; // Any no valid inputs terminate function vs. only one exit from function.
        console.log("Calculator Deactivated");}}
function divide(number){
    result = number / 2;
    console.log("Half of "+number+" is "+result+".");
    alert("Half of "+number+" is "+result+".");
    return result;
  }
function square(number){
    result = number * number;
    console.log("The result of squaring the number "+number+" is "+result+".");
    alert("The result of squaring the number "+number+" is "+result+".");
    return result;
  }
function areaWithRadius(number){
    result = Math.round((number * number * Math.PI) * 100)/ 100;
    console.log("The area for a circle with radius "+number+" is "+result);
    alert("The area for a circle with radius "+number+" is "+result);
    return result;
  }
function percentOf(A, B){
    result = A / B * 100;
    console.log(A+" is "+result+"% of "+B);
    alert(A+" is "+result+"% of "+B);
    return result;
  }
}

var key     = ['G', 'A', 'E', 'L','A',"N"];
var attemptedLetters  = ['*', '*', '*', '*', '*', '*'];
var money = 0;
function guessLetter(letter) {

    var correctAttempt = false;
    var lettersRemaining = false;
    for (var i = 0; i < key.length; i++) {
        if (key[i] == letter) {
            attemptedLetters[i] = letter;
            correctAttempt = true;
        }
        if (attemptedLetters[i] == '*') {
            lettersRemaining = true;
        }
    }
    if (correctAttempt) {
        console.log('Correct! - Letter Discovered: '+ attemptedLetters.join(''));
        alert('Correct! - Letter Discovered: '+ attemptedLetters.join(''));
        var temp = getRandomInt(50,300);
        money = money + temp;
        alert("Wow, and I didn't think you'd get this far.. +$"+temp+".00");

        if (!lettersRemaining) {
            console.log('CONGRATULATIONS!');
            alert('CONGRATULATIONS!\n You cracked the word : \n'+key.join(''));
            var temp = getRandomInt(100,500);
            money = money + temp;
            alert("\n+ $"+temp+".00 was deposited into your account.");
            if( money < 0)
            {
              alert("It look's like you're going to pay for this one.\nYou owe us: $"+ money+".00");
            }
            else {
              alert("Great job! Here's what we owe you: $"+money+".00");
            }
        }
        else{
          ask();
        }
    } else {
        console.log("Error! - This password may be too strong for you to crack.");
        alert("Error! - This password may be too strong for you to crack.");
        var temp = getRandomInt(70,350);
        money = money - temp;
        alert("Yeah that's going to cost you... -$"+temp+".00");
        ask();
    }
}

function ask()
{
  var input = prompt ("Please enter a guess to crack the password: \nCurrent Profit : $" +money+".00");
  guessLetter(input.toUpperCase());

}
function guessStart(){
  console.log("Welcome to Password Cracker!");
  alert("Welcome to Password Cracker! \nYou've been hired to break the code. \nThe closer you get the more we pay. \nCan you break it? ")
  ask();
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
