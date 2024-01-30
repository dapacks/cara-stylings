
import {useDispatch} from "react-redux"
import { bagActions } from "../Store/bagSlice";
const CartItem=({item})=>
{   
  const dispatch=useDispatch();
  const handleRemoveItems=()=>
  {
    dispatch(bagActions.removeFromBag(item.id))
  }
  return <tr>
  <td>
    <button href="#" onClick={handleRemoveItems}>
    <i class="fa-solid fa-xmark"></i>
    </button>
  </td>
  <td>
    <img src={item.img} alt="" />
  </td>
  <td>{item.des}</td>
  <td>{item.price}</td>
  
  <td>{item.price}</td>
</tr>

}

export default CartItem;