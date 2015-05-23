'use strict';

angular.module('trabajo2App')
  .controller('DetailCtrl', function ($scope, $http, $stateParams, $location) {
    $scope.message = 'This is a detail';

    $http.get("http://localhost:8080/alquilerMaquinas/maquinas/obtenerMaquina?id="+$stateParams.id)
      .success(function(result){
        if(result.status=="Successful"){
          $scope.machines = result.maquina;
        }
      });

    $scope.eliminar = function(path){
      $http.get("http://localhost:8080/alquilerMaquinas/maquinas/eliminarMaquina?id="+path)
        .success(function(result){
          if(result.status=="Successful"){
            alert("Eliminado");
            $location.path('/');
          }
        });
    };
  });
