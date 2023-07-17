const arrayElements1 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
const arrayElements2 = [1 , 2 , 3 , 4]
const arrayElements3 = [10 , 20 , 30 , 40, 50 , 60 , 70, 11, 22, 33]



const verifyLengthArray = (array) => array.length < 5  //funcion para chequear la longitud del arreglo

const deleteLastThreeElements = (array) => {      //funcion para borrar los 3 ultimos elementos del arreglo
    array.pop()
    array.pop()
    array.pop()
    console.log(array)
}

const verifyAndDelete = (array) => {                        //funcion para chequear y borrar combinadas
    //const long = verifyLengthArray(array)
    if (verifyLengthArray(array) == true) {console.log('Error. La longitud del arreglo es menor a 5')}
    else {
       deleteLastThreeElements(array)   
    }
}

verifyAndDelete (arrayElements3)    


