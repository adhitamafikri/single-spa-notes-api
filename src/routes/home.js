import * as HomeController from '@controllers/home'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function HomeRoutes(router) {
  console.log('In the HomeRoutes!')

  router.get('/', HomeController.getHome)

  return router
}

export default HomeRoutes
