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

  getPlacesList (payload) {
    return this.axios({
      method: 'get',
      url: `${PlacesController.prefix}/list`,
      params: payload
    })
  }

  getPlacesListItems () {
    return this.axios({
      method: 'get',
      url: `${PlacesController.prefix}/listItems`
    })
  }

  getPlace (id) {
    return this.axios({
      method: 'get',
      url: `${PlacesController.prefix}/${id}`
    })
  }
}

export default PlacesController
