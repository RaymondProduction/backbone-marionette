var EventTracker = new Backbone.Marionette.Application();

var Event = Backbone.Model.extend({});
var Events = Backbone.Collection.extend({
  model: Event
});

var EventView = Backbone.Marionette.ItemView.extend({
  template: '#eventView'
});

var NoEventsView = Backbone.Marionette.ItemView.extend({
  template: '#noEventsView'
});


var EventView = Backbone.Marionette.CollectionView.extend({
  itemView: EventView,
  emptyView: NoEventsView
});

var FormView = Backbone.Marionette.ItemView.extend({
  template: '#formView',
  events: {
    'click button': 'createNewEvent'
  },
  ui: {
    event: '#event',
    time: '#time'
  },
  createNewEvent : function() {
    this.collection.add({
      event: this.ui.event.val(),
      time: this.ui.time.val()
    });
    this.ui.event.val("");
    this.ui.time.val("");
  }
});

EventTracker.addRegions({
  form : '#form',
  list : '#list'
});

EventTracker.addInitializer(function(){
  EventTracker.events = new Events();

  EventTracker.form.show(new FormView({collection: EventTracker.events}));
  EventTracker.list.show(new EventView({collection: EventTracker.events}))
});

EventTracker.start();
