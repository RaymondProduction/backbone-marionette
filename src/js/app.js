 $(document).ready(function() {
   // шаблон с текстом об ООП
   const OopView = Mn.View.extend({
     template: '#oop'
   });
   // шаблон с текстом процедурного программирования
   const PpView = Mn.View.extend({
     template: '#pp'
   });

   // шаблон с текстом структурного программирования
   const SpView = Mn.View.extend({
     template: '#sp'
   });

   // Функция дя вывода виджета в регионе #content
   function showView(sameTemplate) {

     var SameView = Mn.View.extend({
      template: sameTemplate
     });

     var sameView = new SameView();

     var MyView = Mn.View.extend({
       el: '#main_section',
       template: false,
       regions: {
         region: '#content',
       },
       onRender() {
         this.showChildView('region', sameView);
       }
     });
     var myView = new MyView();
     myView.render();
   }



   // Настраиваем приложение Backbone Marionette
   var App = Mn.Application.extend({
     region: '#content', // указываем регион

     // эта функция срабатывает во время запуска приложения
     // Backbone Marionette
     onStart: function() {

       // контроллер для отображения виджетов
       myController = {
         oopPage: function() {
           showView('#oop');
         },
         ppPage: function() {
           showView('#pp');
         },
         spPage: function() {
           showView('#sp');
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

       if (Backbone.history.fragment === '') {
         Backbone.history.navigate('oop');
       }
     }
   });



   const myApp = new App();
   myApp.start();
 });
