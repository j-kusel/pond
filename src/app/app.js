import './ngDemo/index';
import layoutSass from './layoutSass/index';
import sassPlay from './sassPlay/index';

import '../sass/fonts.scss';
import '../sass/app.scss';

angular.module('laboratory', [
        'laboratory.ngDemo',
        layoutSass,
        sassPlay
    ]);
