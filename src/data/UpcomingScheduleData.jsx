import { InjectionIcon, EyeIcon, HeartIcon, Person2 } from "../data/Icons";

export const UpcomingScheduleData = [
    {
        day: "On Thursday",
        Schedules: [
            {
                name: "Health checkup complete",
                logo: <InjectionIcon />,
                time: "11:00 AM"
            },
            {
                name: "Ophthalmologist",
                logo: <EyeIcon />,
                time: "14:00 PM"
            }
        ]
    },
    {
        day: "On Saturday",
        Schedules: [
            {
                name: "Cardiologist",
                logo: <HeartIcon />,
                time: "12:00 AM"
            },
            {
                name: "Neurologist",
                logo: <Person2 />,
                time: "16:00 PM"
            }
        ]
    }
]