const animals = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']
const animals2 = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep']
const animals3 = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf']

const warnTheSheep = (animals) => {
    const WOLF_INDEX = animals.indexOf('wolf')
    console.log(`La posicion real del lobo es ${WOLF_INDEX}`)
    const WOLF_INDEX_REVERSE = animals.length - WOLF_INDEX 
    console.log(`La posicion del lobo al reves es ${WOLF_INDEX_REVERSE}`)
    if (animals.length - 1 === WOLF_INDEX){
        console.log ("No sigas comiendo ovejas!")
    }else {        
        console.log (`Hey! oveja ${WOLF_INDEX_REVERSE-1} el lobo está cerca`)
    }
}

warnTheSheep (animals) 

//posicion del lobo = i
// la posicion empezando desde atras (REVERSE) es length del arreglo menos la posicion "real"
//el lobo solo puede comer a la oveja de la posicion REVERSE - 1 (hacia la derecha)