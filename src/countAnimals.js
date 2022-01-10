const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  let result = 0;
  if (!animal) {
    result = {};
    species.forEach((specie) => {
      Object.assign(result, { [`${specie.name}`]: specie.residents.length });
    });
    return result;
  }
  if (animal.sex === undefined && animal.specie !== undefined) {
    const especie = species.find((specie) => specie.name === animal.specie);
    result = especie.residents.length;
    return result;
  }
  const especie = species.find((specie) => specie.name === animal.specie);
  const especieLength = especie.residents.filter((resident) => resident.sex === `${animal.sex}`);
  return especieLength.length;
}

module.exports = countAnimals;
