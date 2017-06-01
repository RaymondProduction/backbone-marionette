 $(document).ready(function() {

   // Настраиваем приложение Backbone Marionette
   var App = Mn.Application.extend({
     region: '#content', // указываем регион

     // эта функция срабатывает во время запуска приложения
     // Backbone Marionette
     onStart: function() {



       var myRouter = new MyRouter();
       /** Starts the URL handling framework */
       Backbone.history.start();

       if (Backbone.history.fragment === '') {
         Backbone.history.navigate('oop');
       }
     }
   });



   const myApp = new App();
   myApp.start();
 });
