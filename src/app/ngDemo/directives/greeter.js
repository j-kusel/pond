const tpl = require('../../../templates/ngDemo/greeter.tpl.html');

function greeter() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        replace: true,
        template: tpl,
        link: (scope, elem, attr) => {
            //scope.name = attr.name;
        }
    };
}


export default greeter;
