const Customer = require("../models/customer").prototype;

const Db = require("../database/db");
class AuthController {
    /**
     * @typedef  {{loginInput:{email:String,password:String}}} LoginInput
     * @param {LoginInput} userInput
     * @return {Customer} customer
     */
    static async auth(userInput) {
        return (await (await Db.con()).collection("customers").find(userInput.loginInput).toArray())[0];
    };
}

module.exports = AuthController;