const CustomerController = require("../controllers/customerController");
const AuthController = require("../controllers/authController");
const objectResolvers = {

    Query: {
        customers: (root, args, context, info) => CustomerController.getCustomers(),
        login: (root, args, context, info) => AuthController.auth(args)
    }
}

module.exports = objectResolvers;