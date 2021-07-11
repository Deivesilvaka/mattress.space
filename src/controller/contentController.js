
import State from "./stateController.js"

export default class ContentController {
    static async getDatas(req, res) {
        const datas = await State.loadDB()
        return res.json(datas)
    }
}