const mongoose = require ('mongoose');
const { Schema } = mongoose;

const CategoriaSchema = new Schema ({

    name_category:{
        type: String,
        required: true,
        trim: true

    },
    cat_id_usuario:{
        type:String,
        required:true,
        trim:true
    }
});

const modeloCategoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = modeloCategoria;
