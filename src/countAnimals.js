const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function allAnimals() {
  const animals = {};
  species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  return animals;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }

  const { specie, sex: gender = undefined } = animal;

  if (gender === undefined) {
    const animalName = species.find(({ name }) => name === specie).residents.length;
    return animalName;
  }

  const animalGender = species.find(({ name }) => name === specie)
    .residents.filter(({ sex }) => sex === gender).length;
  return animalGender;
}

module.exports = countAnimals;
