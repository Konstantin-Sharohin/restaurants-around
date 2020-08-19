import { Text, ScrollView, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: { flex: 1 },

   mainTitle: {
      alignSelf: "center",
      fontSize: 20,
      color: "grey",
      paddingVertical: 20,
   },

   resultText: {
      alignSelf: "center",
      paddingVertical: 20,
   },

   errors: {
      alignSelf: "center",
      paddingVertical: 20,
      color: "red",
   },
});
