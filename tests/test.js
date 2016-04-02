var gemini = require('gemini');

gemini.suite('test suite', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('body')
        .capture('plain');
});
