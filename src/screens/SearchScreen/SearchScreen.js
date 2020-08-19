import React, { useState } from "react";
import { Text, ScrollView } from "react-native";

import useRestaurants from "../../hooks/useRestaurants";

import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantsList from "../../components/RestaurantsList/RestaurantsList";

import { styles } from "./styles";

const SearchScreen = () => {
   const [term, setTerm] = useState("");

   const [searchAPI, restaurants, errorMessage] = useRestaurants();

   const filterResultsByPrice = (price) =>
      restaurants.filter((restaurant) => restaurant.price === price);

   return (
      <>
         <Text style={styles.mainTitle}>Search Screen</Text>
         <SearchBar term={term} setTerm={setTerm} searchAPI={searchAPI} />
         <Text style={styles.resultText}>We have found {restaurants.length} results</Text>
         {errorMessage ? <Text style={styles.errors}>{errorMessage}</Text> : null}
         {restaurants?.length ? (
            <ScrollView>
               <RestaurantsList
                  restaurants={filterResultsByPrice("$")}
                  groupTitle="Cost Effective"
               />
               <RestaurantsList restaurants={filterResultsByPrice("$$")} groupTitle="Bit Pricier" />
               <RestaurantsList
                  restaurants={filterResultsByPrice("$$$")}
                  groupTitle="Big Spender"
               />
            </ScrollView>
         ) : (
            <Text>Loading...</Text>
         )}
      </>
   );
};

export default SearchScreen;
