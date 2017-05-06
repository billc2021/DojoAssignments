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
app.factory("itemFactory", function () {
    var factory = {};
    var items = [
        { title: "Do Stuff", dueDate: new Date() },
        { title: "Do More Stuff", dueDate: new Date() },
        { title: "Do Even More Stuff", dueDate: new Date() },
    ];

    factory.addItem = function (item) {
        items.push(item);
    }
    factory.allItems = function () {
        return items;
    }

    return factory;
})
app.controller("itemsIndexController", function ($scope, itemFactory) {
    $scope.items = itemFactory.allItems();
});
app.controller("newItemController", function ($scope, itemFactory) {
    $scope.addItem = function () {
        console.log("NEW ITEM:", $scope.item);
        itemFactory.addItem($scope.item);
        $scope.item = {};
    }
});
