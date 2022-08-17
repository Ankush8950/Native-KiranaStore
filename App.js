import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HeaderItem from "./components/HeaderItem"
import FollowPage from "./components/product/FollowPage";
import ProductItem from "./components/product/ProductItem";
import ViewCart from "./components/product/ViewCart";
import RouterBtn from "./components/RouterBtn";
import StoreItem from "./components/StoreItem/StoreItem";
import Deliverymode from "./components/StoreItem/Deliverymode";
import CheckDelivery from "./components/StoreItem/CheckDelivery";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HeaderItem /> */}
      {/* <FollowPage /> */}
      {/* <RouterBtn /> */}
      {/* <ProductItem /> */}
      {/* <ViewCart /> */}
      <CheckDelivery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});
