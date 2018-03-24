const tpl = require('../../../templates/layoutSass/identity.tpl.html');

function identity() {
    return {
        restrict: 'E',
        scope: {
            logo: '@',
            title: '@'
        },
        replace: true,
        transclude: true,
        template: tpl,
        link: (scope, elem, attr) => {
        }
    };
}

export default identity;
