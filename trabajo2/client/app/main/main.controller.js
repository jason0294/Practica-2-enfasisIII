'use strict';

angular.module('trabajo2App')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];

    $http.get("http://localhost:8080/alquilerMaquinas/maquinas/maquinas-listAPI")
      .success(function(response){
        $scope.machines = response;
      });

    $scope.detail = function(path){
      $location.path('/detail/' + path);
    };

    $scope.filtrar = function(){

      $http.get("http://localhost:8080/alquilerMaquinas/maquinas/maquinas-listAPIFiltro?filtro="+$scope.palabraFiltrada)
        .success(function(response){

          $scope.machines = response;
        });

    };

  });
