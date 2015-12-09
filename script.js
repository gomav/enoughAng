angular.module('myApp', ['ngMaterial'])
    .controller('MainCtrl', function($scope){
        $scope.label='Item One';
        $scope.description='Awesome Item!';
    })
    .controller('SecondaryCtrl', function(){
        this.label='Item Two';
        this.description='A better way';

    });
