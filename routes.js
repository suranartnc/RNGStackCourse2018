const nextRoutes = require('next-routes')()

const routes = [
  {
    name: 'home',
    pattern: '/',
    page: 'index'
  },
  {
    name: 'about',
    pattern: '/about/',
  },
  {
    name: 'entry',
    pattern: '/:id(\\d+)/',
  }
]

routes.forEach(function ({ name, pattern, page }) {
  nextRoutes.add(name, pattern, page)
})

module.exports = nextRoutes