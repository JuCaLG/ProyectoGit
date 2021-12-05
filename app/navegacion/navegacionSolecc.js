import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { drawableStyles } from "../estilos/styles";

/*
    Guardar Usiario de forma local
*/
const localStorage = require('../controladores/usuario.localstorage.js');

//---------------------------------------------------
//Vistas

    //-Perfil-
    import PerfilVer from "../vistas/Perfil/Ver";
    //-Almacen-
    import AlmacenListar from "../vistas/Almacen/Listar";
    //-AlmacenPorSucursal-
    import AlmacenPorSucursalListar from "../vistas/AlmacenPorSucursal/Listar";
    //-Categorias-
    import CategoriasListar from "../vistas/Categorias/Listar";
    import CategoriasAgregar from "../vistas/Categorias/Agregar";
    import CategoriasVer from "../vistas/Categorias/Ver";
    import CategoriasModificar from "../vistas/Categorias/Modificar";
    //-Home-
    import Home from "../vistas/Home/Home";
    //-Login-
    import Login from "../vistas/Login/Login";
    //-Pedidos-
    import PedidosListar from "../vistas/Pedidos/Listar";
    import PedidosAgregar from "../vistas/Pedidos/Agregar";
    import PedidosVer from "../vistas/Pedidos/Ver";
    import PedidosModificar from "../vistas/Pedidos/Modificar";
    //-Productos-
    import ProductosListar from "../vistas/Productos/Listar";
    import ProductosAgregar from "../vistas/Productos/Agregar";
    import ProductosVer from "../vistas/Productos/Ver";
    import ProductosModificar from "../vistas/Productos/Modificar";
    //-Proveedores-
    import ProveedoresListar from "../vistas/Proveedores/Listar";
    import ProveedoresAgregar from "../vistas/Proveedores/Agregar";
    import ProveedoresVer from "../vistas/Proveedores/Ver";
    import ProveedoresModificar from "../vistas/Proveedores/Modificar";
    //-Regiones-
    import RegionesListar from "../vistas/Regiones/Listar";
    import RegionesAgregar from "../vistas/Regiones/Agregar";
    import RegionesVer from "../vistas/Regiones/Ver";
    import RegionesModificar from "../vistas/Regiones/Modificar";
    //-Sucursales-
    import SucursalesListar from "../vistas/Sucursales/Listar";
    import SucursalesAgregar from "../vistas/Sucursales/Agregar";
    import SucursalesVer from "../vistas/Sucursales/Ver";
    import SucursalesModificar from "../vistas/Sucursales/Modificar";
    //-TipoPagos-
    import TipoPagosListar from "../vistas/TipoPagos/Listar";
    import TipoPagosAgregar from "../vistas/TipoPagos/Agregar";
    import TipoPagosVer from "../vistas/TipoPagos/Ver";
    import TipoPagosModificar from "../vistas/TipoPagos/Modificar";
    //-TiposUsuarios-
    import TipoUsuariosListar from "../vistas/TipoUsuarios/Listar";
    import TipoUsuariosAgregar from "../vistas/TipoUsuarios/Agregar";
    import TipoUsuariosVer from "../vistas/TipoUsuarios/Ver";
    import TipoUsuariosModificar from "../vistas/TipoUsuarios/Modificar";
    //-Usuarios-
    import UsuariosListar from "../vistas/Usuarios/Listar";
    import UsuariosAgregar from "../vistas/Usuarios/Agregar";
    import UsuariosVer from "../vistas/Usuarios/Ver";
    import UsuariosModificar from "../vistas/Usuarios/Modificar";

