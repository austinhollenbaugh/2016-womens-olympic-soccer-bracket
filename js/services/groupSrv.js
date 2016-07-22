angular
	.module('bracketApp')
	.service('groupSrv', function() {


		this.teams = [
			{
				name: "Sweden",
				score: 0
			},
			{
				name: "South Africa",
				score: 0
			},
			{
				name: "Canada",
				score: 0
			},
			{
				name: "Australia",
				score: 0
			},
			{
				name: "Brazil",
				score: 0
			},
			{
				name: "China",
				score: 0
			},
			{
				name: "Zimbabwe",
				score: 0
			},
			{
				name: "Germany",
				score: 0
			},
			{
				name: "United States",
				score: 0
			},
			{
				name: "New Zealand",
				score: 0
			},
			{
				name: "France",
				score: 0
			},
			{
				name: "Colombia",
				score: 0
			}
		]


		this.day1Arr = [
			{
				team1: "Sweden",
				score1: 0,
				team2: "South Africa",
				score2: 0
			},
			{
				team1: "Canada",
				score1: 0,
				team2: "Australia",
				score2: 0
			},
			{
				team1: "Brazil",
				score1: 0,
				team2: "China",
				score2: 0
			},
			{
				team1: "Zimbabwe",
				score1: 0,
				team2: "Germany",
				score2: 0
			},
			{
				team1: "United States",
				score1: 0,
				team2: "New Zealand",
				score2: 0
			},
			{
				team1: "France",
				score1: 0,
				team2: "Colombia",
				score2: 0
			}
		]


		this.day2Arr = [
			{
				team1: "Canada",
				score1: 0,
				team2: "Zimbabwe",
				score2: 0
			},
			{
				team1: "United States",
				score1: 0,
				team2: "France",
				score2: 0
			},
			{
				team1: "Germany",
				score1: 0,
				team2: "Australia",
				score2: 0
			},
			{
				team1: "South Africa",
				score1: 0,
				team2: "China",
				score2: 0
			},
			{
				team1: "Colombia",
				score1: 0,
				team2: "New Zealand",
				score2: 0
			},
			{
				team1: "Brazil",
				score1: 0,
				team2: "Sweden",
				score2: 0
			}
		]

		this.day3Arr = [
			{
				team1: "Australia",
				score1: 0,
				team2: "Zimbabwe",
				score2: 0
			},
			{
				team1: "Germany",
				score1: 0,
				team2: "Canada",
				score2: 0
			},
			{
				team1: "Colombia",
				score1: 0,
				team2: "United States",
				score2: 0
			},
			{
				team1: "New Zealand",
				score1: 0,
				team2: "France",
				score2: 0
			},
			{
				team1: "South Africa",
				score1: 0,
				team2: "Brazil",
				score2: 0
			},
			{
				team1: "China",
				score1: 0,
				team2: "Sweden",
				score2: 0
			}
		]
		// this.teams = {};

		// function addTeam(team, displayName) {

		// 	var team = {
		// 		name: displayName,
		// 		score: 0
		// 	};

		// 	team.addPoints = function(points) {
		// 		team.score += points;
		// 	};

		// 	team.getPoints = function() {
		// 		return team.points;
		// 	};

		// }

		// addTeam(sweden, "Sweden");

		this.getTeams = function() {
			console.log(this.teams);
		};


	})