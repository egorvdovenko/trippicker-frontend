import BaseController from '@/api/controllers/Base.controller.js'

class TagsController extends BaseController {
  static prefix = '/api/Tags'

  getTags (payload) {
    return this.axios({
      method: 'get',
      url: `${TagsController.prefix}`,
      params: payload
    })
  }

  getTagsList (payload) {
    return this.axios({
      method: 'get',
      url: `${TagsController.prefix}/list`,
      params: payload
    })
  }

  getTagsListItems () {
    return this.axios({
      method: 'get',
      url: `${TagsController.prefix}/listItems`
    })
  }

  getTag (id) {
    return this.axios({
      method: 'get',
      url: `${TagsController.prefix}/${id}`
    })
  }
}

export default TagsController
