export type TaskStatus = "pending" | "inProgress" | "done";

export type Task = {
  id: string;
  description: string;
  owner: string;
  status: TaskStatus;
};
