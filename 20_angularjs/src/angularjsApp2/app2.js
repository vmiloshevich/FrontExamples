export default angular.module("app2", []).directive('directive1', [
    '$rootScope',
    '$filter',
    function($rootScope, $filter) {
        return {
            restrict: 'A',
            scope: {
                inParam: '=',
                outParam: '='
            },
            templateUrl: './angularjsApp2/directive1.html'
        }
    }
]
);