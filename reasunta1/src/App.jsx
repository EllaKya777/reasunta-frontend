import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainBuyer from "./components/MainBuyer"
import MainSeller from "./components/MainSeller"
import OrderProvider from "./OrderContext";


function App() {
 
  const [isSeller, setIsSeller] = useState(false);

  const handleSellerClick = () => {
    setIsSeller(true);
  };

  const handleBuyerClick = () => {
    setIsSeller(false);
  };

  return (
    <>
    <OrderProvider>
    <Header title={"Hello"} />  
    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <span><button onClick={handleSellerClick}>Seller</button></span>
        <span><button onClick={handleBuyerClick}>Buyer</button></span>
      </div>
     
      <div>
      {isSeller ? 
      <MainSeller />
       : <MainBuyer/>}
        </div> 
    <Footer />
    </OrderProvider>
   </>
  )
}

export default App
