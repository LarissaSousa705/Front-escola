app.controller('cadastroBoletimCtrl', function ($scope, $http) {
    $scope.adicionar = {
        aluno:"",
        disciplina:"",
        periodo:"",
        notas:"",
        notasUm: "",
        notasDois: ""
    };
    $scope.adicionarNotas = function(){
        console.log($scope.adicionar);
        $http({method: 'POST', url:'http://localhost:8080/dadosboletim', data: $scope.adicionar})
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        }, function(response){
            console.log(response.data);
            console.log(response.status);
        }
        )
    }

});
