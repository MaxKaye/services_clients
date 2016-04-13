"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("servicesIndex", {
      url:      "/",
      template: "This is working"
    })
    .state("servicesShow", {
      url:      "/service/:name",
      template: "This is the services show route"
    });
    $urlRouterProvider.otherwise("/");
  }
})();
