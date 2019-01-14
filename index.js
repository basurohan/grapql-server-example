const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const axios = require('axios');
const { getData } = require('./repository/book_repository');

const schema = require('./schema/schema');

const app = express();

app.locals.bookData = "";

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql',
    bodyParser.json(),
    graphqlExpress({ schema })
);

app.listen(4000, () => {
    setInterval(getData, 3000);
    console.log('Go to http://localhost:4000/graphiql to run queries!');
});
