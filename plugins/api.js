import qs from 'qs'
import PlacesController from '@/api/controllers/Places.controller.js'
import TagsController from '@/api/controllers/Tags.controller.js'

export default function ({ $axios, $config }, inject) {
  $axios.defaults.paramsSerializer = params =>
    qs.stringify(params, {
      skipNulls: true,
      allowDots: true,
      encode: true
    })

  const api = {
    placesController: new PlacesController($axios, $config),
    tagsController: new TagsController($axios, $config)
  }

  inject('api', api)
}
