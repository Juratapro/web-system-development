import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" data-testid={`product-${product.id}`}>
      <h3>
        <Link to={`/products/${product.id}`} data-testid={`product-link-${product.id}`}>
          {product.name}
        </Link>
      </h3>
      <p data-testid={`price-${product.id}`}>{product.price} €</p>
      <button type="button" onClick={() => addToCart(product)} data-testid={`add-${product.id}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
