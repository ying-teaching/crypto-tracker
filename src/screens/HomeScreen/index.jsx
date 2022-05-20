import { View, FlatList, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';

import CoinItem from '../../components/CoinItem';
import { getMarketData } from '../../services/requests';

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCoins(pageNumber) {
    if (loading) {
      return;
    }

    setLoading(true);
    const coinData = await getMarketData(pageNumber);

    setCoins((existingCoin) => [...existingCoin, ...coinData]);
    setLoading(false);
  }

  async function refetchCoins() {
    if (loading) {
      return;
    }

    setLoading(true);
    const coinData = await getMarketData();
    setCoins(coinData);
    setLoading(false);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
