import Content from "../component/sections/Products/Content";
import SidebarFilter from "../component/sections/Products/SidebarFilter";
import FilterButton from "../component/sections/Products/FilterButton";

const Products = () => {
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
