import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
/*import Formulario from './Formularios/formProvedores';
import Formulario from './Formularios/formCategorias';
import Formulario from './Formularios/fromSucursales';*/
import Formulario from './Formularios/fromNewProduc';
function App() {


  return (
    
      <View style={styles.fondo}>
        <Text style={styles.encabezado}> HOLA MUNDO! </Text>
        <Formulario />
      </View> 

  );
}

const styles = StyleSheet.create({

  fondo: {
    backgroundColor: '#FF7F50',
    minHeight: '100%'
    
  },

  encabezado: {

    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'

  }

});

export default App;
