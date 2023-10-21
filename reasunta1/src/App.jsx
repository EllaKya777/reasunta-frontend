import { useState } from "react";
import Partners from "./assets/Partners";
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
    <Header title={"Hello, World"} />  
    <div style={{ display: 'flex', justifyContent: 'center' }}>
       <span><button onClick={handleSellerClick}>Seller</button></span>
        <span><button onClick={handleBuyerClick}>Buyer</button></span>
      </div>
    
      <div>
      {isSeller ? 
      <MainSeller />
       : <MainBuyer/>}
        </div> 
        {isSeller === false && (
          <Partners />
        )}
    <Footer />
    </OrderProvider>
   </>
  )
}

export default App
