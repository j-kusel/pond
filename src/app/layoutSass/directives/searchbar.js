const tpl = require('../../../templates/layoutSass/searchbar.tpl.html');

function searchbar() {
    return {
        restrict: 'E',
        scope: {
            search: '=',
            submit: '&',
            prompt: '@',
            button: '@'
        },
        replace: true,
        template: tpl,
        link: (scope, elem, attr) => {
        }
    };
}

export default searchbar;
