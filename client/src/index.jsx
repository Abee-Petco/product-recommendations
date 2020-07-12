import ProductRecommendationsModule from './service.jsx';
import store from './ReduxComponents/store.js';

const { Provider } = ReactRedux;

ReactDOM.render(
  <Provider store={store}><ProductRecommendationsModule submodule='customer' /></Provider>,
  document.getElementById('RECOMMENDATIONS_CUSTOMER_ATTACH_POINT'),
);

ReactDOM.render(
  <Provider store={store}><ProductRecommendationsModule submodule='treat' /></Provider>,
  document.getElementById('RECOMMENDATIONS_TREAT_ATTACH_POINT'),
);

ReactDOM.render(
  <Provider store={store}><ProductRecommendationsModule submodule='pet' /></Provider>,
  document.getElementById('RECOMMENDATIONS_PET_ATTACH_POINT'),
);
