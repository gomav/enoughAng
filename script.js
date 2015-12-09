angular.module('myApp', ['ngMaterial'])
    .controller('MainCtrl', function(){
        this.item={
            label: 'Item One',
            description: 'I\'m on an object boat'
        };
        this.label='Item One';
        this.description='Awesome Item!';
    });
