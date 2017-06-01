 $(document).ready(function() {

   // Функция для вывода виджета по идентификатору
   // шаблона
   // в регионе #content
   function showView(sameTemplate) {
    // создаем конструктор виджета
     var SameView = Mn.View.extend({
      template: sameTemplate
     });

     // создали виджет
     var sameView = new SameView();

    // указываем создаем виджет для визуализации
    // в определенном регионе используя
    // сконструированный в качестве
    // дочернего
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
            // шаблон с текстом об ООП
           showView('#oop');
         },
         ppPage: function() {
            // шаблон с текстом процедурного программирования
           showView('#pp');
         },
         spPage: function() {
           // шаблон с текстом структурного программирования
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
