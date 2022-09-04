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