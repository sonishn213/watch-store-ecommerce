import React from "react";
import Label from "../../inputs/Label";
import InputBox from "../../inputs/InputBox";
import { useSelector, useDispatch } from "react-redux";
import { setForm } from "../../../features/checkout/checkoutSlice";

const Forms = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.checkout);

  //read input
  const handleInput = (e) => {
    dispatch(setForm({ value: e.target.value, name: e.target.name }));
  };
  return (
    <div>
      <div className="p-6 md:p-10 rounded-md">
        <h3 className="text-accent text-center md:text-left">CHECKOUT</h3>
        <h5 className="mt-8 mb-2">Billing details</h5>
        <div className="grid w-full md:grid-cols-2 gap-x-4 gap-y-6 mb-8">
          <div className="">
            <Label htmlfor="name" text="Name" />
            <InputBox
              type="text"
              value={form.name}
              onChange={handleInput}
              name="name"
              id="name"
              ph="ex:John doe"
            />
          </div>
          <div className="">
            <Label htmlfor="email" text="Email" />
            <InputBox
              type="email"
              value={form.email}
              onChange={handleInput}
              name="email"
              id="email"
              ph="ex:johndoe@email.com"
            />
          </div>
          <div>
            <Label htmlfor="phno" text="Phone number" />
            <InputBox
              type="text"
              value={form.phno}
              onChange={handleInput}
              name="phno"
              id="phno"
              ph="ex:9632564875"
            />
          </div>
        </div>
        <h5 className="mt-8 mb-2">Shipping address</h5>
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label htmlfor="address" text="Address" />
            <InputBox
              type="text"
              value={form.address}
              onChange={handleInput}
              name="address"
              id="address"
              ph="ex:xyz street, laila, Belthangady"
            />
          </div>
          <div>
            <Label htmlfor="zipcode" text="Zipcode" />
            <InputBox
              type="text"
              value={form.zipcode}
              onChange={handleInput}
              name="zipcode"
              id="zipcode"
              ph="ex:111211"
            />
          </div>{" "}
          <div>
            <Label htmlfor="city" text="City" />
            <InputBox
              type="text"
              value={form.city}
              onChange={handleInput}
              name="city"
              id="city"
              ph="ex:Banglore"
            />
          </div>
          <div>
            <Label htmlfor="state" text="State" />
            <InputBox
              type="text"
              value={form.state}
              onChange={handleInput}
              name="state"
              id="state"
              ph="ex:Karnataka"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
