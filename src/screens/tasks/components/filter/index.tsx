// import { Text, TextInput, View } from "react-native";
// import { Chip } from "react-native-elements";
// import { useCallback, useState } from "react";

// // const StatusFilter = ({ onSelect }: StatusFilterProps) => {
// //   const status = Object.keys(STATUS_LABEL) as TaskStatus[];
// //   return (
// //     <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
// //       {status.map((value) => {
// //         return (
// //           <Chip
// //             key={value}
// //             title={STATUS_LABEL[value]}
// //             type="outline"
// //             containerStyle={{ marginVertical: 15 }}
// //             onPress={() => onSelect(value)}
// //           />
// //         );
// //       })}
// //     </View>
// //   );
// // };

// export function Filter({ onFilter }: FilterProps) {
//   const [responsavel, setResponsavel] = useState<TaskStatus>();
//   const [selectedStatus, setSelectedStatus] = useState<TaskStatus>();

//   // const filter = useCallback(
//   //   (newFilterValues: Partial<FilterValues>) => {
//   //     onFilter({
//   //       responsavel,
//   //     });
//   //   },
//   //   [responsavel, selectedStatus]
//   // );

//   return (
//     <View>
//       <Text>Responsável:</Text>
//       <TextInput
//         placeholder="Filtrar por responsável"
//         style={{ borderColor: "black" }}
//       />
//       {/* <StatusFilter onSelect={(status) => filter({ status })} /> */}
//     </View>
//   );
// }

// type FilterValues = {
//   responsavel: string;
//   status: TaskStatus;
// };

// type FilterProps = {
//   onFilter: ({ responsavel, status }: FilterValues) => void;
// };

// type StatusFilterProps = {
//   onSelect: (status: TaskStatus) => void;
// };
