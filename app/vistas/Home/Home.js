import React, { useState } from "react";
import { View, Text, Button, AccessibilityInfo } from "react-native";
import { Appbar } from 'react-native-paper';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

const Home = ({ navigation }) => {

    const [herramientas, setHerramientas] = useState(false);
    const Titulo = "Home";
    const Subtitulo = "";

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    const accion = () => {
        alert("Accion");
    } 

    return (
        <View>
            <Appbar.Header>
                <Appbar.Action color="white" icon="menu" onPress={() => navigation.toggleDrawer()} />
                <Appbar.Content title={Titulo} subtitle={Subtitulo} />
                {(herramientas) ?
                    (
                        <>
                            <Appbar.Action color="white" icon="numeric-1-circle" onPress={() => alert("1")} />
                            <Appbar.Action color="white" icon="numeric-2-circle" onPress={() => alert("2")} />

                        </>
                    ) :
                    (
                        <></>
                    )
                }
                <Menu
                    visible={visible}
                    anchor={<Appbar.Action color="white" icon="menu" onPress={() => showMenu() } />}
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={() => accion() }>Menu item 1</MenuItem>
                    <MenuItem onPress={() => accion() }>Menu item 2</MenuItem>
                    <MenuItem disabled>Disabled item</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => accion() }>Menu item 4</MenuItem>
                </Menu>
            </Appbar.Header>
            <View>
                <Text>Home</Text>

                <Button title="herramientas" onPress={() => (herramientas) ? setHerramientas(false) : setHerramientas(true)} />
            </View>
        </View>
    );
}

export default Home;