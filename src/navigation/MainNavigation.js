import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Create from "../screens/create/Create";
import Profile from "../screens/profile/Profile";
import HomeNavigation from "./homeNavigation";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="home" component={HomeNavigation} />
      <Tab.Screen name="create" component={Create} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
