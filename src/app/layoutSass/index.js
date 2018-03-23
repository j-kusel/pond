import bloc from './directives/bloc';
import layoutController from './controllers/layoutController';

export default angular.module('laboratory.layoutSass', [])
    .directive('bloc', [bloc])
    .controller('LayoutController', ['$scope', layoutController])
    .name;
