import AsyncStorage from '@react-native-community/async-storage';

exports.GuardarUsuario = async function(usuario){
    try{
        await AsyncStorage.setItem("usuario",JSON.stringify(usuario));
        return true;
    }
    catch(error){
        return false;
    }
}

exports.ObtenerUsuario = async function(){
    try{
        return await AsyncStorage.getItem("usuario");
    }
    catch(error){
        return false;
    }
}

exports.removerUsuario = async function(){
    try{
        await AsyncStorage.removeItem("usuario");
        return true;
    }
    catch(error){
        return false;
    }
}