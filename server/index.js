const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { GraphQLError } = require("graphql");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Note = require("./models/note");

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
  
  type Query {
    allNotes: [Note!]!
  }

  type Mutation {
    addNote(
      title: String!
      content: String!
    ): Note
  }
`;

const resolvers = {
  Query: {
    allNotes: async (root, args) => {
      return Note.find({});
    },
  },
  Mutation: {
    addNote: async (root, args) => {
      const note = new Note({ ...args });
      return note.save();
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
