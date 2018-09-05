import BaseButton from './BaseButton.vue'
import { shallow } from 'vue-test-utils'

describe('BaseButton', () => { 
    test('click event', () => {
        const wrapper = shallow(BaseButton)
        wrapper.trigger('click')
        expect(wrapper.emitted().click).toBeTruthy()
      })
})
