console.log(' our angular app and config etc');
/*
This file will hold our main angular module with some dependencies, e.g. config, custom filters
*/
/*
  var app creates a memory box that we can reference in javascript
*/

/*
angular.module runs a piece of angular that creates an module object
1) a reference in HTML that we can access our angular object:
'app'
2) What other modules does this rely on? [ngRoute]
*/

var app = angular.module('app',['ngRoute']);
