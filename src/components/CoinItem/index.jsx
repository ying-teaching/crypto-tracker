import { Image, Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const ONE_TRILLION = 1000000000000;
const ONE_BILLION = 1000000000;
const ONE_MILLION = 1000000;

const normalizeMarketCap = (marketCap) => {
  if (marketCap >= ONE_TRILLION) {
    return `${Math.floor(marketCap / ONE_TRILLION)} T`;
  }
  if (marketCap >= ONE_BILLION) {
    return `${Math.floor(marketCap / ONE_BILLION)} B`;
  }
  if (marketCap >= ONE_MILLION) {
    return `${Math.floor(marketCap / ONE_MILLION)} M`;
  }

  return marketCap;
};

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate('CoinDetailedScreen', { coinId: id })}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: 'center',
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={percentageColor}
            style={{ alignSelf: 'center', marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: 'white' }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
