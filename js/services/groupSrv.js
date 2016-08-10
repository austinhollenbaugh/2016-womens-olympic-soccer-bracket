angular
	.module('bracketApp')
	.service('groupSrv', function($http) {

		 this.eRanking = [];
		 this.fRanking = [];
		 this.gRanking = [];
		 this.thirds = [];
		 this.thirdClicked = false;

		 console.log($("#groupE"));

		this.createBracket = function() {

			var groupE = $("#groupE")[0].children;
			for (var i = 0; i < 3; i++) {
				this.eRanking.push(groupE[i].childNodes[1].data);
				if (i === 2) {
					this.thirds.push(groupE[i].childNodes[1].data);
				}
			}
			console.log(this.eRanking);

			var groupF = $("#groupF")[0].children;
			for (var i = 0; i < 3; i++) {
				this.fRanking.push(groupF[i].childNodes[1].data);
				if (i === 2) {
					this.thirds.push(groupF[i].childNodes[1].data);
				}
			}
			console.log(this.fRanking);

			var groupG = $("#groupG")[0].children;
			for (var i = 0; i < 3; i++) {
				this.gRanking.push(groupG[i].childNodes[1].data);
				if (i === 2) {
					this.thirds.push(groupG[i].childNodes[1].data);
				}
			}
			this.thirdClicked = true;
			console.log(this.fRanking);
			console.log(this.thirds);
		}

			this.thirdEF = "";
			this.thirdFG = "";

		this.setThird = function(group) {
			if (group === 'e') {
				this.thirdEF = this.fRanking[2]; 
				this.thirdFG = this.gRanking[2];
				console.log(this.thirdEF, this.thirdFG);
			} else if (group === 'f') {
				this.thirdEF = this.eRanking[2];
				this.thirdFG = this.gRanking[2];
				console.log(this.thirdEF, this.thirdFG);
			} else if (group === 'g') {
				this.thirdFG = this.fRanking[2]; 
				this.thirdEF = this.eRanking[2];
				console.log(this.thirdEF, this.thirdFG);
			}
		};


		this.getData = function() {
			return $http({
				method: 'GET',
				url: "http://www.foaas.com/operations"
			}).then(function(response) {
				return response.data;
			}); 
		};


		// this.updateScore = function(id){

		// 	for (var i = 0; i < this.teams.length; i++) {
		// 		if (!(this.teams[i].clicked)) {
		// 			if (this.teams[i].id === id) {
		// 			this.teams[i].score += 3;
		// 			this.teams[i].clicked = true;
		// 			console.log(this.teams[i].name + " " + this.teams[i].score);
		// 			}

		// 		} else if (this.teams[i].clicked) {
		// 			this.teams[i].score = 0;
		// 			this.teams[i].clicked = false;
		// 			console.log(this.teams[i].name + " " + this.teams[i].score);
		// 		}

		// 	}
			
		// }

		this.teams = [
				{
					name: "Sweden",
					group: 'E',
					groupid: 3,
					score: 0,
					id: 0,
					clicked: false
				},
				{
					name: "South Africa",
					group: 'E',
					groupid: 4,
					score: 0,
					id: 1,
					clicked: false
				},
				{
					name: "Canada",
					group: 'F',
					groupid: 1,
					score: 0,
					id: 2,
					clicked: false
				},
				{
					name: "Australia",
					group: 'F',
					groupid: 2,
					score: 0,
					id: 3,
					clicked: false
				},
				{
					name: "Brazil",
					group: 'E',
					groupid: 1,
					score: 0,
					id: 4,
					clicked: false
				},
				{
					name: "China",
					group: 'E',
					groupid: 2,
					score: 0,
					id: 5,
					clicked: false
				},
				{
					name: "Zimbabwe",
					group: 'F',
					groupid: 3,
					score: 0, 
					id: 6,
					clicked: false
				},
				{
					name: "Germany",
					group: 'F',
					groupid: 4,
					score: 0,
					id: 7,
					clicked: false
				},
				{
					name: "United States",
					group: 'G',
					groupid: 1,
					score: 0,
					id: 8,
					clicked: false
				},
				{
					name: "New Zealand",
					group: 'G',
					groupid: 2,
					score: 0,
					id: 9,
					clicked: false
				},
				{
					name: "France",
					group: 'G',
					groupid: 3,
					score: 0,
					id: 10,
					clicked: false

				},
				{
					name: "Colombia",
					group: 'G',
					groupid: 4,
					score: 0,
					id: 11,
					clicked: false
				}
		]

		

		


	})