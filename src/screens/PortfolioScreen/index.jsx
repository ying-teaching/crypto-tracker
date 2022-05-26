import { View, Text } from 'react-native';
import React, { Suspense } from 'react';

import PortfolioAssetList from './components/PortfolioAssetsList';

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Suspense fallback={<Text style={{ color: 'white' }}>Loading...</Text>}>
        <PortfolioAssetList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
