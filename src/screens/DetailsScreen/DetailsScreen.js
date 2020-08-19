import React, { useState, useEffect } from "react";
import yelp from "../../api/yelp";
import { Text, FlatList, Image } from "react-native";

import { styles } from "./styles";

const DetailsScreen = ({ navigation }) => {
   const [restaurantDetails, setRestaurantDetails] = useState(null);

   const restaurantID = navigation.getParam("id");

   const getRestaurant = async (id) => {
      const response = await yelp.get(`/${id}`);
      setRestaurantDetails(response.data);
   };

   useEffect(() => {
      getRestaurant(restaurantID);
   }, []);

   if (!restaurantDetails) {
      return null;
   }

   return (
      <>
         <Text style={styles.mainTitle}>Details Screen</Text>
         <Text style={styles.restarauntTitle}>{restaurantDetails.name}</Text>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurantDetails.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
               <Image source={{ uri: item }} style={styles.restarauntImage} />
            )}
            style={styles.imagesList}
         />
      </>
   );
};

export default DetailsScreen;
