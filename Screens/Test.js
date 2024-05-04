// import React, { useState, useRef } from "react";
// import { StyleSheet, View, Image, Button } from "react-native";
// import Signature from "react-native-signature-canvas";

// const Sign = () => {
//   const ref = useRef();
//   const [draw, setDraw] = useState(null);
//   const handleOK = (draw) => {
//     setDraw(draw);
//   };
//   const handleEmpty = () => {
//     console.log("Empty");
//   };
//   const style = `.m-signature-pad--footer
//     .button {
//       background-color: red;
//       color: #FFF;
//   }`;
//   const handleUndo = () => {
//     ref.current.undo();
//   };
//   return (
//     <View style={{ flex: 1, padding: 5 }}>
//       <View style={{ width: 380, height: 360, borderWidth: 1 }}>
//         <Signature
//           ref={ref}
//           onOK={handleOK}
//           onEmpty={handleEmpty}
//           webStyle={style}
//         />
//       </View>
//       <Button title="Undo" onPress={() => handleUndo()} />
//       <Button
//         title="Size"
//         onPress={() => {
//           ref.current.changePenSize(3, 3);
//         }}
//       />
//       <Button
//         title="red"
//         onPress={() => {
//           ref.current.changePenColor("#ff0000");
//         }}
//       />
//       {draw ? (
//         <Image
//           resizeMode={"contain"}
//           style={{ width: 360, height: 350 }}
//           source={{ uri: draw }}
//         />
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   preview: {
//     width: 335,
//     height: 300,
//     backgroundColor: "#F8F8F8",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 15,
//     borderWidth: 1,
//   },
//   previewText: {
//     color: "#FFF",
//     fontSize: 14,
//     height: 40,
//     lineHeight: 40,
//     paddingLeft: 10,
//     paddingRight: 10,
//     backgroundColor: "#69B2FF",
//     width: 120,
//     textAlign: "center",
//     marginTop: 10,
//   },
// });

// export default Sign;
