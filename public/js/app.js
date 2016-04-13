"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .controller("servicesIndexC", servicesIndexCtrl)
  .controller("servicesShowC", servicesShowCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("servicesIndex", {
      url:          "/",
      templateUrl:  "/html/services-index.html",
      controller:   "servicesIndexC",
      controllerAs: "sIndexVM"
    })
    .state("servicesShow", {
      url:          "/service/:name",
      templateUrl:  "/html/services-show.html",
      controller:   "servicesShowC",
      controllerAs: "sShowVM"
    });
    $urlRouterProvider.otherwise("/");
  }

  function servicesIndexCtrl(){
    var vm  = this;
    vm.test = "This is the services index.";
  }

  servicesShowCtrl.$inject = ["$stateParams"];
  function servicesShowCtrl($stateParams){
    var vm  = this;
    vm.name = $stateParams.name;
  }
})();
