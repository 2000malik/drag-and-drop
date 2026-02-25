import {
  CalendarDays,
  CardSim,
  ChartNoAxesCombined,
  CircleQuestionMark,
  CreditCard,
  LandPlot,
  LucideGrid2X2,
  MonitorSmartphone,
  PaintRoller,
  Settings,
  UserRound,
} from "lucide-react";

export const SIDE_BAR_LINKS = [
  {
    name: "Dashboard",
    Icon: <LucideGrid2X2 />,
    link: "/",
    isActive: true,
  },
  {
    name: "Organization & Reg.",
    Icon: <LandPlot />,
    link: "#",
  },
  {
    name: "Reporting",
    Icon: <CalendarDays />,
    link: "#",
  },
  {
    name: "Billing",
    Icon: <CreditCard />,
    link: "#",
  },
  {
    name: "Account",
    Icon: <UserRound />,
    link: "#",
  },
  {
    name: "Storage",
    Icon: <CardSim />,
    link: "#",
  },
  {
    name: "Settings",
    Icon: <Settings />,
    link: "#",
  },
  {
    name: "Device Management",
    Icon: <MonitorSmartphone />,
    link: "#",
  },
  {
    name: "Productivity Report",
    Icon: <PaintRoller />,
    link: "#",
  },
  {
    name: "User Panel",
    Icon: <ChartNoAxesCombined />,
    link: "#",
  },
  {
    name: "Support",
    Icon: <CircleQuestionMark />,
    link: "#",
  },
];
