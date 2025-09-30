import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";

export default function Test () {
  return (
    <View style={{ width: 100, height: 100 }}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "GAT Assurance", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
    </View>
  );
}
