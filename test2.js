const person = { 
    getFullName : function () {
        return `${this.firstName} ${this.lastName}` 
    }
}

const person1 = {
    firstName : "Raj",
    lastName : "Ravi"
}


console.log(person.getFullName.call(person1))

let str = "what is the best time"
.split("")
.map(parseInt)
.filter( a=> a)
.reduce( (a, elem) => a + elem)
.toString()
.split("")
.reverse()
.join("")
  
console.log(str)

let str2 = "reverse the word of sentance"
.split(" ")
.map( elem => elem.split("").reverse().join(""))
.reverse()
.join(" ")
console.log(str2)

let str3 = "Welcome to the world"
.split(' ').join('')
let obj = {}
for (let i of str3) {
    if (obj[i]) {
        obj[i]++
    } else {
        obj[i] =1
    }
}
console.log(obj)

let str5 = "rabindra"
const getUniqueCharWithNum = (str5) => {
    str5 = str5.split('').reduce( (acc, elem) => {
      acc[elem] = (acc[elem] || 0) +1
      return acc
    }, {})

   for ( [key, value ] of Object.entries(str5)) {
     console.log(key, value)
   }
}
getUniqueCharWithNum(str5)
// r 2
// a 2
// b 1
// i 1
// n 1
// d 1
//{ r: 2, a: 2, b: 1, i: 1, n: 1, d: 1 }

//Input - str = 'abcd'
const strr = 'abcd'
const arr = []
for (elem of strr) {
  const length = strr.indexOf(elem)
  arr.push(elem)
  for (let i = 0; i <=length; i++) {
    arr.push(elem.toUpperCase())
  }
}

console.log(arr.join(''))
//Output:
aAbBBcCCCdDDDD

//check odd even number using callback

function oddEven(number, callback) {
    const result = (number%2 == 0) ? "even" : "odd"
    callback(number, result)
  }
  oddEven(12, (number, result) => {
    console.log(number+ ' is ' + result)
  })