import { useEffect } from "react";
import Content from "../component/sections/Products/Content";
import SidebarFilter from "../component/sections/Products/SidebarFilter";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //render
  return (
    <main className=" flex  ">
      <div className="w-2/12  relative border-r hidden md:block">
        <SidebarFilter />
      </div>
      <div className="md:w-10/12 w-full">
        <Content />
      </div>
    </main>
  );
};

export default Products;
