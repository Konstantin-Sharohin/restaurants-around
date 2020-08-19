import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";

import { styles } from "./styles";

const RestaurantsList = ({ groupTitle, restaurants, navigation: { navigate } }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.mainTitle}>{groupTitle}</Text>
         {restaurants?.length > 0 ? (
            <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               data={restaurants}
               keyExtractor={(restaurant) => restaurant.id}
               renderItem={({ item }) => (
                  <TouchableOpacity
                     onPress={() => {
                        navigate("Details", { id: item.id });
                     }}
                  >
                     <RestaurantDetails restaurant={item} />
                  </TouchableOpacity>
               )}
            />
         ) : (
            <Text style={styles.noResults}>Nothing found</Text>
         )}
      </View>
   );
};

export default withNavigation(RestaurantsList);
