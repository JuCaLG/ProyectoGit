const mongoose = require ('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema ({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    email_user: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password_user: {
        type: String,
        required: true,
        trim: true
    },
    type_user: {
        type: String,
        required: true,
        trim: true
    },
    status_user: {
        type: String,
        required: true,
        trim: true
    },
    idsucursal_user:{
        type: String,
        required: true,
        trim: true
    }
});

const modeloUsuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = modeloUsuario;