const ruta = "http://31.220.52.25:3000/";
const fetch = require("node-fetch");

exports.loadTask = async function(tabla){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}

exports.insertar = async function(tabla, body){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla,
        {

            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body),

        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}

exports.modificar = async function(tabla, id, body){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla + "/" + id,
        {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(body),

        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}

exports.buscar = async function(tabla, id){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla + "/tabla/" + id,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}

exports.buscarEmail = async function(tabla, email){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla + "/email/" + email,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}

exports.eliminar = async function(tabla, id){

    //Codigo react native
    //Peticion al servidor
    return await fetch(ruta + tabla + "/" + id,
        {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return error;
        });

}