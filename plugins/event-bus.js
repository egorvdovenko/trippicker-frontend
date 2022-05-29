import Vue from 'vue'

const eventBus = new Vue()

export default function (_, inject) {
  inject('eventBus', eventBus)
}
