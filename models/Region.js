const mongoose = require ('mongoose');
const RegionSchema = mongoose.Schema ({

    name_region:{
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

module.exports = mongoose.model('Region', RegionSchema);