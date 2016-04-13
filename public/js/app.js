"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Service", serviceFactory)
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

  function serviceFactory(){
    var Service = {};
    Service.all = [
      { name: "Test1" },
      { name: "Test2" },
      { name: "Test3" }
    ];
    return Service;
  }

  servicesIndexCtrl.$inject = ["Service"];
  function servicesIndexCtrl(Service){
    var vm      = this;
    vm.services = Service.all;
  }

  servicesShowCtrl.$inject = ["$stateParams"];
  function servicesShowCtrl($stateParams){
    var vm  = this;
    vm.name = $stateParams.name;
  }
})();
