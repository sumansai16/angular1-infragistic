'use strict';
angular
    .module('app.core')
    .controller('ChartDrilController', function($scope,$uibModalInstance, PageValues) {
        //Set page title and description
        PageValues.title = "HOME";
        PageValues.description = "Learn AngularJS using best practice real world examples.";
        //Setup view model object
        var vm = this;

        $scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
    });
