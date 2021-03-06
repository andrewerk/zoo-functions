const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const areas = ['NE', 'NW', 'SE', 'SW'];

function noParametersGiven() {
  const completeMap = {};
  areas.forEach((area) => {
    const animals = [];
    species.forEach((specie) => {
      if (specie.location === area) {
        animals.push(specie.name);
      }
      Object.assign(completeMap, { [area]: animals,
      });
    });
  });
  return completeMap;
}

function includeNamesOnly() {
  const completeMap = {};
  areas.forEach((area) => {
    const animals = [];
    species.forEach((specie) => {
      if (specie.location === area) {
        const group = { [specie.name]: specie.residents.map((resident) => resident.name) };
        animals.push(group);
      }
    });
    Object.assign(completeMap, { [area]: animals,
    });
  });
  return completeMap;
}

function includeNamesSorted() {
  const completeMap = {};
  areas.forEach((area) => {
    const animals = [];
    species.forEach((specie) => {
      if (specie.location === area) {
        const group = { [specie.name]: specie.residents.map((resident) => resident.name).sort() };
        animals.push(group);
      }
    });
    Object.assign(completeMap, { [area]: animals,
    });
  });
  return completeMap;
}

function includeSex(nameOption) {
  const completeMap = {};
  areas.forEach((area) => {
    const animals = [];
    species.forEach((specie) => {
      if (specie.location === area) {
        const names = specie.residents.filter((res) => res.sex === nameOption.sex);
        const names2 = names.map((nome) => nome.name);
        if (nameOption.sorted) { names2.sort(); }
        const group = { [specie.name]: names2,
        };
        animals.push(group);
      }
    });
    Object.assign(completeMap, { [area]: animals,
    });
  });
  return completeMap;
}

function includeNames(nameOption) {
  if (Object.keys(nameOption).length === 1) {
    return includeNamesOnly();
  }
  if (nameOption.sex) {
    return includeSex(nameOption);
  }
  if (nameOption.sorted) {
    return includeNamesSorted();
  }
}

function getAnimalMap(options) {
  if (!options) {
    return noParametersGiven();
  }
  if (options.includeNames) {
    return includeNames(options);
  }
  return noParametersGiven();
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
