import "./DashboardMainContent.css";

import { RiArrowDownSLine } from "react-icons/ri";

import DashboardOverview from './DashboardOverview/DashboardOverview';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";

function DashboardMainContent() {
    return (
        <div className="dashboardContent">
            <div className="healthConditionOverview">
                <div className="healthConditionHeader">
                    <h1>Dashboard</h1>
                    <p>This Week <span><RiArrowDownSLine /></span></p>
                </div>

                <DashboardOverview />
            </div>

            <div className="scheduleContainer">
                <CalendarView />
                <UpcomingSchedule />
            </div>
            <ActivityFeed />
        </div>
    );
}

export default DashboardMainContent;