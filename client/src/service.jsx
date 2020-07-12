import updateCustomer from './ReduxComponents/actions/updateCustomer.js';
import updateTreat from './ReduxComponents/actions/updateTreat.js';
import updatePet from './ReduxComponents/actions/updatePet.js';
import IndividualProductRecommendation from './Components/individualProductRecommendation.jsx';

const { connect } = ReactRedux;

class ProductRecommendationsModule extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    const {
      submodule,
      pet,
      dispatchUpdateCustomer,
      dispatchUpdateTreat,
      dispatchUpdatePet,
    } = this.props;

    if (submodule === 'pet' && pet.length === 0) {
      axios.get('http://127.0.0.1:3004/productRecommendations/100')
        .then((response) => {
          const { customer, treat, pet } = response.data;

          dispatchUpdateCustomer(customer);
          dispatchUpdateTreat(treat);
          dispatchUpdatePet(pet);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const {
      submodule,
      customer,
      treat,
      pet,
    } = this.props;

    let listOfProductRecommendations;

    if (submodule === 'customer') {
      listOfProductRecommendations = customer;
    }

    if (submodule === 'treat') {
      listOfProductRecommendations = treat;
    }

    if (submodule === 'pet') {
      listOfProductRecommendations = pet;
    }

    return (
      <div id={`recommendation-submodule-${submodule}`} style={{ display: 'flex' }}>
        <IndividualProductRecommendation product={listOfProductRecommendations[0]} />
        <IndividualProductRecommendation product={listOfProductRecommendations[1]} />
        <IndividualProductRecommendation product={listOfProductRecommendations[2]} />
        <IndividualProductRecommendation product={listOfProductRecommendations[3]} />
        <IndividualProductRecommendation product={listOfProductRecommendations[4]} />
      </div>
    );
  }
}

const mapState = function(state) {
  const { customer, treat, pet } = state;

  return {
    customer,
    treat,
    pet,
  };
};

const mapDispatch = function(dispatch) {
  return {
    dispatchUpdateCustomer: (list) => { dispatch(updateCustomer(list)); },
    dispatchUpdateTreat: (list) => { dispatch(updateTreat(list)); },
    dispatchUpdatePet: (list) => { dispatch(updatePet(list)); },
  };
};

const wrappedProductRecommendationsModule = connect(mapState, mapDispatch)(ProductRecommendationsModule);

export default wrappedProductRecommendationsModule;
