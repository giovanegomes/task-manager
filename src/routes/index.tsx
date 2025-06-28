import { createStackNavigator } from "@react-navigation/stack";
import { Tasks } from "../screens/tasks";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Tarefas",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
