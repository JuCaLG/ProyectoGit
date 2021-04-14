const mongoose = require ('mongoose');
require('dotenv').config({path: 'variables.env'});
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex: true

        });
        console.log('Conexión exitosa')

    }catch (error) {
        console.log ('Conexión fallida');
        console.log (error);
        process.exit (1);
    }
}
module.exports= connectDB;