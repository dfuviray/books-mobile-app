import { Text } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';

const unit = 'px';

export const CustomText = styled.Text`
  color: ${({ color }) => color || colors.black};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  margin-right: ${({ marginRight }) => marginRight}px;
`;
