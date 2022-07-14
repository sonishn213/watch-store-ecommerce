import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilters,
  setCheckedValue,
  setCheckedState,
} from "../../../features/sidebarfilter/sidebarfilterSlice";
//
//
//
const SidebarFilter = () => {
  const dispatch = useDispatch();

  const { checkedState } = useSelector((state) => state.sidebarFilter);

  //function to store the value of checkbox in state
  const handleChecks = (e) => {
    let type = e.target.dataset.type;
    let position = e.target.dataset.index;
    let value = e.target.value;

    //read value from checkbox
    dispatch(setCheckedValue({ value, type }));
    //store the checked state of checkbox
    dispatch(setCheckedState({ position }));
  };

  return (
    <div className="w-full relative lg:pl-12 md:pl-8 pl-5">
      <div className="w-full  min-h-screen z-10 p-4 pl-0">
        <h4 className="mb-4">FILTER</h4>
        <div>
          <h4 className="my-4">Gender</h4>
          <Filters
            label="Men"
            type="gender"
            index={0}
            func={handleChecks}
            checked={checkedState}
          />
          <Filters
            label="Women"
            type="gender"
            index={1}
            func={handleChecks}
            checked={checkedState}
          />
        </div>
        <div>
          <h4 className="my-4">Occation</h4>
          <Filters
            label="Casual"
            type="occation"
            index={2}
            func={handleChecks}
            checked={checkedState}
          />
          <Filters
            label="Sports"
            type="occation"
            index={3}
            func={handleChecks}
            checked={checkedState}
          />
        </div>
        <div>
          <h4 className="my-4">Display</h4>
          <Filters
            label="Analogue"
            type="display"
            index={4}
            func={handleChecks}
            checked={checkedState}
          />
          <Filters
            label="Digital"
            type="display"
            index={5}
            func={handleChecks}
            checked={checkedState}
          />
        </div>
        <div>
          <h4 className="my-4">Strap</h4>
          <Filters
            label="Leather"
            type="strapmaterial"
            index={6}
            func={handleChecks}
            checked={checkedState}
          />
          <Filters
            label="Metal"
            type="strapmaterial"
            index={7}
            func={handleChecks}
            checked={checkedState}
          />
          <Filters
            label="Rubber"
            type="strapmaterial"
            index={8}
            func={handleChecks}
            checked={checkedState}
          />
        </div>
      </div>
    </div>
  );
};
const Filters = ({ label, type, func, checked, index }) => {
  return (
    <div className="cursor-pointer space-x-2 text-base">
      <input
        type="checkbox"
        name={label}
        id={label}
        value={label.toLowerCase()}
        data-type={type}
        data-index={index}
        onChange={func}
        checked={checked[index]}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
export default SidebarFilter;
