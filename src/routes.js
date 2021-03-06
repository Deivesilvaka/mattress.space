
import Router from 'express'
import path from 'path'
import { realpathSync } from 'fs'
import ContentController from './controller/contentController.js'

const routes = Router()

routes.get("/calendar", (req, res) => {
    res.sendFile(path.join(realpathSync("."), "src", "public", "pages", "calendar", "index.html"))
})

routes.get("/", (req, res) => {
    res.sendFile(path.join(realpathSync("."), "src", "public", "index.html"))
})

routes.get("/pix", (req, res) => {
    res.sendFile(path.join(realpathSync("."), "src", "public", "index.html"))
})

routes.get("/datas", ContentController.getDatas)


export default routes