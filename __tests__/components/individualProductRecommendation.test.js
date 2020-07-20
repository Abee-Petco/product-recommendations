import IndividualProductRecommendation from '../../client/src/Components/individualProductRecommendation.jsx';

const { shallow, mount } = require('enzyme');
const mockData = require('../setup/mockData.js');

describe('The IndividualProductRecommendation component', () => {
  test('does not mount when no product passed to it', () => {
    const wrapper = shallow(<IndividualProductRecommendation />);

    const targetComponent = wrapper.find('.PR-individual-product-recommendation');

    expect(targetComponent).toHaveLength(0);
  });

  test('will correctly render all info for product 101 when passed that data', () => {
    const wrapper = mount(<IndividualProductRecommendation product={mockData.customer[0]} />);

    const targetComponent1 = wrapper.find('#PR-link-101');
    const href = targetComponent1.prop('href');
    const targetComponent2 = wrapper.find('#PR-image-101');
    const targetComponent3 = wrapper.find('#PR-description-101');
    const component3text = targetComponent3.text();
    const targetComponent4 = wrapper.find('#PR-brand-101');
    const component4text = targetComponent4.text();
    const targetComponents5 = wrapper.find('.PR-black-stars');
    const targetComponents6 = wrapper.find('.PR-gray-stars');
    const targetComponent7 = wrapper.find('#PR-number-reviews-101');
    const component7text = targetComponent7.text();
    const targetComponent8 = wrapper.find('#PR-price-101');
    const component8text = targetComponent8.text();

    expect(targetComponent1).toHaveLength(1);
    expect(href).toEqual('http://127.0.0.1:3000/product?itemID=101');
    expect(targetComponent2).toHaveLength(1);
    expect(component3text).toEqual('BestFriends Dog Bone');
    expect(component4text).toEqual('BestFriends');
    expect(targetComponents5).toHaveLength(4);
    expect(targetComponents6).toHaveLength(1);
    expect(component7text).toEqual('(7)');
    expect(component8text).toEqual('$9.99');

    wrapper.unmount();
  });

  test('will correctly render all info for product 150 when passed that data', () => {
    const wrapper = mount(<IndividualProductRecommendation product={mockData.treat[2]} />);

    const targetComponent1 = wrapper.find('#PR-link-150');
    const href = targetComponent1.prop('href');
    const targetComponent2 = wrapper.find('#PR-image-150');
    const targetComponent3 = wrapper.find('#PR-description-150');
    const component3text = targetComponent3.text();
    const targetComponent4 = wrapper.find('#PR-brand-150');
    const component4text = targetComponent4.text();
    const targetComponents5 = wrapper.find('.PR-black-stars');
    const targetComponents6 = wrapper.find('.PR-gray-stars');
    const targetComponent7 = wrapper.find('#PR-number-reviews-150');
    const component7text = targetComponent7.text();
    const targetComponent8 = wrapper.find('#PR-price-150');
    const component8text = targetComponent8.text();

    expect(targetComponent1).toHaveLength(1);
    expect(href).toEqual('http://127.0.0.1:3000/product?itemID=150');
    expect(targetComponent2).toHaveLength(1);
    expect(component3text).toEqual('Bechtelar, Schaefer and Casper Ergonomic Plast...');
    expect(component4text).toEqual('Bechtelar, Schaefer and Casper');
    expect(targetComponents5).toHaveLength(4);
    expect(targetComponents6).toHaveLength(1);
    expect(component7text).toEqual('(10)');
    expect(component8text).toEqual('$61.69');

    wrapper.unmount();
  });
});
