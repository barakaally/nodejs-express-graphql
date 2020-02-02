const CustomerController = require("../controllers/customerController");
const AuthController = require("../controllers/authController");
const objectResolvers = {

    Query: {
        customers: (root, args, context, info) => CustomerController.getCustomers(),
        login: (root, args, context, info) => AuthController.auth(args)
    },
    Mutation: {
        registerCustomer: (root, args, context, info) => CustomerController.registerCustomer(args),
    }

}

module.exports = objectResolvers;