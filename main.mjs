let h = prompt("Enter your Height In (cm)")
let w = prompt("Enter Your Weight In (Kg)")


let bmi = w / (h/100 * h/100  )

console.log("your bmi is ;" , +bmi )

let userInput =  'your BMI is ;' + bmi ;  

 if (bmi <= 18.5){
     console.log( userInput +  'You are under weight')
    alert( userInput +  'You are under weight')
 } else if (bmi <=25){
 alert( userInput +  'You are Normal')
 console.log( userInput +  'You are Normal')
} else if(bmi <=30){
    console.log( userInput +  'You are over weight ')
    alert( userInput +  'You are over weight ')
} else { // >30
    console.log( userInput +  'You are obese')
   alert( userInput +  'You are obese')
}