import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen/DetailsScreen";

const navigator = createStackNavigator(
   {
      Search: SearchScreen,
      Details: DetailsScreen,
   },
   {
      initialRouteName: "Search",
      defaultNavigationOptions: {
         title: "Restaurants near you",
      },
   }
);

export default createAppContainer(navigator);
