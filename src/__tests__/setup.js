import 'react-native-mock-render/mock'; // eslint-disable-line
const jsdom = require('jsdom').jsdom;
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});