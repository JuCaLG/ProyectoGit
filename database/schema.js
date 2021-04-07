const {gql}= require ('apollo-server');

// Schema

const typeDefs = gql`    

    type Usuario {
        id: ID
        first_name : String
        last_name : String
        email_user: String
        type_user: String
        start_date: String
        status_user: String
    }

    input UsuarioInput {
        first_name : String!
        last_name : String!
        email_user: String!
        type_user: String!
        status_user: String!
    }

    type Query {
        obtenerCurso: String

    }

    type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario

    }

`;

module.exports = typeDefs;