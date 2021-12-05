import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import Card from "../../components/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../hooks/Cart";

const Checkout = () => {
  const { cart } = useCart();
  const navigation = useNavigation();
  const renderItem = (item, index) => {
    return <Card product={item} key={index} hiddenInformation={false} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fffff9" }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="md-arrow-back" size={30} color="#000" solid />
        </TouchableOpacity>
        <Text style={styles.headerText}>Carrinho</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cart.products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerLabel}>Total</Text>
          <Text style={styles.footerPrice}>{cart.totalValue}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDetails}
          onPress={() => console.log(cart)}
        >
          <Text style={styles.buttonText}>Concluir Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 75,
    backgroundColor: "#0000",
    padding: 20,
  },
  headerText : {
    fontSize: 25,
    fontWeight: 'bold',
  },  
  buttonClose: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  footer: {
    height: 125,
    paddingHorizontal: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLabel: {
    fontSize: 16,
  },

  footerPrice: {
    fontSize: 28,
  },

  buttonDetails: {
    backgroundColor: "#1E90FF",
    height: 55,
    width: 355,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
