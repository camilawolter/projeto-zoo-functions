const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((pessoa) => pessoa.age < 18).length,
    adult: entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length,
    senior: entrants.filter((pessoa) => pessoa.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const pessoa = countEntrants(entrants);
  const childTotal = data.prices.child * pessoa.child;
  const adultTotal = data.prices.adult * pessoa.adult;
  const seniorTotal = data.prices.senior * pessoa.senior;
  return childTotal + adultTotal + seniorTotal;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
