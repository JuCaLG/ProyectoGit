import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import s from './style';

import Categorias from'../Formularios/formCategorias';
import Provedores from'../Formularios/formProvedores';
import NewProducto from'../Formularios/fromNewProduc';
import Sucursales from'../Formularios/fromSucursales';



function HomeScreen(props) {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
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
                        <Image style={s.userImagen} source={require('./img/logo.jpg')} />
                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>we</Text>
                        <Text style={s.userSubTitulo}>vos</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenu iconName='podium' titleName='Home' navigation={() => props.navigation.navigate('Home')} />
            <DrawerMenu iconName='sitemap' titleName='Categorias' navigation={() => props.navigation.navigate('Categorias')} />
            <DrawerMenu iconName='hail' titleName='Provedores' navigation={() => props.navigation.navigate('Provedores')} />
            <DrawerMenu iconName='book-plus-multiple' titleName='Productos' navigation={() => props.navigation.navigate('NewProduc')} />
            <DrawerMenu iconName='storefront' titleName='Sucurcales' navigation={() => props.navigation.navigate('Sucursal')} />
        </View>
    )
}
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


//boton
function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Menu{...props} />}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Categorias" component={Categorias} />
                <Drawer.Screen name="Provedores" component={Provedores} />
                <Drawer.Screen name="NewProduc" component={NewProducto} />
                <Drawer.Screen name="Sucursal" component={Sucursales} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default MyDrawer;