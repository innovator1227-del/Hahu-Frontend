import { createContext, useContext, useState } from "react"

const OrderContext = createContext()


export function OrderProvider({ children }) {

  const [orders, setOrders] = useState(() => {

    const savedOrders = localStorage.getItem("orders")

    return savedOrders
      ? JSON.parse(savedOrders)
      : []

  })


  const createOrder = (orderData) => {

    const newOrder = {
      id: Date.now(),
      ...orderData,
      status: "PENDING",
      date: new Date().toLocaleDateString()
    }


    const updatedOrders = [
      ...orders,
      newOrder
    ]


    setOrders(updatedOrders)


    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    )

  }



  return (

    <OrderContext.Provider
      value={{
        orders,
        createOrder
      }}
    >

      {children}

    </OrderContext.Provider>

  )

}



export const useOrders = () =>
  useContext(OrderContext)