import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut, reset } from "../../features/auth/authSlice";

const Account = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //to open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //to hide menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <div
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <div className="text-2xl">
          <MdAccountCircle />
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>
          <Link to="/orders">Orders</Link>
        </MenuItem>
        {user ? (
          <MenuItem onClick={onLogout}>LOGOUT</MenuItem>
        ) : (
          [
            [
              <MenuItem>
                <Link to="/login">Login</Link>
              </MenuItem>,
            ],

            [
              <MenuItem>
                <Link to="/register">Register</Link>
              </MenuItem>,
            ],
          ]
        )}
      </Menu>
    </div>
  );
};

export default Account;
