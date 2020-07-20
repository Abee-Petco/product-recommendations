import updateCustomer from './ReduxComponents/actions/updateCustomer.js';
import updateTreat from './ReduxComponents/actions/updateTreat.js';
import updatePet from './ReduxComponents/actions/updatePet.js';
import IndividualProductRecommendation from './Components/individualProductRecommendation.jsx';
import environmentalVariables from './environmentalVariables.js';

const { IP_ADDRESS } = environmentalVariables;
const { connect } = ReactRedux;

class ProductRecommendationsModule extends React.Component {
  componentDidMount() {
    const {
      submodule,
      pet,
      dispatchUpdateCustomer,
      dispatchUpdateTreat,
      dispatchUpdatePet,
    } = this.props;

    if (submodule === 'pet' && pet.length === 0) {
      let itemID = '100';

      const { search } = window.location;

      if (search !== '') {
        const searchSplit = search.split('&');
        let splitItemID;

        for (let i = 0; i < searchSplit.length; i++) {
          if (searchSplit[i].includes('itemID')) {
            splitItemID = searchSplit[i].split('=');
            break;
          }
        }
        itemID = splitItemID[1];
      }

      axios.get(`http://${IP_ADDRESS}:3004/productRecommendations/${itemID}`)
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
    let submoduleTitle;

    if (submodule === 'customer') {
      listOfProductRecommendations = customer;
      submoduleTitle = 'Customers Also Viewed';
    }

    if (submodule === 'treat') {
      listOfProductRecommendations = treat;
      submoduleTitle = 'More Ways To Treat Your Pet';
    }

    if (submodule === 'pet') {
      listOfProductRecommendations = pet;
      submoduleTitle = 'Your Pet Might Also Like';
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          className='PR-submodule'
          style={{
            fontSize: '24px',
            fontFamily: '"Arial", "sans-serif"',
            fontWeight: 700,
            lineHeight: '48px',
            color: 'black',
          }}
        >{submoduleTitle}</div>
        <div id={`recommendation-submodule-${submodule}`} style={{ display: 'flex' }}>
          <IndividualProductRecommendation product={listOfProductRecommendations[0]} />
          <IndividualProductRecommendation product={listOfProductRecommendations[1]} />
          <IndividualProductRecommendation product={listOfProductRecommendations[2]} />
          <IndividualProductRecommendation product={listOfProductRecommendations[3]} />
          <IndividualProductRecommendation product={listOfProductRecommendations[4]} />
        </div>
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
