import ReviewStars from './reviewStars.jsx';

class IndividualProductRecommendation extends React.Component {
  render() {
    const { product } = this.props;

    if (product === undefined) {
      return null;
    }

    const {
      itemId,
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

    if (description.length >= 50) {
      description = description.substring(0, 46);
      description = `${description}...`;
    }

    const brandDisplay = description.substring(0, brand.length);
    const titleDisplay = description.substring(brand.length);

    const descriptionDisplay = [
      <div
        id={`PR-description-${itemId}`}
        style={{
          fontSize: '13px',
          color: 'rgb(51, 51, 51)',
          fontFamily: '"Arial", "sans-serif"',
          lineHeight: '18px',
          overflow: 'hidden',
          overflowWrap: 'break-word',
          maxHeight: '36px',
          minHeight: '36px',
          margin: '10px 0 8px 0',
          cursor: 'pointer',
        }}
      ><strong id={`PR-brand-${itemId}`}>{brandDisplay}</strong>{titleDisplay}</div>,
    ];

    const numberOfReviewsDisplay = [<strong id={`PR-number-reviews-${itemId}`}>{`(${numberOfReviews})`}</strong>];
    const priceDisplay = [<strong id={`PR-price-${itemId}`}>{`${currency}${price}`}</strong>];

    let { hostname } = window.location;

    if (hostname === 'localhost') {
      hostname = '127.0.0.1';
    }

    return (
      <div
        className='PR-individual-product-recommendation'
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '10px',
          padding: '8px',
          maxWidth: '172px',
          minWidth: '172px',
          maxHeight: '240px',
          minHeight: '240px',
          borderRadius: '5px',
          boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <a id={`PR-link-${itemId}`} href={`http://${hostname}:3000/product?itemID=${itemId}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <img
            id={`PR-image-${itemId}`}
            style={{
              width: '100px',
              height: '100px',
              margin: '0 auto',
              cursor: 'pointer',
            }}
            src={image}
          />
          {descriptionDisplay}
        </a>
        <div style={{ display: 'flex' }}>
          <ReviewStars reviewAverage={reviewAverage} />
          <div
            style={{
              fontSize: '13.125px',
              color: 'rgb(51, 51, 51)',
              fontFamily: '"Arial", "sans-serif"',
              margin: '0 0 0 5px',
            }}
          >{numberOfReviewsDisplay}</div>
        </div>
        <div
          style={{
            fontSize: '15px',
            color: 'rgb(51, 51, 51)',
            fontFamily: '"Arial", "sans-serif"',
            margin: '28px 0 0 0',
          }}
        >{priceDisplay}</div>
      </div>
    );
  }
}

export default IndividualProductRecommendation;
