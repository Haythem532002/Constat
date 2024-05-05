import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { captureRef } from "react-native-view-shot";

export default function Test() {
  const [capturedImageUri, setCapturedImageUri] = useState("");

  const takeScreenShot = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "jpg",
        quality: 1,
      });
      setCapturedImageUri(uri);
    } catch (error) {
      console.log("Oops, failed to capture!", error);
    }
  };
  const viewRef = useRef();

  return (
    <View style={styles.container}>
      <View ref={viewRef} style={styles.captureView}>
        <Text>This is the view you want to capture</Text>
        <Text>Haythem Khiari</Text>
      </View>
      {capturedImageUri && (
        <View style={styles.capturedImageView}>
          <Image
            source={{ uri: capturedImageUri }}
            style={styles.capturedImage}
          />
          <Text>This is captured</Text>
        </View>
      )}
      <TouchableOpacity onPress={takeScreenShot}>
        <Text>Take Screenshot</Text>
      </TouchableOpacity>
      <Text>Haythem Khiari</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 300,
  },
  captureView: {
    width: 200,
    height: 200,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  capturedImageView: {
    marginTop: 10,
    alignItems: "center",
  },
  capturedImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
