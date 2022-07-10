import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../pages/Products";

const SidebarFilter = () => {
  const [, setFilter] = useContext(FilterContext);
  const [checkedvalue, setCheckValue] = useState([]); //state to hold value and type from checkbox
  //function to store the value of checkbox in state
  const handleChecks = (e) => {
    let type = e.target.dataset.type;
    let value = e.target.value;
    setCheckValue((p) => {
      //add if checked and remove if unchecked
      if (p.find((item) => item.value === value)) {
        return p.filter((item) => item.value !== value);
      } else {
        return [...p, { type: type, value: value }];
      }
    });
  };
  useEffect(() => {
    //current structure example of checkedvalue state
    //[{type:"gender",value:"men"},{type:"gender",value:"women"},{type:"occation",value:"casual"}]
    //// object structure after below code runs
    ////
    // obj={
    //   gender :[gender:"value1",gender:value2],
    //   occation :[occation:"value1",occation:value2],
    //   ...
    // }

    ////here a new obj is created with unique type and value array
    ////this obj is set to filter context
    let obj = {};
    checkedvalue.forEach((item) => {
      obj[item.type] = obj[item.type]
        ? [...obj[item.type], { [item.type]: item.value }]
        : [{ [item.type]: item.value }];
    });

    setFilter(obj);
  }, [checkedvalue]);

  return (
    <div className="w-full relative lg:pl-12">
      <div className="w-full  min-h-screen z-20 p-4 pl-0">
        <h4 className="mb-4">FILTER</h4>
        <div>
          <h4 className="my-4">Gender</h4>
          <Filters label="Men" type="gender" func={handleChecks} />
          <Filters label="Women" type="gender" func={handleChecks} />
        </div>
        <div>
          <h4 className="my-4">Occation</h4>
          <Filters label="Casual" type="occation" func={handleChecks} />
          <Filters label="Sports" type="occation" func={handleChecks} />
        </div>
        <div>
          <h4 className="my-4">Display</h4>
          <Filters label="Analogue" type="display" func={handleChecks} />
          <Filters label="Digital" type="display" func={handleChecks} />
        </div>
        <div>
          <h4 className="my-4">Strap</h4>
          <Filters label="Leather" type="strapmaterial" func={handleChecks} />
          <Filters label="Metal" type="strapmaterial" func={handleChecks} />
          <Filters label="Rubber" type="strapmaterial" func={handleChecks} />
        </div>
      </div>
    </div>
  );
};
const Filters = ({ label, type, func }) => {
  return (
    <div className="cursor-pointer space-x-2 text-base">
      <input
        type="checkbox"
        name={label}
        id={label}
        value={label.toLowerCase()}
        data-type={type}
        onChange={func}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
export default SidebarFilter;
