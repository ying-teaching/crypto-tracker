import { Image, Text, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { useWatchlist } from '../../../../Contexts/WatchlistContext';

const CoinDetailedHeader = (props) => {
  const { coinId, image, symbol, marketCapRank } = props;

  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  function checkIfCoinIdWatchlisted() {
    return watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);
  }

  function handleWatchlistCoin() {
    if (checkIfCoinIdWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    } else {
      return storeWatchlistCoinId(coinId);
    }
  }

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIdWatchlisted() ? 'star' : 'star-o'}
        size={25}
        color={checkIfCoinIdWatchlisted() ? '#FFBF00' : 'white'}
        onPress={() => handleWatchlistCoin()}
      />
    </View>
  );
};

export default CoinDetailedHeader;
