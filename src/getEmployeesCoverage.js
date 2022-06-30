const {
  species,
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function nomeELocalizacaoAnimais(idAnimais) {
  return species.reduce((listNomes, animal) => {
    if (idAnimais.includes(animal.id)) {
      listNomes.listAnimals.push(animal.name);
      listNomes.listLocationAnimal.push(animal.location);
    }
    return listNomes;
  }, {
    listAnimals: [],
    listLocationAnimal: [],
  });
}

const employeesDados = () => employees.reduce((listEmployees, employee) => {
  const listAnimals = nomeELocalizacaoAnimais(employee.responsibleFor);
  const funcionario = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: listAnimals.listAnimals,
    locations: listAnimals.listLocationAnimal,
  };
  const lista = [...listEmployees, funcionario];
  return lista;
}, []);

const retornaEmployee = (employeeId) => {
  const funcionarios = employeesDados();
  return funcionarios.find((element) => element.id === employeeId.id
  || element.fullName.includes(employeeId.name));
};

function getEmployeesCoverage(param) {
  const listEmployeesDados = employeesDados();
  if (param === undefined) return listEmployeesDados;

  const listEmployee = retornaEmployee(param);
  if (!listEmployee) throw new Error('Informações inválidas');

  return listEmployee;
}

module.exports = getEmployeesCoverage;
