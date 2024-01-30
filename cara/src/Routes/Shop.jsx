import Shopitem from "../components/Shopitem"
import {useSelector} from "react-redux"
const Shop=()=>
{
 const items= useSelector(store=>store.items)
    
  return  <><section id="shop-header">
  <h2>#stayhome</h2>
  <p>Save more with the coupans & up to 70% off!</p>
 </section>

<section id="product1" className="section-p1"> 

<div id="procont" className="pro-container" >
   
    {items.map(item=><Shopitem key={item.id} item={item}/>)}             
  </div>
</section>

<section id="pagination" className="section-p1">

<a href="#">1</a>
<a href="#">2</a>
<a href="#"><i className="fa-solid fa-arrow-right"></i></a>
</section>
</>
}

export default Shop