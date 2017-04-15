import React from 'react';
import { shallow } from 'enzyme'

import { LoginForm } from '../components/LoginForm'

describe('components', () => {
  describe('<LoginForm />', () => {

    const wrapper = shallow(<LoginForm />)

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

})