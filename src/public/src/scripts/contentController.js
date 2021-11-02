
export default class ContentController {

    static async fetchContent() {
        const response = await fetch('/datas')
        const datas = await response.json()
        return datas
    }

    static async prepareLayout(Content) {
        const content = Content.datas
        const rule = `data-clipboard-action="copy" data-clipboard-target="#textForCopy"`
        let allContent = ""
            content.map((item, index) => {
                allContent += `<a ${index === 0 ? rule : `href="${item.link}"`}><div id="allContent">`
                    allContent += `<h2>${item.title}</h2>`
                    allContent += `<p>${item.description}</p>`
                allContent += "</div></a>"
            })

        return allContent
    }
    
    static async printDatas(layout) {
        document.querySelector("#content").innerHTML = layout
    }

    static async prepareContent() {
        const content = await this.fetchContent()
        const layout = await this.prepareLayout(content)
        await this.printDatas(layout)
    }
}