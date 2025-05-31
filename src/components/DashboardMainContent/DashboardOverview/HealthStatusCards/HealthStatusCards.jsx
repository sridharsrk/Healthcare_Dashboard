import "./HealthStatusCards.css";

import { FaArrowRightLong } from "react-icons/fa6";

import { HealthData } from "../../../../data/HealthData";

function HealthStatusCards() {
    return (
        <div className="healthStatusCardsContainer">
            <div className="healthStatusCards">
                {HealthData.healthStatus.map((data, index) => {
                    return (
                        <div className="healthStatusCard" key={index}>
                            <div className="healthStatusCardHeader">
                                {data.logo}
                                <h2>{data.orange_name}</h2>
                            </div>
                            <div className="healthStatusCardContent">
                                <p>Date: {data.last_check}</p>
                                <div className="healthStatusBar">
                                    <div className="healthStatusBarFill" style={{backgroundColor: data.status}}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button>
                Details
                <FaArrowRightLong />
            </button>
        </div>
    );
}

export default HealthStatusCards;