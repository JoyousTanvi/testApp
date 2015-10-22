sreWebApp.controller('personalDetailsController', ['$scope', '$location',
	function($scope, $location) {

 		$scope.open = function ( path ) {
  			$location.path( '/' + path );
		};

		var init = function(){

			$('#example').popover();

		}

		init();

	}
]);