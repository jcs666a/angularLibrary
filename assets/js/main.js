var libraryApp=angular.module('libraryApp',['ngMaterial','ngRoute','ngProgress','ngMessages']);

libraryApp.config(function($routeProvider,$mdProgressCircularProvider){
	$mdProgressCircularProvider.configure({
		progressSize:100,
		strokeWidth:10,
		duration:800
	});
	$routeProvider
		.when('/',{						templateUrl :'parts/home.html',
										controller  :'controlerHome'
		}).when('/home',{				templateUrl :'secciones/home.html',
										controller  :'controlerHome'
		}).otherwise({					templateUrl :'parts/404.html',
										controller  :'controler404'
		});
});


libraryApp.run(function($rootScope,$mdSidenav,ngProgressFactory){

	$rootScope.progressbar=ngProgressFactory.createInstance();
	$rootScope.progressbar.setColor('#ff00ff');
	$rootScope.progressbar.setHeight('5px');
/*
	$rootScope.scrolA=function scrollIntoView(eleID){
		var e=document.getElementById(eleID);
		if(!!e && e.scrollIntoView)
			e.scrollIntoView();
	}
*/
	$rootScope.$on('$routeChangeStart',function(){
		$rootScope.progressbar.start();
		$rootScope.isLoading=true;
	});
	$rootScope.$on('$routeChangeSuccess',function(){
		$rootScope.progressbar.complete();
		$rootScope.isLoading=false;
	});
/*
	$rootScope.menU=function(x,i){
		$mdSidenav(x).toggle();
		$rootScope.oP=i;
		$rootScope.subAreaCoaches=false;
		$rootScope.subElbasket=false;
		if(i=='B'){
			$rootScope.subElbasket=!$rootScope.subElbasket;
		}
		if(i=='C'){
			$rootScope.subAreaCoaches=!$rootScope.subAreaCoaches;
			$rootScope.openB=true;
		}
	};
*/
});

libraryApp.controller('controlerHome',function($scope){
});

libraryApp.controller('controler404',function($scope){
});

/*
libraryApp.service('GetLibros', function(){
	return {
		getData: getData
	}
	function getData () {
		var datos = [
			{ titulo: "Producto 1", precio: 2 },
			{ titulo: "Producto 2", precio: 1.5 },
			{ titulo: "Producto 3", precio: 4.2 },
			{ titulo: "Producto 4", precio: 3 },
			{ titulo: "Producto 5", precio: 2.5 }
		];
		return datos;
	}
});

libraryApp.controller('AppCtrl',$scope, function(){
	console.log('Webos puto');
	$scope.productos = GetLibros.getData();

});
*/