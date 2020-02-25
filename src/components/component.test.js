import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header'
import App from '../app';
import JsonHeader from './jsonview/header';
import JsonResponse from './jsonview/response';
import Footer from './footer'
import Label from './label';
import JsonText from './jsonText';
import Button from './button';
import Url from './url';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('is alive at application start', () => {
    const app = shallow(<App />);    
    expect(app.find('RESTy').exists()).toBeTruthy();
  });
});


describe('<Header /> component', () => {
  it('renders as expected', () => {
    const app = shallow(<Header />);

    expect(app.find('header').exists()).toBeTruthy();
  });
});


describe('<JsonHeader /> component', () => {
  it('renders as expected', () => {
    const app = shallow(<JsonHeader />);

    expect(app.find('#JsonHeader').exists()).toBeTruthy();
  });
});

describe('<JsonResponse /> component', ()=>{
  it('renders as expected', ()=>{
    const app = shallow(<JsonResponse />);
    expect(app.find('#JsonResponse').exists()).toBeTruthy();
  });
});

describe('<Footer /> component', () => {
  it('renders as expected', () => {
    const app = shallow(<Footer />);

    expect(app.find('footer').exists()).toBeTruthy();
  });
});


describe('testing the label component', () => {
  it('should render', () => {
    const label = shallow(<Label />);
    expect(label.find('label').exists()).toBeTruthy();
  });
});

describe('<JsonText /> component', ()=>{
  it('should render', ()=>{
    const app = shallow(<JsonText />);
    expect(app.find('textarea').exists()).toBeTruthy();
  });
});

describe('<Button /> component', ()=>{
  it('should render', ()=>{
    const app = shallow(<Button />);
    expect(app.find('button').exists()).toBeTruthy();
  });
});

describe('<Url /> component', ()=>{
  it('should render', ()=>{
    const app = shallow(<Url />);
    expect(app.find('input').exists()).toBeTruthy();
  });
});



