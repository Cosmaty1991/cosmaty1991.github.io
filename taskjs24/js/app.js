requirejs.config({
  paths: {
    'jquery': 'js/jquery.min',
    'tmpl': 'js/tmpl',
    'model': 'js/model',
    'view': 'js/view',
    'controller': 'js/controller'
  },

  shim: {
    jquery: {
      exports: 'jquery'
    },
    tmpl: {
      exports: 'tmpl'
    }
  }
});

require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function($, tmpl, Model, View, Controller) {
    var firstToDoList = [
      'Посмотреть видео и изучить материалы по уроку Javascript 23-24',
      'Сдать тест по уроку Javascript 23-24',
      'Сделать и сдать дз по уроку Javascript 23-24'
    ];

    var Model = new Model(firstToDoList);
    var View = new View(Model);
    var Controller = new Controller(Model, View);
  }
);
