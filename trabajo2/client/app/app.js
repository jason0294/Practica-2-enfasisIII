'use strict';

angular.module('trabajo2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', {
        TITLE:  'HOMECENTER MACHINES',
        TABLE_TITLE:      'MACHINES'
    });

    $translateProvider.preferredLanguage('en');
  });
