const Usuario = require ('../models/Usuario');
const Sucursal= require('../models/Sucursal');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require ('dotenv').config ({path: 'variables.env'})

/*
const crearToken = (usuario, secreta, expiresIn) => {
    console.log (usuario);
    const {id,email_user,first_name, last_name}=usuario;
    return jwt.sign({id}, secreta, {expiresIn})

}*/


//Resolvers

const resolvers ={
 Query : {
        obtenerCurso : () =>"AppInventario"

        },

      Mutation: {
        nuevoUsuario: async (_, { input } ) => {
        const {email_user, password_user} =input;
        
        
        //Validaciones
            const existUser = await Usuario.findOne ({email_user});
            console.log(existUser);
            if (existUser){
                throw new Error ('El usuario ya existe');
            }

           //Hash Passwd
           const salt =await bcryptjs.genSaltSync(10);
           input.password_user= await bcryptjs.hashSync(password_user,salt)

           //Save to BD
           try {
               const user = new Usuario (input);
               user.save();
               return user;
           } catch (error) {
               console.log(error);
               
           }
       },
       nuevaSucursal: async (_, { input } ) => {
        const {name_sucursal} =input;
        
           //Save to BD
           try {
               const sucursal = new Sucursal (input);
               sucursal.save();
               return sucursal;
           } catch (error) {
               console.log(error);
               
           }
       }
       
       
              /*,
       autentiUsuario : async (_,{input}) => {
           //Existencia del usuario
           const {email_user,password_user}= input;
           const existUser =await Usuario.findOne({email_user});
           if(!existUser){
               throw new Error ('El usuario no está registrado');
           }
           //Revisar credenciales
           const passwordCorrecto = await bcryptjs.compare(password_user,existUser.password_user);
           if(!passwordCorrecto){
               throw new Error ('Contraseña incorrecta');

           }
           //Generar el token
           return {
               token: crearToken(existUser,process.env.SECRETA,'12h')
           }




       }*/
        
    }
}

module.exports = resolvers;
