import database from "../database.js"
import { randomUUID } from "node:crypto"

export function createTask(req, res) {
    const { title, description } = req.body

    if (!title || !description) {
        return res
            .writeHead(400)
            .end(JSON.stringify({
                message: "title and description is required."
            }))
    }   

    const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        createdAt: new Date(),
        updated_at: new Date()
    }

    database.insert("tasks", task)

    res
        .writeHead(201)
        .end(JSON.stringify({
            message: "Created",
            task
        }))
}