import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/card";
import { productList } from "../../../data";

const Home = () => {
  const navigation = useNavigation();
  const renderItem = (item, index) => (
    <Card product={item} key={index} hiddenInformation />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        renderIcon={() => (
          <Icon name="md-cart" style={styles.actionButtonIcon} />
        )}
        style={{ zIndex: 99 }}
        onPress={() => {
          navigation.navigate("Checkout");
        }}
      />
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff9",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
