import { View, Text, FlatList, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PortfolioAssetsItem from '../PortfolioAssetsItem';

import { useRecoilValue, useRecoilState } from 'recoil';
import { allPortfolioAssets } from '../../../../atoms/PortfolioAssets';

const PortfolioAssetsList = () => {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);

  const getCurrentyBalance = () =>
    assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.currentPrice * currentAsset.quantityBought,
      0
    );

  const getCurrentValueChange = () => {
    const currentBalance = getCurrentyBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return (currentBalance - boughtBalance).toFixed(2);
  };

  const getCurrentPercentageChange = () => {
    const currentBalance = getCurrentyBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return (((currentBalance - boughtBalance) / boughtBalance) * 100).toFixed(
      2
    );
  };

  const isChangePositive = getCurrentValueChange() >= 0;
  const changeColor = isChangePositive ? '#16c784' : '#ea3943';

  return (
    <FlatList
      data={assets}
      renderItem={({ item }) => <PortfolioAssetsItem assetItem={item} />}
      ListHeaderComponent={
        <>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentBalance}>Current Balance</Text>
              <Text style={styles.currentBalanceValue}>
                ${getCurrentyBalance().toFixed(2)}
              </Text>
              <Text style={{ ...styles.valueChange, color: changeColor }}>
                ${getCurrentValueChange()}All Time)
              </Text>
            </View>
            <View style={styles.priceChangePercentageContainer}>
              <AntDesign
                name={isChangePositive ? 'caretup' : 'caretdown'}
                size={12}
                color={changeColor}
                style={{ alignSelf: 'center', marginRight: 5 }}
              />
              <Text style={{ ...styles.percentageChange, color: changeColor }}>
                {getCurrentPercentageChange()}%
              </Text>
            </View>
          </View>
          <Text style={styles.assetsLabel}>Your Assets</Text>
        </>
      }
      ListFooterComponent={
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('AddNewAssetScreen')}
        >
          <Text style={styles.buttonText}>Add New Asset</Text>
        </Pressable>
      }
    />
  );
};

export default PortfolioAssetsList;
