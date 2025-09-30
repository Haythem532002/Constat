// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
// import {
//   GestureHandlerRootView,
//   PanGestureHandler,
// } from "react-native-gesture-handler";
// const DrawingPad = () => {
//   const [lines, setLines] = useState([]);
//   const [currentPath, setCurrentPath] = useState([]);

//   const handleDraw = ({ nativeEvent }) => {
//     const { state, translationX, translationY } = nativeEvent;

//     if (state === 4) {
//       setCurrentPath([...currentPath, { x: translationX, y: translationY }]);
//     } else if (state ===5) {
//       setLines([...lines, currentPath]);
//       setCurrentPath([]);
//     }
//   };

//   const handleClearDrawing = () => {
//     setLines([]);
//   };

//   return (
//     <View style={styles.container}>
//       <GestureHandlerRootView>
//         <PanGestureHandler onGestureEvent={handleDraw}>
//           <View style={styles.canvas} />
//         </PanGestureHandler>
//       </GestureHandlerRootView>

//       <TouchableOpacity style={styles.button} onPress={handleClearDrawing}>
//         <Text style={styles.buttonText}>Clear</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   canvas: {
//     width: 300,
//     height: 200,
//     borderWidth: 1,
//     borderColor: "#000",
//     backgroundColor: "#fff",
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: "#f00",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default DrawingPad;
