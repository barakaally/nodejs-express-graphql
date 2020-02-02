const db = require("../database/db");


class CustomerController {

    static async getCustomers() {
        return (await db.con()).collection("customers").find().toArray();
    }

}

module.exports = CustomerController;