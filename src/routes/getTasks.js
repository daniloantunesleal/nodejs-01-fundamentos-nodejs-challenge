import database from "../database.js";

export function getTasks(req, res) {
    const { search } = req.query

    const tasks = database.select("tasks", search ? {
        title: search,
        description: search
    } : null)

    return res
        .writeHead(200)
        .end(JSON.stringify({
            message: "OK",
            tasks
        }))
}