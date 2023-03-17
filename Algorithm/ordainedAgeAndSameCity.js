// retorne um array com as pessoas que morem na mesma cidade, ordenado por idade, do mais novo para o mais velho.
const people = [
  { name: "João", age: 27, city: "São Paulo" },
  { name: "Maria", age: 31, city: "Rio de Janeiro" },
  { name: "Pedro", age: 25, city: "São Paulo" },
  { name: "Ana", age: 23, city: "Belo Horizonte" },
  { name: "Lucas", age: 29, city: "Rio de Janeiro" }
];

const otherPeople = [
  { name: "Felipe", age: 28, city: "São Paulo" },
  { name: "Juliana", age: 24, city: "Rio de Janeiro" },
  { name: "Thiago", age: 33, city: "Curitiba" },
  { name: "Amanda", age: 22, city: "Belo Horizonte" },
  { name: "Luciana", age: 31, city: "Fortaleza" },
  { name: "Ricardo", age: 26, city: "Porto Alegre" },
  { name: "Mariana", age: 29, city: "Recife" },
  { name: "Gustavo", age: 23, city: "Salvador" },
  { name: "Roberta", age: 30, city: "Brasília" },
  { name: "Pedro", age: 27, city: "Campinas" },
  { name: "Márcia", age: 35, city: "São Paulo" },
  { name: "Fernando", age: 21, city: "Porto Alegre" },
  { name: "Ana", age: 32, city: "Belo Horizonte" },
  { name: "Rafael", age: 25, city: "São Paulo" },
  { name: "Carla", age: 26, city: "Recife" },
  { name: "Paulo", age: 28, city: "Rio de Janeiro" },
  { name: "Renata", age: 29, city: "Fortaleza" },
  { name: "Lucas", age: 23, city: "São José dos Campos" },
  { name: "Tatiana", age: 27, city: "Curitiba" },
  { name: "Bruno", age: 31, city: "Salvador" }
];
  
let sameCity = [];

const checkCity =(array, city)=>{
  let map = array.map(obj => obj.city);
    for (let i = 0; i < array.length; i++) {
        if (map[i] === city) {
          sameCity.push(array[i]);
        }
    }
    
    console.log(sameCity);
}

checkCity(otherPeople, 'Curitiba');
