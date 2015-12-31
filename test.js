var fs = require('fs');
var babel = require('babel-core');
var contents = fs.readFileSync('sample.js', 'utf8')
var profiler = require('v8-profiler')

profiler.startProfiling('', true)
babel.transform(contents);

var profile = profiler.stopProfiling('');

profile.export(function(err, res) {
  fs.writeFileSync('profile.cpuprofile', res);
});
