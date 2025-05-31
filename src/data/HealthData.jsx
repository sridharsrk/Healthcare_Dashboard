import { Lungs, Teeth, Bone } from "./Icons";

export const HealthData = {
    healthStatus: [
        {
            logo: <Lungs />,
            orange_name: "Lungs",
            last_check: "26 oct 2021",
            status: "var(--condition-bad-bg)",
        },
        {
            logo: <Teeth />,
            orange_name: "Teeth",
            last_check: "26 oct 2021",
            status: "var(--condition-good-bg)",
        },
        {
            logo: <Bone />,
            orange_name: "Bone",
            last_check: "26 oct 2021",
            status: "var(--condition-neutral-bg)",
        }
    ],
};