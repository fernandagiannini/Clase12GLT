const intNumbers = [1, 20, 5, 400]
console.log(intNumbers)

const minSum = (array) => {
    array.sort((a,b) => a - b)
    const minimaSuma = array[0] + array[1]
    return minimaSuma
}

console.log(minSum(intNumbers))