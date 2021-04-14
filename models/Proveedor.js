const mongoose = require ('mongoose');
const ProveedorSchema = mongoose.Schema ({

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
    id_usuario:{
        type: String,
        required: true,
        trim: true

    }


});

module.exports = mongoose.model('Proveedor', ProveedorSchema);