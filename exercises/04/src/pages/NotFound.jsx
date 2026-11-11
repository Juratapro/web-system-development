import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found" data-testid="not-found">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/">Go back to the shop</Link>
    </div>
  );
};

export default NotFound;
