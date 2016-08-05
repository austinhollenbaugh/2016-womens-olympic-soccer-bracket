angular
	.module('bracketApp')
	.controller('bracketCtrl', function($scope, groupSrv) {

		$scope.eRanking = groupSrv.eRanking;
		$scope.fRanking = groupSrv.fRanking;
		$scope.gRanking = groupSrv.gRanking;
		
		$scope.loadBracket = function() {
			groupSrv.createBracket()
		}

		$scope.thirdEF = groupSrv.thirdEF;
		$scope.thirdFG = groupSrv.thirdFG;

	});