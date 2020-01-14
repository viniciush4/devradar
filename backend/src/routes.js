const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Métodos: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// *Query params: req.query (filtros, ordenação, paginação)
// *Route params: req.params (identificar um recurso na alteração ou remoção)
// *Body: request.body (dados para a criação ou alteração de um registro)

// MongoDB (Não-relacional)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes