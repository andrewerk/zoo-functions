const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const firstSpecie = funcionario.responsibleFor[0];
  const animal = species.find((specie) => specie.id === firstSpecie);
  const callBack = (acc, elem) => (elem.age > acc.age ? elem : acc);
  const oldestAnimal = animal.residents.reduce(callBack);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
