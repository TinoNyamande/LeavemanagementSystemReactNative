import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";

const Stack = createNativeStackNavigator();

export default function SettingsStackScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SettingsHome" component={Settings} />
        </Stack.Navigator>
    )
}