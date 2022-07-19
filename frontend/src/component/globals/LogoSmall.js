import { Link } from "react-router-dom";

const LogoSmall = ({ widthClass, link }) => {
  return (
    <div className={widthClass}>
      <Link to={link}>
        <img src="/watchlogo.png" alt="" className="max-w-full" />
      </Link>
    </div>
  );
};

export default LogoSmall;
