import React from 'react';

import { CustomImage } from './AppImageStyles';

export default function AppImage({ borderRadius, ...resProps }) {
  return <CustomImage borderRadius={borderRadius} {...resProps} />;
}
