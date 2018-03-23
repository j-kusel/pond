
module.exports = ($scope, API, CONSTANTS) => {
    var init = () => {
        $scope.navlinks = CONSTANTS.navlinks;
        $scope.title = CONSTANTS.title;
        API
            .fakeposts
            .query({})
            .$promise
            .then((data) => $scope.fakeposts = data || {})
            .catch((err) => console.log(err));
    };

    init();
}
