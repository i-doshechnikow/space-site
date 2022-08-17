import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cartIcon";
import CartDropdown from "../../components/cart-dropdown/cartDropdown";

import { UserContext } from "../../context/user";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          <CartDropdown />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
