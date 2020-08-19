import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const SearchBar = ({ term, setTerm, searchAPI }) => {
   return (
      <View style={styles.backgroundStyle}>
         <Feather name="search" style={styles.iconStyle} />
         <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.inputStyle}
            value={term}
            onChangeText={(newTerm) => {
               setTerm(newTerm);
            }}
            onEndEditing={() => {
               searchAPI(term);
            }}
         />
      </View>
   );
};

export default SearchBar;
