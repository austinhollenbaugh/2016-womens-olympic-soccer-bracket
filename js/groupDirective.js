angular
	.module('bracketApp')
	// .directive('userChoice', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'groupStageTmpl.html'
	// 		scope: { //scope setup instructions

	// 		},
	// 		controller: function($scope) {
				
	// 		},
	// 		link: function(scope, element, attr) {

	// 		}
	// 	}
	// })
	.directive('teamClick', function() {
		return {
			restrict: 'E',
			templateUrl: 'groupStageTmpl.html',
			scope: {
				day: '=day',
				match: '=match'
			},
			controller: function($scope, groupSrv) {
				$scope.groupDay1 = groupSrv.day1Arr;
				$scope.groupDay2 = groupSrv.day2Arr;
				$scope.groupDay3 = groupSrv.day3Arr;

				$scope.points = function(teamScore, arr) {
					for (var i = 0; i < arr.length; i++) {
				// console.log(arr[i]);
						if (teamScore === arr[i] && arr[i].score === 0) {
					arr[i].score += 3;
					console.log(arr[i].score1);
					console.log(arr[i]);
					return arr[i].score;
				}
			}
			
		};
			}

		}
		
	})