//---------------------------------------------------
//Navegacion

    //Importar Navegadores
    import { createStackNavigator } from "@react-navigation/stack";
    import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
    
    //Navegadores
    const PilaApp = createStackNavigator();
    const PilaLogin = createStackNavigator();
    const PilaHome = createStackNavigator();
    const PilaPerfil = createStackNavigator();
    const PilaUsuarios = createStackNavigator();
    const PilaCategorias = createStackNavigator();
    const PilaPedidos = createStackNavigator();
    const PilaProductos = createStackNavigator();
    const PilaProveedores = createStackNavigator();
    const PilaRegiones = createStackNavigator();
    const PilaSucursales = createStackNavigator();
    const PilaTipoPagos = createStackNavigator();
    const PilaTipoUsuarios = createStackNavigator();
    const PilaAlmacen = createStackNavigator();
    const PilaAlmacenPorSucursal = createStackNavigator();
    /* Pantallas Adicionales*/
    const PilaCompras = createStackNavigator();
    const PilaDetalleCompras = createStackNavigator();
    const PilaVentas = createStackNavigator();
    const PilaDetalleVentas = createStackNavigator();
    const PilaRegistroPagos = createStackNavigator();
    const Gabeta = createDrawerNavigator();

//---------------------------------------------------
//Funcion navegacion

