const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const pegandoEspecies = species.filter((specie) => ids.find((id) => id === specie.id));
  return pegandoEspecies;
}

module.exports = getSpeciesByIds;
