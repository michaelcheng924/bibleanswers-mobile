import { createStackNavigator } from "react-navigation";

import ScreenHome from "./components/ScreenHome";
import ScreenPost from "./components/ScreenPost";
import FilterModal from "./components/FilterModal";

const MainStack = createStackNavigator({
  Home: {
    screen: ScreenHome
  },
  Post: {
    screen: ScreenPost
  }
});

export default createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    FilterModal: {
      screen: FilterModal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
