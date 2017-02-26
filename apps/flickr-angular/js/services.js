'use strict';

/* Services */

(function() {
    var itemsFactory = function($http) {
    
        var factory = {};
        
        factory.aboutFactory = function() {
            return '{"name":"Items Factory"}'
        };
		              
        return factory;
    };
    
    itemsFactory.$inject = ['$http'];
        
    angular.module('flickrAngularDemo').factory('itemsFactory', 
                                           itemsFactory);
                                           
}());

