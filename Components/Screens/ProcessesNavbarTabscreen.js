import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "../Pages/Processes/Overview";
import Apply from "../Pages/Processes/Apply";
import MyApplications from "../Pages/Processes/MyApplications";
import NewApplications from "../Pages/Processes/NewApplications";
import Archive from "../Pages/Processes/Achive";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function ProcessesNavbarTabScreen() {
  const hideHeader = () => ({
    headerShown: false,
  });

  const addLogos = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Overview") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Reports") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "home" : "home-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "blue",
    tabBarInActiveTintColor: "grey",
  });
  return (
    <Tab.Navigator screenOptions={
        ({ route }) => ({
            headerShown:false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Overview") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Reports") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "home" : "home-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInActiveTintColor: "grey",
          })}
     >
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Apply" component={Apply} />
      <Tab.Screen name="My Applications" component={MyApplications} />
      <Tab.Screen name="New Applications" component={NewApplications} />
    </Tab.Navigator>
  );
}
