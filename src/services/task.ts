import { Task } from "../@types/task";

class TaskService {
  readonly #BASE_URL =
    "https://6861bc9796f0cc4e34b75830.mockapi.io/api/v1/tasks";

  async list() {
    const data = await this.#fetch(this.#BASE_URL);

    return data;
  }

  async create(task: Omit<Task, "id" | "done">) {
    const params: RequestInit = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    };
    const data = await this.#fetch(this.#BASE_URL, params);

    return data as Task;
  }

  async update(task: Task) {
    const params: RequestInit = {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    };
    const data = await this.#fetch(`${this.#BASE_URL}/${task.id}`, params);

    return data as Task;
  }

  async delete(id: string) {
    const params = { method: "DELETE" };
    const data = await this.#fetch(`${this.#BASE_URL}/${id}`, params);

    return data as Task;
  }

  async #fetch(url: string, init?: RequestInit) {
    const response = await fetch(url, init);

    if (!response.ok) throw new Error("Falha na requisição.");

    return response.json();
  }
}

export default new TaskService();
