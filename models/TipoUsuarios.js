const mongoose = require ('mongoose');
const { Schema } = mongoose;

const TipoSchema = new Schema ({

    name_tipo:{
        type: String,
        required: true,
        trim: true

    }
});

const modeloTipo = mongoose.model('Tipo', TipoSchema);

module.exports = modeloTipo;