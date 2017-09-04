var libraryApp=angular.module('libraryApp',['ngRoute','angularUtils.directives.dirPagination']);

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

libraryApp.controller('mainCtrl',function($rootScope,$scope,resets){
	$rootScope.searchText = '';
	$scope.openedModalAddBook = false;
	$scope.openedModalEditBook = false;
	$scope.newBookData = resets.resetNewBook();

	$rootScope.scrolTo=function scrollIntoView(eleID){
		var e=document.getElementById(eleID);
		if(!!e && e.scrollIntoView)
			e.scrollIntoView();
	}
	$scope.addBook = function(){
		$rootScope.booksLength++;
		$scope.openedModalAddBook = false;
		$scope.newBookData.id = $rootScope.booksLength;
		$rootScope.books.push($scope.newBookData);
		$scope.newBookData = resets.resetNewBook();
	};
	$scope.openModalAddBook = function(){
		$scope.openedModalAddBook = !$scope.openedModalAddBook;
	};

});

libraryApp.controller('controlerHome',function($scope,$filter,endPoints,$rootScope,){
	$scope.removeBook=function(id){
		$rootScope.books = $rootScope.books.filter(function(book){
			return book.id !== id;
		});
	};
	endPoints.getBooks().then(function onSuccess(response){
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

libraryApp.service('resets',function(){
	this.resetNewBook = function(){
		return {
			author:'',
			books:10,
			borrowed:0,
			category:'',
			description:'',
			id:0,
			image:'dummy.png',
			title:'',
			year:''
		}
	}
});

