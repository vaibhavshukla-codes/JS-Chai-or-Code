const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 123.01
console.log(otherNum.toPrecision(3))
 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math) // Math library k methods 
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(1.2))
console.log(Math.floor(1.6))
console.log(Math.min(8,9,4,5))
console.log(Math.max(1,2,4))

console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1))+min)