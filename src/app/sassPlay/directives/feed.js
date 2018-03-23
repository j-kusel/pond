const tpl = require('../../../templates/sassPlay/feed.tpl.html');

export default function() {
    return {
        restrict: 'E',
        replace: true,
        template: tpl,
        transclude: true
    }
}
