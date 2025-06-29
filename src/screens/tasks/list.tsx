import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "./components/card";
import { ListRenderItemInfo } from "react-native";
import { Task } from "../../@types/task";
import { useEffect, useState } from "react";

const keyExtractor = ({ id }: Task) => id;

const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
  return <TaskListItem task={item} />;
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/giovanegomes/task-manager-fake-api/tasks"
        );
        const data = await response.json();
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
