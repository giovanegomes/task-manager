import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Button, Chip } from "react-native-elements";
import { debounce } from "lodash";
import { styles } from "./styles";
import { useFilterStore } from "../../../../store/filterStore";

type StatusFilterProps = {
  onSelect: (done: boolean) => void;
};

const StatusFilter = ({ onSelect }: StatusFilterProps) => {
  return (
    <View style={styles.statusContainer}>
      <Chip
        title="Pendente"
        type="outline"
        containerStyle={styles.chip}
        onPress={() => onSelect(false)}
      />
      <Chip
        title="Finalizado"
        type="outline"
        containerStyle={styles.chip}
        onPress={() => onSelect(true)}
      />
    </View>
  );
};

export function Filter() {
  const { setFilterValues, clearFilter } = useFilterStore();

  const handleChangeOwner = (newOwner: string) =>
    setFilterValues({ owner: newOwner });

  const debouncedHandleChangeOwner = debounce(handleChangeOwner, 250);

  return (
    <View>
      <TextInput
        placeholder="Filtrar por responsável"
        onChangeText={debouncedHandleChangeOwner}
      />
      <StatusFilter onSelect={(done) => setFilterValues({ done })} />
      <Button title="Limpar filtros" onPress={clearFilter} />
    </View>
  );
}
