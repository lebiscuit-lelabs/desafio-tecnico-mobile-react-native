import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useCart } from "../../hooks/Cart";

const Card = ({ product, hiddenInformation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { add, remove } = useCart();
  const { item } = product;
  const handlePressModal = (product) => {
    add(product);
    setModalVisible(!modalVisible);
  };

  const removeItem = (product) => {
    remove(product);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modal.centeredView}>
          <View style={modal.modalView}>
            <TouchableOpacity
              style={modal.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="md-close" size={30} color="#000" solid />
            </TouchableOpacity>
            <Image style={modal.image} source={item.image} />

            <Text style={modal.name}>{item.name}</Text>
            <Text style={modal.price}>{item.price}</Text>
            <Text style={modal.description}>{item.description}</Text>
            <TouchableOpacity
              style={[modal.button, modal.buttonAddCart]}
              onPress={() => handlePressModal(item)}
            >
              <Text style={modal.textStyle}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.content}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.informations}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      {!hiddenInformation && (
        <TouchableOpacity
          style={[styles.buttonDetail, styles.buttonDetailRemove]}
          onPress={() => removeItem(item)}
        >
          <Icon name="md-trash" style={styles.actionButtonIcon} />
        </TouchableOpacity>
      )}
      {hiddenInformation && (
        <TouchableOpacity
          style={[styles.buttonDetail, styles.buttonDetailInformation]}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="md-information-circle" style={styles.actionButtonIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fffff9",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    width: 350,
    height: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 10,
    paddingLeft: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },

  image: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },

  informations: {
    flexDirection: "column",
  },

  name: {
    fontSize: 18,
    marginBottom: 10,
    maxWidth: 240,
  },

  price: {
    fontSize: 14,
  },

  buttonDetail: {
    height: "100%",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonDetailInformation: {
    backgroundColor: "#1E90FF",
  },

  buttonDetailRemove: {
    backgroundColor: "#D30000",
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

const modal = StyleSheet.create({
  centeredView: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },

  image: {
    width: 300,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },

  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },

  informations: {
    flexDirection: "column",
  },

  name: {
    fontSize: 18,
    marginBottom: 10,
  },

  price: {
    fontSize: 14,
    marginBottom: 10,
  },

  priceCheckout: {
    fontSize: 20,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 30,
  },

  button: {
    width: "100%",
    marginTop: 20,
    padding: 15,
    elevation: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonAddCart: {
    backgroundColor: "#1E90FF",
  },
  buttonClose: {
    position: "absolute",
    top: 10,
    left: 340,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
