// chapter:26 MathMethode
// // Q1
// var number = 28.268
// console.log("number value:"+number);
// console.log("number of rounded:"+Math.round(number));
// console.log("number of floor:"+Math.floor(number));
// console.log("number of ceil:"+Math.ceil(number));
// Q2
// var number =prompt("Entere the number")
// console.log("number value:"+number);
// console.log("number of rounded:"+Math.round(number));
// console.log("number of floor:"+Math.floor(number));
// console.log("number of ceil:"+Math.ceil(number));
// // Q3
//     var absoluteValue = Math.abs(-4,4);
//     console.log("The absolute value of " + absoluteValue + " is " + absoluteValue)
//     var absoluteValue = Math.abs(5,5);
//      console.log("The absolute value of " + absoluteValue + " is " + absoluteValue) ;
//   Q4
// var randomValues ="123456";

// console.log(randomValues.length);

// for (var i = 0; i <= 0; i++) {
//   var randomNum = Math.floor(Math.random() * randomValues.length);
//   document.write("Random Dice Value:"+randomValues[randomNum]);
// }
    // Q5
// var headUser = prompt("Enter coin value");
// var tailUser = prompt("Enter coin value");
// var toss = Math.random() * 2;
// var convert = Math.floor(toss)
// if (convert === 0) {
//   console.log("Random coin value:"+headUser);
// } else {
//   console.log("Random coin value:"+tailUser);
// }
// Q6
// function generateRandomNumber() {
//     var randomNumber = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("randomNumberDisplay").innerHTML = "Random Number: " + randomNumber;
//   }
// Q7
// var user =prompt("Enter your weight")
// document.write("<h2>"+"Your weight is"+""+user+""+"kilograms"+"</h2>")
// Q8
// var user =prompt("Enter a number between 1 and 10")
//     var num = Math.floor(Math.random() * 10) + 1;
//     if (isNaN(user) || user < 1 || user > 10) {
//       alert("Please enter a valid number between 1 and 10.");
//     } else if (user=== num) {
//       alert("Congratulations! You guessed the correct number: " + num);
//     } else {
//       alert("Sorry, the secret number was " + num + ". Try again!");
    // }
  // QUESTION chapter26
  // Q1
  // var roundedNumber = Math.round(5.6);
// Q2
// var origNum = 5.6;
// var roundNum = Math.ceil(origNum);
// Q3
// var origNum = 5.6;
// var roundNum = Math.floor(origNum);
// Q4
// var origNum = 5.6;
// var roundedNum = Math.round(origNum);
// Q5
// var roundedNum = Math.floor(.5);
// CHAPTER 27
// // Q1
// var randomNumber = Math.floor(Math.random() * 50) + 1;
// Q2
// var randomNumber = Math.random(); 
// Q3
// function rollDice() {
//     var diceResult = Math.floor(Math.random() * 6) + 1;
//     return diceResult;
// }

// // Example usage:
// var diceRoll = rollDice(6);
// console.log("You rolled a " + diceRoll);

// /Q4
// function tossCoin() {
//     var randomValue = Math.random();
//     if (randomValue < 0.5) {
//         return "Head";
//     } else {
//         return "Tail";
//     }
// }
// var coinTossResult = tossCoin();
// console.log("The result of the coin toss is: " + coinTossResult);
// // CHAPTER 28,29
// Q1
// var num = 123;
// console.log(typeof  num)
    // Q2
// var number = 10;
// console.log(typeof number.toString());
// Q3
// var str = "3.14";
// var floatNum1 = (str); 
// var floatNum2 = +str;             
// console.log(floatNum1);
// console.log(floatNum2);
// Q4
// function isStringConvertibleToDecimal(str) {
//     return !isNaN(parseFloat(str)); 
// }
// var str1 = "3.14";
// var str2 = "abc3.14";
// console.log(isStringConvertibleToDecimal(str1));
// console.log(isStringConvertibleToDecimal(str2));  
// // Q5
// var num=225;
// console.log(typeof num.toString())
// Q6
// var num=42;
// console.log(typeof num.toString())
// Q7
// function isStringConvertibleToDecimal(num) {
//     return !isNaN(parseFloat(num)); 
// }
// var num=3.14;
// var num2="abc 3.14"
// console.log(isStringConvertibleToDecimal(num));
// console.log(isStringConvertibleToDecimal(num2)); 
// Chapter 30 (Controlling the length of decimals)
    // Q1
    // var num=3.256865;
    // var numNum=num.toFixed(4).toString()
    // console.log(numNum)
    // Q2
//     var num = 3.14159265358979323846;
// num =(num.toFixed(2));
// console.log(num)
// Q3
// var num =1.087743;
// console.log((num.toFixed(2)).toString().length>4)
// Q4
// var num = 12.3456789; 
// var roundedString = num.toFixed(2).toString();
// alert("Rounded to 2 decimal places: " + roundedString);






