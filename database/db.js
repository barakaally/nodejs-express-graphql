const MongoClient = require("mongodb").MongoClient;
const keys = require("../keys");
class Db {
    constructor() {

    }

    static async con() {
        return (await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true })).db("eshop");
    }


}

module.exports = Db;