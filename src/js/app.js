
const template1 = _.template('<h1>Marionette says hello!</h1>');
const template2 = _.template('<h1>You push the button!</h1>');

const myView1 = new Mn.View({template: template1});
const myView2 = new Mn.View({template: template2});

const MyView = Mn.View.extend({
  el: '#container',
  template: false,
  events: {
    'click .button': 'onClickButton'
  },
  regions: {
    region1: '#region1',
    region2: '#region2'
  },
  onRender() {
      this.showChildView('region1', myView1);
  },
  onClickButton() {
    this.showChildView('region2', myView2);
  }
});

const myView = new MyView();
myView.render();

