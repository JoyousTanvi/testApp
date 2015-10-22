sreWebApp.controller('homeController', ['$scope', '$location',
	function($scope, $location) {

		$scope.homeObj = {};
		$scope.homeObj.boxItems = [];

		$.getJSON( "rest/home.json", function( data ) {
  		$scope.homeObj.boxItems = data;
 		});

 		$scope.open = function ( path ) {
  			$location.path( '/' + path );
		};

	}
]);