angular
	.module('bracketApp')
	.controller('groupCtrl', function($scope, groupSrv) {

		$scope.teamsArr = groupSrv.teams;

		$scope.groupDay1 = groupSrv.day1Arr;
		$scope.groupDay2 = groupSrv.day2Arr;
		$scope.groupDay3 = groupSrv.day3Arr;

		// $scope.matchArr = 

		

		

	});