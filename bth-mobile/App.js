import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}