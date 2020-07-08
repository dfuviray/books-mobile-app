import { SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const WIDTH = Dimensions.get('window').width;
export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  margin-left: 20px;
  width: ${WIDTH - 40}px;
`;
