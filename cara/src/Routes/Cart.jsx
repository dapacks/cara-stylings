import CartItem from "../components/CartItem";
import {useSelector} from "react-redux"
import BagSummary from "../components/bagSummary";
const Cart = () => {
  
    const bagItems=useSelector(state=>state.bag);
  const items=useSelector (state=> state.items);

  const finalItems=items.filter(item => {
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0;
  })
  
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!</p>
      </section>

      <section id="cart" className="section-p1">
  <table width="100%">
    <thead>
      <tr>
        <td>Remove</td>
        <td>Image</td>
        <td>Product</td>
        <td>Price</td>
        <td>Subtotal</td>
      </tr>
    </thead>
    <tbody>
      {finalItems.map(item=><CartItem item={item} key={item.id}/>  )}
      
    </tbody>
  </table>
</section>

    <BagSummary items={items} />

     
      
    </>
  );
};

export default Cart;
