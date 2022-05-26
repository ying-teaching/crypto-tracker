import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchableDropDown from 'react-native-searchable-dropdown';
import styles from './styles';
import { useRecoilState } from 'recoil';
import { allPortfolioBoughtAssetsInStorage } from '../../atoms/PortfolioAssets';

import { getAllCoins } from '../../services/requests';

const AddNewAssetScreen = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('');

  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

  const onAddNewAsset = () => {};

  async function fetchAllCoins() {
    if (loading) return;

    setLoading(true);
    const allCoins = await getAllCoins();
    console.log('allCoins returned');
    setAllCoins(allCoins);
    setLoading(false);
  }

  useEffect(fetchAllCoins, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown
        items={allCoins}
        onItemSelect={(item) => console.log(item)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{
          color: 'white',
        }}
        resetValue={false}
        placeholder={'Select a coin...'}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: 'transparent',
          style: styles.textInput,
        }}
      />
      <View style={styles.boughtQuantityContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={boughtAssetQuantity}
            onChangeText={setBoughtAssetQuantity}
            placeholder="0"
            keyboardType="numeric"
            style={{ color: 'white', fontSize: 90 }}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
        <Text style={styles.pricePerCoin}>$40000 per coin</Text>
      </View>
      <Pressable style={styles.buttonContainer} onPress={onAddNewAsset}>
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default AddNewAssetScreen;
