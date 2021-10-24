import React, { useState} from "react";
import { View, Text, Button } from "react-native";

const Home = ({navigation}) => {

    const [user,setUser] = useState("Usuario");

    const salir = () =>{
        setUser(null);
        navigation.reset({
            index:0,
            routes: [{ name: "Login"}]
        });
    }

    return (
        <View>
            <Text>Inicio</Text>
            <Button title="Cerrar Sesión"
                onPress={() => salir()}></Button>
            <Text>{ user }</Text>
        </View>
    );
}

export default Home;