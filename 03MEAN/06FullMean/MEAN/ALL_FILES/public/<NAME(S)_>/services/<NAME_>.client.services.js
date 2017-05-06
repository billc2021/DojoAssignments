angular.module('<NAME_>').factory('<NAME_(first letter cap)', ['$resource', function($resource) {
    return $resource('api/<NAME_>/:<NAME_>Id', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);