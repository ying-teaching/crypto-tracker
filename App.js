import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
          }}
          style={{
            height: 30,
            width: 30,
            marginRight: 10,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={12}
              color="white"
              style={{ alignSelf: 'center', marginRight: 5 }}
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    padding: 15,
    justifyContent: 'space-between',
  },
  rank: {
    fontWeight: 'bold',
    color: 'white',
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5, // not applicable to Text
    marginRight: 5,
  },
});
