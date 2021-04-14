const mongoose = require ('mongoose');
const SucursalSchema = mongoose.Schema ({

    name_sucursal:{
        type: String,
        required: true,
        trim: true


    },
    loc_sucursal:{
        type: String,
        required: true,
        trim: true

    },
    img_sucursal:{
        type: String,
        required: true,
        trim: true

    }


});

module.exports = mongoose.model('Sucursal', SucursalSchema);