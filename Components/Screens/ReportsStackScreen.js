import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import Reports from "../Pages/Reports";

const Stack = createNativeStackNavigator();

export default function ReportsStackScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ReportsHome" component={Reports} />
        </Stack.Navigator>
    )
}