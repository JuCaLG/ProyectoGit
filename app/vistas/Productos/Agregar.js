import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import MyTextInput from '../../componentes/MyTextInput';
import color from '../../estilos/colors';
import { Picker } from '@react-native-community/picker';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const ProductosAgregar = ({ navigation }) => {

    useEffect(() => {
        const Proveedores = async () => {
            setProveedores(await peticion.loadTask("proveedor"))
        }
        const Categorias = async () => {
            setCategorias(await peticion.loadTask("categoria"))
        }
        Proveedores();
        Categorias();
    }, []);

    const [proveedores, setProveedores] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const verProveedor = () => {
        if (JSON.stringify(proveedores) !== '[]') {
            return proveedores.map((datos) => {
                return (
                    <Picker.Item label={datos.name_prov} value={datos.name_prov} />
                );
            });
        }
        else {
            return (<></>);
        }
    }

    const verCategoria = () => {
        if (JSON.stringify(categorias) !== '[]') {
            return categorias.map((data) => {
                return (
                    <Picker.Item label={data.name_category} value={data.name_category} onValueChange={() => imprime()} />
                );
            });
        }
        else {
            return (<></>);
        }
    }

    const [categoria, setCategoria] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [nombre, setNombre] = useState('');
    const [qr, setQr] = useState('');
    const [usuario, setUsuario] = useState('');

    function limpiarInputs() {
        setNombre('');
        setQr('');
        setProveedor('');
        setUsuario('');
    }

    const crear = async () => {
        var alerta = null;
        var validacion = (nombre != '' && categoria != '' && proveedor != '')
        //Validar
        if (validacion) {
            var body = {
                "id_category": categoria,
                "id_proveedor": proveedor,
                "name_prod": nombre,
                "desc_prod": 0,
                "qr_prod": "S/N",
                "prod_id_usuario": "N/A",
            };
            const resultado = await peticion.insertar("producto", body);
            alerta = (resultado ? resultado.status : "Sin Internet");
            limpiarInputs();
        } else {
            alerta = ("Todos los campos son requeridos");
        }
        alert(alerta);
    }

    const siguientePag = (Pagina, Parametro) => {
        if (Parametro == undefined) {
            navigation.navigate(Pagina);
        }
        else {
            navigation.navigate(Pagina, Parametro);
        }
    }
    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 50 }]}>
                    <Text style={mainStyles.titleText}> Crear Producto</Text>


                    <MyTextInput placeholder='Nombre' image='user'

                        value={nombre} onChangeText={nombre => setNombre(nombre)} />

                    <MyTextInput placeholder='Nombre' image='user'
                        value={nombre} onChangeText={nombre => setNombre(nombre)} />

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 20 }}>Proveedor</Text>
                        <Picker
                            selectedValue={proveedor}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue, itemIndex) => setProveedor(itemValue)
                            }>
                            <Picker.Item label="Asignar Proveedor" value="" onValueChange={() => imprime()} />
                            {(verProveedor())}
                        </Picker>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 20 }}>Categoria</Text>
                        <Picker
                            selectedValue={categoria}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)
                            }>
                            <Picker.Item label="Asignar Categoria" value="" onValueChange={() => imprime()} />
                            {(verCategoria())}
                        </Picker>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => crear()}>
                            <Text style={mainStyles.btntxt}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={mainStyles.btntxt}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default ProductosAgregar;