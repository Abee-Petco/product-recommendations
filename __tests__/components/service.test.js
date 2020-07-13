import ProductRecommendationsModule from '../../client/src/service.jsx';
import store from '../../client/src/ReduxComponents/store.js';
import updateCustomer from '../../client/src/ReduxComponents/actions/updateCustomer.js';
import updateTreat from '../../client/src/ReduxComponents/actions/updateTreat.js';
import updatePet from '../../client/src/ReduxComponents/actions/updatePet.js';

const { mount } = require('enzyme');
const nock = require('nock');
const mockData = require('../setup/mockData.js');

const { Provider } = ReactRedux;

nock('http://127.0.0.1:3004')
  .get('/productRecommendations/100')
  .reply(200, mockData);

describe('The ProductRecommendationsModule component', () => {
  test('mounts but displays no products when passed none', () => {
    const wrapper = mount(<Provider store={store}><ProductRecommendationsModule submodule='customer' /></Provider>);

    const targetComponents = wrapper.find('.PR-individual-product-recommendation');

    expect(targetComponents).toHaveLength(0);

    wrapper.unmount();
  });

  test('displays all data for the "customer" submodule', () => {
    const wrapper = mount(<Provider store={store}><ProductRecommendationsModule submodule='customer' /></Provider>);
    store.dispatch(updateCustomer(mockData.customer));

    wrapper.update();
    const targetComponent1 = wrapper.find('.PR-submodule');
    const text = targetComponent1.text();
    const targetComponent2 = wrapper.find('#PR-link-101');
    const targetComponent3 = wrapper.find('#PR-link-102');
    const targetComponent4 = wrapper.find('#PR-link-103');
    const targetComponent5 = wrapper.find('#PR-link-104');
    const targetComponent6 = wrapper.find('#PR-link-105');

    expect(text).toEqual('Customers Also Viewed');
    expect(targetComponent2).toHaveLength(1);
    expect(targetComponent3).toHaveLength(1);
    expect(targetComponent4).toHaveLength(1);
    expect(targetComponent5).toHaveLength(1);
    expect(targetComponent6).toHaveLength(1);

    wrapper.unmount();
  });

  test('displays all data for the "treat" submodule', () => {
    const wrapper = mount(<Provider store={store}><ProductRecommendationsModule submodule='treat' /></Provider>);
    store.dispatch(updateTreat(mockData.treat));

    wrapper.update();
    const targetComponent1 = wrapper.find('.PR-submodule');
    const text = targetComponent1.text();
    const targetComponent2 = wrapper.find('#PR-link-120');
    const targetComponent3 = wrapper.find('#PR-link-135');
    const targetComponent4 = wrapper.find('#PR-link-150');
    const targetComponent5 = wrapper.find('#PR-link-155');
    const targetComponent6 = wrapper.find('#PR-link-170');

    expect(text).toEqual('More Ways To Treat Your Pet');
    expect(targetComponent2).toHaveLength(1);
    expect(targetComponent3).toHaveLength(1);
    expect(targetComponent4).toHaveLength(1);
    expect(targetComponent5).toHaveLength(1);
    expect(targetComponent6).toHaveLength(1);

    wrapper.unmount();
  });

  test('displays all data for the "pet" submodule', (done) => {
    const wrapper = mount(<Provider store={store}><ProductRecommendationsModule submodule='pet' /></Provider>);
    store.dispatch(updatePet(mockData.pet));

    wrapper.update();
    const targetComponent1 = wrapper.find('.PR-submodule');
    const text = targetComponent1.text();
    const targetComponent2 = wrapper.find('#PR-link-199');
    const targetComponent3 = wrapper.find('#PR-link-198');
    const targetComponent4 = wrapper.find('#PR-link-197');
    const targetComponent5 = wrapper.find('#PR-link-196');
    const targetComponent6 = wrapper.find('#PR-link-195');

    expect(text).toEqual('Your Pet Might Also Like');
    expect(targetComponent2).toHaveLength(1);
    expect(targetComponent3).toHaveLength(1);
    expect(targetComponent4).toHaveLength(1);
    expect(targetComponent5).toHaveLength(1);
    expect(targetComponent6).toHaveLength(1);

    setTimeout(() => {
      done();
    }, 50);

    wrapper.unmount();
  });
});
