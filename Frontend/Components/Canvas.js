import React from "react";
import { View } from "react-native";

const Canvas = React.forwardRef((props, ref) => {
  return <View ref={ref} {...props} />;
});

export default Canvas;
