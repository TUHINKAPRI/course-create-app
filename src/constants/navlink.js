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

import { BookOpen,Rows4, BadgeIcon, GraduationCap,Gauge } from "lucide-react";

export  const sidebarNav=[
  {
    id: 4,
    name: "Dashboard",
    icon: Gauge,
    path:'/dashboard'
  },
 
  {
    id: 2,
    name: "Memberships",
    icon: BadgeIcon,
    path: "/memberships",
  },
  {
    id: 3,
    name: "Be Instructor",
    icon: GraduationCap,
  },{
    id:6,
    name:"Enrolled Course",
    icon:Rows4,
    path:'/dashboard/enrolled-course'
  }
  
];