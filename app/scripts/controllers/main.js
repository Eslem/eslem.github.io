app.controller("MainController", ['$scope', '$state', function($scope, $state){
   $scope.isActive = function(sref){
       if(sref==$state.current.name)
           return true;
   };
    
    
    $scope.isHome= function(){
        console.log($state.current.name=='home');
        return $state.current.name=='home';
    }
}]);