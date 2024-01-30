import {useSelector} from "react-redux"



const BagSummary=()=>
{ 
  const bagItemIds=useSelector(state=>state.bag);
  const items=useSelector (state=> state.items);
  
  const finalItems=items.filter(item => {
    const itemIndex=bagItemIds.indexOf(item.id);
    return itemIndex>=0;
  })
  const  CONVENIENCE_FEES=9;
  let totalItem=bagItemIds.length;
  let totalMRP = 0;
  

 

  finalItems.forEach((bagItem) => {
    totalMRP += Number(bagItem.price);
  });
   
 
  let finalPayment = (totalMRP === 0) ? CONVENIENCE_FEES: (totalMRP - CONVENIENCE_FEES);

  
  

 
 
  



  return <section id="cart-add" className="section-p1">
  <div id="coupan">
    <h3>Apply coupan</h3>
    <div>
      <input type="text" placeholder="Enter your Coupan" />
      <button className="normal">Apply</button>
    </div>
  </div>
  <div id="subtotal">
    <h3> Cart Totals </h3>
    <table>
<tbody>
<tr>
<td>Cart Subtotal</td>
<td>{totalMRP} $ </td>
</tr>
<tr>
<td>Convience Fee</td>
<td>{CONVENIENCE_FEES} $</td>
</tr>
<tr>
<td>Total Items</td>
<td>{totalItem}</td>
</tr>
<tr>

</tr>
<tr>
<td><strong>Total</strong></td>
<td><strong>{finalPayment} $</strong></td>
</tr>
</tbody>
</table>

    <button className="normal">Proceed to checkout</button>
  </div>
</section>
}

export default BagSummary;