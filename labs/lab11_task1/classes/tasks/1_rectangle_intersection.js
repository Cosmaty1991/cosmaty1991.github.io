module('Rectangle intersection');

/*
Your task is to create three classes with correct inheritance setup.

  Shape class is an abstract figure class and only holds its position.
  Constructor: Shape(x, y)
  Methods:
    shape.getX() must return x coordinate
    shape.getY() must return y coordinate

  Constructor: Rectangle(x, y, width, height)
    x and y hold position of rectangles' top-left corner
  Inherits from: Shape
  Methods:
    rectangle.getWidth() must return width
    rectangle.getHeight() must return height
    rectangle.intersects(anotherRectangle) must return true if two rectangles intersect and false otherwise
      do not forget to check if argument is actually a rectangle

  Constructor: Square(x, y, size)
  Inherits from: Rectangle
  Methods: none

Aim of task is to be able to correctly calcualte intersections between Rectangle and its subclass Square
*/





// Write your classes here

// create a constructor for further work with it

function Shape(x, y) {
  this._x = x;
  this._y = y;
};

// create methods that will return coordinates

Shape.prototype.getX = function() {
  return this._x;
};

Shape.prototype.setX = function() {
  this._x = x;
};

Shape.prototype.getY = function() {
  return this._y;
};

Shape.prototype.setY = function() {
  this._x = x;
};

// create a rectangle class that will inherit from shape class

function Rectangle(x, y, width, height) {
  Shape.call(this, x, y);
  this._width = width;
  this._height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// create methods that will return width and height of rectangle

Rectangle.prototype.setWidth = function(width) {
  this._width = width > 0 ? width : NaN;
};

Rectangle.prototype.getWidth = function() {
  return this._width;
};

Rectangle.prototype.setHeight = function(height) {
  this._height = height > 0 ? height : NaN;
};

Rectangle.prototype.getHeight = function() {
  return this._height;
};

// create a method that will check if two rectangles intersect

Rectangle.prototype.intersects = function(anotherRectangle) {
  return (this.getX() < anotherRectangle.getX() + anotherRectangle.getWidth() &&
   this.getX() + this.getWidth() > anotherRectangle.getX() &&
   this.getY() < anotherRectangle.getY() + anotherRectangle.getHeight() &&
   this.getHeight() + this.getY() > anotherRectangle.getY());
};

// create a method that will calculate size of rectangle

Rectangle.prototype.size = function() {
  return this.getWidth() * this.getHeight();
};

// create a square class that will inherit from rectangle class

function Square(x, y, size) {
  Rectangle.call(this, x, y, size, size);
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

test('Inheritance chain is valid', function() {
  var constructors = [
    typeof Shape,
    typeof Square,
    typeof Rectangle
  ];

  for(var i = 0; i < constructors.length; i++) {
    if (constructors[i] !== 'function') {
      equal('Constructors are not defined', 'Constructors are defined');
      return;
    }
  }

  // Prototypal inheritance is correct
  notEqual(Shape.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Shape.prototype);

  // constructor property points to correct function
  equal(Shape.prototype.constructor, Shape);
  equal(Rectangle.prototype.constructor, Rectangle);
  equal(Square.prototype.constructor, Square);

  var rectangleOne = new Rectangle(-100, -100, 2, 4);
  var rectangleTwo = new Rectangle(10, 5, 4, 6);

  var squareOne = new Square(0, 0, 20);
  var squareTwo = new Square(5, 5, 10);

  // Prototypal inheritance chain is correct
  equal(rectangleOne instanceof Shape, true);
  equal(rectangleOne instanceof Rectangle, true);

  equal(squareOne instanceof Shape, true);
  equal(squareOne instanceof Rectangle, true);
  equal(squareOne instanceof Square, true);

  // Methods work as expected
  equal(rectangleOne.intersects(rectangleTwo), false);
  equal(rectangleOne.intersects(squareOne), false);

  equal(squareOne.intersects(squareTwo), true);
  equal(squareOne.intersects(rectangleTwo), true);
});
