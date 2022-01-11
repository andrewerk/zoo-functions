const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const list = ids.map((id) => {
    const filtered = species.find((specie) => specie.id === id);
    return filtered;
  });
  const responsableFor = list.map((item) => item.name);
  const locals = list.map((item) => item.location);
  const obj = { species: responsableFor, locations: locals };
  return obj;
}

function getEmployees(param) {
  const employeeName = employees.find((employee) => employee.firstName === param);
  const employeeLastName = employees.find((employee) => employee.lastName === param);
  const employeeId = employees.find((employee) => employee.id === param);
  let employee = '';
  if (employeeName) { employee = employeeName; }
  if (employeeLastName) { employee = employeeLastName; }
  if (employeeId) { employee = employeeId; }
  if (employee === '') { throw new Error('Informações inválidas'); }
  const result = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
  };
  const lastLines = getSpeciesByIds(employee.responsibleFor);
  Object.assign(result, lastLines);
  return result;
}

function getEmployeesCoverage(param) {
  if (!param) {
    const result = [];
    employees.forEach((employee) => {
      const funcionario = getEmployees(employee.id);
      result.push(funcionario);
    });
    return result;
  }
  return getEmployees(Object.values(param)[0]);
}

module.exports = getEmployeesCoverage;
