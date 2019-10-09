const el = document.getElementsByTagName("input") 
//select inputs
el[1].addEventListener("click", function(){ //select element 0
    alert("Thank you for subscribing!")
})
console.log(el) //displays buttons in console

const name= "bob"
const city= "toronto"
const description1= name + " lives in " + city //cocantenation
const description2= `${name} lives in ${city}` //interpolation
console.log(description1)
console.log(description2)

const num1=5 //sets constant of 5 to num1
const num2=2 //sets constant of 2 to num2
// if (num1 < num2) { //if statement
//     console.log(`${num1} is less than ${num2}`) //interpolation
// }else{
//     console.group(`${num1} is greater than ${num2}`) //interpolation
// }

num1<num2 ? console.log(`${num1} is less than ${num2}`) : console.group(`${num1} is greater than ${num2}`)
