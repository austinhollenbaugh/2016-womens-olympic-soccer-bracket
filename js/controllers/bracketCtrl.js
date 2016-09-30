angular
	.module('bracketApp')
	.controller('bracketCtrl', function($scope, groupSrv) {

		$scope.eRanking = groupSrv.eRanking;
		$scope.fRanking = groupSrv.fRanking;
		$scope.gRanking = groupSrv.gRanking;

		console.log('eRanking', $scope.eRanking, 'fRanking', $scope.fRanking, 'gRanking', $scope.gRanking);

		$scope.loadBracket = function() {
			console.log('loadBracket bracketCtrl');
			groupSrv.createBracket();
		};

		$scope.thirdEF = groupSrv.thirdEF;
		$scope.thirdFG = groupSrv.thirdFG;

	});
