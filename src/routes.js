// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Simulation from "views/Dashboard/Simulation";
import Reports from "views/Dashboard/Reports";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "בית",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/simulation",
    name: "RTL",
    rtlName: "סימולציה",
    icon: <SupportIcon color="inherit" />,
    component: Simulation,
    layout: "/rtl",
  },
  {
    path: "/reports",
    name: "RTL",
    rtlName: "דוחות",
    icon: <SupportIcon color="inherit" />,
    component: Reports,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "משתמש",
    state: "pageCollapse",
    views: [
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "התחברות",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "הרשמה",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
