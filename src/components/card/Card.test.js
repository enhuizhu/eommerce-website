import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('test card component', () => {
  const product = {
    "title": "Simple Canvas",
    "description": "Lets your pictures speak for themselves.",
    "image": {
        "path": "/images/product.jpg",
        "alt": "Simple Canvas"
    },
    "price": 1500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "bestseller",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
  }
  
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card product={product}></Card>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('testing content inside', () => {
    const card  = shallow(<Card product={product}></Card>);
    expect(card.contains(<img src='/dist/images/product.jpg' alt='Simple Canvas'></img>)).toBe(true);
})
});