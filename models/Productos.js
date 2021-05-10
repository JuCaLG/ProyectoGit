const mongoose = require ('mongoose');
const ProductosSchema = mongoose.Schema ({

    id_category:{
        type: String,
        required: true,
        trim: true

    },
    id_proveedor:{
        type: String,
        required: true,
        trim: true

    },
    name_prov:{
        type: String,
        required: true,
        trim: true

    },
    desc_prod:{
        type: String,
        required: true,
        trim: true

    },
    qr_prod:{
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

module.exports = mongoose.model('Productos', ProductosSchema);