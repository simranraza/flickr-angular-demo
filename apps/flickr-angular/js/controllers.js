'use strict';

/* Controllers */

(function() {
    
    var HomeController = function ($scope,$log,$location,Page) {
        
        
        $scope.Page = Page;

        function init() {
			
			Page.setTitle('Flickr Angular Demo');        
        }
		
		$scope.SetTitle = function(arg1){
			console.log('Title:  ' + arg1);
		}
        
        
        init();
        
        
    };
    
    HomeController.$inject = ['$scope', '$log','$location','Page'];

    angular.module('flickrAngularDemo')
      .controller('HomeController', HomeController);
    
}());

/////////////////////////////////////////////////


