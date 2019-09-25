import { GraphQLServer } from "graphql-yoga";
import { Server } from "https";

//Type Definitions -- Application Schema -- Defines all operations that can be performed and what custom data types look like -- What our data looks like

const typeDefs = `
    type Query {
        hello: String!
    }
`;

//Resolvers -- Set of Functions (Define functions that run for each of the operations that can be performed on API)

const resolvers = {
  Query: {
    hello() {
      return "This is my first Query!";
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("the server is up!!");
});
