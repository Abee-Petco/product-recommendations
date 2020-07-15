import ReviewStars from '../../client/src/Components/reviewStars.jsx';

const { shallow } = require('enzyme');

describe('The ReviewStars component', () => {
  test('shows 5 black stars when reviewAverage is 4.5 or above', () => {
    const wrapper = shallow(<ReviewStars reviewAverage='5' />);

    let targetComponents = wrapper.find('.PR-black-stars');

    expect(targetComponents).toHaveLength(5);

    wrapper.setProps({ reviewAverage: '4.5' });

    targetComponents = wrapper.find('.PR-black-stars');

    expect(targetComponents).toHaveLength(5);
  });

  test('shows 4 black stars and 1 gray star when reviewAverage is between 3.5 and 4.4', () => {
    const wrapper = shallow(<ReviewStars reviewAverage='4.4' />);

    let targetComponents1 = wrapper.find('.PR-black-stars');
    let targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(4);
    expect(targetComponents2).toHaveLength(1);

    wrapper.setProps({ reviewAverage: '3.5' });

    targetComponents1 = wrapper.find('.PR-black-stars');
    targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(4);
    expect(targetComponents2).toHaveLength(1);
  });

  test('shows 3 black stars and 2 gray stars when reviewAverage is between 2.5 and 3.4', () => {
    const wrapper = shallow(<ReviewStars reviewAverage='3.4' />);

    let targetComponents1 = wrapper.find('.PR-black-stars');
    let targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(3);
    expect(targetComponents2).toHaveLength(2);

    wrapper.setProps({ reviewAverage: '2.5' });

    targetComponents1 = wrapper.find('.PR-black-stars');
    targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(3);
    expect(targetComponents2).toHaveLength(2);
  });

  test('shows 2 black stars and 3 gray stars when reviewAverage is between 1.5 and 2.4', () => {
    const wrapper = shallow(<ReviewStars reviewAverage='2.4' />);

    let targetComponents1 = wrapper.find('.PR-black-stars');
    let targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(2);
    expect(targetComponents2).toHaveLength(3);

    wrapper.setProps({ reviewAverage: '1.5' });

    targetComponents1 = wrapper.find('.PR-black-stars');
    targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(2);
    expect(targetComponents2).toHaveLength(3);
  });

  test('shows 1 black star and 4 gray stars when reviewAverage is below 1.4', () => {
    const wrapper = shallow(<ReviewStars reviewAverage='1.4' />);

    let targetComponents1 = wrapper.find('.PR-black-stars');
    let targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(1);
    expect(targetComponents2).toHaveLength(4);

    wrapper.setProps({ reviewAverage: '1' });

    targetComponents1 = wrapper.find('.PR-black-stars');
    targetComponents2 = wrapper.find('.PR-gray-stars');

    expect(targetComponents1).toHaveLength(1);
    expect(targetComponents2).toHaveLength(4);
  });
});
