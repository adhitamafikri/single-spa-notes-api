import { Router } from 'express'
import HomeRoutes from './home'
import NotesRoutes from './notes'

/**
 * @param {express.Router} router
 */
const loadRoutes = () => {
  console.log('#######router loader function')
  const router = Router()

  const routeStack = [
    HomeRoutes(router),
    NotesRoutes(router),
  ]

  router.use(routeStack)

  return router
}


export default loadRoutes
