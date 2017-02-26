'use strict';

/* App Module */

var flickrAngularDemo = angular.module('flickrAngularDemo', ['ngRoute','ui.bootstrap','ui.router']);

flickrAngularDemo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test/home', {
        templateUrl: 'views/home.html',
        controller: 'PicSearch'
      }).
	  otherwise({
        redirectTo: '/test/home'
      });
  }]);
  
 //////////////////////


flickrAngularDemo.controller('PicSearch',['$scope', '$http', function($scope,$http){
    
    $scope.master = {};
    $scope.images = {};

    var init = function () {
       // check if there is query in url
       // and fire search in case its value is not empty
          console.log('PicSearch Controller Init')
    };
    // and fire it after definition
    init();
    
    $scope.makeSearch = function(searchText){
        
        console.log('tags:' + $scope.serchTextTags);
        // build URL for Flickr API
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne";
         flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + encodeURIComponent($scope.serchTextTags)
          + "&tagmode=" + $scope.mode
          + "&format=json";
        
        // send AJAX query to Flickr API
        $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;

        })
        .error(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;
        });
        // reset form validation
        $scope.form.$setValidity();
    };
    $scope.resetForm = function(form){
      $scope.form.$setValidity();
      $scope.images = {};
      $scope.serchTextTags = "";
    }
}]);


flickrAngularDemo.run(['$window',  function($window) {
 
  //$window.alert('Started!');
}]);




  
