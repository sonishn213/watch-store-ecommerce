import { Link } from "react-router-dom";
import testImg from "../../../Assets/images/product2.png";
import { MdOutlineWatchLater, MdDoneOutline } from "react-icons/md";

import { BsChevronRight } from "react-icons/bs";

const OrderList = ({ data }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(data?.createdAt);

  return (
    <div className="border border-black">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">
            <StatusIcon orderStatus={data?.order_status} />
          </div>
          <div>
            <p> Order {data?.order_status}</p>
          </div>
        </div>
        <div className="mt-2">
          On{" "}
          {d
            ? d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear()
            : ""}
        </div>
      </div>

      <div className="px-4 pb-4">
        <Link to={"/view/" + data?.product?.p_id}>
          <div className="bg-gray-light flex p-2 cursor-pointer">
            <div className="md:w-1/12 w-2/12 bg-white">
              <img src={data?.product?.mainimg} alt="image" />
            </div>
            <div className="grow pl-6 flex flex-col justify-between ">
              <p>{data?.product?.p_name}</p>
              <p className="">₹ {data?.product?.price}</p>
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

const StatusIcon = ({ orderStatus }) => {
  switch (orderStatus) {
    case "placed":
      return <MdOutlineWatchLater />;
    case "fulfilled":
      return <MdDoneOutline />;
    default:
      return "";
  }
};
export default OrderList;
