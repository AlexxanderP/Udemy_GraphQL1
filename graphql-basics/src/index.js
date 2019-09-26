import { GraphQLServer } from "graphql-yoga";

//GraphQL Creating Custom Types //

//Type Definitions -- Application Schema -- Defines all operations that can be performed and what custom data types look like -- What our data looks like

const typeDefs = `
    type Query {
    me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`;

//Resolvers -- Set of Functions (Define functions that run for each of the operations that can be performed on API)

const resolvers = {
  Query: {
    me() {
      return {
        id: "222226",
        name: "Sarrah",
        email: "Sarrah@awesomemail.com",
        age: 21
      };
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
