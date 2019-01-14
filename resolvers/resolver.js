const getBooks = require('./book_resolver');

const resolvers = {
    Query: {
        getBooks
    }
};

module.exports = resolvers;