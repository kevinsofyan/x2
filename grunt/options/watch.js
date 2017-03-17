'use strict';

module.exports = {
    images: {
        files: [
            'src/img/dest/*.*'
        ],
        tasks: ['newer:copy:images']
    },
    sass: {
        files: [
            'src/css/*.scss',

        ],
        tasks: ['sass:devbuild']
    },
    htmljs: {
        files: ['src/*.html','src/js/*.js','src/components/**/*.js'],
        tasks: ['useminPrepare','copy:build','concat','copy:temptobuild','usemin','newer:jshint:all']
    },
//    grunt: {
//        files: [
//            'Gruntfile.js',
//            'grunt/**/*.js'
//        ],
//        tasks: ['build:dev']
//    },
    templates: {
        files: [
            'src/templates/*'
        ],
        tasks: ['newer:copy:templates']
    },
    data: {
        files: [
            'src/data/*'
        ],
        tasks: ['newer:copy:data']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '.build/**/*.*'
        ]
    }
};