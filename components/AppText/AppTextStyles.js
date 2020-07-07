import { Text } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

export const CustomText = styled.Text`
  font-size: ${({ size }) => size || '18px'};
  color: ${({ color }) => color || colors.black};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;
