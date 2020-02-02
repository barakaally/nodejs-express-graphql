const db = require("../database/db");


class CustomerController {

    static async getCustomers() {
        return (await db.con()).collection("customers").find().toArray();
    }

    static async getCustomerById(id) {
        return (await (await db.con()).collection("customers").find(id).toArray())[0];
    }

    static async registerCustomer(customer) {
        const userId = (await (await db.con()).collection("customers").insert(customer.registerInput)).insertedIds["0"];
        return this.getCustomerById(userId);
    }


}

module.exports = CustomerController;