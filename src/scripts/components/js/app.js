var myApp = angular.module('App',[
	'ngRoute'
	]);

myApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.when(
		'/menu-item-one', 
		{
			templateUrl: 'ngPartials/menu-item-one.html'
		}
	).when(
		'/menu-item-two', 
		{
			templateUrl: 'ngPartials/menu-item-two.html'
		}
	).otherwise(
		{
			templateUrl: 'ngPartials/home.html'
		}
	);
}]);