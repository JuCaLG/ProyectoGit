const jsonVacio = (obj) => {
  return JSON.stringify(obj) === '{}';
}

const arrayVacio = (obj) => {
  return Array.isArray(obj) && !obj.length;
}

const esNulo = (obj) => {
  return obj==null
}

const indefinido = (obj) => {
  return obj===undefined
}

const verificarArray = (obj) => {
  return (
    !indefinido(obj) && 
    !esNulo(obj) &&  
    !arrayVacio(obj)
  );
}

export default {jsonVacio,
  indefinido,
  esNulo,
  arrayVacio,
  verificarArray};