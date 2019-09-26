import { GraphQLServer } from "graphql-yoga";
import { Server } from "https";
import { getPackedSettings } from "http2";

//Type Definitions -- Application Schema -- Defines all operations that can be performed and what custom data types look like -- What our data looks like

const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: boolean!
        gpa: Float

    }
`;

//Resolvers -- Set of Functions (Define functions that run for each of the operations that can be performed on API)

const resolvers = {
  Query: {
    id() {
        return 'aaa222'
    },
    name() {
        return 'Alexander'
    },
    age() {
        return 24
    },
    employed() {
        return true
    }
    gpa() {
        return null
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
