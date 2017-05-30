 $(document).ready(function() {
   // Создание приложения Marionette
   var ReferenceWork = new Marionette.Application();

   // Определим шаблоны виджетов
   ReferenceWork.OopView = Marionette.ItemView.extend({
     template: '#oop'
   });

   ReferenceWork.SpView = Marionette.ItemView.extend({
     template: '#sp'
   });

   ReferenceWork.PpView = Marionette.ItemView.extend({
     template: '#pp'
   });

   // Предстартовые настройки
   ReferenceWork.on("before:start", function() {
     // Регион это контейнер для отображении виджета
     var RegionContainer = Marionette.LayoutView.extend({
       el: "#main_section",
       regions: {
         main: "#content"
       }
     });
     ReferenceWork.regions = new RegionContainer();
   });
   // Старт приложения
   ReferenceWork.on("start", function() {
     // var oopView = new ReferenceWork.OopView();
     // ReferenceWork.regions.main.show(oopView);

     // запуск истории для маршрутизации
     if (Backbone.history) {
       Backbone.history.start();

       if (Backbone.history.fragment === "") {
         Backbone.history.navigate("opp");
       }
       var oopView = new ReferenceWork.OopView();
       ReferenceWork.regions.main.show(oopView);
     }
   });


   // добавляем router маршрутизатор для приложения
   ReferenceWork.module("ReferenceWorkApp", function(ReferenceWorkApp, ReferenceWork,
     Backbone, Marionette, $, _) {
     ReferenceWorkApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
         "oop": "oppPage",
         "pp": "ppPage",
         "sp": "spPage"
       }
     });

     var API = {
       oppPage: function() {
         var oopView = new ReferenceWork.OopView();
         ReferenceWork.regions.main.show(oopView);
       },
       ppPage: function() {
         var ppView = new ReferenceWork.PpView();
         ReferenceWork.regions.main.show(ppView);
       },
       spPage: function() {
         var spView = new ReferenceWork.SpView();
         ReferenceWork.regions.main.show(spView);
       }
     };

     ReferenceWorkApp.on("start", function() {
       new ReferenceWorkApp.Router({
         controller: API
       });
     });
   });
   // ^ router ^

   ReferenceWork.start();
 });
