import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          marginTop: 400,
          fontSize: 29,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed!!!
      </Text>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
