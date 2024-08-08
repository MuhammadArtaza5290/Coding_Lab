// 1. Problem: Write a Python program to calculate the final price of an item after applying a discount. The discount is based on the following conditions:

// If the price is greater than $500, apply a 20% discount.
// If the price is between $300 and $500, apply a 15% discount.
// If the price is between $100 and $300, apply a 10% discount.
// If the price is less than $100, no discount is applied.
// If the customer is a member, an additional 5% discount is applied after the initial discount.


  let price = prompt("Enter a price:");
  let member = prompt("You are our member?");
  if (price > 5000) {
    percentage = 20/100 *price;
    price = price - percentage;
    console.log(`Your total price is ${price}.`);
    if (member == 'yes') {
        percentage1 = 5/100*price;
        price = price - percentage1;
        console.log(`You are our member, so your total price is ${price}`); 
    }else {
        console.log(`Your total price is ${price}.`);
    }
    
  } else if (price <= 5000 && price > 3000){
    percentage = 15/100 *price;
    price = price - percentage;
    console.log(`Your total price is ${price}.`);
    if (member == 'yes') {
        percentage1 = 5/100*price;
        price = price - percentage1;
        console.log(`You are our member, so your total price is ${price}`); 
    }else {
        console.log(`Your total price is ${price}.`);
    }
  }else if (price <= 3000 && price > 1000){
    percentage = 10/100 *price;
    price = price - percentage;
    console.log(`Your total price is ${price}.`);
    if (member == 'yes') {
        percentage1 = 5/100*price;
        price = price - percentage1;
        console.log(`You are our member, so your total price is ${price}`); 
    }else {
        console.log(`Your total price is ${price}.`);
    }
  }else{
    console.log(`Your total price is ${price}.`);
    if (member == 'yes') {
        percentage1 = 5/100*price;
        price = price - percentage1;
        console.log(`You are our member, so your total price is ${price}`); 
    }else {
        console.log(`Your total price is ${price}.`);
    }
  }




//  2. Write a program that determines whether a given year is a leap year or not. A leap year:

// Is divisible by 4.
// But if it is divisible by 100, it must also be divisible by 400 to be a leap year.


let year = prompt("Enter a Year:");


if (year % 4 == 0) {
    if (year % 100== 0) {
        if (year % 400 == 0) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    }else {
        console.log(`${year} is a leap year`);
    }
} else {
    console.log(`${year} is not a leap year`);
}