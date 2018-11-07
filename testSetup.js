import 'babel-polyfill';
import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = sinon;

beforeEach(() => {
  global.sandbox = sinon.sandbox.create();
})

afterEach(() => {
  global.sandbox.reset();
})
