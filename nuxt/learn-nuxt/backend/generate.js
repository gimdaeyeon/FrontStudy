module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    products: _.times(30, function (n) {
      return {
        id: n,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        imageUrl: `https://picsum.photos/id/${n}/640/480`,
        // imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 30)}/640/480`,
      }
    }),
  }
}
