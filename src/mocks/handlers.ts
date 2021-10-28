import { rest } from "msw";
import { BASE_URL } from "../config/api_config";
import Todo, { TodoPriority, TodoState } from "../models/Todo";

let TODOS: Todo[] = [
  {
    id: -1000,
    title: "Title-1000",
    description: "Description-1000",
    priority: TodoPriority.LOW,
    state: TodoState.WAITING,
  },
  {
    id: -1001,
    title: "Title-1001",
    description: "Description-1001",
    priority: TodoPriority.HIGH,
    state: TodoState.DONE,
    completionDate: new Date(),
  },
];

export const handlers = [
  rest.get(BASE_URL + "/todos", (req, res, ctx) => {
    console.log("INTERCEPTEEEEEEEEEEED");
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json(TODOS)
    );
  }),

  rest.post(BASE_URL + "/todo", (req, res, ctx) => {
    console.log("INTERCEPTEEEEEEEEEEED");
    TODOS.push(req.body as Todo);
    return res(ctx.status(200));
  }),

  rest.delete(BASE_URL + "/todo/:id", (req, res, ctx) => {
    console.log("INTERCEPTEEEEEEEEEEED");
    let { id } = req.params;
    let toDelete = TODOS.filter((todo) => todo.id === id);
    if (!toDelete.length) {
      console.log("Empty array");
      return res(ctx.status(404));
    }
    let t = toDelete[0];
    t.state = TodoState.DELETED;
    t.completionDate = new Date();
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json(t)
    );
  }),

  rest.patch(BASE_URL + "/todo/:id", (req, res, ctx) => {
    console.log("INTERCEPTEEEEEEEEEEED");
    let { id } = req.params;
    let toComplete = TODOS.filter((todo) => todo.id === id);
    if (!toComplete.length) {
      console.log("Empty array");
      return res(ctx.status(404));
    }
    let t = toComplete[0];
    t.state = TodoState.DONE;
    t.completionDate = new Date();
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json(ctx.json(t))
    );
  }),
];
