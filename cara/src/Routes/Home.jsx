import Feature from "../components/Feature"
import Hero from "../components/Hero"
import Product from "../components/Products"
import Banner from "../components/Banner"
import Newarrivals from "../components/Newarrivals"
import Bannerbox from "../components/Bannerbox"
import TextBanner from "../components/TextBanner"
const Home=()=>
{
  return <><Hero/>
        <Feature/> 
        <Product/>
        <Banner></Banner>
        <Newarrivals/>
        <Bannerbox></Bannerbox>
        <TextBanner></TextBanner>
        </> 
}

export default Home