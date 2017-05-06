///////////////////////
// MODULE
///////////////////////
// Creating an AngularJS Module
var app = angular.module('customersApp', ['ngRoute']);

///////////////////////
// ROUTES
///////////////////////
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'customersController',
        templateUrl: '/app/views/customers.html'
    })
    .otherwise({ redirectTo: '/' });
}]);

///////////////////////
// FACTORY
///////////////////////
// Creating a Factory
app.factory('dataFactory', ['$http', function($http) {

    var urlBase = '/api/customers';
    var dataFactory = {};

    dataFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
}]);

///////////////////////
// CONTROLLER
///////////////////////
// Creating a Controller
app.controller('customersController', ['$scope', 'dataFactory', function ($scope, dataFactory) {

    $scope.status;
    $scope.customers;
    $scope.orders;

    ///////////
    // GET Data from Factory
    ///////////
    getCustomers();
    function getCustomers() {
        dataFactory.getCustomers()
            .then(function (response) {
                $scope.customers = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    ///////////
    // UPDATE
    ///////////
    $scope.updateCustomer = function (id) {
        var cust;
        for (var i = 0; i < $scope.customers.length; i++) {
            var currCust = $scope.customers[i];
            if (currCust.ID === id) {
                cust = currCust;
                break;
            }
        }

         dataFactory.updateCustomer(cust)
          .then(function (response) {
              $scope.status = 'Updated Customer! Refreshing customer list.';
          }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
          });
    };

    ///////////
    // CREATE
    ///////////
    $scope.insertCustomer = function () {
        //Fake customer data
        var cust = {
            ID: 10,
            FirstName: 'JoJo',
            LastName: 'Pikidily'
        };
        dataFactory.insertCustomer(cust)
            .then(function (response) {
                $scope.status = 'Inserted Customer! Refreshing customer list.';
                $scope.customers.push(cust);
            }, function(error) {
                $scope.status = 'Unable to insert customer: ' + error.message;
            });
    };

    ///////////
    // DELETE
    ///////////
    $scope.deleteCustomer = function (id) {
        dataFactory.deleteCustomer(id)
        .then(function (response) {
            $scope.status = 'Deleted Customer! Refreshing customer list.';
            for (var i = 0; i < $scope.customers.length; i++) {
                var cust = $scope.customers[i];
                if (cust.ID === id) {
                    $scope.customers.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        }, function (error) {
            $scope.status = 'Unable to delete customer: ' + error.message;
        });
    };



    $scope.getCustomerOrders = function (id) {
        dataFactory.getOrders(id)
        .then(function (response) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = response.data;
        }, function (error) {
            $scope.status = 'Error retrieving customers! ' + error.message;
        });
    };
}]);

/////////////////////
// MISC Notes
/////////////////////

// Lower Case filter
    {{student.fullName() | lowercase}}

// Currency Filter
    {{student.fees | currency}}

// Order By Filter
    // <li ng-repeat = "subject in student.subjects | orderBy:'marks'">

/*
ANGULAR DIRECTIVES
    ng-app − This directive starts an AngularJS Application.

    ng-init − This directive initializes application data.

    ng-model − This directive binds the values of AngularJS application data to HTML input controls.

    ng-repeat − This directive repeats html elements for each item in a collection.
*/