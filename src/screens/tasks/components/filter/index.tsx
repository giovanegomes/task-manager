import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Chip } from "react-native-elements";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { styles } from "./styles";

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

export function Filter({ onFilter }: FilterProps) {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    responsavel: undefined,
    done: undefined,
  });

  const onChangeResponsavel = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const newValue = event.nativeEvent?.text ? event.nativeEvent.text : "";
    setFilterValues((previous) => ({
      ...previous,
      responsavel: newValue,
    }));
  };

  const debouncedOnChangeResponsavel = debounce(onChangeResponsavel, 250);

  const onChangeStatus = (done: boolean) => {
    setFilterValues((previous) => ({ ...previous, done }));
  };

  useEffect(() => {
    onFilter(filterValues);
  }, [filterValues]);

  return (
    <View>
      <TextInput
        placeholder="Filtrar por responsável"
        onChange={debouncedOnChangeResponsavel}
      />
      <StatusFilter onSelect={onChangeStatus} />
    </View>
  );
}

type FilterValues = {
  responsavel?: string;
  done?: boolean;
};

type FilterProps = {
  onFilter: ({ responsavel, done }: FilterValues) => void;
};

type StatusFilterProps = {
  onSelect: (done: boolean) => void;
};
