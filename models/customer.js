const Product = require("./product");
class Customer {

    constructor() {
  /**@type {String} */  this.firstname;
  /**@type {String} */  this.lastname;
  /**@type {String} */  this.email;
  /**@type {String} */  this.phone;
  /**@type {[Product]} */ this.products;
    }

}

module.exports = Customer;