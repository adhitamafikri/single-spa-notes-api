import * as HomeController from '@controllers/home'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function HomeRoutes(router) {
  router.get('/', HomeController.getHome)

  return router
}

export default HomeRoutes
