import * as React from "react";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import User from "./src/screens/User";
import UserList from "./src/screens/UserList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersList">
        <Stack.Screen
          options={{headerShown: false}}
          name="UsersList"
          component={UserList}
        />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
