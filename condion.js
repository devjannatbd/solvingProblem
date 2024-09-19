// ***01-Free Drinks***

var Burger = 300;

if( Burger>500) {
  console.log("Free Coke");
}
else {
  console.log("Coke: 30tk");
}

// ***02-BMI Calculator and Health Category***

var height = 9;
var weight = 280;
var bmi = weight / (height) ^ 2;

if (bmi < 18.5) {
  console.log("you are underweight...");
} else {

  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal.");
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      console.log("you are overweight..");
    } else {
      console.log("Otherwise, you are obese...");
    }

  }

}

// ***03-rade Calculator***

var GradeMark = 76;

if (GradeMark <= 100 && GradeMark >= 90) {
  console.log("Grade A");
} else if (GradeMark < 90 && GradeMark >= 80) {
  console.log("Grade B");
} else if (GradeMark < 80 && GradeMark >= 70) {
  console.log("Grade C");
} else if (GradeMark < 70 && GradeMark >= 60) {
  console.log("Grade D");
} else if (GradeMark < 60 && GradeMark >=0) {
  console.log("Grade F");
}
else {
  console.log(" Greate Student");
}

// ***04-friend score***

var mark = 26;
var fMark = 36;

if (mark > 80) {
  console.log("My friend score...");
} else {
  console.log("go to home and sleep and act sad....");
}
if (fMark > 80) {
  console.log("Go for a lunch...");
} else {
  if (fMark < 80 && fMark >= 60) {
    console.log("good luck next time...");
  } else {
    if (fMark < 60 && fMark >= 40) {
      console.log(" keep your friend's message unseen...");
    } else {
      if (fMark < 40) {
        console.log(" block your friend...");
      } else {}
    }
  }
}

// ***05-two numbers***

var num1 =680;
var num2 =35;

if(num1>num2) {
  var result = num1*2;
  console.log (result);
}
else {
  var sum = num1+num2;
  console.log ("sum = "+ sum);
}

// ***06-Ticket fare Calculator***

var price = 800;
var age = 65;
var student = true ;
if(age < 10) {
console.log("free");
}
else if(student === false){
var discount = price*50/100;
var discountAfter = price-discount;
console.log(discountAfter);
}
else if(age >= 60) {
  var discount = price*15/100;
  var discountAfter = price-discount;
  console.log(discountAfter);
}
else {
  console.log(price);
}