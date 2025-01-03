//reverse arr using two pinter technique

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] =arr[j]
    arr[j] = temp
}


const reverseArr = (arr) => {
    let n = arr.length
    console.log(n)
    let i =0, j=n-1
    while (i < j) {
        swap(arr, i, j)
        i++
        j--
    }
    return arr
}

let arr = [3,5,6,2,1,8]

console.log(reverseArr(arr))