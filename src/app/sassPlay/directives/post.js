const tpl = require('../../../templates/sassPlay/post.tpl.html');

export default function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            post: '='
        },
        template: tpl
    }
}
