var app = angular.module("itemsApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/new", {
        templateUrl: "/partials/new-item.html",
        controller: "newItemController"
    })
    .when("/index", {
        templateUrl: "/partials/items-index.html",
        controller: "itemsIndexController"
    })
    .otherwise("/index");
});
app.controller("itemsIndexController", function ($scope) {
    $scope.items = [
        { title: "Do Stuff", dueDate: new Date() },
        { title: "Do More Stuff", dueDate: new Date() },
        { title: "Do Even More Stuff", dueDate: new Date() },
    ];
});
app.controller("newItemController", function ($scope) {
    $scope.addItem = function () {
        console.log("NEW ITEM:", $scope.item);
        $scope.item = {};
    }
});
