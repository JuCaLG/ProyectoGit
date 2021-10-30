import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button ,StatusBar, ScrollView,RefreshControl } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

/*
    Conexion con Servidor
*/
const peticion = require('../../controladores/peticiones.servidor');

const PedidosListar = ({navigation}) => {

    const [listaPedido,setListaPedido] = useState([]);
    const [refrescar, setRefrescar] = useState(false);

    useEffect(() => {
        actualizarListaEffect();
    },[]);

    const actualizarListaEffect = async () => {
        setListaPedido(await peticion.loadTask("pedido"));
    }

    const enRefresco = React.useCallback( async () => {
        setRefrescar(true);
        await actualizarListaEffect();
        setRefrescar(false);
    });

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Listar = () => {
        if(JSON.stringify(listaPedido)!== '[]'){
            return listaPedido.map((data) => {
                return (
                    <TouchableOpacity key={data._id} onPress={() => siguientePag("PedidosVer", { "id": data._id} )}>
                        <Text style={mainStyles.titleLista}>{data.amount_prod} - {data.price_v}</Text>
                    </TouchableOpacity>
                );
            });
        }
        else{
            return (
                <TouchableOpacity key={0}>
                    <Text style={mainStyles.titleLista}>No hay datos registrados</Text>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}
                refreshControl={
                    <RefreshControl refreshing={refrescar} onRefresh={enRefresco}/>
                }>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 40 }]}>
                    <Text style={mainStyles.titleText}> Pedidos </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("PedidosAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default PedidosListar;