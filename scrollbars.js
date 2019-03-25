const css = browser.extension.getURL('scrollbars.css')
const head = document.querySelector('head')
const link = document.createElement('link')

link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', css)

head.appendChild(link)