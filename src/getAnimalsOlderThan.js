const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((specie) => specie.name === animal);
  const result = especie.residents.every((resident) => resident.age > age);
  return result;
}
module.exports = getAnimalsOlderThan;
