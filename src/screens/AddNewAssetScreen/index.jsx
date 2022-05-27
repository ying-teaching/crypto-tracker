import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchableDropDown from 'react-native-searchable-dropdown';
import styles from './styles';
import { useRecoilState } from 'recoil';

import { allPortfolioBoughtAssetsInStorage } from '../../atoms/PortfolioAssets';
import { getAllCoins, getDetailedCoinData } from '../../services/requests';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AddNewAssetScreen = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('');

  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

  const navigation = useNavigation();
  const isQuantityEntered = boughtAssetQuantity !== '';

  const onAddNewAsset = async () => {
    const newAsset = {
      id: selectedCoin.id,
      name: selectedCoin.name,
      image: selectedCoin.image.small,
      ticker: selectedCoin.symbol.toUpperCase(),
      quantityBought: parseFloat(boughtAssetQuantity),
      priceBought: selectedCoin.market_data.current_price.usd,
    };

    const newAssets = [...assetsInStorage, newAsset];
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem('@portfolio_coins', jsonValue);
    setAssetsInStorage(newAssets);
    navigation.goBack();
  };

  async function fetchAllCoins() {
    if (loading) return;

    setLoading(true);
    const allCoins = await getAllCoins();
    setAllCoins(allCoins);
    setLoading(false);
  }

  async function fetchCoinInfo() {
    if (loading || selectedCoinId === '') return;

    setLoading(true);
    const coinInfo = await getDetailedCoinData(selectedCoinId);
    setSelectedCoin(coinInfo);
    setLoading(false);
  }

  useEffect(() => {
    fetchAllCoins();
  }, []);

  useEffect(() => {
    fetchCoinInfo();
  }, [selectedCoinId]);

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown
        items={allCoins}
        onItemSelect={(item) => setSelectedCoinId(item.id)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{
          color: 'white',
        }}
        resetValue={false}
        placeholder={selectedCoinId || 'Select a coin...'}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: 'transparent',
          style: styles.textInput,
        }}
      />
      {selectedCoin && (
        <>
          <View style={styles.boughtQuantityContainer}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                value={boughtAssetQuantity}
                onChangeText={setBoughtAssetQuantity}
                placeholder="0"
                keyboardType="numeric"
                style={{ color: 'white', fontSize: 90 }}
              />
              <Text style={styles.ticker}>
                {selectedCoin.symbol.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.pricePerCoin}>
              {selectedCoin.market_data.current_price.usd} per coin
            </Text>
          </View>
          <Pressable
            style={{
              ...styles.buttonContainer,
              backgroundColor: isQuantityEntered ? '#4169E1' : '#303030',
            }}
            onPress={onAddNewAsset}
            disabled={!isQuantityEntered}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: isQuantityEntered ? 'white' : 'grey',
              }}
            >
              Add New Asset
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default AddNewAssetScreen;
