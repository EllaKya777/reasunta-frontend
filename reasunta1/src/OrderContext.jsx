import React from 'react'
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

// interface OrderContextType {
//   confirmed: boolean;
//   setConfirmed: Dispatch<SetStateAction<boolean>>;
// }

const OrderContext = createContext({ confirmed: false, setConfirmed: () => {} });

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderProvider = ({ children }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <OrderContext.Provider value={{ confirmed, setConfirmed }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;


/*import { createContext, useContext, useState } from 'react';

const OrderContext = createContext({ confirmed: false, setConfirmed: () => {} });

export const useOrderContext = () => {
  return useContext(OrderContext);
};

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <OrderContext.Provider value={{ confirmed, setConfirmed }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
*/