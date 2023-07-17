const numbers = [9, 5, 10, 2, 24, -1]
console.log(numbers)


const adjacentElementsProduct = (numbers) => {
    const arrayProduct = numbers.map ((number, i, array) => number * array[i+1])
    arrayProduct.sort((a,b) => b- a)    
    return arrayProduct[0]
}

maxProduct = adjacentElementsProduct(numbers)
console.log(maxProduct)

