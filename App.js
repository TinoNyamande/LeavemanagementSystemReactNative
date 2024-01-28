import { View } from "react-native";
import Login from "./Components/Auth/Login";
import { globalStyles } from "./Components/Styles/GlobalStylesheet";
import Home from "./Components/Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProcessesStackScreen from "./Components/Screens/ProccessesStackScreen";
import ReportsStackScreen from "./Components/Screens/ReportsStackScreen";
import SettingsStackScreen from "./Components/Screens/SettingsStackScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //      <Tabs.Navigator
    //       screenOptions={({route})=>({
    //        tabBarIcon: ({focused,color,size}) =>{
    //         let iconName;
    //         if(route.name === "Home") {
    //           iconName = focused? "home" : "home-outline"
    //         }else if (route.name === "Reports") {
    //           iconName = focused? "home" : "home-outline"
    //         }else if (route.name === "Settings") {
    //           iconName = focused? "home" : "home-outline"
    //         }
    //         return <Ionicons name={iconName} size={size} color={color} />

    //        },
    //        tabBarActiveTintColor:"blue",
    //        tabBarInActiveTintColor:"grey",
    //      })}
    //      >
    //       <Tabs.Screen name="Home" component={ProcessesStackScreen}/>
    //       <Tabs.Screen name="Reports" component={ReportsStackScreen}/>
    //       <Tabs.Screen name="Settings" component={SettingsStackScreen}/>
    //      </Tabs.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ProcessesStackScreen} />
        <Drawer.Screen name="Reports" component={ReportsStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
