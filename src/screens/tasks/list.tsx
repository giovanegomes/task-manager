import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "./components/card";
import { ListRenderItemInfo } from "react-native";
import { Task } from "../../@types/task";
import { useCallback, useEffect, useState } from "react";
import TaskService from "../../services/task";
import { useFilterStore } from "../../store/filterStore";
import { isUndefined } from "lodash";
import { useFocusEffect } from "@react-navigation/native";

const keyExtractor = ({ id }: Task) => id;

const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
  return <TaskListItem task={item} />;
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { owner, done } = useFilterStore();

  useFocusEffect(
    useCallback(() => {
      const fetchTasks = async () => {
        try {
          const data = await TaskService.list();
          setTasks(data);
        } catch (error) {
          console.error("Falha ao carregar tarefas:", error);
        }
      };

      fetchTasks();
    }, [])
  );

  useEffect(() => {
    const filtered = tasks.filter((task) => {
      const matchOwner = isUndefined(owner) || task.owner.includes(owner);
      const matchDone = isUndefined(done) || task.done === done;
      return matchOwner && matchDone;
    });

    setFilteredTasks(filtered);
  }, [tasks, owner, done]);

  return (
    <FlatList
      data={filteredTasks}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
