import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UserNfeTable, { UserNfeTableContentProp } from '../../components/UserNfeTable.vue';
import { headers } from '../../components/UserNfeTable.vue';

describe('UserNfeTable', () => {
    const mockedContent: UserNfeTableContentProp[] = [{
        value: {
            id: 1,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 2,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 3,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 4,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 5,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 6,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }, {
        value: {
            id: 7,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }]
    const mockedInvalidContent: UserNfeTableContentProp[] = [{
        value: {
            id: 1,
            buyer: 'banana',
            provider: 'banana', 
            emission: "2021-09-01",
            value: 1,
            status: 'banana',
            button: () => {}
        },
        style: '',
    }]
    it('throws a error if content length different than 7', () => {
        try {
            mount(UserNfeTable, {
                props: {
                    content: mockedInvalidContent,
                }
            })
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it('renders properly if content length is 7', () => {
        const wrapper = mount(UserNfeTable, {
            props: {
                content: mockedContent,
            }
        })
        expect(wrapper.findAll('th').length).toBe(headers.length);
        // +1 header row
        expect(wrapper.findAll('tr').length).toBe(mockedContent.length + 1);
        expect(wrapper.findAll('td').length).toBe(headers.length * 7);
    })
})