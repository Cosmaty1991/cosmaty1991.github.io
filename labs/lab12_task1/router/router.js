/*
Create a Router class that would cover most of the basic needs:


-----------------------------------
Router.route(route, handler)
Router.route(name, route, handler)

Must register handler for given path.
Path may optionally contain parameters like "/item/:id", which must be passed to handler function
in order of appearance.

Registering a handler for path "/item/:id", then navigating to "/item/1", must call the handler function
with first argument set to "1".

Routes may optionally be named for convenience.


-----------------------------------
Router.notFound(handler)

Register a "Not found" handler, which will be called if navigating to path that doesnt match any defined route


-----------------------------------
Router.reverse(name)
Router.reverse(name, params)

Construct a path for given route name, optionally setting parameters, so
router.route("list", "/items", function...)
router.reverse("list") == "/items"

And

router.route("showItem", "/items/:id", function...)
router.reverse("showItem", { id: 1 }) == "/items/1"


-----------------------------------
Router.toPath(path)

Navigate to given path, calling all handlers
Routes defined earlier must have greater priority


-----------------------------------
Router.toRoute(name)
Router.toRoute(name, params)

Navigate to given named route with optinal parameters passed in order they appear


-----------------------------------
As always, look up the tests for concrete examples

-----------------------------------
To use such router in an SPA, you would either

1. Bind a global click-handler for <a> elements - will work with IE6+
2. Use a "hashchange" window event - will work with IE8+
*/

(function() {
  // Write the class here
  function Router() {

  }

  window.Router = Router;
})();
