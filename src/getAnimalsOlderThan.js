const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const encontrarEspecie = species.find((specieAnimal) => specieAnimal.name === animal);
  return encontrarEspecie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
