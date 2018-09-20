import { createStackNavigator } from "react-navigation";

import ScreenHome from "./components/ScreenHome";
import ScreenPost from "./components/ScreenPost";

export default createStackNavigator({
  Home: {
    screen: ScreenHome
  },
  Post: {
    screen: ScreenPost
  }
});
