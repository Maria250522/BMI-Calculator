'use strict';

const button = document.getElementById('Result');


button.addEventListener('click', () => {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  height = height/100
  let bmi = (weight / (height*height));

  if(height == '' || weight == ''){
  alert('Please fill in all fields!');
  }

  document.querySelector('#Result').insertAdjacentElement = bmi;

  document.getElementById('heading').innerHTML = 'Your BMI is';
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

  if (bmi < 18.5){
    document.getElementById('message').innerHTML = 'You are underweight';
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('message').innerHTML = 'Your weight is normal';
  } else if (bmi > 25 && bmi <= 30) {
    document.getElementById('message').innerHTML = 'You are overweight';
  } else if (bmi > 30) {
    document.getElementById('message').innerHTML = 'You have obesity';
  }

});






// bmi = weight / (height * height)
// final_bmi = round(bmi)

// if final_bmi < 18.5:
//   print(f"Your BMI is {final_bmi}, you are underweight.")
// elif final_bmi > 18.5 and final_bmi < 25:
//   print(f"Your BMI is {final_bmi}, you have a normal weight.")
// elif final_bmi > 25 and final_bmi < 30:
//   print(f"Your BMI is {final_bmi}, you are slightly overweight.")
// elif final_bmi > 30 and final_bmi < 35:
//   print("Your BMI is {final_bmi}, you are obese.")
// else:
//   print("Your BMI is {final_bmi}, you are clinically obese.")