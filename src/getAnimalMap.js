// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// revisar

// const getAnimalsLocation = () => {
//   const animalLocation = {
//     NE : species.filter((specie) => specie.location === 'NE').map((animal) => animal.name),
//     NW:  species.filter((specie) => specie.location === 'NW').map((animal) => animal.name),
//     SE:  species.filter((specie) => specie.location === 'SE').map((animal) => animal.name),
//     SW:  species.filter((specie) => specie.location === 'SW').map((animal) => animal.name),
//   };
//   return animalLocation;
// };

// const namesAnimalsFilter = (sex, animal) => {
//   if (!sex) return animal.residents.map((nomeAnimal) => nomeAnimal.name);
//   return animal.residents.filter((sexAnimal) => sexAnimal.sex === sex).map((nomeAnimal) => nomeAnimal.nome);
// }

// const namesAnimalSorted = (sorted, sex, animal) => {
//   const arrayAnimal = namesAnimalsFilter(sex, animal);
//   if (sorted) return arrayAnimal.sort();
//   return arrayAnimal;
// }

// const namesAnimals = (options) => species.reduce((acc, animal) => {
//   acc[animal.location].push({ [animal.name]: namesAnimalSorted(options.sorted, options.sex, animal) });
//   return acc;
// }, {NE: [], NW: [], SE: [], SW: []});

function getAnimalMap(options) {
  // if (options === undefined || !options.includeNames)  {
  //   return getAnimalsLocation();
  // }
  // return namesAnimals(options);
}

module.exports = getAnimalMap;
