import html2canvas from 'html2canvas'

export function downloadImage(id) {
  const element = document.getElementById(id)
  html2canvas(element, {
    backgroundColor: null,
    removeContainer: true
  }).then((canvas) => {
    const link = document.createElement('a')
    link.download = 'Samira.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  })
}
