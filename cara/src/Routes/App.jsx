import Banner from "../components/Banner";
import Bannerbox from "../components/Bannerbox";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newarrivals from "../components/Newarrivals";
import Newsletter from "../components/NewsLetter";
import Product from "../components/Products";
import Footer from "../components/Footer";
import TextBanner from "../components/TextBanner";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/Fetchitems";
import {useSelector} from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {

  const fetchStatus=useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header/>
      <Fetchitems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet />}
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
