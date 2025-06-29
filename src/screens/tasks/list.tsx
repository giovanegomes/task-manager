import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "./components/card";
import { ListRenderItemInfo } from "react-native";
import { Task } from "../../@types/task";
import { useEffect, useState } from "react";
import TaskService from "../../services/task";

const keyExtractor = ({ id }: Task) => id;

const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
  return <TaskListItem task={item} />;
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await TaskService.list();
        setTasks(data);
      } catch (error) {
        console.error("Falha ao carregar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);
  return (
    <FlatList
      data={tasks}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
