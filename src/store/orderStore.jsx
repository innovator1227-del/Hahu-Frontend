import { create } from "zustand";

const getInitialOrders = () => {
  try {
    const orders = localStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error("failed to load orders:", error);
    return [];
  }
};

const orderStore = create((set) => ({
  orders: getInitialOrders(),

  createOrder: (orderData) =>
    set((state) => {
      const newOrder = {
        id: Date.now(),
        ...orderData,
        status: "PENDING",
        date: new Date().toLocaleDateString(),
      };

      const updatedOrders = [...state.orders, newOrder];

      // Keep localStorage synchronized
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      return {
        orders: updatedOrders,
      };
    }),
}));

export default orderStore;
