var layoutctrl = ($scope) => {
    $scope.blocs = [
        {
            title: 'superbloc',
            main: 'here is a truly massive wall of text. you are definitely gonna need a tee el dee argh for this lil bloc right here mmmmmmchyeah',
            tags: [
                'good',
                'better'
            ]
        },
        {
            title: 'ultrabloc',
            main: 'this bloc could and will usurp all other blocs that threaten to enter its event horizon, beware to all other blocs tbqh',
            tags: [
                'good',
                'best'
            ]
        }
    ];

    $scope.identity = {
        title: "big title",
        search: "enter search here",
        filter: '',
        submit: function(query) {
            console.log(query);
        }
    };

}


export default layoutctrl;


