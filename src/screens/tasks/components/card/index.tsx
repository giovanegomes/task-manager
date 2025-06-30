import { Text, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Task } from "../../../../@types/task";
import TaskService from "../../../../services/task";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { useCallback, useState } from "react";
import Checkbox from "expo-checkbox";

export default function TaskListItem({ task }: PropsType) {
  const [completed, setCompleted] = useState(task.done);
  const navigation = useAppNavigation();
  const statusStyle = completed ? styles.done : styles.pending;
  const status = completed ? "Finalizada" : "Pendente";

  const completeTask = useCallback(
    async (newStatus: boolean) => {
      try {
        setCompleted(newStatus);
        await TaskService.update(task.id, { done: newStatus });
      } catch (error) {
        console.error("Falha ao atualizar o registro", error);
      }
    },
    [task.id, completed]
  );

  const deleteTask = async (id: string) => {
    try {
      await TaskService.delete(id);
    } catch (error) {
      console.error("Falha ao excluir o registro", error);
    }
  };

  return (
    <View style={[styles.container, statusStyle]}>
      <View>
        <Checkbox
          style={styles.checkbox}
          value={completed}
          onValueChange={completeTask}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{task.description}</Text>
        <View>
          <View style={styles.content}>
            <Text>
              {task.owner} - {status}
            </Text>
          </View>
        </View>
      </View>
      <Feather
        name="trash-2"
        size={30}
        color="red"
        style={styles.edit}
        onPress={() => deleteTask(task.id)}
      />
      <Feather
        name="edit"
        size={30}
        color="blue"
        style={styles.edit}
        onPress={() => navigation.navigate("taskForm", { taskId: task.id })}
      />
    </View>
  );
}

type PropsType = {
  task: Task;
};
