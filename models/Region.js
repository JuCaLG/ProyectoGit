const mongoose = require ('mongoose');
const { Schema } = mongoose;

const RegionSchema = new Schema ({

    name_region:{
        type: String,
        required: true,
        trim: true

    },
    reg_id_usuario:{
        type:String,
        required:true,
        trim:true
    }
});

const modeloRegion = mongoose.model('Region', RegionSchema);

module.exports = modeloRegion;