import greeter from './directives/greeter';

export default angular.module('laboratory.ngDemo', [])
    .directive('greeter', [greeter]);

