module.exports = function (grunt) {

    grunt.initConfig({
        wrap: {
            // app module wrapper
            app: {
                src: ['build/app.js'],
                dest: 'build/app-module.js',
                options: {
                    wrapper: ['var ZdTestModule = (function () {', 'return ZdTestModule;})();']
                }
            }
        },
        concat: {
            // app concat.
            app: {
                src: [
                    'src/dispatchers/dispatcher-codes.js',
                    'src/services/groups-map.js',
                    'src/dispatchers/simple-dispatcher.js',
                    'src/services/html5-features-detection-service.js',
                    'src/services/group-detection-service.js',
                    'src/controls/base-control.js',
                    'src/controls/form-control.js',
                    'src/controls/input-control.js',
                    'src/controls/span-control.js',
                    'src/components/base-component.js',
                    'src/components/canavas-flag-component.js',
                    'src/components/group-input-component.js',
                    'src/components/group-notification-component.js',
                    'src/components/main-form-component.js',
                    'src/main.js'
                ],
                dest: 'build/app.js'
            },
            // vendors concat
            app_and_libs: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/lodash/lodash.js',
                    'build/app-es5.js'
                ],
                dest: 'dist/dist.js'
            }
        },
        // es5 compile
        "babel": {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'build/app-es5.js': "build/app-module.js"
                }
            }
        },
        // app uglification
        uglify: {
            app: {
                files: {
                    'dist/dist.min.js': ['dist/dist.js']
                }
            }
        },
        clean: ['build'],
        less: {
            default: {
                files: {
                    'dist/default-styles.css': 'src/styles/styles.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks('grunt-wrap');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat:app', 'wrap:app', 'babel', 'concat:app_and_libs', 'uglify', 'less:default', 'clean']);
};
