import React from 'react';
import renderer from 'react-test-renderer';
import RESTy from "./resty/index";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<RESTy />', () => {
  it('is alive at application start', () => {
    let app = shallow(<RESTy />);
    expect(app.find('main').exists()).toBeFalsy();
  });

  // it('increases number on click of increment', () => {

  // });

  // it('renders right', () => {
  //   const tree = renderer.create(<Counter />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});





// describe('<App />', () => {
//   it('Should test', () => {});
// });
