import { NavLink } from "react-router-dom";

type routeTypes = {
  route: string;
  page: string;
};
const routes: routeTypes[] = [
  {
    route: "/",
    page: "home",
  },
  {
    route: "products",
    page: "products",
  },
  {
    route: "cart",
    page: "cart",
  },
];

const NavBar = () => {
  return (
    <nav className="h-16 w-full shadow">
      <ul className="h-full w-full flex justify-center items-center gap-7 font-bold text-xl capitalize bg-white *:hover:underline *:hover:text-[var(--accent-1)]">
        {routes?.map((route) => (
          <NavLink
            key={route.page}
            to={route?.route}
            className={({ isActive }) =>
              isActive ? "text-[var(--accent-1)]" : ""
            }
          >
            {route?.page}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
// Maybe use amber-600

export default NavBar;
