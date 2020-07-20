import environmentalVariables from '../environmentalVariables.js';

const { IP_ADDRESS } = environmentalVariables;

const ReviewStars = function(props) {
  const { reviewAverage } = props;

  let numberOfBlackStars = Number.parseFloat(reviewAverage);
  numberOfBlackStars = Math.round(numberOfBlackStars);

  let count = 5;

  const stars = [];

  const starStyle = {
    margin: '0 1px',
    width: '12px',
    height: '12px',
  };

  while (numberOfBlackStars > 0) {
    stars.push(<img className='PR-black-stars' style={starStyle} src={`http://${IP_ADDRESS}:3004/blackStar.png`} />);
    count--;
    numberOfBlackStars--;
  }

  while (count > 0) {
    stars.push(<img className='PR-gray-stars' style={starStyle} src={`http://${IP_ADDRESS}:3004/grayStar.png`} />);
    count--;
  }

  return <div style={{ display: 'flex' }}>{stars}</div>;
};

export default ReviewStars;
