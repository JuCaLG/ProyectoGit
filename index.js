/**
 * @format
 
**/
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/*
const {ApolloServer} = require('apollo-server');

const typeDefs = require ('./database/schema');
const resolvers= require('./database/resolvers');
//const { connect } = require('mongoose');
const connectDB =conectarDB= require('./config/db');

connectDB();

//servidor

const server =new ApolloServer({
    typeDefs,
    resolvers
});


//arrancar el servidor
server.listen().then ( ( {url}  )=>{
    console.log ('Servidor listo en la URL'),
    console.log ({url})
})

*/