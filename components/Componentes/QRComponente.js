import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function QRComponente({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    try{
      const json = JSON.parse(data);
      if(json.tabla!==undefined && json.id!==undefined){
        navigation.navigate("Formulario",
          { 
            tabla: json.tabla,
            id: json.id,
            accion: "Consultar"
          }
        );
      }
      else{
        alert("El QR no tiene informacion relevante para este systema");
      }
    }
    catch(e){
      alert("respuesta invalida");
    }
    setScanned(true);
  };

  if (hasPermission === null) {
    return (
      <Text>
        Es necesario otorgar permisos de acceso a la camara para poder utilizar esta funcion
      </Text>);
  }
  if (hasPermission === false) {
    return (
      <Text>
        Esta aplicacion no tiene permisos para acceder a la camara del dispositivo
      </Text>);
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? 
          undefined : handleBarCodeScanned
        }
        barCodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}
        type={type}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Presiona para escanear de nuevo'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
});