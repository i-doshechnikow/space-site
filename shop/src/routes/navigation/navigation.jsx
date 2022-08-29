import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cartIcon";
import CartDropdown from "../../components/cart-dropdown/cartDropdown";

import { CartContext } from "../../context/cart";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation-styled";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.select";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser} as="span" className="nav-link">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
