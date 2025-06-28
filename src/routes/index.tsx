import { createStackNavigator } from "@react-navigation/stack";
import { Tasks } from "../screens/tasks";
import { NavigationContainer } from "@react-navigation/native";
import { TaskForm } from "../screens/tasks/form";

export type Routes = {
  taskList: undefined;
  taskForm: { taskId?: string };
};

const Stack = createStackNavigator<Routes>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="taskList"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="taskList"
          component={Tasks}
          options={{ title: "Tarefas" }}
        />
        <Stack.Screen name="taskForm" component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
