import { useNavigation } from "@react-navigation/native";
import { Routes } from "../routes";
import { StackNavigationProp } from "@react-navigation/stack";

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<Routes>>();
