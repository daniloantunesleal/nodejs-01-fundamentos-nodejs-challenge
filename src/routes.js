import { getTasks } from "./routes/getTasks.js";
import { createTask } from "./routes/createTask.js";
import { updateTask } from "./routes/updateTask.js";
import { deleteTask } from "./routes/deleteTask.js";
import { setCompleteTask } from "./routes/setCompleteTask.js";
import { buildRotePath } from "./utils/buildRoutePath.js";

export const routes = [
    {
        method: "GET",
        path: buildRotePath("/tasks"),
        handler: getTasks
    },
    {
        method: "POST",
        path: buildRotePath("/tasks"),
        handler: createTask
    },
    {
        method: "PUT",
        path: buildRotePath("/tasks/:id"),
        handler: updateTask
    },
    {
        method: "DELETE",
        path: buildRotePath("/tasks/:id"),
        handler: deleteTask
    },
    {
        method: "PATCH",
        path: buildRotePath("/tasks/:id/complete"),
        handler: setCompleteTask
    },
]