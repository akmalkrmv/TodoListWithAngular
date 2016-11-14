
// Создается один глобальный модуль, можно вынести отдельно или создать конкретный модуль.
var app = angular.module("app", []);


// Только controller, без сервиса, так как пока нет необходимости.
// Здесь идут запросы на сервер и сразу же доступ к $scope.
// Так не следует делать, обычно надо вынести логику отдельно,
//  а тут оставить только работу с видом. 
app.controller("TodoItemCtrl", ["$scope", "$http", function ($scope, $http) {

    var todosUrl = '/api/todoitems/';

    $scope.loadAll = function () {
        $http.get(todosUrl).then(function (response) {
            $scope.todoItems = response.data;
        });
    }

    $scope.addItem = function () {
        var newItem = {};

        // Сразу добавим в базу, так у нас будет ID. 
        // Если этот функционал неправилный, 
        //  тогда логика добавления нового элемента в базу будет в функции saveChanges
        //  с проверкой на наличия ID
        $http.post(todosUrl, newItem).then(function (response) {
            $scope.todoItems.unshift(response.data);
        });
    }

    $scope.canBeDone = function (todoItem) {
        // Проверка на право измения "выполнено"
        return todoItem.Text && todoItem.Text.length >= 2;
    }

    $scope.saveChanges = function (todoItem) {
        // Тут просто идет сохранение изменений существующего элемента,
        //  так как элемент уже сохранился в базе, и имеет ID
        $http.put(todosUrl + todoItem.Id, todoItem);
    }

    $scope.remove = function (todoItem) {
        // Можно добавить проверку 
        // if (!confirm('Are you sure to delete this?')) return;

        $http.delete(todosUrl + todoItem.Id).then(function (response) {
            var index = $scope.todoItems.indexOf(todoItem);
            $scope.todoItems.splice(index, 1);
        });
    }

    // Инициализация
    $scope.loadAll();
}]);
