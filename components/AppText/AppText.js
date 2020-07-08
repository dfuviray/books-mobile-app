import React from 'react';

import { CustomText } from './AppTextStyles';

export default function AppText({
  title,
  fontWeight,
  color,
  size = '18',
  marginRight = '0',
  ...resProps
}) {
  return (
    <CustomText
      color={color}
      fontWeight={fontWeight}
      marginRight={marginRight}
      size={size}
      {...resProps}
    >
      {title}
    </CustomText>
  );
}
