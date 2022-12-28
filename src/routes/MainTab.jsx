import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import FeedsScreen from "../screens/main/FeedsScreen";
import CalendarScreen from "../screens/main/CalendarScreen";
import SearchScreen from "../screens/main/SearchScreen";
import SearchHeader from "../components/layout/Feeds/SearchHeader";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#4284b7",
      }}
    >
      <Tab.Screen 
        name="Feeds" 
        component={FeedsScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          title: "검색",
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />
        }}
      />
    </Tab.Navigator>
  )
}