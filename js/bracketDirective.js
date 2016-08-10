angular
	.module('bracketApp')
	.directive('bracketDirective', function() {
		return {
			restrict: 'E',
			template: '<div class="team">{{ 1G }}</div>',
			scope: {

			},
			controller: function($scope, groupSrv) {
				
			}
		}
	});