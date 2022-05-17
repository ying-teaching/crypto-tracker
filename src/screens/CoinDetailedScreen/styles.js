import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  currentPrice: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
  priceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceChange: { color: 'white', fontSize: 17, fontWeight: '500' },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
