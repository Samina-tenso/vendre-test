import {expect, it, describe,} from 'vitest'
import { mount, } from '@vue/test-utils'
import {getByRole, getByTestId, queryAllByAltText, queryByRole} from '@testing-library/vue'
import  Card  from '../components/Card.vue'
import { Link } from '.nuxt/components'

const props = {
    first_name: 'Samina', 
    last_name: 'Dahlberg',  
    id:4,
    email:"hello@gmail.com",
    avatar:"https://profile.avatar.jpg", 
}

describe('Card', () =>{
    it('should render prop', async () => {
        const wrapper = mount(Card,{propsData: props})
        expect(wrapper.vm).toBeTruthy()
        console.log(wrapper.props())
expect(wrapper.props().first_name).toContain('Samina')
})


})