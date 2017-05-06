angular.module('friends').factory('Friends', ['$resource', function($resource) {
    return $resource('api/friends/:friendId', {
        friendId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);