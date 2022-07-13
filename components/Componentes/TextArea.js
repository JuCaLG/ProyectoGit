import React from "react";
import { HelperText, TextInput } from 'react-native-paper';

export default function TextAreaComponente({titulo,value,onChangeText, enabled}){
  return(
    <TextInput
      mode="outlined"
      style={{
        height: 80
      }}
      multiline={true}
      label={titulo}
      placeholder={titulo}
      value={value}
      disabled={!enabled}
      onChangeText={onChangeText} 
    />
  );
}