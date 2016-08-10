angular
	.module('bracketApp')
	.controller('groupCtrl', function($scope, groupSrv) {

		$scope.thirds = groupSrv.thirds;
		$scope.thirdClicked = groupSrv.thirdClicked;

		$scope.loadThirds = function(group) {
			groupSrv.setThird(group);
		}

		// $scope.data = groupSrv.getData().then(function(response) {
		// 	$scope.comments = response;
		// 	console.log(response);
		// 	return response;

		// });
			
		
		// $scope.allTeams = groupSrv.teams;

		// $scope.score = function() {
		// 	return groupSrv.updateScore;
		// };

		// $scope.groups = _.groupBy(_.sortBy($scope.allTeams, 'groupid'), 'group');
		
		// console.log($scope.groups);

		// $scope.matches = [
		// 	[{team1: $scope.groups["E"][2].name, id1: $scope.groups["E"][2].id, team2: $scope.groups["E"][3].name, id2: $scope.groups["E"][3].id},
  // 			{team1: $scope.groups["F"][0].name, id1: $scope.groups["F"][0].id, team2: $scope.groups["F"][1].name, id2: $scope.groups["F"][1].id},
  // 			{team1: $scope.groups["E"][0].name, id1: $scope.groups["E"][0].id, team2: $scope.groups["E"][1].name, id2: $scope.groups["E"][1].id},
  // 			{team1: $scope.groups["F"][2].name, id1: $scope.groups["F"][2].id, team2: $scope.groups["F"][3].name, id2: $scope.groups["F"][3].id},
  // 			{team1: $scope.groups["G"][0].name, id1: $scope.groups["G"][0].id, team2: $scope.groups["G"][1].name, id2: $scope.groups["G"][1].id},
  // 			{team1: $scope.groups["G"][2].name, id1: $scope.groups["G"][2].id, team2: $scope.groups["G"][3].name, id2: $scope.groups["G"][3].id}],
		// 	[{team1: $scope.groups["F"][0].name, id1: $scope.groups["F"][0].id, team2: $scope.groups["F"][2].name, id2: $scope.groups["F"][2].id},
  // 			{team1: $scope.groups["F"][0].name, id1: $scope.groups["F"][0].id, team2: $scope.groups["F"][2].name, id2: $scope.groups["F"][2].id},
  // 			{team1: $scope.groups["F"][0].name, id1: $scope.groups["F"][0].id, team2: $scope.groups["E"][1].name, id2: $scope.groups["E"][1].id},
  // 			{team1: $scope.groups["F"][0].name, id1: $scope.groups["F"][0].id, team2: $scope.groups["E"][1].name, id2: $scope.groups["E"][1].id},
  // 			{team1: $scope.groups["G"][3].name, id1: $scope.groups["G"][3].id, team2: $scope.groups["G"][1].name, id2: $scope.groups["G"][1].id},
  // 			{team1: $scope.groups["E"][0].name, id1: $scope.groups["E"][0].id, team2: $scope.groups["E"][2].name, id2: $scope.groups["E"][2].id}],
		// 	[{team1: $scope.groups["F"][1].name, id1: $scope.groups["F"][1].id, team2: $scope.groups["F"][2].name, id2: $scope.groups["F"][2].id},
  // 			{team1: $scope.groups["F"][3].name, id1: $scope.groups["F"][3].id, team2: $scope.groups["F"][0].name, id2: $scope.groups["F"][0].id},
  // 			{team1: $scope.groups["G"][3].name, id1: $scope.groups["G"][3].id, team2: $scope.groups["G"][0].name, id2: $scope.groups["G"][0].id},
  // 			{team1: $scope.groups["G"][1].name, id1: $scope.groups["G"][1].id, team2: $scope.groups["G"][2].name, id2: $scope.groups["G"][2].id},
  // 			{team1: $scope.groups["E"][3].name, id1: $scope.groups["E"][3].id, team2: $scope.groups["E"][0].name, id2: $scope.groups["E"][0].id},
  // 			{team1: $scope.groups["E"][1].name, id1: $scope.groups["E"][1].id, team2: $scope.groups["E"][2].name, id2: $scope.groups["E"][2].id}]
		// ];

		

	});