import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ScreenLogin } from '../screens/TelaInicial';
import { TelaRegistro } from '../screens/TelaRegistro';
import { TelaEditar } from '../screens/TelaEditar';


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenLogin"
                component={ScreenLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TelaRegistro"
                component={TelaRegistro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TelaEditar"
                component={TelaEditar}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
