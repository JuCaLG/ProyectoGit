import axios from "axios";

const ruta = 'https://solecc-next.netlify.app/api/solecc/';
const rutaSesion = 'https://solecc-next.netlify.app/api/sesionSolecc';

const ListarTabla = async (tabla) => {
  try {
    const { data } = await axios.get(ruta + tabla,{ crossdomain: true });
    return data.status;
  } catch (error) {
    return null;
  }
};

const ConsultarObjeto = async (tabla, id) => {
  try {
    const { data } = await axios.get(
      'https://solecc-next.netlify.app/api/solecc/categorias/'+id,
      { crossdomain: true }
    );
    return data.status;
  } catch (error) {
    return null;
  }
};

const EliminarObjeto = async (tabla, id) => {
  try {
    const { data } = await axios.delete(ruta + tabla + '/' + id,{ crossdomain: true });
    return data.status;
  } catch (error) {
    return null;
  }
};

const AgregarObjeto = async (tabla, obj) => {
  try {
    const { data } = await axios.post(ruta + tabla,obj,{ crossdomain: true });
    return data.status;
  } catch (error) {
    return null;
  }
};

const ModificarObjeto = async (tabla, id, obj) => {
  try {
    const { data } = await axios.post(ruta + tabla + '/' + id, obj ,{ crossdomain: true });
    return data.status;
  } catch (error) {
    return null;
  }
};

const Sesion = async (obj) => {
  try {
    const { data } = await axios.post(rutaSesion,obj,{ crossdomain: true });
    return data.status;
  } catch (error) {
    return null;
  }
};

export default {
  ListarTabla,
  EliminarObjeto,
  AgregarObjeto,
  ConsultarObjeto,
  ModificarObjeto,
  Sesion,
};
