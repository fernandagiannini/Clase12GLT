const numbers = [12, 1, 1, 1, 1, 1, 1]


findUniq = (array) =>{
    array.sort((a,b) => a-b)
    const minNumber = array[0]
    const lastIndex = array.length - 1
    if (minNumber === array[1]){
        return array[lastIndex]
    }
    return minNumber
}

const uniqNumber = findUniq(numbers)

console.log(numbers)
console.log(uniqNumber)