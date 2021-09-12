const mongoose = require ('mongoose');
const { Schema } = mongoose;

const SucursalSchema = new Schema ({

    nombre:{
        type: String,
        required: true,
        trim: true


    },
    rfc:{
        type: String,
        required: true,
        trim: true

    },
    telefono:{
        type: String,
        required: true,
        trim: true

    },
    direccion:{
        type: String,
        required: true,
        trim: true

    },
    email:{
        type: String,
        required: true,
        trim: true

    }


});

const modeloSucursal = mongoose.model('Sucursal', SucursalSchema);

module.exports = modeloSucursal;