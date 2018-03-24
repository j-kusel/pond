import bloc from './directives/bloc';
import identity from './directives/identity';
import searchbar from './directives/searchbar';
import layoutController from './controllers/layoutController';

export default angular.module('laboratory.layoutSass', [])
    .directive('bloc', [bloc])
    .directive('identity', [identity])
    .directive('searchbar', [searchbar])
    .controller('LayoutController', ['$scope', layoutController])
    .name;
