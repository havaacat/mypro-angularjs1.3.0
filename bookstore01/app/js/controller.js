var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope){
        $scope.greeting = {
            text:'Hello'
        };
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [
            {title:"Ext", author:"DaMo"},
            {title:"ActionScript", author:"DaMo"},
            {title:"Angularjs", author:"DaMo"}
        ]
    }
]);
