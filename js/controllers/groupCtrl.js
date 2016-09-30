angular
	.module('bracketApp')
	.controller('groupCtrl', function($scope, groupSrv) {

		$scope.thirds = groupSrv.thirds;
		$scope.thirdClicked = groupSrv.thirdClicked;

		$scope.loadThirds = function(group) {
			console.log('groupCtrl', group);
			groupSrv.setThird(group);
		};
	});
