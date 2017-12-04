module('Router');

test('Basic routing', function() {
  var calls = [];
  var router = new Router();

  router.notFound(function() {
    calls.push('not-found');
  });

  router.route('/', function() {
    calls.push('index');
  });

  router.route('/about', function() {
    calls.push('about');
  });

  router.route('/about/contacts', function() {
    calls.push('contacts');
  });


  router.toPath('/');
  router.toPath('/about');
  router.toPath('/not/defined');
  router.toPath('/about/contacts');
  router.toPath('/about');
  router.toPath('/');

  deepEqual(calls, [
    'index',
    'about',
    'not-found',
    'contacts',
    'about',
    'index'
  ]);
});

test('Parametrized routing', function() {
  var calls = [];
  var router = new Router();

  router.notFound(function() {
    calls.push('not-found');
  });

  router.route('/', function() {
    calls.push('index');
  });

  router.route('/items', function() {
    calls.push('list');
  });

  router.route('/items/:id', function(id) {
    calls.push('show-' + id);
  });

  router.route('/items/:id/edit', function(id) {
    calls.push('edit-' + id);
  });

  router.toPath('/');
  router.toPath('/items');
  router.toPath('/items/1');
  router.toPath('/items/1/edit');
  router.toPath('/items');
  router.toPath('/items/1337');
  router.toPath('/not-found/1');

  deepEqual(calls, [
    'index',
    'list',
    'show-1',
    'edit-1',
    'list',
    'show-1337',
    'not-found'
  ]);
});

test('Named routing and reverse', function() {
  var calls = [];
  var router = new Router();

  router.notFound(function() {
    calls.push('not-found');
  });

  router.route('/', function() {
    calls.push('index');
  });

  router.route('list', '/items', function() {
    calls.push('list');
  });

  router.route('showItem', '/items/:id', function(id) {
    calls.push('show-' + id);
  });

  router.route('editItem', '/items/:id/edit', function(id) {
    calls.push('edit-' + id);
  });

  equal(router.reverse('list'), '/items');
  equal(router.reverse('showItem', { id: 1 }), '/items/1');
  equal(router.reverse('editItem', { id: 1}), '/items/1/edit');

  router.toPath('/');
  router.toPath('/items');
  router.toPath('/items/2');
  router.toPath('/items/2/edit');

  router.toPath('/not-found');

  router.toRoute('list');
  router.toRoute('showItem', {id: 3});
  router.toRoute('editItem', {id: 3});

  router.toPath('/');

  deepEqual(calls, [
    'index',
    'list',
    'show-2',
    'edit-2',
    'not-found',
    'list',
    'show-3',
    'edit-3',
    'index'
  ]);
});

test('Router has correct priorities', function() {
  var calls = [];
  var router = new Router();

  router.notFound(function() {
    calls.push('not-found');
  });

  router.route('listArticles', '/articles', function() {
    calls.push('list');
  });

  router.route('newArticles', '/articles/new', function() {
    calls.push('new');
  });

  router.route('popualrArticles', '/articles/popular', function() {
    calls.push('popular');
  });

  router.route('showArticle', '/articles/:name', function(name) {
    calls.push('show-' + name);
  });

  router.toPath('/articles');
  router.toPath('/articles/new');
  router.toPath('/articles/specific-article-name');
  router.toPath('/articles/popular');

  router.toRoute('showArticle', {name: 'another-specific-article'});
  router.toRoute('popualrArticles');

  router.toPath('/not-found');

  deepEqual(calls, [
    'list',
    'new',
    'show-specific-article-name',
    'popular',
    'show-another-specific-article',
    'popular',
    'not-found'
  ]);
});

test('Router actually updates location', function() {
  var calls = [];
  var router = new Router();

  router.notFound(function() {
    calls.push('not-found');
  });

  router.route('listArticles', '/articles', function() {
    calls.push('list');
  });

  router.route('showArticle', '/articles/:name', function(name) {
    calls.push('show-' + name);
  });

  router.toPath('/articles');
  equal(window.location.hash, '#!/articles');

  router.toRoute('showArticle', {name: 'another-specific-article'});
  equal(window.location.hash, '#!/articles/another-specific-article');
  deepEqual(calls, [
    'list',
    'show-another-specific-article'
  ]);
});
