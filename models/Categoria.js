const mongoose = require ('mongoose');
const CategoriaSchema = mongoose.Schema ({

    name_category:{
        type: String,
        required: true,
        trim: true

    },
    id_usuario:{
        type:String,
        required:true,
        trim:true
    }
});

module.exports = mongoose.model('Categoria', CategoriaSchema);