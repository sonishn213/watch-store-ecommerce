import Button from "../../inputs/Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartItems } from "../../../features/cart/cartItemSlice";
import { useEffect } from "react";

const MainInfo = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleAddtocart = (pdata) => {
    if (user) {
      dispatch(addToCart(pdata));
      alert(data.p_name + " added to cart");
    } else {
      alert("Please Login");
    }
  };

  return (
    <section className="pt-10">
      <div className="fluidContainer md:flex">
        <div className="md:w-1/2 lg:pr-12 md:pr-4 w-full">
          <div className="bg-gray-light w-full rounded-2.5xl">
            <img
              src={data.mainimg}
              alt="mainimg"
              className="w-3/5 object-contain mx-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2 lg:pl-12 md:pl-4 flex flex-col items-center md:items-start ">
          <div className="lg:pt-12 pt-8 md:pt-0 lg:pb-16 md:pb-8 pb-6 text-center md:text-left">
            <h1 className="mb-6  capitalize">{data.p_name}</h1>
            <p className="lg:text-xl text-lg text-gray-dark mb-8 hidden md:block  capitalize">
              {data.description}
            </p>
            <p className="text-2xl  font-bold">₹{data.price}</p>
          </div>
          <div>
            <Button
              onClick={() =>
                handleAddtocart({
                  p_id: data._id,
                  p_name: data.p_name,
                  price: data.price,
                  mainimg: data.mainimg,
                })
              }
              varient="btn-filled"
            >
              add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
