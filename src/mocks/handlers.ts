import { rest } from "msw";
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

export const TODO_BASE_URL = "https://todoapp-ismailbenhallam.netlify.app";

export const handlers = [
  rest.get(TODO_BASE_URL + "/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      // ctx.delay(1500),
      ctx.set("Content-Type", "application/json"),
      ctx.json(TODOS)
    );
  }),

  rest.post(TODO_BASE_URL + "/todos", (req, res, ctx) => {
    let todo = req.body as Todo;
    todo.id = TODOS.length;
    TODOS.push(req.body as Todo);
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      // ctx.delay(1500),
      ctx.json(todo)
    );
  }),

  rest.delete(TODO_BASE_URL + "/todo/:id", (req, res, ctx) => {
    let { id } = req.params;
    let toDelete = TODOS.filter((todo) => todo.id === Number.parseInt(id));
    if (!toDelete.length) {
      console.log("Empty array");
      return res(
        ctx.status(404)
        //, ctx.delay(1500)
      );
    }
    let t = toDelete[0];
    t.state = TodoState.DELETED;
    t.completionDate = new Date();
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json(t)
      // ctx.delay(1500)
    );
  }),

  rest.patch(TODO_BASE_URL + "/todo/:id", (req, res, ctx) => {
    let { id } = req.params;
    let toComplete = TODOS.filter((todo) => todo.id === Number.parseInt(id));
    if (!toComplete.length) {
      console.log("Empty array");
      return res(
        ctx.status(404)
        //, ctx.delay(1500)
      );
    }
    let t = toComplete[0];
    t.state = TodoState.DONE;
    t.completionDate = new Date();
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json(t)
      //, ctx.delay(1500)
    );
  }),
];
