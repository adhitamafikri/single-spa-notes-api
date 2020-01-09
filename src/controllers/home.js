import * as HomeService from '@services/home'

export function getHome(req, res, next) {
  const result = HomeService.getHome()
  res.json({
    result,
  })
}
