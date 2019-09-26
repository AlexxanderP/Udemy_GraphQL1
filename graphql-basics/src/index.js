import { GraphQLServer } from "graphql-yoga";

//GraphQL Scalar Types //

//Scalar Types -- String!, Boolean, Int, Float, ID

// Live Server for local development:
// "start": "nodemon src/index.js --exec babel-node",
//npm i nodemon@1.17.5 --save-dev

//Type Definitions -- Application Schema -- Defines all operations that can be performed and what custom data types look like -- What our data looks like

const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float



        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean
    }
`;

//Resolvers -- Set of Functions (Define functions that run for each of the operations that can be performed on API)

const resolvers = {
  Query: {
    id() {
      return "aaa222";
    },
    name() {
      return "Alexander";
    },
    age() {
      return 24;
    },
    employed() {
      return true;
    },
    gpa() {
      return null;
    },

    title() {
      return "Desktop Computer";
    },
    price() {
      return 3999.75;
    },
    releaseYear() {
      return 2019;
    },
    rating() {
      return 4.99;
    },
    inStock() {
      return true;
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
