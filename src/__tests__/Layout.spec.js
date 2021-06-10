import React from 'react'
import { shallow, mount } from 'enzyme';

import Layout from '../components/Layout';

import '../setUpTests';

//Créer un mock de Home
jest.mock("../components/home", () => {
    return "home-component";
})

    describe('Layout snapshot',()=>{
            
        it('It renders without crashing', () => {
        shallow(<Layout/>)
        // expect(wrapper.length).toEqual(1);
        // expect(wrapper).toMatchSnapshot;
    });

    it('It renders Home', () => {
        const wrapper = mount(<Layout/>);
        //Créer snapshot'
        expect(wrapper.find('home-component'))
        
    });
    it('renders Correctly', () => {
        const wrapper = shallow(<Layout/>);
        //Créer snapshot'
        expect(wrapper).toMatchSnapshot();
        
    });
});