const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const verifyManager = employees.some((employee) => employee.managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managed = [];
    employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        managed.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return managed;
  }
}

module.exports = { isManager, getRelatedEmployees };
