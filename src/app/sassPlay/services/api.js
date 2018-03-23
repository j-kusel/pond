export default function($resource, CONSTANTS) {
    var service = {
        fakeposts: $resource(CONSTANTS.mongo + '/fakeposts', {
            TITLE: '@TITLE',
            CONTENT: '@CONTENT'
        })
    };
    return service;
}
