// Karma configuration
// Generated on Tue May 21 2013 14:53:11 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,

  'app/js/vendor/angular.js',

  'test/lib/angular/angular-mocks.js',

  'app/js/app*.js',
  'app/js/controller/*.js',
  'app/js/services/*.js',
  'app/js/filter/*.js',

  'test/unit/global.js',
  'test/unit/**/*.js'
];

preprocessors = {
    'app/js/app*.js' : 'coverage',
    'app/js/controller/*.js' : 'coverage',
    'app/js/services/*.js' : 'coverage',
    'app/js/filter/*.js' : 'coverage'
}


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots', 'junit', 'coverage'];

junitReporter = {
  outputFile: 'build/karma/test-results.xml'
};

coverageReporter = {
  type : 'cobertura',
  dir : 'build/karma/coverage/',
  file: 'coverage.xml'
}

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
