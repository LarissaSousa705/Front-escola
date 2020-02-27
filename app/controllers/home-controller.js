app.controller('HomeCtrl', function($scope, $http){
    
    $scope.matricula = "";

    $scope.boletimPdf = function(){
        window.location.href = "http://localhost:8080/dadosboletim/report/" + $scope.matricula
    };

    $http({
        method: 'GET',
        url: 'http://localhost:8080/aluno'
 
    }).then(function successCallback(response) {
        $scope.alunos = response.data;
        console.log($scope.alunos);
        console.log('aluunos')
    }, function errorCallback(response) {
        console.log("error");
    });
    
    $scope.listaAlunos = function(){

        $http({ method :"GET", url:'http://localhost:8080/aluno'})
        .then(function(response){
            $scope.listAlunos=response.data;
            console.log(response.data);
            console.log(response.status);
        }, function(response){
            console.log(response.data);
            console.log(response.status);
        });
    };

   
});