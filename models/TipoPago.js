const mongoose = require ('mongoose');
const PagoSchema = mongoose.Schema ({

    name_pay:{
        type: String,
        required: true,
        trim: true

    }
});

module.exports = mongoose.model('TipoPago', PagoSchema);