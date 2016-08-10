angular
	.module('bracketApp')
	.directive('groupRating', function() {
		return {
			link: function (scope, element, attribute) {
			    $( "#groupE" ).sortable();
			    $( "#groupE" ).disableSelection();
			    $( "#groupF" ).sortable();
			    $( "#groupF" ).disableSelection();
			    $( "#groupG" ).sortable();
			    $( "#groupG" ).disableSelection();


				},
			
			}
	})
	.directive('thirdChoice', function() {
		return {
			template: 'You chose {{ team }}, so {{ team }} will not compete in quarterfinals. Are you sure?'
		};
		
	});

	 // function thirdRanked() {
			    // 	if 
			    // }

				// setTimeout(function() {
				// 	$( "#groupE" ).each(function( index ) {
  		// 			console.log( index + ": " + $( this ).text() );
				// 	});
				// 	console.log($("#groupG"));

				// }, 10000)

				
					


					// $( "#groupF" ).each(function( index ) {
  			// 			console.log( index + ": " + $( this ).text() );
  			// 			scope.fRanking.push(this);
  			// 			console.log(scope.fRanking);
					// });

					// $( "#groupG" ).each(function( index ) {
  			// 			console.log( index + ": " + $( this ).text() );
  			// 			scope.gRanking.push(this);
  			// 			console.log(scope.gRanking);
					// });
	
	// .directive('groupStage', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'groupStageTmpl.html',
	// 		scope: {
	// 			teamData: '='
	// 		},
	// 		controller: function($scope, groupSrv) {
	// 			$scope.updateScore = function(id) {
	// 				groupSrv.updateScore(id);
	// 			}
	// 		}

	// 	};
	// });

// scope: {
			// 	// day: '=day',
			// 	// dayNum: '=',
			// 	match: '=match'
			// },
			// controller: function($scope, groupSrv) {

			// 	$scope.allTeams = groupSrv.teams;

			// 	$scope.score = groupSrv.updateScore;

			// 	$scope.groups = _.groupBy(_.sortBy($scope.allTeams, 'groupid'), 'group')
			// 		console.log(groups);

			// 	$scope.matches = [
  	// 				{team1: $scope.groups["E"][0], team2: $scope.groups["E"][1]}
			// 	]

			// 	console.log('hi');


				// $scope.groupDay1 = groupSrv.day1Arr;
				// $scope.groupDay2 = groupSrv.day2Arr;
				// $scope.groupDay3 = groupSrv.day3Arr;

				// $scope.points = function(match, day, team) {

				// if ($scope.dayNum === 1) {
				// 	for (var i = 0; i < $scope.groupDay1.length; i++) {
				// 		if ($scope.groupDay1[i].team1 === match.team1) {
				// 			if (team === 1) {
				// 				$scope.groupDay1[i].score1 += 3;
				// 				console.log($scope.groupDay1[i].team1 + ": " + $scope.groupDay1[i].score1);
				// 			}
				// 			else if (team === 2) {
				// 				$scope.groupDay1[i].score2 += 3;
				// 				console.log($scope.groupDay1[i].team2 + ": " + $scope.groupDay1[i].score2);
				// 			}
				// 		};
					
				// 	};
				// }
				// else if ($scope.dayNum === 2) {
				// 	for (var i = 0; i < $scope.groupDay2.length; i++) {
				// 		if ($scope.groupDay2[i].team1 === match.team1) {
				// 			if (team === 1) {
				// 				$scope.groupDay2[i].score1 += 3;
				// 				console.log($scope.groupDay2[i].team1 + ": " + $scope.groupDay2[i].score1);
				// 			}
				// 			else if (team === 2) {
				// 				$scope.groupDay2[i].score2 += 3;
				// 				console.log($scope.groupDay2[i].team2 + ": " + $scope.groupDay2[i].score2);
				// 			}
				// 		};
					
				// 	};
				// }
				// else if ($scope.dayNum === 3) {
				// 	for (var i = 0; i < $scope.groupDay3.length; i++) {
				// 		if ($scope.groupDay3[i].team1 === match.team1) {
				// 			if (team === 1) {
				// 				$scope.groupDay3[i].score1 += 3;
				// 				console.log($scope.groupDay3[i].team1 + ": " + $scope.groupDay3[i].score1);
				// 			}
				// 			else if (team === 2) {
				// 				$scope.groupDay3[i].score2 += 3;
				// 				console.log($scope.groupDay3[i].team2 + ": " + $scope.groupDay3[i].score2);
				// 			}
				// 		};
					
				// 	};
				// }
				// 	for (var i = 0; i < arr.length; i++) {
				// // console.log(arr[i]);
				// 		if (team === arr[i] && arr[i].score === 0) {
				// 	arr[i].score += 3;
				// 	console.log(arr[i].score1);
				// 	console.log(arr[i]);
				// 	return arr[i].score;
				// }

// .directive('groupStageLayout', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'groupStageTmpl.html',
	// 		scope: {
	// 			groupStage1 = '&'
	// 		}
	// 		controller: function($scope, groupSrv) {
	// 			$scope.teams = groupSrv.teams;

	// 			$scope.groupStage1 = function() {
	// 				var day1Arr = [];
	// 				var match1 = [];
	// 				var match2 = [];
	// 				var match3 = [];
	// 				var match4 = [];
	// 				var match5 = [];
	// 				var match6 = [];	
				
	// 				for (var i = 0; i < $scope.teams.length; i++) {
	// 					if ($scope.teams[i].group === 'E') {
	// 						if ($scope.teams[i].id === 3 || $scope.teams[i].id === 4) {
	// 							match1.push($scope.teams[i]);
	// 						} else if ($scope.teams[i].id === 1 || $scope.teams[i].id === 2) {
	// 							match3.push($scope.teams[i]);
	// 						}
	// 					}
	// 					if ($scope.teams[i].group === 'F') {
	// 						if ($scope.teams[i].id === 1 || $scope.teams[i].id === 2) {
	// 							match2.push($scope.teams[i]);
	// 						} else if ($scope.teams[i].id === 3 || $scope.teams[i].id ===	4) {
	// 							match4.push($scope.teams[i]);
	// 						}
	// 					}
	// 					if ($scope.teams[i].group === 'G') {
	// 						if ($scope.teams[i].id === 1 || $scope.teams[i].id === 2) {
	// 							match5.push($scope.teams[i]);
	// 						} else if ($scope.teams[i].id === 3 || $scope.teams[i].id ===	4) {
	// 							match6.push($scope.teams[i]);
	// 						}
	// 					}
	// 				}
	// 				day1Arr.push(match1, match2, match3, match4, match5, match6);
	// 				return day1Arr;
	// 			};
	// 		}

	// 	}
	// })
