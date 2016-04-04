musicApp.controller('mainController', ['$scope', 'songs' ,'$location', function($scope, songs, $location) {

	$scope.getData = function(){
	  songs.success(function(data){
	  	$scope.songs = data;
	  });
	},

	$scope.parseURItoURL = function(uri){
		var parsed, url;

		parsed = uri.split(":");
		url = "https://play.spotify.com/"+parsed[1]+"/"+parsed[2];

		var win = window.open(url, '_blank');

		win.focus();

	}

}]);