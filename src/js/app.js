 $(document).ready(function() {
   // шаблон с текстом об ООП
   const OopView = Mn.View.extend({
     template: '#oop'
   });
   const PpView = Mn.View.extend({
     template: '#pp'
   });
   const SpView = Mn.View.extend({
     template: '#sp'
   });

   // Настраиваем приложение Backbone Marionette
   var App = Mn.Application.extend({
     region: '#content', // указываем регион

     // эта функция срабатывает во время запуска приложения
     // Backbone Marionette
     onStart: function() {

       var self = this;
       // контроллер для отображения виджетов
       myController = {
         oopPage: function() {
           var main = self.getRegion();
           main.show(new OopView);
         },
         ppPage: function() {
           var main = self.getRegion();
           main.show(new PpView);
         },
         spPage: function() {
           var main = self.getRegion();
           main.show(new SpView);
         }
       };

       // Создаем роутер (маршрутизатор)
       var MyRouter = Mn.AppRouter.extend({
         controller: myController,
         appRoutes: {
           'oop': 'oopPage',
           'pp': 'ppPage',
           'sp': 'spPage'
         }
       })


       var myRouter = new MyRouter();
       /** Starts the URL handling framework */
       Backbone.history.start();

       if (Backbone.history.fragment === "") {
         Backbone.history.navigate("opp");
       }
       var main = self.getRegion();
       main.show(new OopView);
     }
   });



   const myApp = new App();
   myApp.start();
 });
