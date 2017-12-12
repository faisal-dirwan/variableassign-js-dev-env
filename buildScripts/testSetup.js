// this file isn't transpiled, so must use commonJS and ES5

//register bable to transpile befor our test run.
require('babel-register')();

// Disable webpack featuers that Mocha dosen't understand.
require.extensions['.css'] =function() {};
