/**************************************1. Write a ts program to find maximum between two numbers.******************************** */


// var input1:any=prompt("Enter First Number");
// var input2:any=prompt("Enter Second Number");
// var number1:number=parseInt(input1)
// var number2:number=parseInt(input2)
// if(number1>number2)
// {
//     console.log(`The greater number is ${number1}`)
// }
// else
// {
//     console.log(`The greater number is ${number2}`)

// }


/**************************************2. Write a ts program to find maximum between three numbers.******************************** */

//  var input1:any=prompt("Enter First Number");
//  var input2:any=prompt("Enter Second Number");
//  var input3:any=prompt("Enter Third Number");

//  var number1:number=parseInt(input1)
//  var number2:number=parseInt(input2)
//  var number3:number=parseInt(input3)

//  if(number1>number2 && number1>number3)
//  {
//      console.log(`The greater number is ${number1}`)
//  }
//  else if(number2>number1 && number2>number3)
//  {
//      console.log(`The greater number is ${number2}`)

// }
// else
// {

//      console.log(`The greater number is ${number3}`)
// }



/**************************************3.Write a ts program to check whether a number is negative, positive or zero.******************************** */


// var input1:any=prompt("Enter the Number")
// var number:number=parseInt(input1)
// if(number>0)
// {
//     console.log(`The number ${number} is positive`)

// }
// else if(number<0)
// {
//     console.log(`The number ${number} is negative`)

// }
// else
// {
//     console.log(`The number ${number} is zero`)

// }




/************************************** 4.Write a ts program to check whether a number is divisible by 5 and 11 or not.******************************** */

// var input1:any=prompt("Enter the Number")
//  var number:number=parseInt(input1)

//  if(number%5==0 && number%11==0)
//  {
//     console.log(`The number ${number} is divisible by 5 and 11`);
//  }
//  else
//  {
//     console.log(`The number ${number} is not divisible by 5 and 11`);

//  }



/**************************************5. Write a ts program to check whether a number is even or odd.******************************** */


// var input1: any = prompt("Enter the Number")
// var number: number = parseInt(input1)
// if (number % 2 == 0) {
//     console.log(`The number ${number} is even`);
// }
// else {
//     console.log(`The number ${number} is odd`);

// }


/**************************************6. Write a ts program to check whether a year is leap year or not..******************************** */

// var input1: any = prompt("Enter the Number")
// var year: number = parseInt(input1)
// if (year % 4 == 0) {
//     console.log(`${year} is a leap year`);
// }
// else {
//     console.log(`${year} is not a leap year`);

// }



/**************************************7. Write a ts program to check whether a character is alphabet or not.******************************** */


// var character: any = prompt("Enter any character")

// if ((character >= 'A' && character <= "Z") || (character >= 'a' && character <= "z")) {
//     console.log(`${character} is alphabet`);
// }
// else {
//     console.log(`${character} is not an alphabet`);

// }



/**************************************8. Write a ts program to input any alphabet and check whether it is vowel or consonant.******************************** */

// var character: any = prompt("Enter alphabet to find it is vowel or consonant")

// if ((character >= 'A' && character <= "Z") || (character >= 'a' && character <= "z")) {

//     if (character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U' || character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
//         console.log(`${character} is vowel`);
//     }
//     else {
//         console.log(`${character} is consonant`);

//     }
// }
// else {
//     console.log(`${character} is not an alphabet`);

// }



/**************************************9. Write a ts program to input any character and check whether it is alphabet, digit or special character.******************************** */

// var character: any = prompt("Enter any character")

// if ((character >= 'A' && character <= "Z") || (character >= 'a' && character <= "z")) {
//     console.log(`${character} is alphabet`);
// }
// else if(character>=0 || character<0) {
//     console.log(`${character} is a digit`);

// }
// else
// {
//     console.log(`${character} is a special character`);

// }



/**************************************10. Write a ts program to check whether a character is uppercase or lowercase alphabet.******************************** */


// var character: any = prompt("Enter any character")

// if (character >= 'A' && character <= "Z") {
//     console.log(`${character} is upppercase alphabet`);
// }
// else  if(character >= 'a' && character <= "z")
// {
//     console.log(`${character} is lowercase alphabet`);

// }
// else
// {
//     console.log("please enter alphabet");
// }


/**************************************11. Write a ts program to input week number and print week day.******************************** */

// var number: any = prompt("Enter week number")
// var week: number = parseInt(number)
// switch (week) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thrusday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log(" please enter the number");
// }



/**************************************12. Write a ts program to input month number and print number of days in that month.******************************** */
// var number: any = prompt("Enter month number")
// var month: number = parseInt(number)
// switch (month) {
//     case 1:
//         console.log("31 Days")
//         break
//     case 2:
//         console.log("28 or 29 Days")
//         break
//     case 3:
//         console.log("31 Days")
//         break
//     case 4:
//         console.log("30 Days")
//         break
//     case 5:
//         console.log("31 Days")
//         break
//     case 6:
//         console.log("30 Days")
//         break
//     case 7:
//         console.log("31 Days")
//         break
//     case 8:
//         console.log("31 Days")
//         break
//     case 9:
//         console.log("30 Days")
//         break
//     case 10:
//         console.log("31 Days")
//         break
//     case 11:
//         console.log("30 Days")
//         break
//     case 12:
//         console.log("31 Days")
//         break
//     default:
//         console.log(" please enter the number");
// }


