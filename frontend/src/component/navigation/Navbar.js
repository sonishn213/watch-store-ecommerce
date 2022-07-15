import CartButton from "../inputs/CartButton";
import Account from "../navigation/Account";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import LogoSmall from "../globals/LogoSmall";

const Navbar = () => {
  const NavLinksArr = [
    { text: "Home", link: "/" },
    { text: "shop", link: "/products" },
    { text: "about us", link: "/aboutus" },
    { text: "contact us", link: "/contactus" },
  ];

  //render
  return (
    <section className={` bg-black  top-0 w-full z-50 text-white`}>
      <div className="fluidContainer flex justify-between  items-center py-4 tracking-wide relative">
        <div className=" flex  items-center ">
          <div className="select-none active:text-accent">
            <MobileMenu NavLinksArr={NavLinksArr} />
          </div>
          <LogoSmall widthClass="w-14" link="/" />
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block">
            <Menu NavLinksArr={NavLinksArr} />
          </div>
          <CartButton />
          <div className="ml-2 cursor-pointer hover:text-accent">
            <Account />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
