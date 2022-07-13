import React, { useState } from "react";
import { BottomNavigation } from 'react-native-paper';
import { Text, ScrollView } from "react-native";

//Componentes
import QRComponente from "../Componentes/QRComponente";

const Inicio = () => 
  <ScrollView>
    <Text>Principal</Text>
  </ScrollView>;

export default function Principal({navigation}){
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'principal', title: 'Principal', icon: 'home' },
    { key: 'qr', title: 'Leer QR', icon: 'qrcode' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    principal: Inicio,
    qr:() => <QRComponente navigation={navigation}/>,
  });
  return (
    <BottomNavigation
      barStyle={{ backgroundColor: '#1d7be5' }}
      navigationState={{ index, routes }}
      onIndexChange={(index) => setIndex(index)}
      renderScene={renderScene}
    />
  );
}