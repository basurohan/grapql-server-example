const axios = require('axios');
const BookDetails = require('../schema/book_schema');

let data = [BookDetails];

module.exports.getData = async function() {
    data = await axios.get('http://localhost:3000/books');
}

module.exports.getAllBooks = async function() {
    return await data.data;
}


