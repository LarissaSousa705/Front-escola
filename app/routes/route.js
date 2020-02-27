app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'HomeCtrl',
    })

    .when('/cadastroAluno', {
        templateUrl : 'app/views/cadastroAluno.html',
        controller  : 'cadastroAlunoCtrl',
    })

    .when('/cadastroBoletim', {
        templateUrl : 'app/views/cadastroBoletim.html',
        controller  : 'cadastroBoletimCtrl',
    })

    // .when('/downloadBoletim', {
    //     templateUrl : 'app/views/downloadBoletim.html',
    //     controller  : 'downloadBoletim'
    // })
    .otherwise ({ redirectTo: '/' });


    // window.location.href = "meuendpoint"
    // history.go(-1);
});