var jrNBA=angular.module('jrNBA',['ngMaterial','ngRoute','ngProgress','ngMessages','material.svgAssetsCache']);

jrNBA.config(function($routeProvider,$mdProgressCircularProvider,$mdIconProvider){
	$mdIconProvider.defaultIconSet('img/icons/sets/core-icons.svg',24);
	$mdProgressCircularProvider.configure({
		progressSize:100,
		strokeWidth:10,
		duration:800
	});
	$routeProvider
		.when('/',{						templateUrl :'secciones/home.html',
										controller  :'controlerHome'
		}).when('/home',{				templateUrl :'secciones/home.html',
										controller  :'controlerHome'
		}).when('/jrNBA',{				templateUrl :'secciones/jrNBA.html',
										controller  :'controlerjrNBA'
		}).when('/elBasketball',{		templateUrl :'secciones/elBasketball.html',
										controller  :'controlerBasketball'
		}).when('/tutoriales',{			templateUrl :'secciones/tutoriales.html',
										controller  :'controlerTutoriales'
		}).when('/galeria',{			templateUrl :'secciones/galeria.html',
										controller  :'controlerGaleria'
		}).when('/clinicas',{			templateUrl :'secciones/clinicas.html',
										controller  :'controlerClinicas'
		}).when('/funZone',{			templateUrl :'secciones/funZone.html',
										controller  :'controlerFunZone'
		}).when('/areaCoaches',{		templateUrl :'secciones/areaCoaches.html',
										controller  :'controlerAreaCoaches'
		}).when('/BasketballBasics',{	templateUrl :'secciones/elBasket/basketBasiqs.html',
										controller  :'controlerBasketballBasics'
		}).when('/TheCourt',{			templateUrl :'secciones/elBasket/laCancha.html',
										controller  :'controlerTheCourt'
		}).when('/Dictionary',{			templateUrl :'secciones/elBasket/dictionary.html',
										controller  :'controlerDictionary'
		}).when('/NBAstats',{			templateUrl :'secciones/elBasket/jrNBAstats.html',
										controller  :'controlerNBAstats'
		}).otherwise({					templateUrl :'secciones/404.html',
										controller  :'controler404'
		});
});

jrNBA.run(function($rootScope,$mdSidenav,ngProgressFactory){

	$rootScope.progressbar=ngProgressFactory.createInstance();
	$rootScope.progressbar.setColor('#00559a');
	$rootScope.progressbar.setHeight('5px');

	$rootScope.scrolA=function scrollIntoView(eleID){
		var e=document.getElementById(eleID);
		if(!!e && e.scrollIntoView)
			e.scrollIntoView();
	}

	$rootScope.$on('$routeChangeStart',function(){
		$rootScope.progressbar.start();
		$rootScope.isLoading=true;
	});
	$rootScope.$on('$routeChangeSuccess',function(){
		$rootScope.progressbar.complete();
		$rootScope.isLoading=false;
	});

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

});

jrNBA.controller('controlerHome',function($scope){
});

jrNBA.controller('controlerjrNBA', function($scope,$mdDialog){
});

jrNBA.controller('controlerBasketball',function($scope){
	$scope.Tab='uno';
	$scope.openC=function(x){
		$scope.Tab=x;
	};
});

jrNBA.controller('controlerTutoriales',function($scope){
});

jrNBA.controller('controlerGaleria',function($scope){
});

jrNBA.controller('controlerClinicas',function($scope){
});

jrNBA.controller('controlerFunZone',function($scope){
});

jrNBA.controller('controlerAreaCoaches',function($scope){
	$scope.Tab='uno';
	$scope.openC=function(x){
		$scope.Tab=x;
	};
});

jrNBA.controller('controlerBasketballBasics',function($scope){
	$scope.Tab='uno';
	$scope.openC=function(x){
		$scope.Tab=x;
	};
});

jrNBA.controller('controlerTheCourt',function($scope){
});

jrNBA.controller('controlerDictionary',function($scope){
});

jrNBA.controller('controlerNBAstats',function($scope){
	$scope.Tab='uno';
	$scope.openC=function(x){
		$scope.Tab=x;
	};
});

jrNBA.controller('controler404',function($scope){});
