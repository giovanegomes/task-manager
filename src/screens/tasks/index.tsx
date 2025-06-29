import { View } from "react-native";
import { styles } from "./styles";
import { FAB } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { TaskList } from "./list";
import { Filter } from "./components/filter";

export function Tasks() {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <Filter onFilter={(f) => console.log("filter", f)} />
      <TaskList />
      <FAB
        icon={<Feather name="plus" color="white" />}
        color="gray"
        placement="right"
        containerStyle={styles.fab}
        onPress={() => navigation.navigate("taskForm", {})}
      />
    </View>
  );
}
