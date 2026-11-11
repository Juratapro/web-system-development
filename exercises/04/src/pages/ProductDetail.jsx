import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p data-testid="product-not-found">Product not found</p>;
  }

  return (
    <div className="card">
      <h2 data-testid="product-name">{product.name}</h2>
      <p data-testid="product-price">{product.price} €</p>
      <p data-testid="product-description">{product.description}</p>
      <button type="button" onClick={() => addToCart(product)} data-testid="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
