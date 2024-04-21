import database from "../database.js"

export function deleteTask(req, res) {
    const { id } = req.params

    const [ task ] = database.select("tasks", {
        id
    })

    if (!task) return res
        .writeHead(404)
        .end(JSON.stringify({
            message: "Not Found"
        }))

    database.delete("tasks", id)

    return res.writeHead(204).end()
}