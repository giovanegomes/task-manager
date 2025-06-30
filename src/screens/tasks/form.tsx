import { Text, View } from "react-native";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Routes } from "../../routes";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Feather } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TaskService from "../../services/task";

const taskSchema = z.object({
  description: z.string().nonempty(),
  owner: z.string().nonempty(),
});

type TaskFormInputs = z.infer<typeof taskSchema>;

export function TaskForm() {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<Routes, "taskForm">>();
  const { taskId } = route.params ?? {};

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      owner: "",
    },
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = useCallback(
    async (task: TaskFormInputs) => {
      try {
        if (taskId) {
          await TaskService.update(taskId, task);
        } else {
          await TaskService.create(task);
        }
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
    [taskId]
  );

  useLayoutEffect(() => {
    const title = taskId ? "Editando tarefa" : "Nova tarefa";
    navigation.setOptions({
      title,
      headerRight: () => (
        <Feather
          name="check"
          size={30}
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}
        />
      ),
    });
  }, [navigation, taskId]);

  useEffect(() => {
    if (!taskId) return;

    const fetchTask = async () => {
      try {
        const task = await TaskService.findById(taskId);
        setValue("description", task.description);
        setValue("owner", task.owner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, [taskId]);

  return (
    <View style={styles.container}>
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Descrição"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.description && <Text>This is required.</Text>}
      <Controller
        name="owner"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Responsável"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.owner && <Text>This is required.</Text>}
    </View>
  );
}
