todo.controller("MainController", function ($scope,toastr) {
    $scope.todos = [];
    $scope.total = $scope.todos.length;


    $scope.AddToDo = function (todo) {
        if (todo == undefined || todo.text == "") {

             toastr.error('you dont have a plan?');

        } else {
            $scope.todos.push(todo.text);
            $scope.total++;
            todo.text="";


        }

    }

    $scope.DeleteToDo = function ($index) {
        $scope.total--;
    }



});