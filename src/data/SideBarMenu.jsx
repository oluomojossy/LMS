import { FaHome, FaRegCalendarCheck } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";

const SidebarMenuData = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: <FaHome style={{ fontSize: "19px" }} />,
  },
  {
    id: 2,
    label: "Clients data",
    path: "/clients",
    icon: <AiFillFolder style={{ fontSize: "19px" }} />,
    children: [
      { id: 2.1, label: "My clients ", path: "/b" },
      { id: 2.2, label: "client info", path: "/b" },
    ],
  },
  {
    id: 3,
    label: "Calendar",
    path: "/calendars",
    icon: <FaRegCalendarCheck style={{ fontSize: "20px" }} />,
  },
  {
    id: 4,
    label: "Schedule",
    path: "/schedules",
    icon: <AiFillSchedule style={{ fontSize: "20px" }} />,
    children: [
      { id: 4.1, label: "New Schedule", path: "/" },
      { id: 4.2, label: "Schedule History", path: "/schedule/history" },
    ],
  },
  {
    id: 5,
    label: "Payment",
    path: "/payments",
    icon: <MdPayments style={{ fontSize: "20px" }} />,
  },
  {
    id: 6,
    label: "History",
    path: "/historys",
    icon: <FaHistory style={{ fontSize: "20px" }} />,
  },
  {
    id: 7,
    label: "Setting",
    path: "/settings",
    icon: <IoMdSettings style={{ fontSize: "20px" }} />,
  },
];

export default SidebarMenuData;
