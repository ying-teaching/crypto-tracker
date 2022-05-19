# Crypto Price Tracker

This demo app is based on the [Youtube Crypto Price Tracker Tutorials](https://www.youtube.com/playlist?list=PLY3ncAV1dSVDcxSwME2axkJmu5lcJqW0t).

## Chapter 1 Coin Items

Run `expo init CyptoPriceTracker -t blan` to initialize the project.

### 1.1 Coin Item

Display a single coin item.

You can find Expo icons in [icons.expo.fyi](https://icons.expo.fyi/).

### 1.2 Item List

Use the sample data to display a list of coins. Put the coin item in a component and the coin list in a screen.

### 1.3 Coin Detailed Header

Create a header component of the coin detailed screen.

### 1.4 Coin Detailed Price

Add coin price and change percentage.

### 1.5 Chart

Add [React Native Animated Charts](https://github.com/rainbow-me/react-native-animated-charts). It depends on [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/). Use [Expo Renaimated Doc](https://docs.expo.dev/versions/latest/sdk/reanimated/) to find its installation command: `expo install react-native-reanimated`. Add `plugins: ['react-native-reanimated/plugin']` to `babel.config.js`. Run `yarn add @rainbow-me/animated-charts`

Run `expo start --clear` to rebuild.

### 1.6 Converter

Convert between Coin price and USD.

## 2 Navigation and Data

### 2.1 Navigation

Follow the [React Native Navigation doc](https://reactnavigation.org/docs/getting-started/) to install packages for Expo managed project.

- `yarn add @react-navigation/native`
- `expo install react-native-screens react-native-safe-area-context`
- `yarn add @react-navigation/native-stack`

Then add navigation code to home and coin detailed header.

### 2.2 Fetch Data

Install Axios `yarn add axios`. The the [Query API](https://www.coingecko.com/en/api/documentation) to get the query string.
