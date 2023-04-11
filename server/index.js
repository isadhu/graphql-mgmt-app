const express = require('express');
const colors = require('colors');

const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const connectDB = require('./config/db');

require('dotenv').config();

// connect to database
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development', 
}))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})