const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = {};
  if (!employeeName) {
    return result;
  }
  const searchName = employees.find((employee) => employee.firstName === employeeName);
  const searchLastName = employees.find((employee) => employee.lastName === employeeName);
  result = (searchName === undefined) ? result = searchLastName : result = searchName;
  return result;
}

module.exports = getEmployeeByName;
