import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPantalla from "./src/views/LoginPantalla";
import VehiculosPantalla from "./src/views/VehiculosPantalla";
import NuevoVehiculoPantalla from "./src/views/NuevoVehiculoPantalla";


const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPantalla">
            <Stack.Screen name="LoginPantalla" component={LoginPantalla} options={{ title: "Login" }} />
             <Stack.Screen name="VehiculosPantalla" component={VehiculosPantalla} options={{ title: "Vehículos" }} />
             <Stack.Screen name="NuevoVehiculoPantalla" component={NuevoVehiculoPantalla} options={{ title: "Nuevo Vehículo" }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;


