'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:UserDetailCtrl
 * @description
 * # UserDetailCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('UserDetailCtrl', 
+  	[ "Data", "$scope", "$state", "$stateParams",
+  	function (Data, $scope, $state, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.$on('$viewContentLoaded', function() {
		window.alert(JSON.stringify($stateParams));
	});
  });
