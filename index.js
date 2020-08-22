const core = require('@actions/core');
const github = require('@actions/github');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

try {

  const template = core.getInput('template');
  const output = core.getInput('output');
  const vars = core.getInput('vars');

  fs.readFile(template, 'utf8', function(err, data){
    if(err){
      throw new Error(err);
    }

    var tpl = handlebars.compile(data)
    var out = tpl(JSON.parse(vars))

    if( output == "-" ){
      process.stdout.write(out);
    } else {
      var p = path.dirname(output)
      mkdirp.sync(p)

      fs.writeFile(output, out, 'utf8', function(err){
        if(err){
          throw new Error(err)
        }
        console.log(`Generated templated output: ${template} -> ${output}`)
      });

    }

  });

} catch (error) {
  core.setFailed(error.message);
}
