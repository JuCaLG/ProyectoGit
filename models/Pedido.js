const mongoose = require ('mongoose');
const PagoSchema = mongoose.Schema ({

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

module.exports = mongoose.model('TipoPago', PagoSchema);