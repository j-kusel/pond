import './ngDemo/index';
import './layoutSass/index';
import sassPlay from './sassPlay/index';

import '../sass/fonts.scss';
import '../sass/app.scss';

angular.module('laboratory', [
        'laboratory.ngDemo',
        'laboratory.layoutSass',
        sassPlay
    ]);
