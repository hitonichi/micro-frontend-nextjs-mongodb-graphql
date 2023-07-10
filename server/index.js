const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { GraphQLError } = require("graphql");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Note = require("./models/note");
const Animal = require("./models/animal");

require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || 8080;

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB -", MONGODB_URI);
  })
  .catch((err) => {
    console.log("error connecting to MongoDB", err.message);
  });

const typeDefs = `
  type Note {
    title: String!,
    content: String!
  }

  type Animal {
    name: String!,
    legs: Int!,
    color: [String!]
  }
  
  type Query {
    allNotes: [Note!]!,
    allAnimals: [Animal!]!
  }

  type Mutation {
    addNote(
      title: String!
      content: String!
    ): Note,
    addAnimal(
      name: String!
      legs: Int!
      color: [String!]!
    ): Animal
  }
`;

const resolvers = {
  Query: {
    allNotes: async (root, args) => {
      return Note.find({});
    },
    allAnimals: async (root, args) => {
      return Animal.find({});
    },
  },
  Mutation: {
    addNote: async (root, args) => {
      const note = new Note({ ...args });
      return note.save();
    },
    addAnimal: async (root, args) => {
      const animal = new Animal({ ...args });
      return animal.save();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
