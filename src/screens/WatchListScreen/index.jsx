import { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { useWatchlist } from '../../Contexts/WatchlistContext';
import CoinItem from '../../components/CoinItem';
import { getWatchlistedCoins } from '../../services/requests';

export default function WatchListScreen() {
  const { watchlistCoinIds } = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  function transformCoinIds() {
    return watchlistCoinIds.join('%2C');
  }

  async function fetchWatchlistedCoins() {
    if (loading || watchlistCoinIds.length === 0) {
      return;
    }

    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(
      1,
      transformCoinIds()
    );
    setCoins(watchlistedCoinsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchWatchlistedCoins();
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={fetchWatchlistedCoins}
        />
      }
    />
  );
}
