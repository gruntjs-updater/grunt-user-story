/*
 * grunt-user-story
 * https://github.com/piumosso/grunt-user-story
 *
 * Copyright (c) 2014 piumosso
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    var UserStoryParser = require('user-story/lib/UserStoryParser');

    grunt.registerMultiTask('userStory', 'Grunt plugin for UserStory.js', function(){
        var options = this.options({
            destDir: null,
            verbose: false
        });

        this.files.forEach(function(file){
            var existingFiles;

            existingFiles = file.src.filter(function(filepath){
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            existingFiles.forEach(function(filepath){
                var fileContent,
                    fileParsedContent;

                fileContent = grunt.file.read(filepath);
                console.log('fileContent', fileContent);
                fileParsedContent = UserStoryParser.parse(fileContent);
                
                if (fileContent === fileParsedContent) {
                    options.verbose && grunt.log.writeln('File "' + filepath + '" don\'t contains log sections.');
                }

                if (!options.destDir) {
                    grunt.file.write(filepath, fileParsedContent);
                    options.verbose && grunt.log.ok('File "' + filepath + '" has been replaced.');
                }
            });



        });

    });

};
