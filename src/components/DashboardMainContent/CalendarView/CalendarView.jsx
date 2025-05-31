import { memo } from "react";

import "./CalendarView.css";

import { defaultTime, defaultSchedule } from "../../../data/CalendarData";

function CalendarView() {
    function createCalendar() {
        // Logic to create the calendar grid for the current month
    }

    const prevMonth = () => {
        // Logic to go to the previous month
    };

    const nextMonth = () => {
        // Logic to go to the next month
    };

    return (
        <div className="calendarContainer">
            <div className="calendar">
                <div className="calendarHeader">
                    <h2 className="monthYear">October 2021</h2>
                    <div className="calendarActionButtons">
                        {/* This button navigates to the previous month and next month */}
                        <button onClick={prevMonth}>&larr;</button>
                        <button onClick={nextMonth}>&rarr;</button>
                    </div>
                </div>
                <div className="calendarBody">
                    {
                        [["Mon", 25], ["Tue", 26], ["Wed", 27], ["Thu", 28], ["Fri", 29], ["Sat", 30], ["Sun", 31]].map(
                            ([day, date], index) => (
                                <div key={index} className="calendarDay">
                                    <div className="dayanddate">
                                        <p className="calendarDayName">{day}</p>
                                        <p className="calendarDayDate">{date}</p>
                                    </div>
                                    <div className="timeing">
                                        {
                                            defaultTime[index].map((time, timeIndex) => (
                                                <div className="timeSlot" key={timeIndex}>
                                                    {
                                                        time === "" ? (
                                                            <div className="emptyTime"></div>
                                                        ) : (
                                                            <div className="time">{time}</div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="currentSchedules">
                {
                    defaultSchedule.map((Schedule, index) => {
                        return (
                            <div className="scheduleCard" key={index}>
                                <div className="scheduleCardHeader">
                                    <p>{Schedule.type}</p>
                                    {Schedule.logo}
                                </div>
                                <div className="scheduleCardContent">
                                    <p>{Schedule.time}</p>
                                    <p>{Schedule.doctorName}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default memo(CalendarView);