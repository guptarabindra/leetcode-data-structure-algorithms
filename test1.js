console.log("A")
setTimeout(() => {
    console.log("A")
}, 0);
console.log("C")
setTimeout( () => {
    console.log("D")
})

Promise.resolve().then( console.log("E"))

async function funcA() {
    console.log("G")
}

funcA()
let p1 = new Promise( (resolve, reject) => {
    resolve("It's resolved")
})
let p2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("resolved2")
    }, 2*1000)
})
const p3 = 50 
const p4 = Promise.reject(7)

Promise.all([p1,p2,p3]).then( (p) => {
    console.log(p)
})

Promise.allSettled([p4,p2]).then((value) => {
    console.log(value)
})
Promise.any([p4,p1]).then( (value) =>{
    console.log(value)
})