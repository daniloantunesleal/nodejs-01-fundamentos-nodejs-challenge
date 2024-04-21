import http from "node:http"
import { json } from "./middlewares/json.js"
import { routes } from "./routes.js"
import { extractQueryParams } from "./utils/extractQueryParams.js"

const server = http.createServer(async (req, res) => {
    await json(req, res)
    
    const { method, url } = req

    const route = routes.find(route => 
        route.method === method && route.path.test(url)
    )

    if (!route) return res.writeHead(404).end("Not Found")

    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = { ...params }
    req.query = query ? extractQueryParams(query) : {}

    route.handler(req, res)
})

server.listen(5000)