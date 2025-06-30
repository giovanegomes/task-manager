import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f3f5f7",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    marginTop: 10,
  },
  pending: {
    borderLeftColor: "#264a97",
  },
  done: {
    borderLeftColor: "#28a745",
  },
  edit: {
    marginLeft: 20,
  },
  checkbox: {
    marginRight: 20,
  },
});
