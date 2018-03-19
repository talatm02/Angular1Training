function TrainingController($scope){
    $scope.helloWorld = "Hello World";

    $scope.patients = [
        {
            name: "Talat",
            age: 35,
            address:{
                street:"123",
                city:"Dubai",
                country:"USE"
            }
        },
        {
            name: "Shuklaji",
            age: 25,
            address:{
                street:"123",
                city:"Dubai",
                country:"USE"
            }
        }
    ];

    $scope.Onfocus = function(name){
        console.log("Focus", name);
    }

    $scope.onBlur = function(age){
        console.log("Blur", age);
    }

    function savingPatient(){
        $scope.patients.push(
            {
                name:$scope.newName,
                age:$scope.newAge
            }
        )
    }

    $scope.save = savingPatient;

    $scope.selectPatient = function(object){
        $scope.newName = object.name;
        $scope.newAge = object.age;
        console.log("called", object);
    }
}

angular
    .module("app-training")
    .controller("TrainingController", TrainingController)