const mongoose = require ('mongoose');
const SucursalSchema = mongoose.Schema ({

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

module.exports = mongoose.model('Sucursal', SucursalSchema);