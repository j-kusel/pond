const tpl = require('../../../templates/sassPlay/header.tpl.html');

export default function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '='
        },
        template: tpl
    }
}
