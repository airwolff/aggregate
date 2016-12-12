var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/all', {
			templateUrl: '/views/templates/all.html',
			controller: 'AllController',
			controllerAs: 'all',
		})
		.when('/prework', {
			templateUrl: '/views/templates/prework.html',
			controller: 'PreController',
			controllerAs: 'prework',
		})
		.when('/lecture', {
			templateUrl: '/views/templates/lecture.html',
			controller: 'LectureController',
			controllerAs: 'lecture',
		})
		.when('/project', {
			templateUrl: '/views/templates/project.html',
			controller: 'ProjectController',
			controllerAs: 'project',
		})
		.when('/post', {
			templateUrl: '/views/templates/post.html',
			controller: 'PostController',
			controllerAs: 'post',
		})
		.otherwise({
			redirectTo: 'all'
		});
}, ]);
