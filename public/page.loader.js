/**
 * Created by Nishan on 4/29/2017.
 */
'use strict';

angular.module('mainModule').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.when('/stockViewer/', {
            templateUrl: 'AngularViews/stockViewer.html',
            controller: 'stockController'
        }).when('/emailSender',{
            templateUrl: 'AngularViews/emailViewer.html',
            controller: 'emailController'
        }).when('/orderViewer',{
            templateUrl: 'AngularViews/orderViewer.html',
            controller: 'OrderController'
        }).when('/makeOrder',{
            templateUrl: 'AngularViews/drugRequestsViewer.html',
            controller: 'drugRequestController'
        }).otherwise({
            templateUrl: 'AngularViews/drugRequestsViewer.html',
            controller: 'drugRequestController'
        });
        $locationProvider.html5Mode(true);
    }
]);