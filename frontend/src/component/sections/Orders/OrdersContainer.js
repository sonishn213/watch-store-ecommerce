import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../../features/order/orderSlice";
import { useEffect } from "react";
import Loading from "../../globals/Loading";
import OrderList from "./OrderList";
import noorderimg from "../../../Assets/images/emptybro.svg";
const OrdersContainer = () => {
  const { order, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, getOrders]);

  return (
    <main className="bg-gray-light">
      <div className="fluidContainer md:py-20 py-8">
        <div className="max-w-3xl bg-white md:p-6 p-4 mx-auto  shadow-lg rounded-md ">
          {order?.length > 0 && (
            <h3 className="md:mb-10 mb-4 uppercase">All orders</h3>
          )}
          {isLoading ? (
            <Loading />
          ) : order?.length > 0 ? (
            <>
              <div className="space-y-4">
                {order?.map((item) => {
                  return <OrderList key="item.product._id" data={item} />;
                })}
              </div>
            </>
          ) : (
            <div>
              <div className="w-1/2 mx-auto">
                <img src={noorderimg} alt="" />
              </div>
              <h2 className="text-center">No orders yet Shop now!!!</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default OrdersContainer;
