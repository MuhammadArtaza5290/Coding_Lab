// 1. Write a program that takes a person's age as input and categorizes them into one of the following age groups:

// Child (0-12 years)
// Teenager (13-19 years)
// Adult (20-59 years)
// Senior (60+ years)

let agee = prompt("Enter your age:")

if (agee >=0 && agee < 12) {
    console.log("You are child");
    document.write("You are Child");
} else if(agee > 13 && agee< 19) {
    console.log("You are Teenager");
    document.write("You are Teenager");
}else if (agee > 20 && agee < 59) {
    console.log("You are Adult");
    document.write("You are Adult");
}else if (agee >= 59) {
    console.log("You are Senior");
    document.write("You are Senior");
}else {
   console.log("You enter wrong input");
   document.write("You enter wrong input");
   
}

// 2. An insurance company calculates premiums based on several factors:

// Age:
// Below 25: High-risk, base premium is $1000.
// Between 25 and 40: Medium-risk, base premium is $700.
// Above 40: Low-risk, base premium is $500.
// Gender:
// Male: Add 10% to the base premium.
// Female: No additional charge.
// Smoking Status:
// Smoker: Add 20% to the premium.
// Non-smoker: No additional charge.
// Health Conditions:
// If the person has any pre-existing health conditions, add 30% to the premium.
// Write a program that takes the person's age, gender, smoking status, and whether they have any pre-existing health conditions, and then calculates the final insurance premium they have to pay.

let age = prompt("Enter your age:");
let smokeStatus = prompt("You are smoker");
let gender = prompt("Enter your gender")
let health = prompt("Enter your Pre-existing health condition:")
if (age < 25) {
    let amount = 1000;
    if (gender == 'male' || gender == 'Male') {
       amount = 1000 + 100;
    } else {
        amount = 1000;
    }
    if (smokeStatus == 'yes' || smokeStatus == 'Yes') {
        amount = amount + 200;
    } else {
        amount = amount
    }
    if (health == 'Yes' || health == 'yes') {
        amount = amount+300;
        console.log(`Your total amount is ${amount}`);
        
    } else if (health == 'No' || health == 'no') {
        amount=amount;
        console.log(`Your total amount is ${amount}`);
    } else {
        console.log("Enter only True or False");
    }
}else if (age >= 25 && age <= 40) {
    amount = 700
    if (gender == 'Male' || gender == 'male') {
        amount = amount + 70;
    } else {
        amount = amount;
    }
    if (smokeStatus == 'yes' || smokeStatus == 'Yes') {
        amount = amount + 140;
    } else {
        amount = amount
    }
    if (health == 'Yes' || health == 'yes') {
        amount = amount + 210;
        console.log(`Your total amount is ${amount}`);
        
    } else if (health == 'No' || health == 'no') {
        amount=amount;
        console.log(`Your total amount is ${amount}`);
    } else {
        console.log("Enter only True or False");
    }
    
} else {
    amount = 500
    if (gender == 'Male' || gender == 'male') {
        amount = amount + 50;
    } else {
        amount = amount;
    }
    if (smokeStatus == 'yes' || smokeStatus == 'Yes') {
        amount = amount + 100;
    } else {
        amount = amount
    }
    if (health == 'Yes' || health == 'yes') {
        amount = amount + 150;
        console.log(`Your total amount is ${amount}`);
        
    } else if (health == 'No' || health == 'no') {
        amount=amount;
        console.log(`Your total amount is ${amount}`);
        
    } else {
        console.log("Enter only True or False");
    }
}