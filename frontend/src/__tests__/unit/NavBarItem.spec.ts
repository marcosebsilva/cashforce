import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NavBarItem from '../../components/NavBarItem.vue';
import { activeColor } from '../../components/NavBarItem.vue';
import { inactiveColor } from '../../components/NavBarItem.vue';

describe('NavBarItem', () => {
    it('renders the expected data', () => {
        const wrapper = mount(NavBarItem, {
            props: {
                icon: "",
                title: "rendered",
                selected: false
            }
        })

        expect(wrapper.find('div').exists()).toBe(true)
        expect(wrapper.text()).toContain('rendered')
    })
    it('renders green if active', () => {
        const wrapper = mount(NavBarItem, {
            props: {
                icon: "",
                title: "",
                selected: true
            }
        })

        const text = wrapper.find('#nav_bar_item--text');
        const bar = wrapper.find('#nav_bar_item--bar');
        expect(text.exists()).toBe(true)
        expect(bar.exists()).toBe(true)

        expect(text.attributes('style')).toContain(activeColor)
        expect(bar.attributes('style')).toContain(activeColor)
        

    })
    it('renders gray if not active', () => {
        const wrapper = mount(NavBarItem, {
            props: {
                icon: "",
                title: "",
                selected: false
            }
        })

        const text = wrapper.find('#nav_bar_item--text');
        const bar = wrapper.find('#nav_bar_item--bar');
        expect(text.exists()).toBe(true)
        expect(bar.exists()).toBe(true)

        expect(text.attributes('style')).toContain(inactiveColor)
        expect(bar.attributes('style')).toContain(inactiveColor)
    })
})