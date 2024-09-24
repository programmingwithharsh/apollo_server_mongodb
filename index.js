const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require('mongoose');
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");

const MONGO_URI = "mongodb://0.0.0.0/dashboard";
// const MONGO_URI = "mongodb://username:password@0.0.0.0:27017/dashboard";

mongoose.connect(MONGO_URI)
    .then(() => console.log('Mongodb Database Connected!'))
    .catch(err => {
        console.log(err)
    })

const server = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(server, {
    listen: {
        port: 5000
    }
}).then(({ url }) => {
    console.log(`server ready at ${url}`)
})
