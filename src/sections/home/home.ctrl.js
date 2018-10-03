'use strict';
angular
    .module('app.core',['ui.bootstrap'])
    .controller('HomeController', function($scope,$uibModal, PageValues) {
        //Set page title and description
        PageValues.title = "HOME";
        PageValues.description = "Learn AngularJS using best practice real world examples.";
        //Setup view model object
        var vm = this;
        $scope.showdetail = function(args){
            console.log(args);
            var modalInstance = $uibModal.open({
                templateUrl: 'sections/home/modal.tpl.html',
                scope: $scope, //passed current scope to the modal
                controller: 'ChartDrilController', //passed current scope to the modal
                size: 'lg'
            });
        }

        $scope.showdetailpie = function(args){
            console.log(args);
        }
    });
