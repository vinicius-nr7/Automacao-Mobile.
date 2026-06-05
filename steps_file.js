module.exports = function() {
  const { actor } = require('codeceptjs');
  return actor({
// passos personalizados podem ser definidos aqui, por exemplo:
// login: function() { this.fillField(...); }
  });
};
