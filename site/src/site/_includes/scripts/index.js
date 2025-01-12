import app from './app.js'
import operator from 'operator'

const router = operator('#root')

document.addEventListener('DOMContentLoaded', e => {
  console.log('Built by Asher Caplan');
  app.mount()

  window.__app = app
})

router.on('after', ({ location }) => {
  window.scrollTo(0,0)
  const title = document.querySelector('.js-title')
  let pageTitle = ``
  if (title) {
    pageTitle = `${title.getAttribute('data-title')} | `
  }
  document.title = pageTitle + `Leisure Cooperative`
  window.history.pushState({}, '', location)
  app.mount()
})