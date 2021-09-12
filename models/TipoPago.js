const mongoose = require ('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema ({

    name_pay:{
        type: String,
        required: true,
        trim: true

    }
});

const modeloPago = mongoose.model('Pago', PagoSchema);

module.exports = modeloPago;