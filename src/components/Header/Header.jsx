import { useSelector } from "react-redux";
import {
  getSelectorIsLoggedIn,
  getSelectorIsRefreshing,
} from "../../redux/auth/selectors";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import css from "./Header.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const isRefreshing = useSelector(getSelectorIsRefreshing);

  return (
    <>
      <div className={css.div}>
        <Navigation />
        {isLoggedIn && !isRefreshing && <UserMenu />}
        {!isLoggedIn && !isRefreshing && <AuthNav />}
      </div>
    </>
  );
};

export default AppBar;
