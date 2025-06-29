import { Task } from "../@types/task";

class TaskService {
  readonly #BASE_URL =
    "https://6861bc9796f0cc4e34b75830.mockapi.io/api/v1/tasks";

  async list() {
    const response = await fetch(this.#BASE_URL);

    if (!response.ok) throw new Error("Falha ao listar as tarefas.");

    const tasks = (await response.json()) as Task[];
    return tasks;
  }

  async create(task: Omit<Task, "id">) {
    const params: RequestInit = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    };

    const response = await fetch(this.#BASE_URL, params);

    if (!response.ok) throw new Error("Falha ao criar o registro");

    const data = (await response.json()) as Task;

    return data;
  }

  async update(task: Task) {
    const params: RequestInit = {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    };

    const response = await fetch(`${this.#BASE_URL}/${task.id}`, params);

    if (!response.ok) throw new Error("Falha ao atualizar o registro.");

    const data = (await response.json()) as Task;

    return data;
  }

  async delete(id: string) {
    const params = { method: "DELETE" };
    const response = await fetch(`${this.#BASE_URL}/${id}`, params);

    if (!response.ok) throw new Error("Falha na exclusão do registro.");

    const data = (await response.json()) as Task;

    return data;
  }
}

export default new TaskService();
