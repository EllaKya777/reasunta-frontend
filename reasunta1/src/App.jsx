import { useState } from "react";
import Partners from "./assets/Partners";
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainSeller from "./components/MainSeller"
import OrderProvider from "./OrderContext";


function App() {

  const [isSeller, setIsSeller] = useState(false);

  const handleSellerClick = () => {
    setIsSeller(true);
  };

  return (
    <>
      <OrderProvider>
        <Header title={"Hello, World"} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span><button onClick={handleSellerClick}>Seller</button></span>
        </div>
        <div>
          {
            <MainSeller />
          }
        </div>
        <Partners />
        <Footer />
      </OrderProvider>
    </>
  )
}

export default App
