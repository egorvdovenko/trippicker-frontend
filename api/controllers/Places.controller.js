import BaseController from '@/api/controllers/Base.controller.js'

class PlacesController extends BaseController {
  static prefix = '/api/Places'

  getPlaces (payload) {
    return this.axios({
      method: 'get',
      url: `${PlacesController.prefix}`,
      params: payload
    })
  }
}

export default PlacesController
