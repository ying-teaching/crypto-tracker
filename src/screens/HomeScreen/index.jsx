import { View, Text, FlatList } from 'react-native';

import CoinItem from '../../components/CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
    </View>
  );
};

export default HomeScreen;
