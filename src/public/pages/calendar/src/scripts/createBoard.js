

export default class Board {

    static async createTopic(datas) {

        let html = ""

        await datas.map(async (item, index) => {
            const items = await Board.createItems(item, index)
            html += `<div id="topic">
                <h3>${item.title}</h3>
                <div id="items">${items}</div>
            </div>`
        })

        return html.replaceAll(",", "")
    }

    static async createItems(Item, Index) {
        let html = Item.activities.map((item, index) => {
            return `<div id="item"><p><a href="${item.link}">${item.title}</a></p></div>`
        })

        return html
    }

    static async createBoard(datas) {
        const board = await Board.createTopic(datas)
        document.querySelector("#container").innerHTML = board
    }
}