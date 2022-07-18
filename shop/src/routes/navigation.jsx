import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

export default () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <div>Logo</div>
      </Link>
      <div className="links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);
