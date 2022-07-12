import { Link } from "react-router-dom";
import testImg from "../../../Assets/images/product2.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";

const OrderList = () => {
  return (
    <div className="border border-black">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">
            <MdOutlineWatchLater />
          </div>
          <div>
            <p> Order Placed</p>
          </div>
        </div>
        <div className="mt-2"> On 21-2-2021</div>
      </div>

      <div className="px-4 pb-4">
        <Link to="/">
          <div className="bg-gray-light flex p-2 cursor-pointer">
            <div className="md:w-1/12 w-2/12 bg-white">
              <img src={testImg} alt="" />
            </div>
            <div className="grow pl-6 flex flex-col justify-between ">
              <p>products NAme</p>
              <p className="">100</p>
            </div>
            <div className="self-center">
              <BsChevronRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OrderList;
