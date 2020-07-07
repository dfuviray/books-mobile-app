import React from 'react';

import { CustomText } from './AppTextStyles';

export default function AppText({
  title,
  fontWeight,
  color,
  size,
  ...resProps
}) {
  return (
    <CustomText fontWeight={fontWeight} color={color} size={size} {...resProps}>
      {title}
    </CustomText>
  );
}
