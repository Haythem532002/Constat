import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Canvas from "./Canvas";
const SignatureComponent = () => {
  const [path, setPath] = useState([]);
  const canvasRef = useRef(null);

  const handleTouchStart = ({ nativeEvent }) => {
    const { locationX, locationY } = nativeEvent;
    setPath([{ x: locationX, y: locationY }]);
  };

  const handleTouchMove = ({ nativeEvent }) => {
    const { locationX, locationY } = nativeEvent;
    setPath((prevPath) => [...prevPath, { x: locationX, y: locationY }]);
  };

  const handleClear = () => {
    setPath([]);
    const context = canvasRef.current.getContext("2d");
    context.clearRect(
      0,
      0,
      Dimensions.get("window").width,
      Dimensions.get("window").height
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <View style={styles.canvasContainer}>
        <View style={styles.canvasBorder}>
          {/* Render the canvas element directly */}
          <Canvas
            ref={canvasRef}
            style={styles.canvas}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  clearButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  canvasContainer: {
    borderWidth: 1,
    borderColor: "black",
  },
  canvas: {
    width: 300,
    height: 150,
  },
});

export default SignatureComponent;
