import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Formulario = () => {
  return (
    <ScrollView style={styles.form}>

      <View style={styles.fondo}>
        <Text style={styles.encabezado}> Nuevo Producto </Text>
      </View>

      
      <View>
        <Text style={styles.label}>Categoria</Text>
        <Picker>
          <Picker.Item label="---Seleccione una categoria---" value = ""/>
          <Picker.Item label="hola" value = ""/>
          <Picker.Item label="perra" value = ""/>

        </Picker>
      </View>
      <View>
        <Text style={styles.label}>Provedor</Text>
        <Picker>
          <Picker.Item label="---Seleccione una Provedor---" value = ""/>
          <Picker.Item label="hola" value = ""/>
          <Picker.Item label="perra" value = ""/>

        </Picker>
      </View>
      <View>
        <Text style={styles.label}>QR-Codigo de Barras</Text>
      </View>

      <View>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Descripcion</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Stock Inicial</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
          keyboardType='phone-pad'
        />
      </View>
      <View>
        <Text style={styles.label}>Precio de compra</Text>
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
  }


});

export default Formulario;
