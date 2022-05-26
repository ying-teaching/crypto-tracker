import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import SearchableDropDown from 'react-native-searchable-dropdown';

import styles from './styles';

const AddNewAssetScreen = () => {
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown
        items={[]}
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
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('AddNewAssetScreen')}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default AddNewAssetScreen;
