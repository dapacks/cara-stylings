import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product = () => {
  // Generate image sources dynamically based on the pattern
  const generateImgSrc = (index) => `product-img/f${index + 1}.jpg`;

  // Create an array of product data
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    imgSrc: generateImgSrc(index),
  }));
  const navigate=useNavigate()
  const handleclick= ()=>
  {
     navigate('/shop')
  }
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product) => (
          <div key={product.id} className="pro" onClick={handleclick}>
            <img src={product.imgSrc} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="/shop" id="cart">
              <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
