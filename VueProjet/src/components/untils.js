import { toPng } from 'html-to-image'

export const downloadImage = async (id, name) => {
  const visuel = document.getElementById(id)

  await toPng(visuel, { quality: 1 })
    .then(function (dataUrl) {
      var link = document.createElement('a')
      link.download = name
      link.href = dataUrl
      link.click()
    })
    .catch(function (error) {
      console.error("Erreur lors du téléchargement de l'image :", error)
    })
}
