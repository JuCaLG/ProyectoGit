import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import s from './style';





//Ventanas Proveedores
import Provedores from '@Formularios/formProvedores';
import ListProvedores from '@Formularios/formListadoProveedores';
import DetalleProveedor from '@Formularios/formDetalleProveedor';

//Ventanas Categorias
import Categorias from '@Formularios/formCategorias';
import ListCategorias from '@Formularios/formListCategoria';
import DetalleCategoria from '@Formularios/formDetalleCategoria';


//Ventanas Sucursales
import Sucursales from '@Formularios/fromSucursales';
import ListSucursal from '@Formularios/formListaSucursal';
import DetalleSucursal from '@Formularios/formDetalleSucursal';


//Ventanas Usuarios 
import Usuarios from '@Formularios/formUsuarios';
import ListUsuarios from '@Formularios/formListUsuarios';
import DetalleUsuarios from '@Formularios/formDetalleUsuario';

//Ventanas Productos
import NewProducto from '@Formularios/fromNewProduc';
import ListProducstos from '@Formularios/formListProductos';
import formDetalleProd from '@Formularios/formDetalleProd';
import ContenidoProductos from '@Formularios/ContenidoProductos';


//Ventanas Regiones
import NewRegion from '@Formularios/formRegion';
import ListRegion from '@Formularios/formListaRegion';
import DetalleRegion from '@Formularios/formDetalleRegion';


//Ventanas Almacenes
import Almacen from '@Formularios/Almacen';
import AlmacenSucursales from '@Formularios/AlmacenSucursales';
import AlmacenIndividual from '@Formularios/AlmacenIndividual';
import AgregarInventario from '@Formularios/FromAgregarProducto';



//import  formSurtido from '@Formularios/formSurtido';








function HomeScreen(props) {

    
    console.log(props)

    console.log("Index")

    return (

        



    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>

        <Text style={{ fontSize: 20 }}>Estadísticas de Ventas</Text>
    </View>
    );
}

//accion boton
function DrawerMenu(props) {

    return (
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon size={17} name={props.iconName} />
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function Menu(props) {



    return (
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} source={require('@recursos/images/logosolecc.jpg')} />
                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>Proyecto</Text>
                        <Text style={s.userSubTitulo}>Administrador</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenu iconName='podium' titleName='Home' navigation={() => props.navigation.navigate('Home')} />

            <DrawerMenu iconName='hail' titleName='Provedores' navigation={() => props.navigation.navigate('ListProvedores')} />
            <DrawerMenu iconName='storefront' titleName='Categorias' navigation={() => props.navigation.navigate('ListCategorias')} />
            <DrawerMenu iconName='storefront' titleName='Sucursales' navigation={() => props.navigation.navigate('ListSucursal')} />
            <DrawerMenu iconName='storefront' titleName='Usuarios' navigation={() => props.navigation.navigate('ListUsuarios')} />


            <DrawerMenu iconName='book-plus-multiple' titleName='Productos' navigation={() => props.navigation.navigate('ListProducstos')} />
           
            
            
            <DrawerMenu iconName='storefront' titleName='Regiones' navigation={() => props.navigation.navigate('ListRegion')} />
            
            <DrawerMenu iconName='storefront' titleName='Almacen' navigation={() => props.navigation.navigate('Almacen')} />
            <DrawerMenu iconName='storefront' titleName='Almacen por Sucursal' navigation={() => props.navigation.navigate('AlmacenSucursales')} />


        </View>
    )
}
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


//boton
export default function MyDrawer() {


    return (


        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Menu{...props} />}>
                

                <Drawer.Screen name="Home" component={HomeScreen} />

                <Drawer.Screen name="Provedores" component={Provedores} />
                <Drawer.Screen name="ListProvedores" component={ListProvedores} />
                <Drawer.Screen name="DetalleProveedor" component={DetalleProveedor} />

                



                <Drawer.Screen name="Categorias" component={Categorias} />
            
                <Drawer.Screen name="NewProduc" component={NewProducto} />
                <Drawer.Screen name="Sucursal" component={Sucursales} />
                <Drawer.Screen name="Usuarios" component={Usuarios} />
                <Drawer.Screen name="ListCategorias" component={ListCategorias} />
                <Drawer.Screen name="ListSucursal" component={ListSucursal} />
                <Drawer.Screen name="DetalleSucursal" component={DetalleSucursal} />
                <Drawer.Screen name="ListProducstos" component={ListProducstos} />
                <Drawer.Screen name="ListUsuarios" component={ListUsuarios} />
                <Drawer.Screen name="DetalleCategoria" component={DetalleCategoria} />
                <Drawer.Screen name="NewRegion" component={NewRegion} />
                <Drawer.Screen name="ListRegion" component={ListRegion} />
                <Drawer.Screen name="DetalleRegion" component={DetalleRegion} />
       
                <Drawer.Screen name="DetalleUsuarios" component={DetalleUsuarios} />

                <Drawer.Screen name="ContenidoProductos" component={ContenidoProductos} />
                <Drawer.Screen name="Almacen" component={Almacen} />
                <Drawer.Screen name="AlmacenSucursales" component={AlmacenSucursales} />
                <Drawer.Screen name="AlmacenIndividual" component={AlmacenIndividual} />
                <Drawer.Screen name="AgregarInventario" component={AgregarInventario} />
                <Drawer.Screen name="formDetalleProd" component={formDetalleProd} />
            

                


                

                
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

//export default MyDrawer;

