'use strict';

module.exports = {
    build: {
        files: [
            {
                '.build/index.html': 'src/index.html',
                '.build/faq.html': 'src/faq.html'
            }
        ]
    },
    temptobuild: {
        files: [
            {
                cwd     : '.tmp/concat/',
                src     : '**/*',
                dest    : '.build/',
                flatten : false,
                expand  : true
            }
        ]
    },
    templates: {
        files: [
            {
                cwd     : 'src/templates/',
                src     : '**/*',
                dest    : '.build/templates/',
                flatten : false,
                expand  : true
            }
        ]
    },
    data: {
        files: [
            {
                cwd     : 'src/data/',
                src     : '**/*',
                dest    : '.build/data/',
                flatten : false,
                expand  : true
            }
        ]
    },
    css: {
        files: [
            {
                cwd     : 'src/css/',
                src     : '**/*.css',
                dest    : '.build/css/',
                flatten : false,
                expand  : true
            }
        ]
    },
    images: {
        files: [
            {
                cwd     : 'src/img/',
                src     : '**/*',
                dest    : '.build/img/',
                flatten : false,
                expand  : true
            }
        ]
    }
};