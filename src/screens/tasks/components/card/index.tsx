import { Text, View } from "react-native";
import { styles } from "./styles";
import { useMemo } from "react";
import { Feather } from "@expo/vector-icons";
import { Task } from "../../../../@types/task";

const STATUS_LABEL = {
  pending: "Pendente",
  inProgress: "Em andamento",
  done: "Finalizada",
};

export default function TaskListItem({ task }: PropsType) {
  const statusStyle = useMemo(() => {
    if (task.status === "pending") return styles.pending;
    if (task.status === "inProgress") return styles.inProgress;
    return styles.done;
  }, [task.status]);

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
            <Text>{STATUS_LABEL[task.status]}</Text>
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
