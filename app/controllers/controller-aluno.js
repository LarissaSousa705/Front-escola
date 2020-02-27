app.controller('cadastroAlunoCtrl', function ($scope, $http) {

    $scope.cadastrar = {
        nomeAluno: "",
        cpfAluno: "",
        turmaAluno: "",
        dataNasciAluno: "",
        matriculaAluno: ""
           
    };
    
    $scope.cadastrarAluno = function(){
        console.log($scope.cadastrar)
        $http({method: 'POST' ,url: 'http://localhost:8080/aluno', data: $scope.cadastrar})
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        },function(response){
            console.log(response.data);
            console.log(response.status);
        });
        };
});