import { GestureResponderEvent, Text, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Task } from "../../../../@types/task";
import TaskService from "../../../../services/task";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { CheckBox } from "react-native-elements";
import { useEffect, useState } from "react";

export default function TaskListItem({ task }: PropsType) {
  const [completed, setCompleted] = useState(task.done);
  const navigation = useAppNavigation();
  const statusStyle = task.done ? styles.done : styles.pending;
  const status = task.done ? "Finalizada" : "Pendente";

  const completeTask = () => setCompleted((previous) => !previous);

  const deleteTask = async (id: string) => {
    try {
      await TaskService.delete(id);
    } catch (error) {
      console.error("Falha ao excluir o registro", error);
    }
  };

  useEffect(() => {
    const updateTask = async () => {
      try {
        await TaskService.update(task.id, { done: completed });
      } catch (error) {
        console.error("Falha ao excluir o registro", error);
      }
    };
    updateTask();
  }, [task.id, completed]);

  return (
    <View style={[styles.container, statusStyle]}>
      <View>
        <CheckBox
          center
          style={styles.checkbox}
          checked={completed}
          onPress={completeTask}
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
