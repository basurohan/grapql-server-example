const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('../resolvers/resolver');
const BookDetails = require('./book_schema');

const rootQuery = `
    type Query {
        getBooks: [BookDetails]
    }
`;

const typeDefs = [rootQuery, ...BookDetails];
const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;
