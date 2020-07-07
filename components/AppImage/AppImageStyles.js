import { Image } from 'react-native';
import styled from 'styled-components/native';

export const CustomImage = styled.Image`
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  width: ${({ width }) => width || '100px'}
  height: ${({ width }) => width || '100px'}
`;
