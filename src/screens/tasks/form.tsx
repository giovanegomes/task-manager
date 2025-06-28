import { Text, View } from "react-native";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Routes } from "../../routes";
import { useLayoutEffect } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Feather } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  description: z.string().nonempty(),
  owner: z.string().nonempty(),
  status: z.string().nonempty(),
});

type TaskFormInputs = z.infer<typeof taskSchema>;

export function TaskForm() {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<Routes, "taskForm">>();
  const { taskId } = route.params ?? {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      owner: "",
      status: "",
    },
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormInputs) => console.log(data);

  useLayoutEffect(() => {
    const title = taskId ? "Editando tarefa" : "Nova tarefa";
    navigation.setOptions({
      title,
      headerRight: () => (
        <Feather
          name="check"
          size={30}
          style={{ marginRight: 10 }}
          onPress={() => console.log("salvar")}
        />
      ),
    });
  }, [navigation, taskId]);

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
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Status"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.status && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
