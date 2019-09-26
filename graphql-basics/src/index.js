import { GraphQLServer } from "graphql-yoga";

//GraphQL Operation Arguments Challenge //

//Type Definitions -- Application Schema -- Defines all operations that can be performed and what custom data types look like -- What our data looks like

const typeDefs = `
    type Query {
        add(a: Float!, b: Float!): Float!
        greeting(name: String, position: String): String!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }


    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`;

//Resolvers -- Set of Functions (Define functions that run for each of the operations that can be performed on API)

const resolvers = {
  Query: {
    add(args) {
      return args.a + args.b;
    },

    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my favorite ${args.position}`;
      } else {
        return "Hello!";
      }
      console.log(args);
      return "hello!";
    },
    me() {
      return {
        id: "222226",
        name: "Sarrah",
        email: "Sarrah@awesomemail.com",
        age: 21
      };
    },
    post() {
      return {
        id: "123456",
        title: "How to Meal Plan",
        body:
          "Meal Prepping is a great opportunity to get healthy and loose weight!",
        published: false
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
