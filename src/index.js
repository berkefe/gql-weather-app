const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  const { url } = await server.listen();

  console.log(`Server started on ${url}`);
})();
