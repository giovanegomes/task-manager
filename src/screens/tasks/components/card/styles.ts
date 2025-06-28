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
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 20,
  },
  pending: {
    borderLeftColor: "#264a97",
  },
  inProgress: {
    borderLeftColor: "#a79f28",
  },
  done: {
    borderLeftColor: "#28a745",
  },
});
