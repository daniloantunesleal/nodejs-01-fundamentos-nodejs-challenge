import database from "../database.js"

export function updateTask(req, res) {
    const { id } = req.params
    const { title, description } = req.body

    if (!title && !description) {
        return res
            .writeHead(400)
            .end(JSON.stringify({
                message: "title or description is required."
            }))
    }

    const [ task ] = database.select("tasks", {
        id
    })

    if (!task) return res
        .writeHead(404)
        .end(JSON.stringify({
            message: "Not Found"
        }))

    const updatedTask = database.update("tasks", id, {
        title: title || task.title,
        description: description || task.description,
        updated_at: new Date()
    })

    res
        .writeHead(200)
        .end(JSON.stringify({
            message: "OK",
            task: updatedTask
        }))
}