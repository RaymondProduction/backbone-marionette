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

// контроллер для отображения виджетов
myController = {
  showVal: function(val) {
    showView('#' + val);
  }
};
// Создаем роутер (маршрутизатор)
var MyRouter = Mn.AppRouter.extend({
  controller: myController,
  appRoutes: {
    ':val': 'showVal'
  }
})
