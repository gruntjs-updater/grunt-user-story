'use strict';


var grunt = require('grunt');


exports.user_story = {
    all: function(test){
        test.expect(3);

        test.equal(
            grunt.file.read('tmp/1.js'),
            grunt.file.read('test/expected/1.js')
        );
        test.equal(
            grunt.file.read('tmp/a/b/2.js'),
            grunt.file.read('test/expected/a/b/2.js')
        );
        test.equal(
            grunt.file.read('tmp/a/b/3.js'),
            grunt.file.read('test/expected/a/b/3.js')
        );

        test.done();
    }
};
