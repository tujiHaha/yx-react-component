// import foo from './foo'
import {
  version
} from './package.json';

function hello() {
  console.log(version)
}

hello()

export default hello