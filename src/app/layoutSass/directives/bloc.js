const tpl = require('../../../templates/sassLayout/bloc.tpl.html');


function bloc() {
    return {
        restrict: 'E',
        /* scope {
         * },
        */
        replace: true,
        template: tpl,
        link: (scope, elem, attr) => {
            // bloc init
        }
    };
}
            
export default bloc;
