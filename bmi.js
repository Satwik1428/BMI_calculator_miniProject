const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    //used to stop the form from submitting
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const bmi = (weight / ((height/100) * (height/100))).toFixed(2);
    const result = document.querySelector('#result');
    if(bmi < 18.5){
        result.textContent = `Your BMI is ${bmi} (Underweight)`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        result.textContent = `Your BMI is ${bmi} (Normal weight)`;
    }
    else if(bmi >= 25 && bmi <= 29.9){
        result.textContent = `Your BMI is ${bmi} (Overweight)`;
    }
})