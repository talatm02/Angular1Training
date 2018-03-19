function MainController($scope){
    $scope.myObject = {
        one : "Key 1",
        two : "KEy 2"
    }
}

angular
    .module("app1")
    .controller("MainController1", MainController)