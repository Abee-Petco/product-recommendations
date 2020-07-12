import ReviewStars from './reviewStars.jsx';

class IndividualProductRecommendation extends React.Component {
  render() {
    const { product } = this.props;

    if (product === undefined) {
      return null;
    }

    const {
      image,
      title,
      brand,
      reviewAverage,
      numberOfReviews,
      price,
      currency,
    } = product;

    let description;
    const indexOfBrand = title.indexOf(brand);

    if (indexOfBrand > -1) {
      description = title;
    } else {
      description = `${brand} ${title}`;
    }

    if (description.length > 25) {
      description = description.substring(0, 25);
      description = `${description}...`;
    }

    const brandDisplay = description.substring(0, brand.length);
    const titleDisplay = description.substring(brand.length);

    const descriptionDisplay = [<div><strong>{brandDisplay}</strong>{titleDisplay}</div>];

    const numberOfReviewsDisplay = [<strong>{`(${numberOfReviews})`}</strong>];
    const priceDisplay = [<strong>{`${currency}${price}`}</strong>];

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={image} />
        {descriptionDisplay}
        <div style={{ display: 'flex' }}>
          <ReviewStars reviewAverage={reviewAverage} />
          <div>{numberOfReviewsDisplay}</div>
        </div>
        <div>{priceDisplay}</div>
      </div>
    );
  }
}

export default IndividualProductRecommendation;
