const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((info) => info.managers.some((check) => check === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const filtroManager = data.employees
      .filter((elemento) => elemento.managers
        .some((id) => id === managerId));

    const listaManager = filtroManager
      .map((employee) => `${employee.firstName} ${employee.lastName}`);

    return listaManager;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
