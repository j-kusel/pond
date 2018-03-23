import sassy from './directives/sassy';
import navbar from './directives/navbar';
import headbar from './directives/headbar';
import feed from './directives/feed';
import post from './directives/post';

import api from './services/api';

import navController from './controllers/navController';

import CONSTANTS from './constants/CONSTANTS';

export default angular.module('laboratory.sassPlay', ['ngResource'])
    .directive('sassy', [sassy])
    .directive('navbar', [navbar])
    .directive('headbar', [headbar])
    .directive('feed', [feed])
    .directive('post', [post])

    .constant('CONSTANTS', CONSTANTS)

    .factory('API', ['$resource', 'CONSTANTS', api])

    .controller('NavController', ['$scope', 'API', 'CONSTANTS', navController])
    .name;
