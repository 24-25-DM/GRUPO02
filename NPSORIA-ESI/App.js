import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPantalla from "./src/views/LoginPantalla";
import RegistroPantalla from "./src/views/RegistroPantalla";
import VehiculosPantalla from "./src/views/VehiculosPantalla";
import NuevoVehiculoPantalla from "./src/views/NuevoVehiculoPantalla";
import EditarVehiculoPantalla from "./src/views/EditarVehiculoPantalla";


const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPantalla">
            <Stack.Screen name="LoginPantalla" component={LoginPantalla} />
            <Stack.Screen name="RegistroPantalla" component={RegistroPantalla} />
            <Stack.Screen name="VehiculosPantalla" component={VehiculosPantalla} />
            <Stack.Screen name="NuevoVehiculoPantalla" component={NuevoVehiculoPantalla} />
            <Stack.Screen name="EditarVehiculoPantalla" component={EditarVehiculoPantalla} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;


