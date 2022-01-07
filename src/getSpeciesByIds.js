const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Primeira solução desenvolvida:
// function getSpeciesByIds(...ids) {
//   const list = [];
//   ids.forEach((id) => {
//     const filtered = species.filter((specie) => specie.id === id);
//     list.push(filtered);
//   });
//   return list;
// }

// segunda solução desenvolvida, com o apoio do Ronald em Mentoria
function getSpeciesByIds(...ids) {
  const list = ids.map((id) => {
    const filtered = species.find((specie) => specie.id === id);
    return filtered;
  });
  return list;
}

module.exports = getSpeciesByIds;
