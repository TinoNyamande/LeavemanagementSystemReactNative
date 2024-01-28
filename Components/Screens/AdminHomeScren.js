import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";

const Stack = createNativeStackNavigator();
export default function AdminHomeScreen () {
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
}