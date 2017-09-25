import Backbone from 'backbone'
import Marionette from 'marionette'
import RootView from './views/RootView'

const App = Marionette.Application.extend({
  region: 'body',
  initialize: function (options) {
    if (options) {
      this.title = options.title
    } else {
      this.title = 'Default'
    }

    this.view = new RootView({ title: this.title })
  },

  onStart: function () {
    this.showView(this.view)
    Backbone.history.start()
  }
})

export default App
