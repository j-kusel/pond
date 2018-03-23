const tpl = require('../../../templates/sassPlay/navbar.tpl.html');

function navbar() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            links: '='
        },
        template: tpl
    }
};

export default navbar;
