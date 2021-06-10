import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import 'jest-enzyme';
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/jest-dom/extend-expect'
// this adds jest-dom's custom assertions
// import 'jest-dom/extend-expect';
configure({ adapter: new Adapter() });