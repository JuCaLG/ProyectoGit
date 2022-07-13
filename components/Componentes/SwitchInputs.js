import React, { useState, useEffect } from "react";
//Componente
import PickerComponente from './picker';
import InputTextComponente from './InputText';
import TextAreaComponente from './TextArea';

export default function SwitchInputsComponente({type,titulo,value,onEvent,data, enabled }){
  //Elemento
  const Inputs = () => {
    switch (type) {
      case 'text':
        return (
          <InputTextComponente
            titulo={titulo}
            value={value}
            onChangeText={onEvent}
            enabled={enabled} />
        );
      break;
      case 'area':
        return (
          <TextAreaComponente
            titulo={titulo}
            value={value}
            enabled={enabled} 
            onChangeText={onEvent} />
        );
      break;
      case 'picker':
        return (
          <PickerComponente 
            value={value}
            titulo={titulo}
            data={data}
            enabled={enabled}
            onChangeValuePicker={onEvent}
          />
        );
      break;
    }
  }
  return(
    <>
      {Inputs()}
    </>
  );
}