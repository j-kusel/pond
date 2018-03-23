const tpl = require('../../../templates/sassPlay/sassy.tpl.html');

module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            api: '='
        },
        template: tpl,
        link: (scope, elem, attr) => {
            console.log('sassy link works');
        }
    }
}
