import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const RestaurantDetails = ({ restaurant }) => {
   return (
      <View style={styles.container}>
         <Image source={{ uri: restaurant.image_url }} style={styles.restaurantImage} />
         <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
         <Text style={styles.restaurantRating}>
            {restaurant.rating} stars, {restaurant.review_count} reviews
         </Text>
      </View>
   );
};

export default RestaurantDetails;
