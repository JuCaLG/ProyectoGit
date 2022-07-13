import React, { useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';

//Encabezados
import EncabezadoNoNavigation from "../Encabezados/EncabezadoNoNavigation";
//Pantallas
import Sesion from "../Vistas/Sesion";
import Terminos from "../Vistas/Teminos";
import CambiarPassword from "../Vistas/CambiarPassword";
//Variables Globales
const Stack = createStackNavigator();

export default function StackNavigation({ sesion, guardarSesion }) {
  
  const Vista = () => {
    if(sesion==null){
      return (
        <Stack.Screen name="Sesion">
          {() => 
            <Sesion guardarSesion={guardarSesion} />
          }
        </Stack.Screen>
      );
    }
    else if(!sesion.terminosYCondiciones){
      return (
        <Stack.Screen name="Terminos Y Condiciones">
          {(props) => <Terminos {...props} 
            sesion={sesion} guardarSesion={guardarSesion}/>
          }
        </Stack.Screen>
      );
    }
    else{
      return (
        <Stack.Screen name="Cambiar Contraseña">
          {(props) => <CambiarPassword {...props} 
            sesion={sesion} guardarSesion={guardarSesion}/>
          }
        </Stack.Screen>
      );

      
    }
  }
  
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={[() =>
          EncabezadoNoNavigation()
        , {unmountOnBlur: true}]}
        options={{unmountOnBlur: true}}
      >
        { Vista() }
      </Stack.Group>
    </Stack.Navigator>
  );
}