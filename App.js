import React from 'react';
import { StyleSheet, View } from 'react-native';

import BooksScreen from './screens/BooksScreen/BooksScreen';
import OfflineNotice from './components/OfflineNotice/OfflineNotice';

export default function App() {
  return (
    <>
      <BooksScreen />
      <OfflineNotice />
    </>
  );
}
