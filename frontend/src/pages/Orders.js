import React from "react";

import OrderList from "../component/sections/Orders/OrderList";
const Orders = () => {
  return (
    <main className="bg-gray-light">
      <div className="fluidContainer md:py-20 py-8">
        <div className="max-w-3xl bg-white md:p-6 p-4 mx-auto  shadow-lg rounded-md ">
          <h3 className="md:mb-10 mb-4 uppercase">All orders</h3>
          <div className="space-y-4">
            <OrderList />
            <OrderList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
