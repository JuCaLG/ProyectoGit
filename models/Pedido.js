const mongoose = require ('mongoose');
const { Schema } = mongoose;

const PedidoSchema = new Schema ({

    id_prod:{
        type: String,
        required: true,
        trim: true

    },
    amount_prod:{
        type: String,
        required: true,
        trim: true
    },
    price_v:{
        type: String,
        required: true,
        trim: true
    },


});

const modeloPedido = mongoose.model('Pedido', PedidoSchema);

module.exports = modeloPedido;