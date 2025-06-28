import { Text, View } from "react-native";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Routes } from "../../routes";
import { useLayoutEffect } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Feather } from "@expo/vector-icons";

export function TaskForm() {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<Routes, "taskForm">>();
  const { taskId } = route.params ?? {};

  useLayoutEffect(() => {
    const title = taskId ? "Editando tarefa" : "Nova tarefa";
    navigation.setOptions({
      title,
      headerRight: () => (
        <Feather
          name="check"
          size={30}
          style={{ marginRight: 10 }}
          onPress={() => console.log("salvar")}
        />
      ),
    });
  }, [navigation, taskId]);

  return (
    <View style={styles.container}>
      <Text>new task page</Text>
    </View>
  );
}
