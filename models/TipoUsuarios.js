const mongoose = require ('mongoose');
const TipoSchema = mongoose.Schema ({

    name_tipo:{
        type: String,
        required: true,
        trim: true

    }
});

module.exports = mongoose.model('TipoUsuarios', TipoSchema);