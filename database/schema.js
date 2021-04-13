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
        idsucursal_user: String
    }

    type Sucursal {
        id: ID
        name_sucursal : String
        loc_sucursal : String
        img_sucursal: String
    }

    type TipoUsuarios{
        id:ID
        name_tipo: String
    }

    type Token{
        token: String
    }

    input UsuarioInput {
        first_name : String
        last_name : String
        email_user: String
        password_user: String
        type_user: String
        status_user: String
        idsucursal_user: String
    }

    input SucursalInput {
        name_sucursal : String
        loc_sucursal : String
        img_sucursal: String
    }

    input TipoInput{
        name_tipo: String
    }
 

    input AutenticarInput{
        email_user: String
        password_user: String
    }

    type Query {
        obtenerCurso: String

    }

    type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario
        nuevaSucursal(input: SucursalInput): Sucursal        
        nuevoTipo(input: TipoInput): TipoUsuarios      
               
        autentUsuario(input: AutenticarInput): Token

    }

`;

module.exports = typeDefs;