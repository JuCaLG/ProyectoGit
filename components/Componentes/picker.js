import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { HelperText, Caption } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export default function PickerComponente({value,titulo,data,onChangeValuePicker,enabled}){
  //Variables
  const [focus,setFocus] = useState(false);
  //Elementos
  const pickerItems = () => {
    return data!==null && data!==undefined && data.map((itemPicker) => {
      return (
        <Picker.Item 
          color="black" 
          value={itemPicker._id} 
          label={itemPicker.toString.title} />
      );
    });
  };
  //Vista
  return(
    <View>
      <Caption 
        style={(!focus)?
          estilos.captionBlur:
          estilos.captionFocus}>
        {titulo}
      </Caption>
      <Picker
        style={[
          estilos.picker,
          ((!focus)?
            estilos.pickerBlur:
            estilos.pickerFocus
          ),
          ((value==="")?
            estilos.pickerNull:
            estilos.pickerFull
          ),
        ]}
        enabled={enabled} 
        mode="dropdown"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        selectedValue={value}
        onValueChange={onChangeValuePicker}>
        <Picker.Item label={'--- Seleccione ' + titulo + ' ---'} value={""} />
        {pickerItems()}
      </Picker>
    </View>
  );
}

const estilos = StyleSheet.create({
  picker: {
    fontSize:20,
    padding:10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "transparent"
  },
  pickerNull:{
    color: "#a7a7a7",
  },
  pickerFull:{
    color: "black",
  },
  captionBlur:{
    color: "#a7a7a7"
  },
  captionFocus:{
    color: "#6200ee"
  },
  pickerBlur:{
    borderColor: undefined,
    borderWidth:1
  },
  pickerFocus:{
    borderColor: "#6200ee",
    borderWidth:2
  }
});