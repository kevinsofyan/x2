'use strict';

module.exports = {

    options: {                       // Target options
        style: 'expanded'
    },
    devbuild: {
        files: {
            '.build/css/app.min.css': 'src/css/styles.scss'
        }
    },
    build: {
        options: {
            style: 'compressed'
        },
        files: {
            '.build/css/app.min.css': 'src/css/styles.scss'
        }
    }

};