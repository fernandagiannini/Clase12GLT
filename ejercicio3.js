const arrayNumbers1 = [1, 2, 3, 4, 5]
const arrayNumbers2 = [10, 20, 30, 400, 52, 15, 64]   //para probar

const arrayNumbersPlusNumber = (array, num) => {
    const newArray = array.map(element => element + num)   
    return newArray
}

const number = 10
const newNumbers = arrayNumbersPlusNumber(arrayNumbers1, number)

console.log(arrayNumbers1)
console.log(newNumbers)