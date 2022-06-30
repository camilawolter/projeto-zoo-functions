const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const encontarEmployee = data.employees.find((employee) => employee.id === id);

  const especieId = encontarEmployee.responsibleFor[0];

  const encontrarEspecie = data.species.find((specie) => specie.id === especieId);

  const animalMaisVelho = encontrarEspecie.residents.reduce((velho, residente) => {
    if (velho.age > residente.age) {
      return velho;
    } return residente;
  });

  return Object.values(animalMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
