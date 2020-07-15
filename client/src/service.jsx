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
      //When working on service, uncomment this axios call and comment-out the axios
      // call just below. Make sure to switch back just before pushing up to repo.
      // Just make sure to run webpack again so bundle is correct (In repo's cd, run >npm run build)
      // start of service as standalone
      // axios.get('http://127.0.0.1:3004/productRecommendations/100')
      //   .then((response) => {
      //     const { customer, treat, pet } = response.data;

      //     dispatchUpdateCustomer(customer);
      //     dispatchUpdateTreat(treat);
      //     dispatchUpdatePet(pet);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      //end of service as standalone

      //start of service as proxy service
      const { search } = window.location;
      const searchSplit = search.split('&');
      let splitItemID;

      for (let i = 0; i < searchSplit.length; i++) {
        if (searchSplit[i].includes('itemID')) {
          splitItemID = searchSplit[i].split('=');
          break;
        }
      }

      axios.get(`http://127.0.0.1:3001/reviews/${splitItemID[1]}`)
        .then((response) => {
          const { customer, treat, pet } = response.data;

          dispatchUpdateCustomer(customer);
          dispatchUpdateTreat(treat);
          dispatchUpdatePet(pet);
        })
        .catch((err) => {
          console.log(err);
        });
      //end of service as proxy service
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
