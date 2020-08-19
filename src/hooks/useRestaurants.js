import { useState, useEffect } from "react";
import yelp from "../api/yelp";

const useRestaurants = () => {
   const [restaurants, setRestaurants] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");

   const searchAPI = async (searchTerm) => {
      try {
         const response = await yelp.get("/search", {
            params: {
               limit: 50,
               term: searchTerm,
               location: "san jose",
            },
         });
         setRestaurants(response.data.businesses);
      } catch (error) {
         console.log(error.message);
         setErrorMessage("Something went wrong...");
      }
   };

   useEffect(() => {
      searchAPI("pasta");
   }, []);

   return [searchAPI, restaurants, errorMessage];
};

export default useRestaurants;
