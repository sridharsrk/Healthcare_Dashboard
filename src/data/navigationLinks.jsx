import { BiSolidDashboard } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { HistoryLogo, CalendarLogo, AddSquareDuotone } from "./Icons"

export const links = {
    GeneralLinks: [
        {
            logo: <BiSolidDashboard />,
            name: "Dashboard",
            to: "#dashboard"
        },
        {
            logo: <HistoryLogo />,
            name: "History",
            to: "#history"
        },
        {
            logo: <CalendarLogo />,
            name: "Calendar",
            to: "#calendar"
        },
        {
            logo: <AddSquareDuotone />,
            name: "Appointments",
            to: "#appointments"
        },
        {
            logo: <IoMdAnalytics />,
            name: "Statistics",
            to: "#statistics"
        }
    ],
    ToolsLinks: [
        {
            logo: <BsChatDotsFill />,
            name: "Chat",
            to: "#chat"
        },
        {
            logo: <IoCallSharp />,
            name: "Support",
            to: "#support"
        }
    ],
    SettingLink: {
        logo: <IoSettings />,
        name: "Settings",
        to: "#settings"
    }
}