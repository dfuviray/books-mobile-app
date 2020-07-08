import React from 'react';
import useNetInfo from '@react-native-community/netinfo';

import AppText from '../AppText/AppText';
import { Container } from './OfflineNoticeStyles';

export default function OfflineNotice() {
  const netInfo = useNetInfo;
  console.log(useNetInfo);
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === true)
    return (
      <Container>
        <AppText title="No Internet Connection" color="white" />
      </Container>
    );

  return null;
}
