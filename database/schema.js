const {gql}= require ('apollo-server');

// Schema

const typeDefs = gql` 
   

    type Usuario {
        id: ID
        first_name : String
        email_user: String
        type_user: String
        start_date: String
        status_user: String
        idsucursal_user: String
    }

    type Sucursal {
        id: ID
        nombre : String
        rfc: String
        telefono: String     
        direccion: String          
        email: String
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
        email_user: String
        password_user: String
        type_user: String
        status_user: String
        idsucursal_user: String
    }

    input SucursalInput {
        nombre : String
        rfc: String
        telefono: String   
        direccion: String             
        email: String
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
        #Usuarios
        nuevoUsuario(input: UsuarioInput): Usuario

        #Sucursales
        nuevaSucursal(input: SucursalInput): Sucursal

        #TipoUsuarios
        nuevoTipo(input: TipoInput): TipoUsuarios      
        
       
        autentUsuario(input: AutenticarInput): Token

    }

`;

module.exports = typeDefs;