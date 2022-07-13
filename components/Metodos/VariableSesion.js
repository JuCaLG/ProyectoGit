import AsyncStorage from '@react-native-async-storage/async-storage';

const CargarSesion = async(STORAGE_KEY) => {
  try{
    const obtener = await AsyncStorage.getItem(STORAGE_KEY)
    if (obtener !== null) {
      return obtener
    }
    return null;
  }
  catch(e){
    return false;
  }
}

const GuardarSesion = async(STORAGE_KEY, dato) => {
  try{
    await AsyncStorage.setItem(
      STORAGE_KEY,
      dato
    );
    return true;
  }
  catch(e){
    return false;
  }
}

const CerrarSesion = async(STORAGE_KEY) => {
  try{
    await AsyncStorage.removeItem(STORAGE_KEY);
    return true;
  }
  catch(e){
    return false;
  }
}

export default { CargarSesion, GuardarSesion, CerrarSesion };