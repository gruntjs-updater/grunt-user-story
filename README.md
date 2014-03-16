# grunt-user-story

> Grunt plugin for UserStory.js

## Getting Started

```shell
npm install grunt-user-story --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-user-story');
```

## The "userStory" task

### Overview
In your project's Gruntfile, add a section named `userStory` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    userStory: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        },
    },
});
```

### Options

#### options.destDir
Type: `String`
Default value: `null`

A string value that represents the directory in which to save the converted files.
```js
grunt.initConfig({
    userStory: {
        options: {
            destDir: 'output'
        },
        src: ['src/1.js', 'src/dir/2.js']
    },
});
```
This code will produce in the following files:
```
output/src/1.js
output/src/dir/2.js
```

If `destDir` is null, source files will be overwritten with the converted content.

#### options.baseDir
Type: `String`
Default value: `null`

A string value that indicates the base directory of files that should be excluded from the directory hierarchy at non-null `destDir`.
```js
grunt.initConfig({
    userStory: {
        options: {
            destDir: 'output',
            baseDir: 'src'
        },
        src: ['src/1.js', 'src/dir/2.js']
    },
});
```
This code will produce in the following files:
```
output/1.js
output/dir/2.js
```
