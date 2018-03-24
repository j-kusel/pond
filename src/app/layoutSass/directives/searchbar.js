const tpl = require('../../../templates/layoutSass/searchbar.tpl.html');

function searchbar() {
    return {
        restrict: 'E',
        scope: {
            search: '=',
            submit: '&'
        },
        replace: true,
        template: tpl,
        link: (scope, elem, attr) => {
            scope.submit();
        }
    };
}

export default searchbar;
