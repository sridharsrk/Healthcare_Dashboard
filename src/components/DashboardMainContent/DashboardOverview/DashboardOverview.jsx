import "./DashboardOverview.css";

import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";

function DashboardOverview() {
    return (
        <div className="healthConditionOverviewContent">
            <AnatomySection />
            <HealthStatusCards />
        </div>
    );
}

export default DashboardOverview;