/**************************************14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.******************************** */

// var input1: any = prompt("Enter first angle number")
// var input2: any = prompt("Enter second angle number")
// var input3: any = prompt("Enter third angle number")

// var angle1 = parseInt(input1)
// var angle2 = parseInt(input2)

// var angle3 = parseInt(input3)

// var sum: number = angle1 + angle2 + angle3
// if (sum == 180 && (angle1 != 0 && angle2 != 0 && angle3 != 0)) {
//     console.log("this is valid triangle");
// }
// else {
//     console.log("This is unvalid triangle");

// }



/**************************************15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not..******************************** */

// var input1: any = prompt("Enter first side number")
// var input2: any = prompt("Enter second side number")
// var input3: any = prompt("Enter third side number")

// var side1 = parseInt(input1)
// var side2 = parseInt(input2)

// var side3 = parseInt(input3)


// if (side1+side2>side3 || side1+side3>side2 || side2+side3>side1 ) {
//     console.log("this is valid triangle");
// }
// else {
//     console.log("This is unvalid triangle");

// }

/**************************************16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.******************************** */


// var input1: any = prompt("Enter the first side")
// var input2: any = prompt("Enter the first side")

// var input3: any = prompt("Enter the first side")
// var side1: number = parseInt(input1)
// var side2: number = parseInt(input2)

// var side3: number = parseInt(input3)

// if (side1 == side2 && side2 == side3)

//     console.log("The Given Triangle is equilateral");
// else if (side1 == side2 || side2 == side3 || side3 == side1)

//     console.log("The given Triangle is isosceles");
// else

//     console.log("The given Triangle is scalene");


/**************************************17. Write a ts program to find all roots of a quadratic equation.******************************** */




/**************************************18. Write a ts program to calculate profit or loss******************************** */

// var input1: any = prompt("Enter your amount");
// var input2: any = prompt("Enter your expenses");

// var price: number = parseInt(input1)
// var sellingPrice: number = parseInt(input2)

// if (sellingPrice > price) {
//     var amount: number = sellingPrice - price
//     console.log(`your profit is ${amount}`);
// }
// else if (sellingPrice < price) {
//     var amount: number =  price-sellingPrice
//     console.log(`your loss is  is ${amount}`);
// }
// else
// {
//     console.log("no profit no loss");
// }



/**************************************19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
 * ******************************** */


// var sub1:any=prompt("Enter marks Physics");
// var result1:any=prompt("Enter Total Marks of Physics")
// var sub2:any=prompt("Enter marks Chemistry");
// var result2:any=prompt("Enter Total Marks of Chemistry")
// var sub3:any=prompt("Enter marks Biology");
// var result3:any=prompt("Enter Total Marks of Biology")
// var sub4:any=prompt("Enter marks Math");
// var result4:any=prompt("Enter Total Marks of Math")
// var sub5:any=prompt("Enter marks Computer");
// var result5:any=prompt("Enter Total Marks of Computer")


// var obtMarks:number=parseInt(sub1+sub2+sub3+sub4+sub5)
// var totalMarks:number=parseInt(result1+result2+result3+result4+result5)
// var percentage:number=(obtMarks/totalMarks)*100
// console.log(`Obtained Marks: ${obtMarks}\n Total Marks: ${totalMarks} \n Percentage: ${percentage}`);
// if(percentage>=90)
// {
//     console.log("Grade A");
// }
// else if(percentage>=80)
// {
//     console.log("Grade B");
// }
// else if(percentage>=70)
// {
//     console.log("Grade C");
// }
// else if(percentage>=60)
// {
//     console.log("Grade D");
// }
// else if(percentage>=40)
// {
//     console.log("Grade E");
// }
// else
// {
//     console.log("Grade F");
// }



/**************************************
 * 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
******************************* */


// var input1:any=prompt("Enter Basic Salary");

// var basicSalary:number=parseInt(input1)
// var HRA:number,DA:number,grossSalary:number
//  if(basicSalary<10000)
// {
//  HRA=(20*basicSalary)/100   
//  DA=(80*basicSalary)/100   
 
//  grossSalary=basicSalary+HRA+DA
//  console.log(`Basic Salary: ${basicSalary} \n HRA:${HRA} \n DA ${DA} \n Gross Salary:${grossSalary}`);

// }
// else if(basicSalary<=20000)
// {
//  HRA=(25*basicSalary)/100   
//  DA=(90*basicSalary)/100   
 
//  grossSalary=basicSalary+HRA+DA
//  console.log(`Basic Salary: ${basicSalary} \n HRA:${HRA} \n DA ${DA} \n Gross Salary:${grossSalary}`);

// }
// else if(basicSalary>20000)
// {
//  HRA=(30*basicSalary)/100   
//  DA=(95*basicSalary)/100   
 
//  grossSalary=basicSalary+HRA+DA
//  console.log(`Basic Salary: ${basicSalary} \n HRA:${HRA} \n DA ${DA} \n Gross Salary:${grossSalary}`);

// }
// else
// {
//     console.log("invalid");
// }



