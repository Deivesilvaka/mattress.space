
import Board from "./createBoard.js"

async function start() {
    const response = await fetch("/datas")
    const board = await response.json()

    await Board.createBoard(board.db)
}

await start()