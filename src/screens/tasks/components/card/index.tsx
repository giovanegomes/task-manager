import { Text, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Task } from "../../../../@types/task";

export default function TaskListItem({ task }: PropsType) {
  const statusStyle = task.done ? styles.done : styles.pending;
  const status = task.done ? "Finalizada" : "Pendente";

  const deleteTask = (id: string) => {
    console.log("excluir tarefa", id);
  };

  return (
    <View style={[styles.container, statusStyle]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.description}</Text>
        <View>
          <View style={styles.bottom}>
            <Text>{task.owner}</Text>
            <Text>{status}</Text>
          </View>
        </View>
      </View>
      <Feather
        name="trash-2"
        size={30}
        color="red"
        onPress={() => deleteTask(task.id)}
      />
    </View>
  );
}

type PropsType = {
  task: Task;
};
