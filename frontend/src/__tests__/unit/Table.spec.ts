import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Table from '../../components/DefaultTable.vue'

describe('Table', () => {
  it('renders a table', () => {
    const wrapper = mount(Table, {
      props: {
        headers: [],
        content: []
      }
    })

    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.findAll('table').length).toBe(1)
  })

  it('renders the expected headers in uppercase', () => {
    const mockedData = [
      {
        value: {
          banana: 'banana',
          limao: 'limao',
          laranja: 'laranja'
        },
        style: ''
      }
    ]
    const headers = ['banana', 'limao', 'laranja']
    const wrapper = mount(Table, {
      props: {
        headers: headers,
        content: mockedData
      }
    })

    expect(wrapper.findAll('th').length).toBe(headers.length)
    headers.forEach((header) => {
      expect(wrapper.text()).toContain(header.toUpperCase())
    })
  })

  it('throws a error if content length is different from headers length', () => {
    const mockedData = [
      {
        value: {
          banana: 'banana',
          limao: 'limao',
          laranja: 'laranja'
        },
        style: ''
      }
    ]
    const headers = ['banana', 'limao']

    try {
      mount(Table, {
        props: {
          headers: headers,
          content: mockedData
        }
      })
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe(
        'The number of headers must match the number of columns in the content.'
      )
    }
  })
})
