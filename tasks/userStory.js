/*
 * grunt-user-story
 * https://github.com/piumosso/grunt-user-story
 *
 * Copyright (c) 2014 piumosso
 * Licensed under the MIT license.
 */

'use strict';


var UserStoryParser = require('user-story/lib/UserStoryParser'),
    path = require('path');


module.exports = function(grunt){
    grunt.registerMultiTask('userStory', 'Grunt plugin for UserStory.js', function(){
        var options = this.options({
            baseDir: null,
            destDir: null
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
                    fileParsedContent,
                    outputFilePath;

                fileContent = grunt.file.read(filepath);
                fileParsedContent = UserStoryParser.parse(fileContent);

                if (options.destDir) {
                    if (options.baseDir && filepath.indexOf(options.baseDir) === 0) {
                        outputFilePath = path.join(options.destDir, filepath.replace(options.baseDir, ''));
                    } else {
                        outputFilePath = path.join(options.destDir, filepath);
                    }

                    grunt.file.write(outputFilePath, fileParsedContent);
                    grunt.log.ok('File "' + outputFilePath + '" has been created.');
                } else {
                    if (fileContent === fileParsedContent) {
                        grunt.log.ok('[Skip] File "' + filepath + '" don\'t contains log sections.');
                        return;
                    }
                    outputFilePath = filepath;

                    grunt.file.write(outputFilePath, fileParsedContent);
                    grunt.log.ok('File "' + outputFilePath + '" has been replaced.');
                }
            });
        });
    });
};
