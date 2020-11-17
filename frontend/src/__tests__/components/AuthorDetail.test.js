import React from 'react'
import { shallow } from 'enzyme'
import AuthorDetail from '../../components/AuthorDetail';


describe('AuthorDetail', () => {

    const props = {
        match:{
            params:1
        }
    }

    it('should match snapshot', () => {
        const wrapper = shallow(
            <AuthorDetail
            {...props}/>
        )
        expect(wrapper).toMatchSnapshot();
    })
})
