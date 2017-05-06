var app = angular.module("clickerApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/click", {
        templateUrl: "/partials/button-clicker.html",
        controller: "clickerPageController"
    })
    .when("/clicked", {
        templateUrl: "/partials/clicked-count.html",
        controller: "clickedCountPageController"
    })
    .otherwise("/click");
});
app.factory("clickFactory", function () {
    var factory = {};
    factory.clicked = 0;
    return factory;
});
app.controller("clickerPageController", function ($scope, clickFactory) {
    $scope.clickButton = function () {
        clickFactory.clicked += 1;
    }
});
app.controller("clickedCountPageController", function ($scope, clickFactory) {
    $scope.clicked = clickFactory.clicked;
});
