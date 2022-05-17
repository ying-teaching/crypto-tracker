# Chapter 1

Run `expo init CyptoPriceTracker -t blan` to initialize the project.

## 1 Coin Item

Display a single coin item.

You can find Expo icons in [icons.expo.fyi](https://icons.expo.fyi/).

## 2 Item List

Use the sample data to display a list of coins. Put the coin item in a component and the coin list in a screen.

## 3 Coin Detailed Header

Create a header component of the coin detailed screen.

## 4 Coin Detailed Price

Add coin price and change percentage.

## 5 Chart

Add [React Native Animated Charts](https://github.com/rainbow-me/react-native-animated-charts). It depends on [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/). Use [Expo Renaimated Doc](https://docs.expo.dev/versions/latest/sdk/reanimated/) to find its installation command: `expo install react-native-reanimated`. Add `plugins: ['react-native-reanimated/plugin']` to `babel.config.js`. Run `yarn add @rainbow-me/animated-charts`

Run `expo start --clear` to rebuild.
