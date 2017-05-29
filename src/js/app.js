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

// Создаем коллекцию с элементами EventView
var EventView = Backbone.Marionette.CollectionView.extend({
  childView: EventView
});

// Виджет с формой
var FormView = Backbone.Marionette.ItemView.extend({
  template: '#formView',  // <= шаблон формы
  events: {
    'click button': 'createNewEvent' //<= событие нажатия кнопки
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

/*

Routs

HTML 5 - Routs
  https://addyosmani.com/backbone-fundamentals/#routers

HTML 5 - History
  https://developer.mozilla.org/ru/docs/Web/API/History_API

Gulp - task minimize and task build
*/
