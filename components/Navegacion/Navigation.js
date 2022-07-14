import React, { useEffect } from "react";
import { Text } from "react-native"
//Componentes
import Drawer from "./Drawer";
import Stack from "./Stack";
import CambiarPassword from "../Vistas/CambiarPassword";

export default function NavigationNavigation(
  { sesion, cerrarSesion, guardarSesion }
) {
  //useEffects

  //Complemento Vista
  const selecicona = () => {
    switch(sesion){
      case null: 
        return <Stack 
          sesion={sesion} guardarSesion={guardarSesion}/>;
        break;
      case undefined: 
        return (<></>);
        break;
      default: 
        if(sesion.cambiarPassword || !sesion.terminosYCondiciones){
          return <Stack 
            sesion={sesion} guardarSesion={guardarSesion}/>;
        }
        else{
          return(
            <Drawer 
            sesion={sesion}
            cerrarSesion={cerrarSesion}/>
          );
        }
        break;
    }
  }
  
  return (
    <>
      <Text> { JSON.stringify(sesion) } </Text>
      {selecicona()}
    </>
  );
}