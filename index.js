import {readFileSync as read} from 'fs';

const HOME = process.env.HOME;

export default (function(args) {

  let path = args.filter(arg => arg.match(/--config=/i))
    .map(arg => { 
      let path = arg.replace('--config=', '');
        if (path[0] === '~') {
          path = path.replace('~', HOME);
        }
      return path;
    })
    .pop()

  try {
    return JSON.parse(read(path).toString());
  } catch (e) {
    throw new Error(`Could not be parse: ${path}`);
  }
})(process.argv);
