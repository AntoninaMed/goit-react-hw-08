import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSelectorIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.nav} to="/">
        PHONEBOOK
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav} to="/contacts">
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};
