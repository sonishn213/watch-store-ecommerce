import React from "react";
import Button from "../component/inputs/Button";
import { Link } from "react-router-dom";
const Thankyou = () => {
  return (
    <main className="bg-gray-light">
      <div className="fluidContainer md:py-40 py-10">
        <div className="max-w-3xl bg-white md:py-20 py-10 mx-auto uppercase text-center shadow-lg rounded-md ">
          <h2 className="mb-10">Thank you for shopping with us</h2>
          <Link to="/products">
            <Button>SHOP MORE</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Thankyou;
