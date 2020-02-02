const cors = require('cors');
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server");
const express = require("express");
const fs = require("fs");
const typeDef = fs.readFileSync("./schema/schema.graphql", { encoding: "utf-8" });
const objectResolvers = require("./resolvers/resolver");
const app = express();

app.use(bodyParser.json(), cors());

const server = new ApolloServer({ typeDefs: typeDef, resolvers: objectResolvers });

server.listen({ port: 9090 }).then((server) => {
    console.log(`server started on port ${server.port}`);
});
