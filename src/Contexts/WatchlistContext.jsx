import { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistContext = createContext();
export const useWatchlist = () => useContext(WatchlistContext);

export default function WatchlistProvider({ children }) {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

  async function getWatchlistData() {
    try {
      const jsonValue = await AsyncStorage.getItem('@watchlist_coins');
      setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getWatchlistData();
  }, []);

  async function storeWatchlistCoinId(coinId) {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (e) {
      console.log(e);
    }
  }

  async function removeWatchlistCoinId(coinId) {
    try {
      const newWatchlist = watchlistCoinIds.filter(
        (coindIdValue) => coindIdValue != coinId
      );

      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <WatchlistContext.Provider
      value={{ watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
