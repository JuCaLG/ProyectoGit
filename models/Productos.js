const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ProductosSchema = new Schema ({

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
    prod_id_usuario:{
        type: String,
        required: true,
        trim: true

    }
});

const modeloProducto = mongoose.model('Productos', ProductosSchema);

module.exports = modeloProducto;