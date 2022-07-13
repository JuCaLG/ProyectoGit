import React, { useState } from "react";
import { HelperText, TextInput, List } from 'react-native-paper';

export default function InputTextComponente({titulo,value,onChangeText,enabled,secureTextEntry, primaryIcon,secundaryIcon}){
  const [ icon, setIcon ] = useState(true);
  return(
    <TextInput
      mode="outlined"
      label={titulo}
      placeholder={titulo}
      value={value}
      disabled={!enabled}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      left={
        (primaryIcon!==undefined && 
        primaryIcon!==null) && 
        <TextInput.Icon 
          onPress={
            (secundaryIcon!==undefined &&
            secundaryIcon!==null)? 
            (() => setIcon(!icon)): 
            undefined
          } 
          name={(icon)? 
            primaryIcon:
            secundaryIcon
          } 
        />
      }
    />
  );
}