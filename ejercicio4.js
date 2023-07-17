function createArray(number){
    const array = []
    for (let i = 0; i < number; i++){
        array[i] = i + 1
    }        
    console.log(array)
}

const lengthArray = 5
createArray(lengthArray)