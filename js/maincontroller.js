function MainController($scope){ //dependency injection
    $scope.name = "Talat";
    $scope.likes = ['dosa', 'burger'];
    $scope.newTitle = '';
    $scope.Year = '';
    $scope.likeList = [];
    $scope.onFocus = function(){
        console.log("Focus");
    }

    $scope.onBlur = function(){
        console.log("Blur");
    }
    $scope.movies = [
        {
            name: "Bangalore Days",
            popular: false,
            year: 2000,
            category: 'drama'
        },
        {
            name: "Chocolate",
            popular: false,
            year: 2015,
            category: 'thriller'            
        },
        {
            name: "Bahubali",
            popular: true,
            year: 2018,            
            category: 'action'
        },
        {
            name: "Piku",
            popular: true,
            year: 2018,            
            category: 'comedy'
        }
    ];

    $scope.likeClick = function (movie){
        $scope.likeList.push(movie)
    }

    $scope.unlikeClick = function(index){
        $scope.likeList.splice(index, 1);
    }

    $scope.addMovie = function(){
        $scope.movies.unshift({
            name: $scope.newTitle,
            year: $scope.newYear
        })
    }
}
angular
    .module('app')
    .controller('MainController', MainController)