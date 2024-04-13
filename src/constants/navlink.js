import {
  BookOpenCheck,
  Rows4,
  LogOut,
  Contact,
  SquareUserRound,
  GraduationCap,
  Gauge,
} from "lucide-react";

export const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const sidebarNav = [
  {
    id: 4,
    name: "Dashboard",
    icon: Gauge,
    path: "/dashboard",
  },
  {
    id: 54564,
    name: "User Profile",
    icon: SquareUserRound,
    path:'/dashboard/profile'
  },

  {
    id: 3,
    name: "Be Instructor",
    icon: GraduationCap,
  },
  {
    id: 6,
    name: "Enrolled Course",
    icon: Rows4,
    path: "/dashboard/enrolled-course",
  },
  {
    id: 65484,
    name: "Assessment",
    icon: BookOpenCheck,
    path: "/dashboard/assessment",
  },
  {
    id: 6587894689,
    name: "Support/Help",
    icon: Contact,
    path: "/contact",
  },
  {
    id: 6548,
    name: "Log-out",
    icon: LogOut,
  },
];
