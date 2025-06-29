import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "./components/card";
import { ListRenderItemInfo } from "react-native";
import { Task } from "../../@types/task";

const TASKS: Task[] = [
  {
    id: "1",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    done: false,
  },
  {
    id: "2",
    description: "Criar cadastro de tarefas",
    owner: "João",
    done: false,
  },
  {
    id: "3",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    done: true,
  },
  {
    id: "4",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    done: false,
  },
  {
    id: "5",
    description: "Criar cadastro de tarefas",
    owner: "João",
    done: false,
  },
  {
    id: "6",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    done: true,
  },
  {
    id: "7",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    done: false,
  },
  {
    id: "8",
    description: "Criar cadastro de tarefas",
    owner: "João",
    done: false,
  },
  {
    id: "9",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    done: true,
  },
  {
    id: "10",
    description: "Criar lista de tarefas",
    owner: "Giovane",
    done: false,
  },
  {
    id: "11",
    description: "Criar cadastro de tarefas",
    owner: "João",
    done: false,
  },
  {
    id: "12",
    description: "Criar exclusão de tarefas",
    owner: "Lucas",
    done: true,
  },
];

const keyExtractor = ({ id }: Task) => id;

const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
  return <TaskListItem task={item} />;
};

export function TaskList() {
  return (
    <FlatList
      data={TASKS}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
