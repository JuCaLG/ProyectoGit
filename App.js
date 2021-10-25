import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

//Contenedor de Navegador
import NavegacionSolecc from "./app/navegacion/navegacionSolecc";

const App = () => {

  return (
    <NavigationContainer>
      <NavegacionSolecc />
    </NavigationContainer>
  );

}

export default App;