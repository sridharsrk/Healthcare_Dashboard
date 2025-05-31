import { Teeth, ArmIcon } from "./Icons"

export const defaultTime = [["10:00", "11:00", "12:00"], ["08:00", "09:00", "10:00"], ["12:00", "", "14:00"], ["10:00", "11:00", ""], ["", "14:00", "15:00"], ["12:00", "13:00", "14:00"], ["09:00", "10:00", "11:00"]];

export const defaultSchedule = [
    { type: "Dentist", logo: <Teeth />, time: "09:00-11:00", doctorName: "Dr. Cameron Williamson" },
    { type: "Physiotherapy Appointment", logo: <ArmIcon />, time: "11:00-12:00", doctorName: "Dr. Kevin Djones" },
];