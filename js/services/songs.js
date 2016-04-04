musicApp.factory('songs', ['$http', function($http) { 
  return $http.get('http://localhost:3000/songs') 
  	.success(function(data){
  		return data;
  	})
  	.error(function(err){
  		return err;
  	});
  
  
}]);