const NavegacionSolecc = ({navigation}) => {

    //-------------------------------------------------
    const [user,setUser] = useState({
        "nombre": "...",
    });

    useEffect(() => {
        Sesion();
    }, []);

    const Sesion = async () => {
        const json = JSON.parse(await localStorage.ObtenerUsuario());
        if(json==null){
            siguientePag(navigation,"Login");
        }
        else{
            setUser(json);
        }
    }

    //Cerrar Sesion
        const salir = async (navigation) =>{
            const limpiarStorage = await localStorage.removerUsuario();
            if(limpiarStorage){
                siguientePag(navigation, "Login");
            }
            else{
                alert("No se pudo cerrar su sesión");
            }
        }

    //--------------------------------------------------
    //SiguientePagina
    const siguientePag = async (navigation,Pagina) =>{
        await navigation.reset({
            index:0,
            routes: [{ name: "Home" }],
        });
        navigation.navigate(Pagina);
    }

    //--------------------------------------------------
    //Estilo Gabeta (Drawable)

        //Menu
        const Menu = (props) =>{

            return (
                <View style={drawableStyles.container}>
                    <View style={drawableStyles.bgContainer}>
                        <View style={drawableStyles.userContainer}>
                            <Image style={drawableStyles.userImagen} source={require('../imagenes/logosolecc.jpg')} />
                            <Text style={drawableStyles.userTitulo}>{user["nombre"]}</Text>
                        </View>
                        <View style={drawableStyles.userNombre}>
                            <TouchableOpacity onPress={() => siguientePag(props.navigation, 'Perfil')}>
                                <Text style={drawableStyles.userSubTitulo}>Ver Perfil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => salir(props.navigation) }>
                                <Text style={drawableStyles.userSubTitulo}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <ScrollView>
                        <DrawerMenu iconName='podium' titleName='Home' navigation={() => siguientePag(props.navigation, 'Home')} />
                        <DrawerMenu iconName='hail' titleName='Provedores' navigation={() => siguientePag(props.navigation, "Proveedores")} />
                        <DrawerMenu iconName='storefront' titleName='Categorias' navigation={() => siguientePag(props.navigation, 'Categorias')} />
                        <DrawerMenu iconName='storefront' titleName='Sucursales' navigation={() => siguientePag(props.navigation, 'Sucursales')} />
                        <DrawerMenu iconName='storefront' titleName='Usuarios' navigation={() => siguientePag(props.navigation, 'Usuarios')} />
                        <DrawerMenu iconName='book-plus-multiple' titleName='Productos' navigation={() => siguientePag(props.navigation, 'Productos')} />
                        <DrawerMenu iconName='storefront' titleName='Regiones' navigation={() => siguientePag(props.navigation, 'Regiones')} />
                        <DrawerMenu iconName='storefront' titleName='Almacen' navigation={() => siguientePag(props.navigation, 'Almacen')} />
                        <DrawerMenu iconName='storefront' titleName='Almacen por Sucursal' navigation={() => siguientePag(props.navigation, 'AlmacenPorSucursal')} />

                        <DrawerMenu iconName='storefront' titleName='Compras' navigation={() => siguientePag(props.navigation, 'Compras')} />
                        <DrawerMenu iconName='storefront' titleName='DetallesCompras' navigation={() => siguientePag(props.navigation, 'DetallesCompras')} />
                        <DrawerMenu iconName='storefront' titleName='Ventas' navigation={() => siguientePag(props.navigation, 'Ventas')} />
                        <DrawerMenu iconName='storefront' titleName='DetallesVentas' navigation={() => siguientePag(props.navigation, 'DetallesVentas')} />
                        <DrawerMenu iconName='storefront' titleName='RegistroPagos' navigation={() => siguientePag(props.navigation, 'RegistroPagos')} />
                    </ScrollView>
                </View>
            );

        }

        //Cajones Gabeta(Items de Drawable)
        const DrawerMenu = ({navigation,iconName ,titleName}) => {

            return (
                <TouchableOpacity onPress={navigation}>
                    <View style={drawableStyles.menuContainer}>
                        <View style={drawableStyles.iconoContainer}>
                            <Icon size={17} name={iconName} />
                        </View>
                        <View style={drawableStyles.tituloContainer}>
                            <Text style={drawableStyles.tituloTxt}>{titleName}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }

    //---------------------------------------------------
    //imprimir
    return (
        <PilaApp.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <PilaApp.Screen
                name="Login">
                {() => (
                    <PilaLogin.Navigator
                        screenOptions={{
                            headerShown: false
                        }}>
                        <PilaLogin.Screen
                        name="LoginPantalla"
                        component={Login} />
                    </PilaLogin.Navigator>
                )}
            </PilaApp.Screen>
            <PilaApp.Screen
                name="App">
                {() => (
                    <Gabeta.Navigator
                        initialRouteName="Home"
                        drawerContent={ (props) => <Menu {...props}/>}>
                        <Gabeta.Screen
                            name="Home">
                            {() => (
                                <PilaHome.Navigator>
                                    <PilaHome.Screen
                                    name="HomePantalla"
                                    component={Home} />
                                </PilaHome.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Perfil">
                            {() => (
                                <PilaPerfil.Navigator>
                                    <PilaPerfil.Screen
                                    name="PerfilVer"
                                    component={PerfilVer} />
                                </PilaPerfil.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Proveedores">
                            {() => (
                                <PilaProveedores.Navigator>
                                    <PilaProveedores.Screen
                                        name="ProveedoresListar"
                                        component={ProveedoresListar}/>
                                    <PilaProveedores.Screen
                                        name="ProveedoresAgregar"
                                        component={ProveedoresAgregar}/>
                                    <PilaProveedores.Screen
                                        name="ProveedoresVer"
                                        component={ProveedoresVer}/>
                                    <PilaProveedores.Screen
                                        name="ProveedoresModificar"
                                        component={ProveedoresModificar}/>
                                </PilaProveedores.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Categorias">
                            {() => (
                                <PilaCategorias.Navigator>
                                    <PilaCategorias.Screen
                                        name="CategoriasListar"
                                        component={CategoriasListar}/>
                                    <PilaCategorias.Screen
                                        name="CategoriasAgregar"
                                        component={CategoriasAgregar}/>
                                    <PilaCategorias.Screen
                                        name="CategoriasVer"
                                        component={CategoriasVer}/>
                                    <PilaCategorias.Screen
                                        name="CategoriasModificar"
                                        component={CategoriasModificar}/>
                                </PilaCategorias.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Sucursales">
                            {() => (
                                <PilaSucursales.Navigator>
                                    <PilaSucursales.Screen
                                        name="SucursalesListar"
                                        component={SucursalesListar}/>
                                    <PilaSucursales.Screen
                                        name="SucursalesAgregar"
                                        component={SucursalesAgregar}/>
                                    <PilaSucursales.Screen
                                        name="SucursalesVer"
                                        component={SucursalesVer}/>
                                    <PilaSucursales.Screen
                                        name="SucursalesModificar"
                                        component={SucursalesModificar}/>
                                </PilaSucursales.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Usuarios">
                            {() => (
                                <PilaUsuarios.Navigator>
                                    <PilaUsuarios.Screen
                                        name="UsuariosListar"
                                        component={UsuariosListar}/>
                                    <PilaUsuarios.Screen
                                        name="UsuariosAgregar"
                                        component={UsuariosAgregar}/>
                                    <PilaUsuarios.Screen
                                        name="UsuariosVer"
                                        component={UsuariosVer}/>
                                    <PilaUsuarios.Screen
                                        name="UsuariosModificar"
                                        component={UsuariosModificar}/>
                                </PilaUsuarios.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Productos">
                            {() => (
                                <PilaProductos.Navigator>
                                    <PilaProductos.Screen
                                        name="ProductosListar"
                                        component={ProductosListar}/>
                                    <PilaProductos.Screen
                                        name="ProductosAgregar"
                                        component={ProductosAgregar}/>
                                    <PilaProductos.Screen
                                        name="ProductosVer"
                                        component={ProductosVer}/>
                                    <PilaProductos.Screen
                                        name="ProductosModificar"
                                        component={ProductosModificar}/>
                                </PilaProductos.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Regiones">
                            {() => (
                                <PilaRegiones.Navigator>
                                    <PilaRegiones.Screen
                                        name="RegionesListar"
                                        component={RegionesListar}/>
                                    <PilaRegiones.Screen
                                        name="RegionesAgregar"
                                        component={RegionesAgregar}/>
                                    <PilaRegiones.Screen
                                        name="RegionesVer"
                                        component={RegionesVer}/>
                                    <PilaRegiones.Screen
                                        name="RegionesModificar"
                                        component={RegionesModificar}/>
                                </PilaRegiones.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Almacen">
                            {() => (
                                <PilaAlmacen.Navigator>
                                    <PilaAlmacen.Screen
                                        name="AlmacenListar"
                                        component={AlmacenListar}/>
                                </PilaAlmacen.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="AlmacenPorSucursal">
                            {() => (
                                <PilaAlmacenPorSucursal.Navigator>
                                    <PilaAlmacenPorSucursal.Screen
                                        name="AlmacenPorSucursalListar"
                                        component={AlmacenPorSucursalListar}/>
                                </PilaAlmacenPorSucursal.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Pedidos">
                            {() => (
                                <PilaPedidos.Navigator>
                                    <PilaPedidos.Screen
                                        name="PedidosListar"
                                        component={PedidosListar}/>
                                    <PilaPedidos.Screen
                                        name="PedidosAgregar"
                                        component={PedidosAgregar}/>
                                    <PilaPedidos.Screen
                                        name="PedidosVer"
                                        component={PedidosVer}/>
                                    <PilaPedidos.Screen
                                        name="PedidosModificar"
                                        component={PedidosModificar}/>
                                </PilaPedidos.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="TipoPagos">
                            {() => (
                                <PilaTipoPagos.Navigator>
                                    <PilaTipoPagos.Screen
                                        name="TipoPagosListar"
                                        component={TipoPagosListar}/>
                                    <PilaTipoPagos.Screen
                                        name="TipoPagosAgregar"
                                        component={TipoPagosAgregar}/>
                                    <PilaTipoPagos.Screen
                                        name="TipoPagosVer"
                                        component={TipoPagosVer}/>
                                    <PilaTipoPagos.Screen
                                        name="TipoPagosModificar"
                                        component={TipoPagosModificar}/>
                                </PilaTipoPagos.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="TipoUsuarios">
                            {() => (
                                <PilaTipoUsuarios.Navigator>
                                    <PilaTipoUsuarios.Screen
                                        name="TipoUsuariosListar"
                                        component={TipoUsuariosListar}/>
                                    <PilaTipoUsuarios.Screen
                                        name="TipoUsuariosAgregar"
                                        component={TipoUsuariosAgregar}/>
                                    <PilaTipoUsuarios.Screen
                                        name="TipoUsuariosVer"
                                        component={TipoUsuariosVer}/>
                                    <PilaTipoUsuarios.Screen
                                        name="TipoUsuariosModificar"
                                        component={TipoUsuariosModificar}/>
                                </PilaTipoUsuarios.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Compras">
                            {() => (
                                <PilaCompras.Navigator>
                                    <PilaCompras.Screen
                                        name="ComprasListar"
                                        component={ComprasListar}/>
                                    <PilaCompras.Screen
                                        name="ComprasAgregar"
                                        component={ComprasAgregar}/>
                                    <PilaCompras.Screen
                                        name="ComprasVer"
                                        component={ComprasVer}/>
                                    <PilaCompras.Screen
                                        name="ComprasModificar"
                                        component={ComprasModificar}/>
                                </PilaCompras.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="DetallesCompras">
                            {() => (
                                <PilaDetallesCompras.Navigator>
                                    <PilaDetallesCompras.Screen
                                        name="DetallesComprasListar"
                                        component={DetallesComprasListar}/>
                                    <PilaDetallesCompras.Screen
                                        name="DetallesComprasAgregar"
                                        component={DetallesComprasAgregar}/>
                                    <PilaDetallesCompras.Screen
                                        name="DetallesComprasVer"
                                        component={DetallesComprasVer}/>
                                    <PilaDetallesCompras.Screen
                                        name="DetallesComprasModificar"
                                        component={DetallesComprasModificar}/>
                                </PilaDetallesCompras.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="Ventas">
                            {() => (
                                <PilaVentas.Navigator>
                                    <PilaVentas.Screen
                                        name="VentasListar"
                                        component={VentasListar}/>
                                    <PilaVentas.Screen
                                        name="VentasAgregar"
                                        component={VentasAgregar}/>
                                    <PilaVentas.Screen
                                        name="VentasVer"
                                        component={VentasVer}/>
                                    <PilaVentas.Screen
                                        name="VentasModificar"
                                        component={VentasModificar}/>
                                </PilaVentas.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="DetallesVentas">
                            {() => (
                                <PilaDetallesVentas.Navigator>
                                    <PilaDetallesVentas.Screen
                                        name="DetallesVentasListar"
                                        component={DetallesVentasListar}/>
                                    <PilaDetallesVentas.Screen
                                        name="DetallesVentasAgregar"
                                        component={DetallesVentasAgregar}/>
                                    <PilaDetallesVentas.Screen
                                        name="DetallesVentasVer"
                                        component={DetallesVentasVer}/>
                                    <PilaDetallesVentas.Screen
                                        name="DetallesVentasModificar"
                                        component={DetallesVentasModificar}/>
                                </PilaDetallesVentas.Navigator>
                            )}
                        </Gabeta.Screen>
                        <Gabeta.Screen
                            name="RegistroPagos">
                            {() => (
                                <PilaRegistroPagos.Navigator>
                                    <PilaRegistroPagos.Screen
                                        name="RegistroPagosListar"
                                        component={RegistroPagosListar}/>
                                    <PilaRegistroPagos.Screen
                                        name="RegistroPagosAgregar"
                                        component={RegistroPagosAgregar}/>
                                    <PilaRegistroPagos.Screen
                                        name="RegistroPagosVer"
                                        component={RegistroPagosVer}/>
                                    <PilaRegistroPagos.Screen
                                        name="RegistroPagosModificar"
                                        component={RegistroPagosModificar}/>
                                </PilaRegistroPagos.Navigator>
                            )}
                        </Gabeta.Screen>
                    </Gabeta.Navigator>
                )}
            </PilaApp.Screen>
        </PilaApp.Navigator>
    );
}
//---------------------------------------------------
    //Exportar
    export default NavegacionSolecc;
//---------------------------------------------------
