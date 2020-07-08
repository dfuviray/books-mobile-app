import { ActivityIndicator, SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  margin-left: 20px;
  width: ${WIDTH - 40}px;
`;

export const LoadingSpinner = styled.ActivityIndicator`
  top: ${(HEIGHT - 40) / 2}px;
  left: ${(WIDTH - 60) / 2}px;
  position: absolute;
`;
