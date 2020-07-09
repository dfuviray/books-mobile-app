import React from 'react';

import { CustomText } from './AppTextStyles';

export default function AppText({
  title,
  fontWeight,
  color,
  alignSelf,
  size = '18',
  marginRight = '0',
  ...resProps
}) {
  return (
    <CustomText
      color={color}
      fontWeight={fontWeight}
      marginRight={marginRight}
      alignSelf={alignSelf}
      size={size}
      {...resProps}
    >
      {title}
    </CustomText>
  );
}
