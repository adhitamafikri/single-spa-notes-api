import * as NotesController from '@controllers/notes'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function NotesRoutes(router) {
  router.get('/notes', NotesController.getNotes)
  router.post('/notes', NotesController.postNotes)

  return router
}

export default NotesRoutes
