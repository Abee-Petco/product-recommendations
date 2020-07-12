const ReviewStars = function(props) {
  const { reviewAverage } = props;

  let numberOfBlackStars = Number.parseFloat(reviewAverage);
  numberOfBlackStars = Math.round(numberOfBlackStars);

  let count = 5;

  const stars = [];

  while (numberOfBlackStars > 0) {
    stars.push(<img src='http://127.0.0.1:3004/blackStar.png' />);
    count--;
    numberOfBlackStars--;
  }

  while (count > 0) {
    stars.push(<img src='http://127.0.0.1:3004/grayStar.png' />);
    count--;
  }

  return <div style={{ display: 'flex' }}>{stars}</div>;
};

export default ReviewStars;
