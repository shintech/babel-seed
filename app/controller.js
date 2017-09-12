import Marionette from 'marionette'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  index: function () {
    console.log('index')
  }
})

export default Controller
