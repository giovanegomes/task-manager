import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import TaskItemCard, { TaskStatus } from "./components/card";

export type Task = {
  id: string;
  description: string;
  owner: string;
  status: TaskStatus;
};

const TASKS: Task[] = [
  {
    id: "1",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    status: "pending",
  },
  {
    id: "2",
    description: "Criar cadastro de tarefas",
    owner: "João",
    status: "inProgress",
  },
  {
    id: "3",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    status: "done",
  },
  {
    id: "4",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    status: "pending",
  },
  {
    id: "5",
    description: "Criar cadastro de tarefas",
    owner: "João",
    status: "inProgress",
  },
  {
    id: "6",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    status: "done",
  },
  {
    id: "7",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    status: "pending",
  },
  {
    id: "8",
    description: "Criar cadastro de tarefas",
    owner: "João",
    status: "inProgress",
  },
  {
    id: "9",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    status: "done",
  },
  {
    id: "10",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    status: "pending",
  },
  {
    id: "11",
    description: "Criar cadastro de tarefas",
    owner: "João",
    status: "inProgress",
  },
  {
    id: "12",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    status: "done",
  },
];

const keyExtractor = ({ id }: Task) => id;

const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
  return <TaskItemCard task={item} />;
};

export function Tasks() {
  return (
    <View style={styles.container}>
      <FlatList
        data={TASKS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}
