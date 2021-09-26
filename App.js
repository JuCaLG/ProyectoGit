import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image, ScrollView} from 'react-native'
import AppNavigation from '@navigation/AppNavigation';
import { UsuarioProvider } from '@context/UsuarioContext';
import NetInfo from "@react-native-community/netinfo"

export default function App() {

  const [internet, setInternet] = useState({ "status": true });

  useEffect(() => {
    NetInfo.fetch().then((state) => { 
      setInternet({"status": state.isConnected}); 
    })
    .catch((error) => { 
      setInternet({"status":false}) 
    });
  }, []);

  return (
    <UsuarioProvider>
      <AppNavigation />
    </UsuarioProvider>
  );

}