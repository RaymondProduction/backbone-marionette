// Создание приложения Backbone.Marionette
var EventTracker = new Backbone.Marionette.Application();

// Приложение реализует список событий (Название и время)


// Модель для событий
var Event = Backbone.Model.extend({});
// Коллекция событий
var Events = Backbone.Collection.extend({
  model: Event
});

// Создаем виджет с событием по шаблону eventView
// шаблон описан в html файле
var EventView = Backbone.Marionette.ItemView.extend({
  template: '#eventView'
});

// Виджет на случай если нет событий по шаблону noEventsView
var NoEventsView = Backbone.Marionette.ItemView.extend({
  template: '#noEventsView'
});


var EventView = Backbone.Marionette.CollectionView.extend({
  itemView: EventView,
  emptyView: NoEventsView,
  childView: EventView
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
    console.log(this.ui.time.val());
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
