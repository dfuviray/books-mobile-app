import { View } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const Container = styled.View`
  align-items: center;
  background-color: red;
  height: 50px;
  justify-content: center;
  position: absoulute;
  top: ${Constants.statusBarHeight};
  width: 100%;
  z-index: 7;
`;
