const ProductCard = ({
  productId,
  productImage,
  productTitle,
  productPrice,
  handleClick,
}) => {
  return (
    <div key={productId} className="col-sm-12 col-md-3 mb-3">
      <div className="card p-3">
        <img
          src={productImage}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'contain' }}
          alt={productTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{productTitle}</h5>
          <h6>${productPrice}</h6>
          <button
            onClick={() => handleClick(productId)} // Pass product ID here
            style={{ cursor: 'pointer' }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
