import React from 'react';

export default (props) => {

  const product = props.product;

  return (
    <div className='card'>
      <div className='product-img'>
        <img 
          src={`/dist${product.image.path}`} 
          alt={product.image.alt}>
        </img>
      </div>

      <div className='label-container'>
        <label>{product.productLabel}</label>
      </div>

      <div className='product-detail'>
        <div className='product-title bold'>
          {product.title}
        </div>
        <div className='product-description'>
          {product.description}
        </div>
        <div className='product-price'>
          {product.priceLabel} 
          <label className='bold'>
            {`${product.currency}${product.price}`}
          </label>
        </div>

        <a href={product.ctaLink}>
          <div className='btn cta-btn bold'>
            {product.cta}
          </div>
        </a>
      </div>

    </div>
  );
}
