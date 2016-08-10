angular
	.module('bracketApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state ('home', {
				url: '/',
				templateUrl: './views/home.html'
			})
			.state ('groupStage', {
				url: '/group-stage',
				templateUrl: './views/groupStage.html',
				controller: 'bracketCtrl',
				controllerAs: 'vm'
			})
			.state ('bracket', {
				url: '/bracket',
				templateUrl: './views/bracket.html',
				controller: 'bracketCtrl',
				controllerAs: 'vm'
			})

			$urlRouterProvider.otherwise('/');


	});
