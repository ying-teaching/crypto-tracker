import { Image, Text, View } from 'react-native';
import React from 'react';

import CoinDetailedHeader from './components/CoinDetailedHeader';

import Coin from '../../../assets/data/crypto.json';

const CoinDetailedScreen = () => {
  const {
    image: { small },
    symbol,
    market_data: { market_cap_rank },
  } = Coin;
  return (
    <View>
      <CoinDetailedHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
    </View>
  );
};

export default CoinDetailedScreen;
