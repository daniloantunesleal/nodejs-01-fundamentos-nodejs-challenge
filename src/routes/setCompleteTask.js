import database from "../database.js"

export function setCompleteTask(req, res) {
    const { id } = req.params

    const [ task ] = database.select("tasks", {
        id
    })

    if (!task) return res
        .writeHead(404)
        .end(JSON.stringify({
            message: "Not Found"
        }))

    const updatedTask = database.update("tasks", id, {
        completed_at: !task.completed_at ? new Date() : null
    })

    res
        .writeHead(200)
        .end(JSON.stringify({
            message: "OK",
            task: updatedTask
        }))
}