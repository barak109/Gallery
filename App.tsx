import * as React from "react";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import User from "./src/screens/User";
import UsersList from "./src/screens/UsersList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersList">
        <Stack.Screen
          options={{headerShown: false, title: "Randomize me!"}}
          name="UsersList"
          component={UsersList}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({route}: any) => ({title: route.params.item.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
