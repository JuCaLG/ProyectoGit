import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Formulario = () => {
  return (
    <ScrollView style={styles.form}>

      <View style={styles.fondo}>
        <Text style={styles.encabezado}> Sucursal </Text>
      </View>

      <View>
        <Text style={styles.label}>Foto</Text>
        <View>
          <Image style={styles.img} source={require('../menu/img/camara.png')} />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Nombre de sucursal</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Dirección</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Telefono</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='phone-pad'
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='email-address'
        />
      </View>
      <View>
        <TouchableHighlight style={styles.boton}>
          <Text style={styles.textBoton}>Agregar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({

  fondo: {
    backgroundColor: '#FFD700'
  },
  encabezado: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: '#708090',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  form: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '1.5%'
  },
  boton: {
    padding: 15,
    backgroundColor: '#FFD700',
    marginVertical: 10,
    borderRadius: 80
  },
  textBoton: {
    color: '#0E0D0C',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },img: {
    justifyContent:'center',
     alignItems:'center',
     flex: 1,
     
   }


});

export default Formulario;
