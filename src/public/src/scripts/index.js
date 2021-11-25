
import ContentController from "./contentController.js"

async function confereCreadentials () {
    
    const clipboard = new ClipboardJS('#content>a')

    clipboard.on('success', function(e) {
        alert(`Chave copiada com sucesso: mattress.spaceofc@gmail.com, você será redirecionado para o catarse após o okay!`)
    })

    clipboard.on('error', function(e) {
        alert(`Não foi possível copiar a chave, mas aqui esta ela :) mattress.spaceofc@gmail.com`)
    })
}

window.onload = async () => {
    await ContentController.prepareContent()
    await confereCreadentials()
} 