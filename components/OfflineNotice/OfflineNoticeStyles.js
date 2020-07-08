import { View } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const Container = styled.View`
  align-items: center;
  background-color: red;
  height: 50px;
  justify-content: center;
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  width: 100%;
  z-index: 1;
`;
