import React from 'react';
import AppNavigation from '@navigation/AppNavigation';
import { UsuarioProvider } from '@context/UsuarioContext';
import MyDrawer from './menu';

export default function App() {

  return (
    <UsuarioProvider>
      <AppNavigation />
    </UsuarioProvider>

  );
}