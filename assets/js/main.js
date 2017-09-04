var libraryApp=angular.module('libraryApp',['ngRoute']);

libraryApp.config(function($routeProvider){
	$routeProvider
		.when('/',{						templateUrl :'parts/home.html',
										controller  :'controlerHome'
		}).when('/home',{				templateUrl :'parts/home.html',
										controller  :'controlerHome'
		}).otherwise({					templateUrl :'parts/404.html',
										controller  :'controler404'
		});
});

libraryApp.controller('mainCtrl',function($rootScope,$scope){
	$rootScope.searchText='';
	$scope.addBook=function(){
		console.log('X');
		$rootScope.booksLength++;
		$rootScope.books.push(
			{
				"author":"Andrzej Sapkowski",
				"books":10,
				"borrowed":2,
				"category":"Acción y Aventura",
				"description":"Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.",
				"id":$rootScope.booksLength,
				"image":"1.jpg",
				"title":"Sword of Destiny",
				"year":"2015"
			}
		);
	};

});

libraryApp.controller('controlerHome',function(endPoints,$rootScope,$scope){

	$scope.removeBook=function(id){
		$rootScope.books = $rootScope.books.filter(function(book){
			return book.id !== id;
		});
	};

	endPoints.getBooks().then(function onSuccess(response){
		console.log(response.data);
		$rootScope.books = response.data;
		$rootScope.booksLength = response.data.length;
	}).catch(function onError(response){
		console.log(response);
	});

});

libraryApp.controller('controler404',function($scope){
});

libraryApp.service('endPoints',function($http){
	this.getBooks = function(){
		return $http.get('assets/books.json');
	}
});