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
    stars.push(<img style={starStyle} src='http://127.0.0.1:3004/blackStar.png' />);
    count--;
    numberOfBlackStars--;
  }

  while (count > 0) {
    stars.push(<img style={starStyle} src='http://127.0.0.1:3004/grayStar.png' />);
    count--;
  }

  return <div style={{ display: 'flex' }}>{stars}</div>;
};

export default ReviewStars;
