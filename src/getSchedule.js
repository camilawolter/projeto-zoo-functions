const {
  species,
  hours,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

const calendario = (parm) => species.find((elem) => elem.name === parm).availability;

const horario = (valor) => {
  let result;
  if (valor === 'Monday') {
    result = 'CLOSED';
  } else {
    result = `Open from ${hours[valor].open}am until ${hours[valor].close}pm`;
  }
  return result;
};

const exibicaoAnimal = (valor) => {
  let result;
  if (valor === 'Monday') {
    result = 'The zoo will be closed!';
  } else {
    result = species.filter((animals) =>
      animals.availability.includes(valor)).map((nameAnimals) =>
      nameAnimals.name);
  }
  return result;
};

function agendaZoo() {
  const resultado = Object.keys(hours).reduce((acc, valorAtual) => {
    acc[valorAtual] = {
      officeHour: horario(valorAtual),
      exhibition: exibicaoAnimal(valorAtual),
    };
    return acc;
  }, {});
  return resultado;
}

function getSchedule(scheduleTarget) {
  const dia = Object.keys(hours);
  const animais = species.map((elemento) => elemento.name);
  if (!scheduleTarget || (!dia.includes(scheduleTarget) && !animais.includes(scheduleTarget))) {
    return agendaZoo();
  }
  if (dia.includes(scheduleTarget)) {
    const resposta = {};
    resposta[scheduleTarget] = agendaZoo()[scheduleTarget];
    return resposta;
  }
  return calendario(scheduleTarget);
}

module.exports = getSchedule;
