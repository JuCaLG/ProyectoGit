const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProveedorSchema = new Schema ({

    name_prov:{
        type: String,
        required: true,
        trim: true

    },
    rfc_prov:{
        type: String,
        required: true,
        trim: true


    },
    dir_prov:{
        type: String,
        required: true,
        trim: true


    },
    tel_prov:{
        type: String,
        required: true,
        trim: true


    },
    email_prov:{
        type: String,
        required: true,
        trim: true

    },
    ruta_img:{
        type: String,
        required: true,
        trim: true
    },
    prod_id_usuario:{
        type: String,
        required: true,
        trim: true

    }


});

const modeloProveedor = mongoose.model('Proveedor', ProveedorSchema);

module.exports = modeloProveedor;