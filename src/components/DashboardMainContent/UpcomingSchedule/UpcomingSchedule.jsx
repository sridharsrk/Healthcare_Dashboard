import "./UpcomingSchedule.css";

import { UpcomingScheduleData } from "../../../data/UpcomingScheduleData"

function UpcomingSchedule() {
    return (
        <div className="upcoming-schedule">
            <h2>The Upcoming Schedule</h2>
            <div className="upcomingScheduleCards">
                {
                    UpcomingScheduleData.map((schedule, index) => {
                        return (
                            <div className="upcomingScheduleCardContainer" key={index}>
                                <h3>{schedule.day}</h3>
                                <div className="upcomingScheduleCard">
                                    {
                                        schedule.Schedules.map((item, idx) => (
                                            <div key={idx}>
                                                <div className="upcomingScheduleCardHeader">
                                                    <p>{item.name}</p>
                                                    {item.logo}
                                                </div>
                                                <p>{item.time}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default UpcomingSchedule;