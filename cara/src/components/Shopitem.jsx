import { useDispatch,useSelector } from "react-redux";
import { bagActions } from "../Store/bagSlice";
const ShopItem = ({ item }) => {
  const dispatch = useDispatch();
 const bagItems=useSelector(store=> store.bag);


 const elementFound=bagItems.indexOf(item.id) >=0;


  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const removeToBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="pro">
        <img src={item.img} alt="" />
        <div className="des">
          <span>{item.brand}</span>
          <h5>{item.des}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>{item.price}</h4>
        </div>
        {elementFound? <button id="cart" onClick={removeToBag}>  <i className="fa-solid fa-trash-can cartm"></i>
          </button>:<button id="cart" onClick={handleAddToBag}>
          <i className="fa-solid fa-cart-plus cart"></i>
          </button>
         }
        
        
      </div>
    </>
  );
};
export default ShopItem;
