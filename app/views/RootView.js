import NavigationView from './NavigationView'

const RootView = Backbone.Marionette.View.extend({
  className: 'main',

  template: require('../templates/root-view-template.html'),

  regions: {
    header: {
      el: '#header-view'
    },
    main: {
      el: '#main-view'
    }
  },

  initialize: function (options) {
    this.title = options.title
  },

  onRender: function () {
    this.showChildView('header', new NavigationView({ title: this.title }))
  }
})

export default RootView
