import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import WriteScreen from "../screens/WriteScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Write" 
        component={WriteScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}