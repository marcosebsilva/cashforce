
import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DefaultTableRow from '../../components/DefaultTableRow.vue';

describe('DefaultTableRow', () => {
  it('renders a table row', () => {
    const wrapper = mount(DefaultTableRow, {
      props: {
        value: {},
        style: ''
      }
    })

    expect(wrapper.find('tr').exists()).toBe(true)
    expect(wrapper.findAll('tr').length).toBe(1);
  })

  it('applies a custom style to each cell', () => {
    const customTailwindStyle = 'bg-red-500';
    const wrapper = mount(DefaultTableRow, {
      props: {
        value: {key: 'value'},
        style: customTailwindStyle
      }
    })

    expect(wrapper.find('td').exists()).toBe(true);
    expect(wrapper.find('td').classes()).toContain(customTailwindStyle);
  })

  it('renders the expected data', () => {
    const value = {key1: 'value1', key2: 'value2'};

    const wrapper = shallowMount(DefaultTableRow, {
      props: {
        value,
        style: ''
      }
    })

    expect(wrapper.text()).toContain(value.key1);
    expect(wrapper.text()).toContain(value.key2);
    expect(wrapper.findAll('td').length).toBe(2);
  })
})