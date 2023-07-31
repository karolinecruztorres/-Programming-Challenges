//Encontre o objeto que tem a maior soma de valores em suas propriedades
// Sugestão do Chat GPT
// const highest = arrayMap.reduce((a, b) => Math.max(a, b)); 

const array = [
    {a: 1, b: 2, c: 3}, 
    {a: 4, b: 5, c: 6},
    {a: 7, b: 8, c: 9},
];

const arrayMap = array.map(obj => obj.a + obj.b + obj.c);
let highest = 0;

const highestValue =(parameter)=>{
    for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] > highest) {
            highest = parameter[i];
        }else {
            highest = highest;
        }        
    }
    return highest;
}

console.log(highestValue(arrayMap));
