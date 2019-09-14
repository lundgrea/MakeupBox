import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';

describe('Cards', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cards 
        id={1}
        brand='Maybelline'
        type='Lipstick'
        description='The best lipstick around'
        img='url'
        name='Matte Life'
        price='7.00'
        tags={['gluten free']}
        key={1}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});