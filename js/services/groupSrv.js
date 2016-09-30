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
				this.eRanking.push(groupE[i].childNodes[1].firstChild.data);
				if (i === 2) {
					this.thirds.push(groupE[i].childNodes[1].firstChild.data);
				}
			}
			console.log(this.eRanking);

			var groupF = $("#groupF")[0].children;
			for (var i = 0; i < 3; i++) {
				this.fRanking.push(groupF[i].childNodes[1].firstChild.data);
				if (i === 2) {
					this.thirds.push(groupF[i].childNodes[1].firstChild.data);
				}
			}
			console.log(this.fRanking);

			var groupG = $("#groupG")[0].children;
			for (var i = 0; i < 3; i++) {
				this.gRanking.push(groupG[i].childNodes[1].firstChild.data);
				if (i === 2) {
					this.thirds.push(groupG[i].childNodes[1].firstChild.data);
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
	});
