import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

const Formulario = () => {
  return (
    <ScrollView style={styles.form}>

      <View style={styles.fondo}>

        <Text style={styles.encabezado}> Categorias </Text>

      </View>

      <View>
        <Text style={styles.label}>Categoria</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => console.log(texto)}
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
