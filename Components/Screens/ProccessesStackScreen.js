import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import Processes from "../Pages/Processes";
import ProcessesNavbarTabScreen from "./ProcessesNavbarTabscreen";

const Stack = createNativeStackNavigator();

export default function ProcessesStackScreen () {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomePage" component={ProcessesNavbarTabScreen} />
        </Stack.Navigator>
    )
}